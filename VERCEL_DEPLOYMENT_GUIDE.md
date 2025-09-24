# 🚀 Vercel Deployment Guide for DOORA

This guide will walk you through deploying your DOORA website to Vercel in just a few simple steps.

## 📋 **Prerequisites**

Before starting, make sure you have:
- ✅ **GitHub account** (free)
- ✅ **Vercel account** (free)
- ✅ **IONOS domain** (doora.app)
- ✅ **DOORA code** ready (already done!)

## 🎯 **Step 1: Prepare Your Code for GitHub**

### **1.1 Initialize Git Repository**
```bash
# Navigate to your web directory
cd web

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - DOORA website ready for production"
```

### **1.2 Create GitHub Repository**
1. **Go to [github.com](https://github.com)**
2. **Click "New repository"**
3. **Repository name**: `doora` (or any name you prefer)
4. **Description**: "DOORA - Premium Secondhand Fashion Marketplace"
5. **Set to Public** (required for free Vercel)
6. **Click "Create repository"**

### **1.3 Push Code to GitHub**
```bash
# Add GitHub remote (replace with your username)
git remote add origin https://github.com/YOUR_USERNAME/doora.git

# Push to GitHub
git push -u origin main
```

## 🚀 **Step 2: Deploy to Vercel**

### **2.1 Sign Up for Vercel**
1. **Go to [vercel.com](https://vercel.com)**
2. **Click "Sign Up"**
3. **Choose "Continue with GitHub"**
4. **Authorize Vercel** to access your GitHub

### **2.2 Import Your Project**
1. **Click "New Project"**
2. **Find your `doora` repository**
3. **Click "Import"**

### **2.3 Configure Project Settings**
Vercel will automatically detect Next.js, but verify these settings:

```
Framework Preset: Next.js ✅
Root Directory: . (or leave empty)
Build Command: npm run build ✅
Output Directory: .next ✅
Install Command: npm install ✅
```

### **2.4 Deploy**
1. **Click "Deploy"**
2. **Wait 2-3 minutes** for deployment
3. **Get your Vercel URL** (e.g., `doora-abc123.vercel.app`)

## 🔧 **Step 3: Configure Environment Variables**

### **3.1 Go to Project Settings**
1. **In Vercel dashboard**, click on your project
2. **Go to "Settings"** tab
3. **Click "Environment Variables"**

### **3.2 Add Production Variables**
Add these environment variables:

```env
# Mailchimp Configuration
MAILCHIMP_API_KEY=your_production_mailchimp_api_key
MAILCHIMP_SERVER_PREFIX=your_production_server_prefix
MAILCHIMP_AUDIENCE_ID=your_production_audience_id

# SMTP Configuration (IONOS)
SMTP_HOST=smtp.ionos.com
SMTP_PORT=587
SMTP_USER=contact@doora.app
SMTP_PASS=your_ionos_email_password

# Next.js Configuration
NEXT_PUBLIC_BASE_URL=https://doora.app
NODE_ENV=production
```

### **3.3 Redeploy After Adding Variables**
1. **Click "Redeploy"** after adding variables
2. **Wait for deployment** to complete

## 🌐 **Step 4: Connect Your Domain**

### **4.1 Add Custom Domain**
1. **Go to "Settings"** → **"Domains"**
2. **Click "Add Domain"**
3. **Enter**: `doora.app`
4. **Click "Add"**

### **4.2 Add WWW Subdomain**
1. **Click "Add Domain"** again
2. **Enter**: `www.doora.app`
3. **Click "Add"**

### **4.3 Configure DNS in IONOS**
Vercel will show you DNS records to add. In your IONOS control panel:

1. **Go to Domains** → **doora.app** → **DNS Settings**
2. **Add these records**:

```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### **4.4 Wait for DNS Propagation**
- **Time**: 24-48 hours
- **Check**: Use [dnschecker.org](https://dnschecker.org)
- **Test**: Visit `doora.app` when ready

## ✅ **Step 5: Test Your Deployment**

### **5.1 Basic Functionality Test**
- [ ] **Homepage loads**: Visit `doora.app`
- [ ] **All pages work**: About, Contact, FAQ, etc.
- [ ] **Mobile responsive**: Test on phone
- [ ] **Images load**: Check all images display

### **5.2 Email Functionality Test**
- [ ] **Contact form**: Fill out and submit
- [ ] **Check email**: Look for email at contact@doora.app
- [ ] **Auto-reply**: Check sender's email for auto-reply
- [ ] **Mailchimp**: Test email subscription

### **5.3 SEO Features Test**
- [ ] **Sitemap**: Visit `doora.app/sitemap.xml`
- [ ] **Robots.txt**: Visit `doora.app/robots.txt`
- [ ] **Meta tags**: View page source
- [ ] **Social previews**: Test on Facebook/LinkedIn

### **5.4 PWA Features Test**
- [ ] **Install app**: Try installing on mobile
- [ ] **App shortcuts**: Test quick actions
- [ ] **Offline mode**: Test without internet

## 🔍 **Step 6: Verify Everything Works**

### **6.1 Performance Check**
1. **Visit [PageSpeed Insights](https://pagespeed.web.dev/)**
2. **Test your domain**: `doora.app`
3. **Check Core Web Vitals**: Should be green
4. **Mobile score**: Should be 90+

### **6.2 SEO Verification**
1. **Google Search Console**: Add your property
2. **Submit sitemap**: `doora.app/sitemap.xml`
3. **Check indexing**: Monitor search appearance
4. **Test rich snippets**: Verify structured data

### **6.3 Analytics Setup (Optional)**
1. **Google Analytics 4**: Add tracking code
2. **Vercel Analytics**: Enable in dashboard
3. **Monitor traffic**: Track visitor behavior

## 🚨 **Troubleshooting Common Issues**

### **Issue 1: Build Fails**
```bash
# Check for TypeScript errors locally
npm run build

# Fix any errors and push to GitHub
git add .
git commit -m "Fix build errors"
git push
```

### **Issue 2: Environment Variables Not Working**
- **Check variable names**: Must match exactly
- **Redeploy**: After adding variables
- **Check logs**: In Vercel dashboard

### **Issue 3: Domain Not Working**
- **Wait 24-48 hours**: DNS propagation takes time
- **Check DNS records**: Verify in IONOS
- **Test with Vercel URL**: Should work immediately

### **Issue 4: Email Not Sending**
- **Check SMTP credentials**: Verify in IONOS
- **Test with simple email**: Use a basic test
- **Check spam folder**: Emails might be filtered

## 📊 **Step 7: Monitor and Optimize**

### **7.1 Vercel Dashboard**
- **Monitor deployments**: Check build status
- **View analytics**: Traffic and performance
- **Check logs**: Debug any issues
- **Monitor functions**: API route performance

### **7.2 Performance Monitoring**
- **Core Web Vitals**: Monitor regularly
- **Page load speed**: Track improvements
- **Mobile performance**: Ensure mobile optimization
- **User experience**: Monitor bounce rates

### **7.3 SEO Monitoring**
- **Search Console**: Track search performance
- **Keyword rankings**: Monitor position changes
- **Click-through rates**: Optimize meta descriptions
- **Indexing status**: Ensure pages are indexed

## 🎉 **Step 8: Go Live!**

### **8.1 Final Checklist**
- [ ] **Domain working**: `doora.app` loads correctly
- [ ] **All features working**: Contact, subscription, etc.
- [ ] **Mobile optimized**: Test on various devices
- [ ] **Performance optimized**: Fast loading times
- [ ] **SEO ready**: Sitemap, meta tags, etc.
- [ ] **Analytics tracking**: Monitor visitor behavior

### **8.2 Launch Announcement**
- **Social media**: Announce your launch
- **Email marketing**: Notify your audience
- **Press release**: Share with media
- **SEO submission**: Submit to directories

## 🔄 **Step 9: Ongoing Maintenance**

### **9.1 Regular Updates**
- **Code updates**: Push to GitHub for auto-deployment
- **Dependencies**: Keep packages updated
- **Content updates**: Add new pages/content
- **Feature additions**: Enhance functionality

### **9.2 Monitoring**
- **Uptime monitoring**: Ensure site is always available
- **Performance tracking**: Monitor speed and optimization
- **Error tracking**: Fix issues quickly
- **User feedback**: Listen to user suggestions

## 💡 **Pro Tips**

### **Development Workflow**
```bash
# Make changes locally
npm run dev

# Test everything works
npm run build

# Push to GitHub
git add .
git commit -m "Your changes"
git push

# Vercel automatically deploys!
```

### **Environment Management**
- **Development**: Uses `.env.local`
- **Production**: Uses Vercel environment variables
- **Preview**: Uses Vercel preview deployments

### **Custom Domains**
- **Primary**: `doora.app`
- **WWW**: `www.doora.app`
- **Subdomains**: `api.doora.app`, `admin.doora.app`

## 🎯 **Success Metrics**

### **Technical Metrics**
- **Uptime**: 99.9%+ availability
- **Page Speed**: < 3 seconds load time
- **Mobile Score**: 90+ on PageSpeed Insights
- **SEO Score**: 90+ on various tools

### **Business Metrics**
- **Contact Form**: Track submissions
- **Email Subscriptions**: Monitor growth
- **Page Views**: Track visitor engagement
- **Conversion Rate**: Measure success

## 🚀 **You're Ready to Launch!**

Your DOORA website is now live on Vercel with:
- ✅ **Professional domain**: doora.app
- ✅ **Global CDN**: Fast loading worldwide
- ✅ **Automatic HTTPS**: Secure connections
- ✅ **Zero maintenance**: Vercel handles everything
- ✅ **Perfect optimization**: Built for Next.js
- ✅ **Scalable infrastructure**: Grows with your business

**Congratulations! Your DOORA website is now live! 🎉**

## 📞 **Need Help?**

If you encounter any issues:
1. **Check Vercel logs**: In the dashboard
2. **Test locally first**: `npm run build`
3. **Verify environment variables**: Check spelling
4. **Check DNS propagation**: Wait 24-48 hours
5. **Contact support**: Vercel has excellent support

**Your DOORA website is ready to change the fashion world! 🌟**





