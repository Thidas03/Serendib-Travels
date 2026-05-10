import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Booking from '@/models/Booking';
import User from '@/models/User';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const { destinationId, date, travelers, totalPrice } = body;

    if (!destinationId || !date || !travelers || !totalPrice) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
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

    const booking = await Booking.create({
      user: user._id,
      destination: destinationId,
      bookingDate: new Date(date),
      travelers,
      totalPrice,
      status: 'pending',
    });

    return NextResponse.json({ success: true, data: booking });
  } catch (error: any) {
    console.error('Error creating booking:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
