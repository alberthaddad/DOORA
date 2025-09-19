# ✅ DOORA Deployment Checklist

## 🚀 **Pre-Deployment (5 minutes)**

### **Code Preparation**
- [ ] Code is ready (✅ already done)
- [ ] All URLs point to doora.app (✅ already done)
- [ ] Environment variables prepared (✅ already done)
- [ ] Build tested locally (✅ already done)

### **Accounts Setup**
- [ ] GitHub account created
- [ ] Vercel account created
- [ ] IONOS domain ready (doora.app)

## 📤 **GitHub Setup (10 minutes)**

### **Repository Creation**
- [ ] Create GitHub repository named "doora"
- [ ] Initialize git in web directory
- [ ] Add all files: `git add .`
- [ ] Commit changes: `git commit -m "Initial commit"`
- [ ] Push to GitHub: `git push -u origin main`

## 🚀 **Vercel Deployment (15 minutes)**

### **Project Import**
- [ ] Sign up at vercel.com with GitHub
- [ ] Click "New Project"
- [ ] Import "doora" repository
- [ ] Verify settings: Next.js, Root Directory: ., Build: npm run build
- [ ] Click "Deploy"

### **Environment Variables**
- [ ] Go to Settings → Environment Variables
- [ ] Add MAILCHIMP_API_KEY
- [ ] Add MAILCHIMP_SERVER_PREFIX
- [ ] Add MAILCHIMP_AUDIENCE_ID
- [ ] Add SMTP_HOST=smtp.ionos.com
- [ ] Add SMTP_PORT=587
- [ ] Add SMTP_USER=contact@doora.app
- [ ] Add SMTP_PASS=your_password
- [ ] Add NEXT_PUBLIC_BASE_URL=https://doora.app
- [ ] Click "Redeploy"

## 🌐 **Domain Configuration (5 minutes)**

### **Vercel Domain Setup**
- [ ] Go to Settings → Domains
- [ ] Add domain: doora.app
- [ ] Add domain: www.doora.app
- [ ] Copy DNS records from Vercel

### **IONOS DNS Configuration**
- [ ] Login to IONOS control panel
- [ ] Go to Domains → doora.app → DNS Settings
- [ ] Add A record: @ → 76.76.19.61
- [ ] Add CNAME record: www → cname.vercel-dns.com
- [ ] Save DNS settings

## ⏰ **Wait for DNS Propagation (24-48 hours)**

### **During Wait Time**
- [ ] Test Vercel URL (immediate)
- [ ] Check all functionality works
- [ ] Test contact form and email
- [ ] Test Mailchimp subscription
- [ ] Verify mobile responsiveness

## ✅ **Post-Deployment Testing (30 minutes)**

### **Basic Functionality**
- [ ] Homepage loads at doora.app
- [ ] All pages accessible (About, Contact, FAQ, Store)
- [ ] Images load correctly
- [ ] Mobile responsive design works
- [ ] Navigation works properly

### **Email Features**
- [ ] Contact form sends to contact@doora.app
- [ ] Auto-reply email sent to sender
- [ ] Mailchimp subscription works
- [ ] Check spam folder for test emails

### **SEO Features**
- [ ] Sitemap accessible: doora.app/sitemap.xml
- [ ] Robots.txt accessible: doora.app/robots.txt
- [ ] Meta tags correct (view page source)
- [ ] Open Graph previews work (test on Facebook)
- [ ] Twitter cards work (test on Twitter)

### **PWA Features**
- [ ] App installable on mobile
- [ ] App shortcuts work
- [ ] Offline functionality works
- [ ] App icon displays correctly

## 🔍 **Performance Verification (15 minutes)**

### **Speed Tests**
- [ ] PageSpeed Insights: doora.app (90+ score)
- [ ] GTmetrix: doora.app (A grade)
- [ ] Mobile performance: 90+ score
- [ ] Core Web Vitals: All green

### **SEO Verification**
- [ ] Google Search Console: Add property
- [ ] Submit sitemap: doora.app/sitemap.xml
- [ ] Check indexing status
- [ ] Verify structured data

## 📊 **Analytics Setup (Optional - 10 minutes)**

### **Google Analytics**
- [ ] Create GA4 property
- [ ] Add tracking code to layout.tsx
- [ ] Test tracking works
- [ ] Set up goals and conversions

### **Vercel Analytics**
- [ ] Enable in Vercel dashboard
- [ ] Monitor traffic and performance
- [ ] Set up alerts for issues

## 🎉 **Launch Ready!**

### **Final Checklist**
- [ ] Domain working: doora.app
- [ ] All features working
- [ ] Performance optimized
- [ ] SEO ready
- [ ] Analytics tracking
- [ ] Mobile optimized
- [ ] Email functionality working

## 🚨 **Common Issues & Solutions**

### **Build Fails**
- [ ] Check TypeScript errors: `npm run build`
- [ ] Fix errors and push to GitHub
- [ ] Check Vercel build logs

### **Environment Variables Not Working**
- [ ] Check variable names match exactly
- [ ] Redeploy after adding variables
- [ ] Check Vercel function logs

### **Domain Not Working**
- [ ] Wait 24-48 hours for DNS propagation
- [ ] Check DNS records in IONOS
- [ ] Test with Vercel URL first

### **Email Not Sending**
- [ ] Check SMTP credentials in IONOS
- [ ] Test with simple email first
- [ ] Check spam folder

## 📞 **Support Resources**

### **Vercel Support**
- [ ] Documentation: vercel.com/docs
- [ ] Community: github.com/vercel/vercel/discussions
- [ ] Support: vercel.com/support

### **IONOS Support**
- [ ] Help Center: ionos.com/help
- [ ] Support: ionos.com/support
- [ ] Community: community.ionos.com

## 🎯 **Success Metrics to Track**

### **Technical Metrics**
- [ ] Uptime: 99.9%+
- [ ] Page Speed: < 3 seconds
- [ ] Mobile Score: 90+
- [ ] SEO Score: 90+

### **Business Metrics**
- [ ] Contact Form Submissions
- [ ] Email Subscriptions
- [ ] Page Views
- [ ] Conversion Rate

## 🚀 **You're Ready to Launch!**

**Total Time Required: 1-2 hours (plus 24-48 hours for DNS)**

**Your DOORA website is now live and ready to change the fashion world! 🌟**

---

**Need help with any step? Check the detailed Vercel Deployment Guide! 📖**
