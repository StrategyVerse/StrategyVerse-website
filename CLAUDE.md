# StrategyVerse Website — Project Reference

## Overview

StrategyVerse Consulting is a **Strategic Public Relations** company based in Noida, India. This is a static HTML/CSS/JS website (no build tools, no frameworks) hosted on **GitHub Pages** at:

**https://strategyverse.in** (custom domain, DNS pointed from GitHub Pages)

Repository: `https://github.com/StrategyVerse/StrategyVerse-website`

---

## Brand Identity

### Colours

| Token            | Hex       | Usage                                    |
| ---------------- | --------- | ---------------------------------------- |
| `--blue`         | `#377FCC` | Primary brand colour, buttons, links     |
| `--blue-dark`    | `#2a6ab3` | Hover / active states                    |
| `--blue-deeper`  | `#1a3a5c` | Hero gradient, deep accents              |
| `--amber`        | `#F5A623` | Secondary accent, section labels, checks |
| `--amber-dark`   | `#d98e1a` | Amber hover states                       |
| `--dark`         | `#1a1a2e` | Heading text, dark backgrounds           |
| `--dark-light`   | `#16213e` | Hero gradient end                        |
| `--gray-100`     | `#f7f8fa` | Light section backgrounds                |
| `--gray-200`     | `#e9ecef` | Borders, dividers                        |
| `--gray-400`     | `#adb5bd` | Muted text                               |
| `--gray-600`     | `#6c757d` | Body text, subtitles                     |
| `--gray-800`     | `#343a40` | Default body text colour                 |
| `--white`        | `#ffffff` | Backgrounds, text on dark                |

### Fonts

- **Headings:** `Playfair Display` (weights 600, 700, 800) — serif, elegant
- **Body:** `Inter` (weights 400, 500, 600, 700) — clean sans-serif
- Loaded from Google Fonts on every page

### Typography Scale

```
h1  → clamp(2.2rem, 5vw, 3.5rem)
h2  → clamp(1.8rem, 4vw, 2.8rem)
h3  → clamp(1.2rem, 2.5vw, 1.5rem)
body → 16px, line-height 1.7
section-label → 0.85rem, uppercase, 3px letter-spacing, amber colour
```

### Shadows

```
--shadow-sm: 0 2px 8px rgba(0,0,0,0.08)
--shadow-md: 0 4px 20px rgba(0,0,0,0.12)
--shadow-lg: 0 8px 40px rgba(0,0,0,0.16)
```

### Buttons

- `.btn-primary` — Blue (#377FCC), white text, pill shape (border-radius 50px)
- `.btn-outline` — Transparent, white border, used on dark backgrounds
- `.btn-amber` — Amber (#F5A623), dark text
- `.btn-arrow` — Appends animated `→` that translates right on hover

---

## Folder Structure

```
StrategyVerse Website/
├── css/
│   └── styles.css              # Single stylesheet for the entire site (~27 KB)
├── js/
│   └── main.js                 # All interactivity (~5.5 KB)
├── images/
│   ├── logo-white.png          # White logo (used in navbar & footer on dark bg)
│   ├── logo-blue.png           # Blue logo (used as favicon)
│   ├── founder-praveen-singh.jpg
│   ├── clients/                # 11 client logos (PNG/JPG)
│   │   ├── Patel-Engineering-Logo.png
│   │   ├── Mettler_Toledo-Logo.wine_-e1754026397339.png
│   │   ├── lohum_cleantech_pvt_ltd_logo-e1754026357152.jpg
│   │   ├── 6389e993c5a15cd75816ef7d_Hubler-home-logo-Rect.png
│   │   ├── JBM-removebg-preview-e1661173945395.png
│   │   ├── Manu-Bhoomi-Logo-e1747199312137.png
│   │   ├── Feedback-Consulting-Final-Logo-e1747199090331.png
│   │   ├── Logo-main-e1747199299597.png
│   │   ├── Seed-To-Soul-Logo-01-e1754025868470.png
│   │   ├── credentiai_logo-e1754026718623.jpg
│   │   └── MTaI.png
│   ├── testimonials/           # 5 testimonial portraits
│   │   ├── Then Powe Minister Mr. RK Singh.jpg
│   │   ├── Mr. Manu Garg, Founder, Garg Technologies & Concepts.jpg
│   │   ├── Dr. Monika Mathur, Content Specialist, Mettler-Toledo.jpg
│   │   ├── Mr. Prakash Rawat, Co-Founder, ManuBhoomi.jpg
│   │   └── Mr. Rishi Jha, Chief Growth Officer, Hubler.jpeg
│   └── coverage/               # 13 media coverage clips
│       ├── Business-Standard-March-14th-2016.jpg
│       ├── Myforexeye-ET_Nov-18-2022.jpg
│       ├── Hubbler-in-BW-Disrupt.png
│       ├── Hubbler-in-The-Financial-Express.png
│       ├── Hubbler-in-Times-of-India.png
│       ├── Lohum-in-Business-World-Strategic-Article.png
│       ├── Lohum-in-Financial-Express-Strategic-Article.png
│       ├── Lohum-in-Hindustan-Times-Strategic-Article-e1753707186827.png
│       ├── MN-Dastur-in-The-Economic-Times.png
│       ├── Medical-Technology-Association-of-India-in-The-Economic-Times.png
│       ├── Patel-Engineering-in-Assam-Tribune-Strategic-Article.jpeg
│       ├── Shri-RK-Singh-on-CNN-News18.png
│       └── Shri-RK-Singh-on-NDTV.png
│
├── index.html                  # Home page (root)
├── about/
│   └── index.html              # About Us page → /about/
├── services/
│   └── index.html              # Services page → /services/
├── insights/
│   └── index.html              # Blog listing page → /insights/
├── contact/
│   └── index.html              # Contact page → /contact/
├── privacy-policy/
│   └── index.html              # Privacy Policy → /privacy-policy/
├── terms-of-service/
│   └── index.html              # Terms of Service → /terms-of-service/
├── blog/
│   ├── pitch-slapping/index.html           # By Praveen Singh
│   ├── ideation-in-pr/index.html           # By Praveen Singh
│   ├── select-pr-agency/index.html         # By Praveen Singh
│   ├── service-pr-clients/index.html       # By Praveen Singh
│   ├── questioning-in-pr/index.html        # By Praveen Singh
│   ├── whats-wrong-pr/index.html           # By Praveen Singh
│   ├── truth-press-release/index.html      # By Praveen Singh
│   ├── ai-disrupting-pr/index.html         # By StrategyVerse Content Team
│   ├── social-media-crisis/index.html      # By StrategyVerse Content Team
│   ├── personal-branding-cxo/index.html    # By StrategyVerse Content Team
│   ├── startup-pr-mistakes/index.html      # By StrategyVerse Content Team
│   └── earned-vs-paid-media/index.html     # By StrategyVerse Content Team
│
├── sitemap.xml                 # XML sitemap for search engines (19 URLs)
├── robots.txt                  # Crawler rules + sitemap reference
├── .gitignore
└── CLAUDE.md                   # This file
```

### Untracked folders (source material, not deployed)

- `Clients/` — Original client logos and coverage clips
- `Insights/` — Original blog article drafts
- `Testimonials/` — Original testimonial text and photos
- `Feedback on the draft website.docx` — Founder's feedback document
- `About-me.md.txt` — Founder bio source
- `New logo white.png`, `New logo_Blue.png` — Logo source files
- `Website I like.jpg`, `Website I like 2.jpg` — Design inspiration screenshots

---

## Pages

### Main Pages

| Page | File | Description |
| ---- | ---- | ----------- |
| Home | `index.html` | Hero with SVG graphic, services grid (8 services), clientele logos, "Why StrategyVerse" section, testimonials carousel (5 people), CTA |
| About Us | `about/index.html` | Company story, mission/vision, values, founder section (Praveen Singh with photo and LinkedIn) |
| Services | `services/index.html` | 8 detailed service cards, clientele logos, rolling "Clients in Media" marquee, process section (Discover → Strategise → Execute → Measure) |
| Insights | `insights/index.html` | Grid of 12 blog article cards with Pexels images, category tags, read-time estimates |
| Contact | `contact/index.html` | Contact form (FormSubmit.co), email/location/hours info, "Book a Call" CTA |
| Privacy Policy | `privacy-policy/index.html` | 9-clause privacy policy |
| Terms of Service | `terms-of-service/index.html` | 12-clause terms of service |

### Blog Articles (12 total)

7 articles by **Praveen Singh** (founder's original writing) and 5 by **StrategyVerse Content Team** (generated to fill out the insights section on trending PR topics).

Each blog page uses a consistent template: page-hero with category tag, article body with structured headings, a "related articles" or CTA section at the bottom, and the shared navbar/footer.

---

## Key Design Decisions

### Clean URLs

All pages use a folder/index.html pattern for clean URLs (no `.html` in the address bar):
- `/about/` instead of `about.html`
- `/blog/pitch-slapping/` instead of `blog-pitch-slapping.html`
- Asset paths use relative `../` (depth-1) or `../../` (depth-2) prefixes
- Navigation links are relative to each page's depth in the folder structure

### Layout

- **Container:** max-width 1200px, 24px side padding
- **Responsive breakpoints:** 992px (tablet), 640px (mobile)
- **Navbar:** Fixed position, background darkens on scroll (`.scrolled` class), logo uses overflow-hidden cropping (270px image in 60px container with negative margin-top to centre-crop)
- **Hero section:** Full-viewport gradient background with floating SVG illustration on the right side; SVG contains shield (reputation), microphone (voice/PR), LinkedIn & X icons, target (audience), hashtag (social), speech bubble (narrative), with animated elements
- **Sections alternate** between white and light gray (`--gray-100`) backgrounds
- **Scroll-reveal:** Elements with `.reveal` class fade/slide in via Intersection Observer

### Hero Graphic (SVG)

The hero contains an inline SVG (`viewBox="0 0 500 500"`) with these elements balanced left and right of a central shield:

- **Centre:** Shield with checkmark (reputation protection)
- **Top left:** Target circles (audience targeting)
- **Mid left:** Hashtag icon (social media)
- **Bottom left:** Speech bubble with text lines (narrative)
- **Top right:** LinkedIn icon
- **Mid right:** X / Twitter icon
- **Bottom right:** Microphone with sound waves (voice/PR)
- Connecting dotted lines between elements
- Floating accent dots with CSS animations
- Entire graphic floats with a 12s ease-in-out animation

### Contact Form

Uses **FormSubmit.co** (serverless form backend):
- Form action uses a **hashed email** (`37d6b91fe989fa1dc01c98311c49d16d`) instead of plain text to prevent email scraping
- **AJAX submission** via `fetch()` to the `/ajax/` endpoint — no page refresh
- On success: form is replaced in-place with a green checkmark and "Message Sent Successfully!" message
- On error: button resets and an alert is shown
- Hidden fields: subject line, captcha disabled, honeypot spam protection
- Fields: first name, last name, email, phone, company, service dropdown, message

### Testimonials Carousel

- Auto-advances every 5.5 seconds
- Pauses on hover, resumes on mouse leave
- Touch/swipe support (50px threshold)
- Responsive: 3 visible (desktop), 2 (tablet), 1 (mobile)
- Dot pagination

### Media Coverage Marquee

- CSS `@keyframes` infinite scroll animation
- JavaScript duplicates track items for seamless loop
- Located on the services page

---

## Services Offered (8)

1. Communications Strategy
2. Reputation Management
3. Crisis Communications
4. Branding
5. Social Media Management
6. Influencer Management
7. Media Relations
8. Content Management

Each uses an icon (Unicode symbols or inline SVG) in the brand blue colour. The Content Management icon specifically uses an inline SVG pen to avoid OS emoji colour rendering issues.

---

## Contact Information

- **Email:** founder@strategyverse.in
- **Address:** First Floor, H-54, H Block, Sector 63, Noida - 201309
- **LinkedIn:** https://www.linkedin.com/company/strategyverse/?viewAsMember=true
- **Founder LinkedIn:** https://www.linkedin.com/in/prwin/
- **Hours:** Monday - Friday, 9:00 AM - 6:00 PM IST

Note: No Twitter or Instagram links are used anywhere on the site (by explicit instruction from the founder).

---

## JavaScript Features (js/main.js)

1. **Navbar scroll effect** — adds `.scrolled` class after 50px scroll
2. **Mobile hamburger toggle** — opens/closes `.nav-links`, prevents body scroll
3. **Scroll-reveal** — Intersection Observer on `.reveal` elements (threshold 0.15)
4. **Active nav highlighting** — matches current URL to nav links
5. **Contact form AJAX** — `fetch()` to FormSubmit `/ajax/` endpoint, in-place success message (no page refresh)
6. **Testimonials carousel** — auto-slide, pause-on-hover, swipe, dots, responsive
7. **Coverage marquee** — duplicates track items for seamless infinite scroll

---

## Shared Components (on every page)

### Navbar
```html
<nav class="navbar">
  Logo (logo-white.png) | Home | About Us | Services | Insights | Contact Us (CTA button)
  Mobile: hamburger toggle
</nav>
```

### Footer
```html
<footer class="footer">
  Brand column (logo with overflow-crop at 54px, tagline, LinkedIn)
  Quick Links column
  Services column
  Contact column
  Bottom bar: copyright 2026 | Privacy Policy | Terms of Service
</footer>
```

Footer logo uses the same overflow-crop technique as the navbar but at ~90% of header size (54px visible height, image scaled to 216px with negative margin-top).

---

## SEO

### Sitemap & Robots

- `sitemap.xml` — lists all 19 pages with `<lastmod>`, `<changefreq>`, and `<priority>` values (homepage 1.0, main pages 0.8, blog posts 0.6, legal pages 0.3)
- `robots.txt` — `User-agent: * Allow: /` with `Sitemap: https://strategyverse.in/sitemap.xml`

### Meta Tags (on every page)

- `<meta charset="UTF-8">` and `<meta name="viewport">`
- Unique `<title>` (under 60 chars, includes brand name)
- Unique `<meta name="description">` (under 155 chars)
- `<meta name="keywords">` — relevant terms per page
- `<link rel="canonical">` — full canonical URL per page

### Open Graph & Twitter Cards (on every page)

- `og:title`, `og:description`, `og:url`, `og:type`, `og:image`, `og:site_name`
- `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image`

### JSON-LD Structured Data

| Page | Schema Type | Details |
| ---- | ----------- | ------- |
| Homepage | `Organization` | Business name, URL, logo, address, email, LinkedIn |
| Services | `ProfessionalService` + `OfferCatalog` | All 8 services listed with descriptions |
| Contact | `LocalBusiness` | Address, email, opening hours, LinkedIn |
| Blog posts (12) | `Article` | Headline, author, publisher, dates, image |

### Heading & Image Audit

- Every page has exactly **one `<h1>`** tag with proper `<h2>` / `<h3>` hierarchy
- Every `<img>` tag has a descriptive `alt` attribute (zero missing or empty)

---

## Git Configuration

- **User:** StrategyVerse
- **Email:** founder@strategyverse.in
- **Remote:** https://github.com/StrategyVerse/StrategyVerse-website.git
- **Branch:** main
- **Hosting:** GitHub Pages (source: main branch, root `/`)
