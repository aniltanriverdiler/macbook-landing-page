# MacBook Landing Page

A modern **React + TypeScript** landing page inspired by the Apple MacBook Pro product page. The project features an interactive **3D MacBook viewer** (React Three Fiber), scroll-driven animations (GSAP), and a responsive layout built with **Tailwind CSS**.

---

## ⚠️ Disclaimer

This is an **unofficial, fan-made Apple-inspired concept project**. All product names, logos, and branding are the property of **Apple Inc.** This project is created purely for **educational purposes** and is not intended for commercial use or public deployment.

---

## 🚀 Live Demo & Source Code

🔗 **Live Demo:** _(Add your deployment URL here)_

💻 **GitHub Repository:** _(Add your repository URL here)_

---

## ✨ Features

### 🖥️ Product Viewer
- **3D MacBook Model** – Interactive MacBook Pro model (14" and 16") powered by React Three Fiber and Three.js
- **Color Switcher** – Toggle between Space Gray and Dark finishes
- **Size Toggle** – Switch between 14" and 16" display sizes
- **Studio Lighting** – Custom lighting for a product-shot style presentation
- **Responsive Canvas** – 3D viewer adapts to desktop and mobile viewports

### 🎬 Animations & UX
- **GSAP + ScrollTrigger** – Scroll-based animations and section reveals
- **Smooth Transitions** – Polished interactions across sections
- **Responsive Design** – Layout and controls optimized for different screen sizes

### 📄 Sections (Apple-style layout)
- **Navbar** – Sticky navigation with brand and links
- **Hero** – Hero section with headline and CTA
- **Product Viewer** – Interactive 3D MacBook with color and size controls
- **Showcase** – Product highlights and visual storytelling
- **Performance** – Performance and chip highlights
- **Features** – Key product features
- **Highlights** – Additional product highlights
- **Footer** – Links and legal/copyright area

### 🛠️ Technical
- **TypeScript** – Full type safety and shared types (store, components, constants)
- **Zustand** – Lightweight state for selected color, scale (14"/16"), and UI state
- **React Responsive** – Media queries for layout and 3D viewer behavior
- **Vite** – Fast dev server and optimized production builds

---

## 📂 Project Structure

```
macbook-landing-page/
├── public/                    # Static assets
├── src/
│   ├── components/            # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ProductViewer.tsx  # 3D MacBook section
│   │   ├── ShowCase.tsx
│   │   ├── Performance.tsx
│   │   ├── Features.tsx
│   │   ├── HighLights.tsx
│   │   ├── Footer.tsx
│   │   ├── models/            # 3D model components
│   │   │   ├── MacBook.tsx
│   │   │   ├── MacBook14.tsx
│   │   │   └── MacBook16.tsx
│   │   └── three/             # Three.js / R3F helpers
│   │       ├── ModelSwitcher.tsx
│   │       └── StudioLights.tsx
│   ├── store/                 # Zustand store
│   │   └── index.ts
│   ├── types/                 # TypeScript definitions
│   │   ├── index.ts
│   │   ├── store.ts
│   │   ├── components.ts
│   │   ├── constants.ts
│   │   └── common.ts
│   ├── constants/             # App constants
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## 🛠️ Installation & Run

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Setup Steps

1️⃣ **Clone the repository:**
```bash
git clone <your-repo-url>
cd macbook-landing-page
```

2️⃣ **Install dependencies:**
```bash
npm install
```

3️⃣ **Run development server:**
```bash
npm run dev
```

4️⃣ **Open in browser:**
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🏗️ Tech Stack

### Frontend
- **React 19** – UI library
- **TypeScript** – Type-safe development
- **Vite 7** – Build tool and dev server
- **Tailwind CSS 4** – Utility-first styling
- **GSAP** – Animations and ScrollTrigger
- **React Three Fiber** – React renderer for Three.js
- **Three.js** – 3D MacBook models and scene
- **@react-three/drei** – R3F helpers (controls, etc.)
- **Zustand** – Global state (color, size, etc.)
- **react-responsive** – Media queries in React
- **clsx** – Conditional class names

### Deployment
- Can be deployed to **Vercel**, **Netlify**, or any static host (output: `dist/`).

---

## 🎮 How to Use

1. **Run locally** – Use `npm run dev` and open the URL in your browser.
2. **Scroll** – Scroll through the page to trigger GSAP scroll animations.
3. **Product Viewer** – In the product section, use the color dots to switch MacBook finish (Space Gray / Dark) and the size control to switch between 14" and 16".
4. **Responsive** – Resize the window or use a mobile device to see the responsive layout and any mobile-specific behavior (e.g. 3D viewer fallback or simplified controls).

---

## 🚀 Key Sections

- **Navbar** – Top navigation
- **Hero** – Main headline and intro
- **Product Viewer** – Interactive 3D MacBook (color & size)
- **Showcase** – Product storytelling
- **Performance** – Chip and performance messaging
- **Features** – Feature blocks
- **Highlights** – Extra product highlights
- **Footer** – Footer content and links

---

## 📌 Technical Notes

- **Single-page layout** – All sections are on one page with scroll-based animations.
- **3D assets** – MacBook models are implemented in `src/components/models/` and rendered via React Three Fiber in `ProductViewer`.
- **State** – Color and size (14"/16") are stored in Zustand and drive the 3D model and UI.
- **TypeScript** – Centralized types in `src/types/` for store, components, and constants.
- **No backend** – Static frontend only; no API or database.

---

## 🤝 Contributing

- Fork the repository
- Create a feature branch (`git checkout -b feature/amazing-feature`)
- Make your changes and test
- Commit (`git commit -m 'Add amazing feature'`)
- Push (`git push origin feature/amazing-feature`)
- Open a Pull Request

### Guidelines
- Follow existing code style and TypeScript usage
- Keep the disclaimer and educational purpose in mind
- Test on different viewport sizes

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Apple Inc.** – MacBook product design and branding inspiration
- **React Three Fiber / Three.js** – 3D in React
- **GSAP** – Animation and ScrollTrigger
- **Vite** – Build tooling
- **Tailwind CSS** – Styling

---

**Made for educational purposes – MacBook-style landing page**
