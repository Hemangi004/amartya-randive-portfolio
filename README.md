# Amartya Randive — Engineering Portfolio Website

Personal portfolio website for **Amartya Randive**, Condition Monitoring & Technical Business Development Engineer.

**Live Domain**: [https://hemangivertixop.github.io/Portfolio-Amartya-Randive/](https://hemangivertixop.github.io/Portfolio-Amartya-Randive/)

---

## Technical Stack & Architecture

- **Core**: Semantic HTML5, Vanilla Modern CSS, Client-side JavaScript.
- **Typography**: Google Fonts (Plus Jakarta Sans, JetBrains Mono).
- **SEO & Social**: Schema.org JSON-LD Person profile, Open Graph & Twitter Card tags, `sitemap.xml`, `robots.txt`.
- **Hosting & Deployment**: Vercel (Edge CDN, SSL, Zero-Configuration Static Delivery).

---

## Project Structure

```
├── assets/
│   ├── css/
│   │   └── style.css            # Custom industrial design system
│   ├── js/
│   │   └── main.js              # Client interactions & metric counters
│   └── images/
│       ├── amartya-portrait-pro.png  # Authentic framed portrait
│       └── hero-condition-monitoring.jpg # Heavy machinery diagnostic graphic
├── 404.html                     # Custom themed 404 error page
├── favicon.svg                  # High-resolution AR monogram SVG favicon
├── index.html                   # Primary semantic portfolio entry
├── package.json                 # Build & preview scripts
├── robots.txt                   # Search engine crawl directives
├── sitemap.xml                  # Canonical sitemap
├── vercel.json                  # Vercel CDN headers & clean URLs config
└── .gitignore                   # Git ignore file
```

---

## Local Development & Preview

To run the site locally:

```bash
# Using Python
python -m http.server 3000

# Or using Node / npx
npx serve .
```

Open `http://localhost:3000` in your web browser.
