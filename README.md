# Amitabh Srivastava | Real Estate

A responsive, static website for Amitabh Srivastava, Real Estate Salesperson with REBEST REALTY INC. Brokerage, serving Mississauga and the Greater Toronto Area. It is built with HTML, CSS, and vanilla JavaScript and deployed as Cloudflare Workers static assets.

## Site contents

- `public/index.html` — site content and structure
- `public/styles.css` — layout, responsive styles, and visual design
- `public/script.js` — mobile navigation, current year, and contact dialog
- `public/IMG_1443.JPG` — portrait used in the About section
- `wrangler.jsonc` — Cloudflare Workers static assets configuration

Consultation, buyer, and home-valuation calls to action open a Google Form in a new tab; submissions are handled by Google. Email and phone links remain available as alternatives. The site itself does not store form responses. See [PRIVACY_POLICY.md](./PRIVACY_POLICY.md) for the current privacy notice.

## Preview locally

From the repository root, serve the public directory with Python:

```sh
python3 -m http.server 8000 --directory public
```

Then open <http://localhost:8000>.

## Deploy

Install Node.js, authenticate Wrangler with the Cloudflare account that owns this Worker, and deploy from the repository root:

```sh
npx wrangler@latest login
npx wrangler@latest deploy
```

To preview with Wrangler before deploying:

```sh
npx wrangler@latest dev
```

## Updating the site

Edit the content in `public/index.html` and styles in `public/styles.css`. Update the Google Form URL in the page if the form changes. Keep the privacy notice accurate if the site begins collecting information, adds analytics or tracking, or changes its third-party resources. The About portrait at `public/IMG_1443.JPG` is currently in use; avoid replacing or removing it without updating the page.
