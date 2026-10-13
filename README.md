# TECHXIRO — Enterprise AI Systems

Intelligent AI systems that transform data, automate operations, and deliver real-time actionable decisions.

## Features

- **Computer Vision & Video Intelligence**
- **Machine Learning & Predictive Analytics**
- **Enterprise AI Agents & Automation**
- **Data Intelligence & Analytics**

## Image Assets

All application images are organized in `public/images/` and can be referenced from the app with `/images/<filename>` URLs:

- `public/images/logo.svg`, `logo.png`, `techxiro-icon.svg`, and `techxiro-logo.png` — Brand assets
- `public/images/hero-visualization.svg` — Hero AI network diagram
- `public/images/architecture-pipeline.svg` — System pipeline architecture illustration
- `public/images/dashboard-preview.svg` — Platform preview diagram
- `public/images/favicon.png` and `favicon.ico` — Browser and device icons

## Local Development

You need Node.js and npm installed.

```sh
npm install
npm run dev
```

Vite prints the local URL when the development server starts.

## Contact Form Email

The contact form validates submissions and sends them through Resend; CAPTCHA is not used.

1. Create a Resend API key and verify the sending domain used for `CONTACT_FROM_EMAIL`.
2. Set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` in an untracked
   `.env.local` file for local development and in your deployment's environment configuration.
3. Restart the local server after changing `.env.local`.

`.env.example` lists the required variable names without containing credentials. The server
reports email delivery failures rather than showing a false success.
