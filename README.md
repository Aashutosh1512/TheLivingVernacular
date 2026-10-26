# SANDSTONE&CO® India — Modular React + Vite + Tailwind CSS Application

A modular React application replicating the **Lexington Themes — Sandstone** (`https://lexingtonthemes.com/viewports/sandstone`) interior design and architecture studio template, tailored for Indian luxury residential, heritage restoration, hospitality, and workplace clients.

## Directory Structure

```text
sandstone-india/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
│   └── images/                        # 10 curated Indian architectural photographs
└── src/
    ├── main.jsx                       # React entry point
    ├── App.jsx                        # Main router, state & layout shell
    ├── index.css                      # Tailwind directives, Instrument Serif & marquee keyframes
    ├── data/
    │   ├── palettes.js                # 6-colour stone token palettes (Dholpur, Jaisalmer, Kota, Laterite)
    │   ├── projects.js                # 6 Indian case studies with plain-row facts, materials & credits
    │   ├── services.js                # 6 fixed-fee services in ₹ INR, timelines & deliverables
    │   ├── journal.js                 # 4 studio essays & author profiles
    │   └── studioData.js              # Makers/karigar guilds, recognition, press logos & studio metrics
    ├── hooks/
    │   └── useIstClock.js             # Live Indian Standard Time (IST) studio clock hook
    ├── components/
    │   ├── layout/
    │   │   ├── TopTicker.jsx          # Continuous marquee address & IST time ribbon
    │   │   ├── HeaderPill.jsx         # Floating upper-left SANDSTONE&CO® pill + desktop quick nav
    │   │   ├── MenuOverlay.jsx        # 3-card menu drawer (Links, Latest Project, Live IST Clock)
    │   │   ├── TokenSwitcher.jsx      # Live 6-colour stone token switcher
    │   │   ├── LightboxModal.jsx      # Full-frame architectural photography viewer
    │   │   └── Footer.jsx             # Split founders portrait + bio + Bengaluru/Mumbai desks
    │   ├── home/
    │   │   ├── HeroSection.jsx        # Full-height rounded hero panel with SNDST watermark
    │   │   ├── StatementSection.jsx   # Large typographic statement with italic serif accents
    │   │   ├── PressBar.jsx           # Publication bar (AD100 India, EDIDA, IIID, Marg)
    │   │   ├── StudioStats.jsx        # 4-column studio metrics grid (140, 14, 6,80,000, 4)
    │   │   ├── ProcessSteps.jsx       # 4-stage workflow breakdown
    │   │   ├── Testimonials.jsx       # Client & hotelier quotes
    │   │   └── ClosingStatement.jsx   # Closing large statement & CTA
    │   └── cards/
    │       ├── ProjectCard.jsx        # Reusable project card with plain-row facts
    │       ├── ServiceCard.jsx        # Reusable fixed-fee service card
    │       ├── JournalCard.jsx        # Reusable journal essay card
    │       └── FeeCalculator.jsx      # Interactive ₹ INR fixed-fee & stage estimator
    └── pages/
        ├── HomePage.jsx               # Complete 11-section Sandstone home layout
        ├── ProjectsPage.jsx           # Filterable projects index
        ├── ProjectDetailPage.jsx      # Single case study with plain-row facts, brief, gallery & next project
        ├── ServicesPage.jsx           # 6 fixed-fee services + How Fees Work + ₹ INR Estimator
        ├── ServiceDetailPage.jsx      # Individual service scope & deliverables
        ├── StudioPage.jsx             # Studio space, 3 core rules, Makers directory & Recognition
        ├── JournalPage.jsx            # Featured essay + journal index
        ├── PostDetailPage.jsx         # Single essay reader with left-aligned Author Card
        ├── ContactPage.jsx            # Structured pill-selector enquiry form
        └── BlueprintPage.jsx          # Deep architectural analysis & localization reference
```

## Quick Start

```bash
npm install
npm run dev
```
