import { NextRequest, NextResponse } from 'next/server';

// Mailchimp doesn't have TypeScript declarations, so we'll use require with proper typing
// eslint-disable-next-line @typescript-eslint/no-require-imports
const mailchimp = require('@mailchimp/mailchimp_marketing') as any;

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g., 'us1', 'us2', etc.
});

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Check if required environment variables are set
    if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_SERVER_PREFIX || !process.env.MAILCHIMP_AUDIENCE_ID) {
      console.error('Missing Mailchimp configuration');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Add subscriber to Mailchimp audience
    const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
      tags: ['DOORA_LAUNCH_NOTIFY'], // Optional: tag subscribers for better organization
      merge_fields: {
        SOURCE: 'Website Launch Notification'
      }
    });

    return NextResponse.json(
      { 
        message: 'Successfully subscribed to launch notifications!',
        success: true 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Mailchimp subscription error:', error);

    // Handle specific Mailchimp errors
    if (error.response?.body?.title === 'Member Exists') {
      return NextResponse.json(
        { error: 'This email is already subscribed to our notifications' },
        { status: 409 }
      );
    }

    if (error.response?.body?.title === 'Invalid Resource') {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Generic error
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}
