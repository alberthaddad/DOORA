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
    const { email, phone } = await request.json();

    // Validate that at least one field is provided
    if (!email && !phone) {
      return NextResponse.json(
        { error: 'Please enter either an email address or phone number' },
        { status: 400 }
      );
    }

    // Validate email if provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Validate phone if provided (basic international format validation)
    if (phone && !/^[\d\s\-\+\(\)]+$/.test(phone)) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number' },
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

    // Prepare merge fields
    const mergeFields: any = {
      SOURCE: 'Website Launch Notification'
    };

    // Add phone to merge fields if provided
    if (phone) {
      mergeFields.PHONE = phone;
    }

    // Use email if provided, otherwise create a placeholder email from phone
    // Note: Mailchimp requires an email, so if only phone is provided, we create a temporary one
    const emailAddress = email || `${phone.replace(/[^\d]/g, '')}@doora-sms.temp`;

    // Add subscriber to Mailchimp audience
    const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: emailAddress,
      status: 'subscribed',
      tags: phone && !email ? ['DOORA_LAUNCH_NOTIFY', 'SMS_ONLY'] : ['DOORA_LAUNCH_NOTIFY'],
      merge_fields: mergeFields
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
        { error: 'This contact is already subscribed to our notifications' },
        { status: 409 }
      );
    }

    if (error.response?.body?.title === 'Invalid Resource') {
      return NextResponse.json(
        { error: 'Please enter a valid email address or phone number' },
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
