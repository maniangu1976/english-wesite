# MidCentury Cultural — Website Starter

This is a small midcentury-inspired website starter built with plain HTML/CSS/JS.

Features
- Midcentury palette: deep teal (primary), mustard-gold (accents), terracotta (CTA), warm off-white background
- Sans-serif typography (Google Font: Inter)
- Site structure: Home, About Us, Classes, Events, Groups, Join Us, Donations
- Home page includes:
  - Flash announcements (marquee-like strip)
  - Visual photo carousel
  - Daily Dashboard listing today's classes/parayanams with "Join" buttons that open Google Forms
- Responsive and accessible basics

Quick setup
1. Replace images in `assets/` (create `assets/photo1.svg`, `assets/photo2.svg`, `assets/photo3.svg` or replace these placeholders).
2. Replace example Google Form links in `index.html` and `js/scripts.js` with your form URLs.
3. Customize copy, add pages for About/Events/Groups or convert to a CMS if desired.

Deploy
- Drop in a GitHub repository and enable GitHub Pages from the repository settings (branch: main or gh-pages).
- Or host on any static hosting (Netlify, Vercel, Surge, Firebase Hosting).

Design notes & customization
- Color variables are in `css/styles.css` (:root). Tweak `--deep-teal`, `--mustard-gold`, `--terracotta`, `--warm-offwhite`.
- Typography: swap the Google Font link in `index.html` for your preferred sans-serif.
- Replace the announcement items in the header or wire them to a lightweight CMS or JSON feed for dynamic updates.

Accessibility & performance tips
- Provide descriptive alt text for all images.
- Keep CTA contrast high — terracotta chosen for visibility against warm off-white.
- Compress images and use modern formats (WebP) for faster loading.
- Consider pre-rendering daily schedule server-side if the schedule grows large.

If you want, I can:
- Add a small admin UI to edit announcements and schedule (local JSON editor or Netlify CMS).
- Wire the site to Google Calendar for events.
- Convert into a React/Vue site or a WordPress theme.
- Create a deployment-ready GitHub repo with these files and a GitHub Pages config.

What would you like me to do next?