# Councillor Campaign Website - Ward 7, Mississauga

A professional, responsive website for a municipal election campaign. Built with clean HTML5, modern CSS3, and vanilla JavaScript.

## Features

✅ **Professional Design**
- Clean, modern interface without clutter
- Responsive design works on desktop, tablet, and mobile
- Consistent branding with professional color scheme

✅ **Key Sections**
- **Navigation** - Easy access to all important sections
- **Hero Section** - Compelling introduction to the candidate
- **About** - Background and core values
- **Platform** - 6 key campaign priorities
- **Feedback Form** - Collect visitor input and concerns
- **Footer** - Contact info and social links

✅ **Feedback Collection**
- Simple, user-friendly form
- Captures name, email, phone, topic, and detailed message
- Optional contact preference checkbox
- Form validation and success messages
- Data stored in browser's localStorage (see deployment notes)

✅ **User Experience**
- Smooth scrolling navigation
- Animated cards on scroll
- Hover effects on interactive elements
- Keyboard accessible
- Print-friendly

## Recent Changes (2026-06-15)

These updates were added to bring the site closer to the requested reference design and to provide interactive campaign features:

- Added Google Fonts (`Montserrat` for interface text and `Lora` for headings) and a meta description for improved SEO.
- A slim top bar was added with contact information and a direct link to the City of Mississauga election page (`https://mississauga.ca/election`).
- The hero now supports a candidate photo; place the image at `candidate-photo.jpg` in the project root to display it on the homepage.
- An **Updates & Events** section was added to highlight community meetings and campaign events.
- Header CTAs now open in-page modals:
   - **Volunteer** modal: collects name, email, phone, and a short message; currently saved to browser `localStorage` under the key `campaignVolunteers` for development and testing.
   - **Donate** modal: shows an Interac e-Transfer email (`donations@amitabhsrivastava.ca`) with a copy-to-clipboard button and an optional mailto link. Replace the placeholder email with the campaign's real Interac address before going live.
- Color variables and typography were adjusted to a muted, professional palette in `styles.css`.

These changes prioritize clarity, accessibility, and quick volunteer/donation workflows while keeping the layout uncluttered.

## Quick Setup

### Option 1: Local Development
1. Open the folder in VS Code
2. Install Live Server extension if not already installed
3. Right-click `index.html` and select "Open with Live Server"
4. Website opens at `http://localhost:5500`

### Option 2: Simple File Opening
- Double-click `index.html` to open in browser
- Or drag-and-drop into browser window

## Customization Guide

### Essential Changes to Make

**1. index.html - Personalize the content:**
```html
<!-- Line 5: Update page title -->
<title>Your Name | Councillor Candidate - Ward 7, Mississauga</title>

<!-- Lines 13-16: Update candidate name and tagline -->
<div class="logo">
    <h1>Your Name</h1>
    <p class="tagline">Councillor Candidate, Ward 7</p>
</div>

<!-- Lines 54-61: Update "About Me" section with actual background -->
<!-- Replace [X] years with actual experience -->
<!-- Add specific examples of community work -->

<!-- Lines 80-90: Update platform points with specific priorities -->
<!-- Customize the 6 platform cards to match actual campaign priorities -->

<!-- Lines 139-141: Add contact information -->
<p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
<p>Phone: <a href="tel:+1-905-XXXXXXX">+1 (905) XXX-XXXX</a></p>

<!-- Lines 145-151: Add social media links -->
<a href="https://facebook.com/yourpage">Facebook</a> | 
<a href="https://twitter.com/yourhandle">Twitter</a> | 
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>

<!-- Line 154: Add campaign authorization statement -->
<p>&copy; 2026 Campaign for Ward 7. Authorized by...</p>
```

**2. styles.css - Brand Colors:**
Change the color variables at the top (lines 11-20):
```css
:root {
    --primary-color: #1e3a8a;      /* Dark blue - main color */
    --secondary-color: #2d5a1e;    /* Dark green - accent */
    --accent-color: #d97706;       /* Orange - call-to-action buttons */
}
```

**3. script.js - Backend Integration:**
Lines 47-59 show where to add API integration for form submissions.

## Form Feedback Handling

### Current Setup (Development)
- Feedback is stored in browser's localStorage
- To view collected feedback, open browser console and type: `viewCollectedFeedback()`

### Production Setup (Recommended)

You have several options:

#### Option A: Email Form Submissions (Recommended)
Use a third-party service like FormSubmit.co (free, no backend needed):

```html
<!-- In index.html, change line 99 to: -->
<form action="https://formsubmit.co/your-email@example.com" method="POST" id="feedbackForm">
    <!-- Keep all form fields as-is -->
    <input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html">
    <input type="hidden" name="_template" value="table">
</form>
```

#### Option B: Node.js/Express Backend
Create a simple Node.js server with Express to handle form submissions.

#### Option C: Third-Party Form Services
- **Formspree** - Simple, free tier available
- **Basin** - Form backend service
- **Netlify Forms** - Built-in if hosting on Netlify

## Hosting Options

### Free Hosting
1. **GitHub Pages** - Free, no backend needed
   - Push to GitHub
   - Enable GitHub Pages in repo settings
   - Website available at `username.github.io/repo`

2. **Netlify** - Free tier with form handling
   - Connect GitHub repo
   - Automatic deployment on push
   - Built-in form backend

3. **Vercel** - Free tier, very fast
   - Similar to Netlify
   - Great performance

### Paid Hosting
- **Bluehost** - ~$2-10/month
- **SiteGround** - Professional, ~$3-10/month
- **AWS/Google Cloud** - Scalable, pay-as-you-go

## Browser Compatibility

Works on:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO Optimization Checklist

- [ ] Update meta description in `<head>`
- [ ] Add Open Graph tags for social sharing
- [ ] Create `robots.txt` file
- [ ] Create `sitemap.xml`
- [ ] Google Search Console registration
- [ ] Google Analytics setup

## Accessibility Features

✓ Semantic HTML5 elements
✓ Color contrast meets WCAG standards
✓ Keyboard navigation support
✓ Form labels properly associated
✓ Focus indicators visible

## Performance

- Lightweight CSS (no frameworks)
- Vanilla JavaScript (no libraries)
- Fast load times
- Mobile optimized
- Responsive images ready (add images as needed)

## Mobile Responsiveness

Tested and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## File Structure

```
├── index.html       # Main website (update content here)
├── styles.css       # Styling (update colors here)
├── script.js        # Interactions and form handling
└── README.md        # This file
```

## Next Steps

1. **Personalize Content**
   - Update candidate name and background
   - Fill in actual platform details
   - Add real contact information
   - Add social media links

2. **Set Up Form Handling**
   - Choose a form backend solution
   - Integrate with the feedback form
   - Test form submission

3. **Add Images**
   - Add professional photo of candidate
   - Add Ward 7 map or community images
   - Use `<img>` tags in HTML

4. **Deploy Website**
   - Choose hosting platform
   - Point custom domain if available
   - Set up HTTPS (required for forms)

5. **Marketing**
   - Share on social media
   - Add to campaign materials
   - QR code linking to website

## Important Legal Notes

- Include proper campaign authorization statement in footer
- Comply with Ontario election advertising rules
- Keep privacy policy for collected feedback
- Comply with PIPEDA (Personal Information Protection Act)

## Support & Customization

For additional features such as:
- Blog/News section
- Event calendar
- Donation feature
- Volunteer signup
- Multi-language support

You may want to:
- Add a simple CMS (Contentful, Headless WordPress)
- Use a website builder with custom code
- Hire a web developer for custom features

---

**Website Version**: 1.0  
**Last Updated**: June 2026  
**Built with**: HTML5, CSS3, Vanilla JavaScript