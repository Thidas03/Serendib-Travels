import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Review from '@/models/Review';
import User from '@/models/User';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const { destinationId, rating, comment } = body;

    if (!destinationId || !rating || !comment) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { success: false, error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    // Since auth is not implemented, we will find an existing user or create a mock one.
    let user = await User.findOne({ email: 'guest@serendibtravels.com' });
    if (!user) {
      user = await User.create({
        name: 'Guest User',
        email: 'guest@serendibtravels.com',
        role: 'user',
      });
    }

    const review = await Review.create({
      user: user._id,
      destination: destinationId,
      rating,
      comment,
    });

    return NextResponse.json({ success: true, data: review });
  } catch (error: any) {
    console.error('Error creating review:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
