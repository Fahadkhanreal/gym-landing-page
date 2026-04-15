# Contact Form Setup Guide

## 🎯 Current Implementation: Email via Resend

Your contact form now sends emails using **Resend** - a modern email API service.

### ✅ What's Been Set Up

1. **API Route:** `app/api/contact/route.ts` - Handles form submissions
2. **Environment Variables:** `.env.local` - Stores API keys
3. **Updated Form:** `sections/contact.tsx` - Sends data to API
4. **Package Installed:** `resend` - Email sending library

---

## 📧 Setup Instructions (5 minutes)

### Step 1: Get Resend API Key (FREE)

1. Visit: https://resend.com/signup
2. Sign up with your email
3. Verify your email
4. Go to: https://resend.com/api-keys
5. Click "Create API Key"
6. Copy the key (starts with `re_...`)

### Step 2: Configure Environment Variables

Open `.env.local` and update:

```env
# Paste your Resend API key here
RESEND_API_KEY=re_your_actual_api_key_here

# Your gym's email where submissions will be sent
GYM_EMAIL=info@fitforgegym.com
```

### Step 3: Update Email Settings

Open `app/api/contact/route.ts` and change line 13:

```typescript
to: ['info@fitforgegym.com'], // Replace with your actual gym email
```

### Step 4: Verify Domain (Optional - For Production)

**Free Tier:** Use `onboarding@resend.dev` (works immediately, but shows "via resend.dev")

**Custom Domain:** 
1. Go to Resend Dashboard → Domains
2. Add your domain (e.g., fitforgegym.com)
3. Add DNS records (Resend will show you)
4. Update line 12 in `route.ts`:
   ```typescript
   from: 'FitForge Gym <contact@fitforgegym.com>',
   ```

### Step 5: Test It!

```bash
# Restart dev server
npm run dev

# Open http://localhost:3000
# Fill the contact form
# Check your email inbox!
```

---

## 🔄 Alternative Solutions

### Option 2: Formspree (No Code Required) 🚀

**Best for:** Non-technical users, instant setup

1. Visit: https://formspree.io/
2. Sign up (free tier: 50 submissions/month)
3. Create a new form
4. Copy the form endpoint URL
5. Update `sections/contact.tsx`:

```typescript
const onSubmit = async (data: ContactFormData) => {
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) throw new Error('Failed to send');
    setIsSuccess(true);
    setTimeout(() => { setIsSuccess(false); reset(); }, 3000);
  } catch (error) {
    alert('Failed to send message. Please try again.');
  }
};
```

**Pros:** 
- No backend code needed
- Instant setup (2 minutes)
- Spam protection included

**Cons:**
- Limited to 50 submissions/month (free)
- Less customization

---

### Option 3: Google Sheets (Free Forever) 📊

**Best for:** Tracking all submissions in a spreadsheet

1. Create Google Sheet
2. Use Google Apps Script
3. Deploy as web app
4. Form submits to sheet automatically

**Setup:**
```javascript
// Google Apps Script code
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.fullName,
    data.email,
    data.phone,
    data.interest,
    data.message || ''
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

---

## 🧪 Testing Checklist

- [ ] API key added to `.env.local`
- [ ] Dev server restarted
- [ ] Form submits without errors
- [ ] Email received in inbox
- [ ] Success message shows
- [ ] Form resets after submission
- [ ] Validation works (try invalid email)

---

## 🚨 Common Issues & Fixes

### Issue 1: "Failed to send email"
**Fix:** Check if RESEND_API_KEY is correct in `.env.local`

### Issue 2: Email not received
**Fix:** 
- Check spam folder
- Verify email address in `route.ts` line 13
- Check Resend dashboard for logs

### Issue 3: "Internal server error"
**Fix:** 
- Restart dev server: `npm run dev`
- Check browser console for errors
- Check terminal for API errors

---

## 📊 Resend Free Tier Limits

- ✅ 100 emails/day
- ✅ 3,000 emails/month
- ✅ Unlimited API keys
- ✅ Email logs & analytics

**Upgrade:** $20/month for 50,000 emails

---

## 🔐 Security Best Practices

1. **Never commit `.env.local`** - Already in `.gitignore`
2. **Use environment variables** - Never hardcode API keys
3. **Rate limiting** - Add in production (prevent spam)
4. **CAPTCHA** - Consider adding reCAPTCHA for production

---

## 📱 Production Deployment (Vercel)

When deploying to Vercel:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add:
   - `RESEND_API_KEY` = your_api_key
   - `GYM_EMAIL` = your_email
3. Redeploy

**Important:** Environment variables are NOT automatically deployed. You must add them in Vercel dashboard.

---

## 💡 Recommended: Add Email Notifications

Want to get notified on your phone? Add to `route.ts`:

```typescript
// Also send to multiple emails
to: [
  'owner@fitforgegym.com',
  'manager@fitforgegym.com',
  'sales@fitforgegym.com'
],
```

---

## 📞 Support

- **Resend Docs:** https://resend.com/docs
- **Resend Status:** https://status.resend.com
- **Community:** https://resend.com/discord

---

**Setup Time:** 5 minutes  
**Cost:** FREE (up to 3,000 emails/month)  
**Difficulty:** Easy ⭐⭐☆☆☆
