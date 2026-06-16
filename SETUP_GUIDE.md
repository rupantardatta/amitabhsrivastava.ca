# Campaign Website - Quick Start Checklist

## 📋 Immediate Setup (Do First)

- [ ] **Open the website locally**
  - In VS Code: Right-click `index.html` → "Open with Live Server"
  - Or: Double-click `index.html` in Finder

- [ ] **Review all three files**
  - `index.html` - Structure and content
  - `styles.css` - Colors and styling
  - `script.js` - Form handling

## ✏️ Customization (Required)

### 1. Basic Info (5 minutes)
- [ ] Update candidate name (in logo - line 13)
- [ ] Update page title (line 5 of HTML)
- [ ] Add candidate name in hero section
- [ ] Replace "Your Name" with actual name

### 2. About Section (15 minutes)
- [ ] Write personal bio (replace template text)
- [ ] Add years of real estate experience
- [ ] Share why running for council
- [ ] Keep it warm but professional

### 3. Platform/Priorities (20 minutes)
- [ ] Replace 6 generic platform cards with YOUR actual priorities
- [ ] Make specific to Ward 7 issues
- [ ] Keep descriptions concise (2-3 sentences each)

### 4. Contact Information (5 minutes)
- [ ] Add email address (footer, line 141)
- [ ] Add phone number (footer, line 142)
- [ ] Add Facebook page link (line 147)
- [ ] Add Twitter/X handle (line 148)
- [ ] Add LinkedIn profile (line 149)
- [ ] Update authorization statement (line 154)

### 5. Colors (Optional - 5 minutes)
If you want to customize colors, edit `styles.css` lines 11-20:
```css
--primary-color: #1e3a8a;      /* Main color - currently dark blue */
--secondary-color: #2d5a1e;    /* Accent - currently dark green */
--accent-color: #d97706;       /* Buttons - currently orange */
```

## 📧 Form Handling Setup

### Option 1: Email Submissions (Easiest - FREE)

1. Go to https://formsubmit.co
2. Enter your email address
3. Copy the provided form code
4. Replace form in `index.html` starting at line 99

### Option 2: Store Feedback Locally (For Testing)
- Forms save to browser storage
- View in Console: type `viewCollectedFeedback()`
- Good for testing, not for production

### Option 3: Netlify Forms (If hosting on Netlify)
- Netlify handles forms automatically
- Add `netlify` attribute to form tag

## 🌐 Hosting Options

### Option A: Free with GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repo settings
3. Website goes live automatically
4. Form handling requires third-party service

### Option B: Free with Netlify (RECOMMENDED)
1. Connect GitHub repository
2. Select `amitabhsrivastava.ca` folder
3. Site goes live automatically
4. Built-in form handling available
5. Custom domain support

### Option C: Traditional Web Hosting
- Bluehost, SiteGround, etc.
- More control but requires more setup
- Cost: $2-10/month typically

## 🚀 Deployment Steps

1. **Get form emails working first** (test locally)
2. **Choose a hosting platform** (Netlify recommended)
3. **Deploy the website**
4. **Get a domain name** (optional but recommended)
5. **Test everything in production**
6. **Share the link!**

## 🧪 Testing Checklist

Before going live:
- [ ] Test feedback form (submit a test entry)
- [ ] Check on mobile phone
- [ ] Check on tablet
- [ ] Test all navigation links
- [ ] Verify contact info is correct
- [ ] Check spelling and grammar
- [ ] Verify images load (if added)
- [ ] Test on different browsers

## 📱 Mobile Testing

Open website on:
- [ ] iPhone/iPad
- [ ] Android phone
- [ ] Desktop
- Verify everything looks good

## 🔒 Before Going Public

- [ ] Add proper campaign authorization in footer
- [ ] Ensure email form is working
- [ ] Add privacy policy (link in footer)
- [ ] Set up Google Analytics (optional)
- [ ] Test from different networks
- [ ] Have someone else review it

## 📊 After Launch

- [ ] Share on social media
- [ ] Add website to campaign materials
- [ ] Create QR code linking to website
- [ ] Monitor feedback submissions
- [ ] Respond to messages quickly
- [ ] Update content regularly
- [ ] Track website analytics

## 🆘 Common Issues & Solutions

**Issue**: Form doesn't submit
- Solution: Check email is correctly configured, test in different browser

**Issue**: Website looks weird on mobile
- Solution: Check browser zoom, try different orientation

**Issue**: Links don't work
- Solution: Verify href values match section IDs (check # links)

**Issue**: Page loads slowly
- Solution: Check for large image files, optimize images

## 📞 Support Resources

- **HTML Help**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS Help**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **Netlify Docs**: https://docs.netlify.com
- **FormSubmit Docs**: https://formsubmit.co

## ✅ Final Checklist Before Launch

- [ ] All candidate information is accurate and up-to-date
- [ ] Contact information is correct and monitored
- [ ] Form submissions are being received
- [ ] Website looks good on all devices
- [ ] No broken links or typos
- [ ] Social media links are correct
- [ ] Mobile responsiveness is confirmed
- [ ] Loading speed is acceptable
- [ ] Campaign authorization statement is included
- [ ] Privacy policy is available (if collecting feedback)

---

**Remember**: This is a professional representation of your campaign. Keep it updated and respond to feedback promptly. A well-maintained website builds trust with voters!

**Ready to go live?** 🎉
