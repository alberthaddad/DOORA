# Email Integration Setup

This guide explains how to configure both Mailchimp email collection and contact form email functionality.

## Environment Variables Required

Create a `.env.local` file in the web directory with the following variables:

```
# Mailchimp Configuration (for launch notifications)
MAILCHIMP_API_KEY=your_mailchimp_api_key_here
MAILCHIMP_SERVER_PREFIX=your_server_prefix_here
MAILCHIMP_AUDIENCE_ID=your_audience_id_here

# SMTP Configuration (for contact form)
SMTP_HOST=your_smtp_host_here
SMTP_PORT=your_smtp_port_here
SMTP_USER=your_smtp_username_here
SMTP_PASS=your_smtp_password_here
```

## How to Get These Values

### 1. MAILCHIMP_API_KEY
1. Log into your Mailchimp account
2. Go to **Account** → **Extras** → **API keys**
3. Create a new API key or copy an existing one

### 2. MAILCHIMP_SERVER_PREFIX
- This is the part after the dash in your API key
- For example, if your API key is `abc123-us1`, then your server prefix is `us1`

### 3. MAILCHIMP_AUDIENCE_ID
1. Go to **Audience** → **All contacts**
2. Click **Settings** → **Audience name and defaults**
3. Copy the **Audience ID** (also called List ID)

---

## SMTP Configuration (Contact Form)

### Getting SMTP Credentials

You'll need an email service provider. Here are popular options:

#### **Option 1: Gmail SMTP (Recommended for testing)**
1. **SMTP_HOST:** `smtp.gmail.com`
2. **SMTP_PORT:** `587` (or `465` for SSL)
3. **SMTP_USER:** Your Gmail address
4. **SMTP_PASS:** Use an [App Password](https://support.google.com/accounts/answer/185833), not your regular password

#### **Option 2: Professional Email Services**
- **SendGrid:** Professional email delivery service
- **Mailgun:** Email automation service  
- **Amazon SES:** AWS Simple Email Service
- **Outlook/Hotmail:** `smtp-mail.outlook.com`, port `587`

#### **Example .env.local with Gmail:**
```
# Mailchimp Configuration
MAILCHIMP_API_KEY=abc123def456-us1
MAILCHIMP_SERVER_PREFIX=us1
MAILCHIMP_AUDIENCE_ID=a1b2c3d4e5

# SMTP Configuration (Gmail example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password-here
```

---

## Features Implemented

### **Mailchimp Integration:**
- ✅ Email validation (frontend and backend)
- ✅ Duplicate email handling (shows friendly message)
- ✅ Loading states and user feedback
- ✅ Enter key support for form submission
- ✅ Error handling for network issues
- ✅ Automatic tagging of subscribers with "DOORA_LAUNCH_NOTIFY"
- ✅ Source tracking in Mailchimp

### **Contact Form Integration:**
- ✅ Complete form validation (name, email, subject, message)
- ✅ Professional email templates for both team and auto-reply
- ✅ Automatic categorization of inquiries
- ✅ Real-time feedback and error handling
- ✅ Form reset on successful submission
- ✅ Mobile-friendly responsive design

## Testing

After setting up the environment variables:

1. Start the development server: `npm run dev`
2. Navigate to the homepage
3. Enter an email in the "WE ARE LAUNCHING" section
4. Click "Notify Me" or press Enter
5. Check your Mailchimp audience to verify the email was added

## Error Handling

The integration handles various scenarios:
- Invalid email addresses
- Duplicate subscriptions
- Network connectivity issues
- Mailchimp API errors
- Missing environment variables
