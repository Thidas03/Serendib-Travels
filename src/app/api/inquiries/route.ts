import { NextResponse } from 'next/server';

const inquiries: Array<Record<string, unknown>> = [];

export async function POST(request: Request) {
  const body = await request.json();
  const { tourId, tourName, name, email, phone, travelers, date } = body;

  if (!tourId || !tourName || !name || !email || !phone || !travelers || !date) {
    return NextResponse.json({ success: false, message: 'Missing required inquiry fields.' }, { status: 400 });
  }

  const inquiry = {
    tourId,
    tourName,
    name,
    email,
    phone,
    travelers,
    date,
    notes: body.notes || '',
    createdAt: new Date().toISOString(),
  };

  inquiries.push(inquiry);

  return NextResponse.json({ success: true, inquiry });
}

export async function GET() {
  return NextResponse.json({ success: true, inquiries });
}
