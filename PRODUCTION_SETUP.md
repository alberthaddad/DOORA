# 🚀 Production Setup Guide for doora.app

This guide explains how to configure your DOORA website for production deployment on your IONOS domain.

## 📋 **Pre-Deployment Checklist**

### **1. Domain Configuration**
- [ ] Domain `doora.app` is registered with IONOS
- [ ] DNS settings are configured
- [ ] SSL certificate is ready (or will be installed)
- [ ] Email `contact@doora.app` is set up

### **2. Environment Variables Setup**

Create a `.env.production` file with these variables:

```env
# Next.js Configuration
NEXT_PUBLIC_BASE_URL=https://doora.app
NEXT_PUBLIC_API_URL=https://doora.app/api
NODE_ENV=production

# Mailchimp Configuration (Production)
MAILCHIMP_API_KEY=your_production_mailchimp_api_key
MAILCHIMP_SERVER_PREFIX=your_production_server_prefix
MAILCHIMP_AUDIENCE_ID=your_production_audience_id

# SMTP Configuration (IONOS Production)
SMTP_HOST=smtp.ionos.com
SMTP_PORT=587
SMTP_USER=contact@doora.app
SMTP_PASS=your_ionos_email_password

# Security
NEXTAUTH_SECRET=your_production_nextauth_secret
NEXTAUTH_URL=https://doora.app

# Analytics (Optional)
GOOGLE_ANALYTICS_ID=your_google_analytics_id
GOOGLE_TAG_MANAGER_ID=your_gtm_id

# Search Engine Verification
GOOGLE_VERIFICATION=your_google_verification_code
BING_VERIFICATION=your_bing_verification_code
YANDEX_VERIFICATION=your_yandex_verification_code
YAHOO_VERIFICATION=your_yahoo_verification_code
```

## 🔧 **Configuration Updates Made**

### **1. All URLs Updated to doora.app**
- ✅ `layout.tsx` - All metadata URLs
- ✅ `sitemap.ts` - Base URL for sitemap
- ✅ `robots.ts` - Base URL for robots.txt
- ✅ `ai-knowledge.json` - All business URLs
- ✅ `manifest.json` - PWA configuration
- ✅ `README.md` - Documentation updated

### **2. SEO Configuration**
- ✅ Canonical URLs: `https://doora.app`
- ✅ Open Graph URLs: `https://doora.app`
- ✅ Twitter Card URLs: `https://doora.app`
- ✅ Sitemap URL: `https://doora.app/sitemap.xml`
- ✅ Robots.txt URL: `https://doora.app/robots.txt`

### **3. AI Optimization**
- ✅ Knowledge Graph URLs: `https://doora.app`
- ✅ Training Data URLs: `https://doora.app`
- ✅ Meta Tags: All pointing to doora.app

## 🌐 **IONOS Domain Setup**

### **1. DNS Configuration**
In your IONOS control panel, set up these DNS records:

```
Type    Name    Value
A       @       your_server_ip
CNAME   www     doora.app
CNAME   api     doora.app
```

### **2. Email Configuration**
- **Primary Email**: `contact@doora.app`
- **SMTP Server**: `smtp.ionos.com`
- **Port**: `587` (TLS) or `465` (SSL)
- **Authentication**: Use your IONOS email credentials

### **3. SSL Certificate**
- **IONOS SSL**: Purchase through IONOS control panel
- **Let's Encrypt**: Free alternative (if supported)
- **Wildcard SSL**: Recommended for subdomains

## 🚀 **Deployment Options**

### **Option A: IONOS Hosting**
1. **Upload Files**: Use FTP/SFTP to upload built files
2. **Configure Server**: Set up Node.js environment
3. **Install Dependencies**: Run `npm install --production`
4. **Start Application**: Run `npm start`

### **Option B: Vercel (Recommended)**
1. **Connect Repository**: Link your GitHub repository
2. **Set Environment Variables**: Add production variables
3. **Deploy**: Automatic deployment on push
4. **Custom Domain**: Connect doora.app domain

### **Option C: Netlify**
1. **Connect Repository**: Link your GitHub repository
2. **Build Settings**: Configure build command
3. **Environment Variables**: Add production variables
4. **Custom Domain**: Connect doora.app domain

## 📊 **Post-Deployment Verification**

### **1. Website Functionality**
- [ ] Homepage loads correctly
- [ ] Contact form sends emails
- [ ] Mailchimp subscription works
- [ ] All pages are accessible
- [ ] Mobile responsiveness works

### **2. SEO Verification**
- [ ] Sitemap accessible: `https://doora.app/sitemap.xml`
- [ ] Robots.txt accessible: `https://doora.app/robots.txt`
- [ ] Meta tags are correct
- [ ] Open Graph previews work
- [ ] Twitter cards display properly

### **3. Email Testing**
- [ ] Contact form sends to contact@doora.app
- [ ] Auto-reply emails work
- [ ] Mailchimp subscriptions work
- [ ] Email formatting is correct

### **4. Performance Testing**
- [ ] Page load speed is acceptable
- [ ] Images are optimized
- [ ] Mobile performance is good
- [ ] Core Web Vitals are passing

## 🔍 **Search Engine Submission**

### **1. Google Search Console**
1. **Add Property**: Add doora.app
2. **Verify Ownership**: Use HTML file or meta tag
3. **Submit Sitemap**: `https://doora.app/sitemap.xml`
4. **Monitor Performance**: Track search performance

### **2. Bing Webmaster Tools**
1. **Add Site**: Add doora.app
2. **Verify Ownership**: Use meta tag verification
3. **Submit Sitemap**: `https://doora.app/sitemap.xml`
4. **Monitor Performance**: Track search performance

## 📱 **PWA Testing**

### **1. Mobile Installation**
- [ ] PWA can be installed on mobile
- [ ] App icon displays correctly
- [ ] Splash screen works
- [ ] Offline functionality works

### **2. Desktop Installation**
- [ ] PWA can be installed on desktop
- [ ] App shortcuts work
- [ ] Window management works

## 🛡️ **Security Checklist**

### **1. HTTPS Configuration**
- [ ] SSL certificate is installed
- [ ] HTTP redirects to HTTPS
- [ ] Mixed content warnings resolved
- [ ] Security headers are configured

### **2. Environment Security**
- [ ] Production environment variables are secure
- [ ] API keys are not exposed
- [ ] Database connections are secure
- [ ] File uploads are restricted

## 📈 **Analytics Setup**

### **1. Google Analytics 4**
- [ ] GA4 property created
- [ ] Tracking code installed
- [ ] Goals and conversions configured
- [ ] E-commerce tracking enabled

### **2. Google Tag Manager**
- [ ] GTM container created
- [ ] GTM code installed
- [ ] Tags and triggers configured
- [ ] Testing and debugging completed

## 🎯 **Success Metrics**

### **1. Technical Metrics**
- **Page Load Speed**: < 3 seconds
- **Mobile Performance**: > 90/100
- **SEO Score**: > 90/100
- **Accessibility**: > 90/100

### **2. Business Metrics**
- **Contact Form Submissions**: Track daily
- **Mailchimp Subscriptions**: Track weekly
- **Page Views**: Track monthly
- **Conversion Rate**: Track monthly

## 🚨 **Troubleshooting**

### **Common Issues**
1. **SSL Certificate**: Ensure proper installation
2. **Email Sending**: Check SMTP configuration
3. **API Errors**: Verify environment variables
4. **Performance**: Optimize images and code

### **Support Resources**
- **IONOS Support**: For domain and hosting issues
- **Next.js Documentation**: For technical issues
- **Vercel/Netlify Support**: For deployment issues

## 🎉 **Launch Checklist**

### **Final Steps**
- [ ] All tests pass
- [ ] Performance is optimized
- [ ] Security is configured
- [ ] Analytics is tracking
- [ ] SEO is optimized
- [ ] Email is working
- [ ] PWA is functional
- [ ] Domain is live
- [ ] SSL is active
- [ ] Monitoring is set up

Your DOORA website is now ready for production deployment on doora.app! 🚀





