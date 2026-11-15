# Site setup guide

This repository contains a static real-estate website for Amitabh Srivastava. The deployed site is served from `public/` using the Cloudflare Workers static assets configuration in `wrangler.jsonc`.

## Preview on your computer

1. Install Python 3, or use another static-file server.
2. From the repository root, run:

   ```sh
   python3 -m http.server 8000 --directory public
   ```

3. Open <http://localhost:8000>.
4. Check the page at desktop and mobile widths. The fonts and hero image are loaded from external services, so they require an internet connection.

## Edit site content

- Update headings, copy, contact information, and links in `public/index.html`.
- Adjust presentation and responsive layouts in `public/styles.css`.
- Update navigation and contact-dialog behavior in `public/script.js`.
- The portrait in `public/IMG_1443.JPG` is used in the About section.

The consultation, buyer, and home-valuation links open the Google Form in a new tab; Google handles and stores submitted responses. Email and phone links are also available. If the form, data collected, or external resources change, update [PRIVACY_POLICY.md](./PRIVACY_POLICY.md) to match.

## Deploy to Cloudflare

1. Install Node.js and sign in to the Cloudflare account that owns the site.
2. From the repository root, preview the Worker:

   ```sh
   npx wrangler@latest login
   npx wrangler@latest dev
   ```

3. Deploy when the preview is ready:

   ```sh
   npx wrangler@latest deploy
   ```

The `assets.directory` setting in `wrangler.jsonc` points Wrangler to `public/`. Confirm that the Cloudflare account and domain are configured before deploying.

## Before publishing changes

- Verify all contact details and social links.
- Confirm “Amitabh Srivastava, Real Estate Salesperson” and “REBEST REALTY INC. Brokerage” appear prominently in the header/hero and footer.
- Confirm the Google Form is accepting responses and its questions are current.
- Check the layout at desktop and mobile widths.
- Confirm the About portrait and external hero image load.
- Review the privacy notice if any data collection, analytics, or third-party resources have changed.
