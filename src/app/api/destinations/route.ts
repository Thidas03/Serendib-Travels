import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Destination from '@/models/Destination';

export async function GET() {
  try {
    await dbConnect();
    const destinations = await Destination.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: destinations });
  } catch (error: any) {
    console.error('Error fetching destinations:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
