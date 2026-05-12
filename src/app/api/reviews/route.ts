import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Review from '@/models/Review';
import User from '@/models/User';
import { reviewSchema } from '@/lib/validations';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    
    // Validate request body
    const result = reviewSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error.issues[0].message },
        { status: 400 }
      );
    }
    
    const { destinationId, rating, comment } = result.data;

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
