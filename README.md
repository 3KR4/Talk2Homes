## Project Overview

TalkToHomes is a marketing website built with Next.js (App Router) to promote real estate cold-calling services. It includes static and dynamic pages, promotional sections, contact forms, and integrations with external tools such as Calendly, Google Ads, and AOS animations.

## Requirements

- Node.js and npm

## Run Locally

1) Install dependencies:
```bash
npm install
```
2) Start the development server:
```bash
npm run dev
```
3) Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Run the production server after build
- `npm run export`: Export a static build into the `out` directory

## Key Directories

- `src/app/layout.js`: Root layout with AOS, Footer, Google Ads scripts, and `openGraph` metadata
- `src/app/page.js`: Home page with marketing sections and interactive UI (scroll-to-top, chat)
- `src/app/booking/page.js`: Booking page embedded with Calendly to schedule calls
- `src/app/privacy/page.js`: Privacy Policy page including SMS policy
- `src/app/success/page.js`: Success page after form submission
- `src/components/*`: Core components (Header, Landing, Tools, AboutUs, Counters, Service, WhyUs, NextTeam, Testimonials, Contact, Chat, Footer, AOSInit, etc.)
- `public/*`: Static assets (images, logos, media)

## Routes

- `/` Home
- `/booking` Booking via Calendly
- `/privacy` Privacy Policy
- `/success` Submission Success

## Features

- AOS scroll animations
- Interactive counters and metrics (`react-countup`)
- Testimonials and sliders (`swiper`)
- Media players when needed (`react-player`, `react-h5-audio-player`, `wavesurfer.js`)
- Contact form using `react-hook-form` and `@emailjs/browser`
- Calendly integration from the `booking` page
- SEO and `openGraph` settings in `layout.js`
- Google Ads via `next/script`

## Tech Dependencies

- Next.js, React
- AOS (animations), Swiper (slider)
- react-countup, react-icons, react-intersection-observer
- react-player, react-h5-audio-player, wavesurfer.js (media)
- react-hook-form, @emailjs/browser (forms and email)
- react-calendly (optional Calendly helper)

## Deployment Notes

- Supports static export via `npm run export` to the `out` directory
- Update `metadataBase` and links in `src/app/layout.js` if the domain changes
- Ensure tracking IDs/keys (e.g., Google Ads) are set for production

## Quick Customization

- Logos and images: `public`
- Metadata and titles: `src/app/layout.js`
- Section copy and content: `src/components/*`

## Contact

- Email: `info@talktohomes.com`
- Phone: `(786) 220-3280`
- Address: `1309 Coffeen Ave, STE 1200, Sheridan, WY 82801, USA`
