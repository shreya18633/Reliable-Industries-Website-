# Reliable Industries — Official Corporate Website

> **Precision Sheet Metal Pressed Parts & Assemblies**  
> **Three Generations of Manufacturing Heritage**: Grandfather ➔ Mother (**Sarita Khandelwal**, Founder & MD) ➔ Daughter (**Shreya Khandelwal**, Partner & Executive Director).  
> **25 Years of Engineering Excellence** in Waghodia GIDC, Vadodara, Gujarat.  
> **Top 10 Growing MSME Companies Awardee** (Presented at Proficon by Rajiv Talreja, Karan Hasija & Quantum Leap).  
> **ISO 9001:2015 Certified** by **TÜV NORD GROUP** (Certificate Registration No. **QM 02 00934**, Valid through November 2027).

---

## 🏭 Company Profile & Leadership

- **Founder & Managing Director**: **Sarita Khandelwal** (25+ years in metal component manufacturing, started at age 21 under her father's guidance).
- **Partner & Executive Director**: **Shreya Khandelwal** (Daughter, entered as partner at age 21, driving modern engineering and strategic expansion).
- **Location**: Plot No - 1430, Phase-2, Waghodia GIDC, Vadodara - 391 760, Gujarat, India.
- **Accreditations**: TUV India Pvt. Ltd. (TÜV NORD GROUP) • NABCB (QM 002) • IAF (International Accreditation Forum).
- **Core Scope**: Manufacture and Supply of Sheet Metal Pressed Components and Assemblies.

> *"I am a woman entrepreneur and Founder of Reliable Industries, with 25 years of experience in metal component manufacturing. We specialize in precision sheet metal parts and assemblies for industrial and electrical applications, with a strong focus on quality, reliability and long-term customer relationships..."*

---

## 🌟 Key Features of the Website

1. **High-Impact Industrial Hero Section**:
   - Modern dark-industrial aesthetic with factory backdrop, live stats counter (25+ Years, ISO 9001:2015, 10T–200T presses, 100% QC).
   - Instant CTAs to Request Technical Quote, Explore Components, and View Slide Deck.

2. **Founder & Leadership Spotlight**:
   - Dedicated tribute to the founder's 25-year journey of resilience, determination, quality first, and sustainable systems.

3. **Engineering Capabilities & Surface Treatments**:
   - High-Tolerance Stamping & Presswork (10T to 200T).
   - Brazed Assemblies (Silver alloy joins for flexible copper braided jumpers).
   - Integrated Mechanical Sub-Assemblies (Turnkey builds with torque monitoring).
   - Custom Tooling, Die Design & Prototyping.
   - Comprehensive Surface Finishing (Silver, Bright Tin, Zinc Blue Passivation, Zinc Yellow Dichromate, Zinc-Cobalt, Bright Nickel, Powder Coating).

4. **Interactive Component & Assembly Catalog**:
   - Filterable by 8 categories with live search bar.
   - Component Specification Modal with full engineering details.
   - Instant "Add to RFQ" button.

5. **Raw Materials & Metallurgy Matrix**:
   - Ferrous & Non-Ferrous metal showcase (Copper, Brass, Stainless Steel, CRCA/HR, Aluminium).
   - Uses authentic cropped photography from the original slides.

6. **Quality, Safety & Compliance (ISO 9001:2015)**:
   - Live interactive ISO 9001:2015 Certificate Viewer with TÜV NORD audit verification.
   - 3-Stage QC workflow (Incoming, In-Process, Pre-Dispatch inspection).
   - Metrology equipment list (Mitutoyo height gauges, micrometers, coating thickness testers).

7. **Interactive 4-Step Request for Quote (RFQ) System**:
   - Parameter builder: Material, gauge/thickness, process, volume tier, surface treatment.
   - Instant RFQ ID generator (`RFQ-RI-2026-XXXX`).
   - 1-Click WhatsApp RFQ dispatch button.
   - Printable / Downloadable RFQ specification slip.

8. **Presentation Slide Deck Modal**:
   - Interactive viewer for the founder's 5 authentic company presentation slides.

9. **Plant Logistics & Contact Desk**:
   - Direct plant address in Waghodia GIDC, Vadodara.
   - Quick inquiry form with instant submission feedback.
   - Industrial Buyer FAQ accordion.

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
cd /Users/shreyakhandelwal/.gemini/antigravity/scratch/reliable-industries-website
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your web browser.

### 2. View Standalone Production Build
The project comes pre-built in `dist/` with relative asset links:
- Double click or open `dist/index.html` directly in Chrome, Safari, or Edge.
- Or run:
```bash
npm run preview
```
Visit [http://localhost:4173](http://localhost:4173).

### 3. Deploying to Production
You can deploy the contents of the `dist/` folder directly to:
- **Vercel**: Run `vercel` or link repository.
- **Netlify**: Drag and drop the `dist/` folder into Netlify Drop.
- **GitHub Pages**: Push the `dist/` folder to `gh-pages` branch.
- **Custom Domain / Apache / Nginx**: Copy `dist/*` to webroot.

---

## 📁 Project Architecture

```
reliable-industries-website/
├── index.html                  # HTML entry point with Tailwind CDN & typography
├── package.json                # Project dependencies (React 18, Lucide React, Vite)
├── vite.config.js              # Vite configuration (relative base './')
├── public/
│   └── images/                 # All 5 original slides + 10 cropped component images + certificate
├── src/
│   ├── main.jsx                # React DOM root entry
│   ├── App.jsx                 # Master layout & modal state management
│   ├── index.css               # Modern industrial design system & utility classes
│   ├── data/
│   │   └── productsData.js     # Technical catalog, metals specs, company profile
│   └── components/
│       ├── Header.jsx          # Top announcement bar & navigation
│       ├── Hero.jsx            # Industrial hero banner with stats
│       ├── FounderStory.jsx    # Founder tribute & 4 leadership pillars
│       ├── Capabilities.jsx    # 6 manufacturing services & plating options
│       ├── ProductCatalog.jsx  # Filterable component gallery with search & modal
│       ├── MaterialsSection.jsx# Ferrous & non-ferrous metallurgy matrix
│       ├── QualityCompliance.jsx # ISO 9001:2015 & 3-stage QC workflow
│       ├── FacilitySpecs.jsx   # Press capacities & Waghodia GIDC infrastructure
│       ├── InteractiveRFQ.jsx  # 4-step RFQ builder & WhatsApp integration
│       ├── ContactSection.jsx  # Factory contact, address, form & FAQs
│       ├── Footer.jsx          # Industrial footer with credentials
│       ├── SlideDeckModal.jsx  # Interactive viewer for the 5 original slides
│       └── CertificateModal.jsx# Zoomable TÜV NORD ISO certificate viewer
└── dist/                       # Ready-to-deploy static production build
```

---

*Engineered with precision for Reliable Industries, Vadodara.*
