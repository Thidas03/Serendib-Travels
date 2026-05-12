import { NextResponse } from 'next/server';
import { newsletterSchema } from '@/lib/validations';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate request body
    const result = newsletterSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error.issues[0].message },
        { status: 400 }
      );
    }

    // In a real application, save to DB or Mailchimp/SendGrid
    console.log('Newsletter subscription received:', result.data);

    return NextResponse.json({ success: true, message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
