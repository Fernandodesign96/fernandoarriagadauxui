# Fernando Arriagada - Senior UX/UI Designer Portfolio

Professional UX/UI portfolio built with React + Vite and Tailwind CSS.

Focused on UX strategy, conversion optimization, and AI-assisted design workflows.

## 🌐 Live Demo

[View Portfolio](https://Fernandodesign96.github.io/fernandoarriagadauxui)

## 🛠 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Deployment:** GitHub Pages

## 🎯 Design Philosophy

User-centered, data-driven, business-oriented UX design with focus on:

- Conversion optimization and measurable impact
- End-to-end product design (research → implementation)
- AI-assisted workflows for rapid iteration
- Accessibility-first approach (WCAG 2.1 AA)

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProjectCard.jsx
│   ├── ProcessStep.jsx
│   └── CaseStudyTemplate.jsx
├── pages/             # Page components and case studies
│   ├── Home.jsx
│   ├── BancoEstado.jsx
│   ├── BCNGlobal.jsx
│   ├── GhaliKombucha.jsx
│   ├── LaEspecieria.jsx
│   ├── Pharmafy.jsx
│   ├── Findies.jsx
│   └── GoodMeal.jsx
├── data/              # Project data
│   └── projects.js
├── App.jsx            # Main app with routing
└── index.css          # Global styles and Tailwind
```

## 🚀 Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The portfolio will be available at `http://localhost:5173`

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

Automatic deployment to GitHub Pages via GitHub Actions on push to `main` branch.

### Manual Deployment

```bash
npm run build
# Deploy dist/ folder to GitHub Pages
```

## 📋 Featured Projects

1. **Banco Estado** - Fintech B2B conversion optimization
2. **BCN Global** - B2B corporate website redesign  
3. **Ghali Kombucha** - E-commerce UX research (+12.5% conversion)
4. **La Especiería** - E-commerce redesign (+100% conversion)
5. **Pharmafy** - Healthcare app UX (Google UX Certificate)
6. **Findies** - Music events discovery app
7. **GoodMeal** - Meal planning & nutrition app

## 📄 License

© 2026 Fernando Arriagada. All rights reserved.

---

**Note:** To deploy this portfolio:
1. Update GitHub repository name in `vite.config.js` (`base` property)
2. Update live demo URL in this README
3. Replace email/LinkedIn links in `Footer.jsx` and `Home.jsx`
4. Ensure Node.js is installed before running npm commands
