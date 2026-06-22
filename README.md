# Preston Soon — Food-Grade Commercial & Industrial Property Specialist

An elegant, highly polished, and responsive professional business portfolio & capital asset presentation platform engineered for **Preston Soon**, Senior Real Estate Specialist at OrangeTee & Tie Pte Ltd. This application acts as a specialized advisory portal bringing transparency, technical compliance indexes, and curated listings of food-grade properties (such as food factories, central kitchens, cold storages) to the Singapore landscape.

---

## 💎 Design Concept & Visual Language

The design departs from generic corporate templates to project an atmosphere of elite, authoritative trade consultancy. It features:
*   **The Singapore Food-Industrial Palette**: Rich dark green timber tones (`#073E2E`) paired with bespoke culinary gold accents (`#E19D3B`) and crisp cream backdrops.
*   **Architectural Typography**: Editorial serif headers combined with high-contrast, structured monospace tags for technical parameters (e.g., CEA Licences, SFA Compliance specs, electrical capacities).
*   **Tactile Cards & Layouts**: Sophisticated grid systems representing industrial assets with micro-animations powered by **Motion**, keeping user feedback smooth and responsive.

---

## 🛠️ Key Architectural Modules

1.  **Specialist Hero Context**: Instantly anchors Preston's positioning as Singapore's leading niche expert in food-safe properties. Offers immediate action gateways: **Quick Call** (`tel:+6588033890`) and modern WhatsApp interactions.
2.  **Featured Capital Assets**: Showcases premium commercial and industrial infrastructure in Singapore. It includes technical metrics crucial to food production (e.g., electrical ceiling heights, separation elevator flows, loading bays).
3.  **Elite Advisory Credentials & Portfolio**: Connects BNI partners, Agri-tech corporations, and central kitchen brands with Preston’s exclusive Singapore footprint (OrangeTee & Tie Pte Ltd — License L3009250K / CEA R067294A).
4.  **SFA Compliance Grid**: Educates prospective clients on critical technical prerequisites including Singapore Food Agency ventilation, raw-vs-cooked segregation paths, and waste-trap layout compliance.
5.  **Interactive Client Acquisition Channel**: Captures inbound requests directly within the single-view portal.

---

## 🚀 Tech Stack & Dependencies

*   **Runtime & Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) for complete type-safe components.
*   **Build Bundler**: [Vite 6](https://vite.dev/) for instantaneous module-replacement and optimized asset bundling under 3000ms.
*   **Styling Engine**: [Tailwind CSS 4](https://tailwindcss.com/) with a rich custom theme configuration and viewport-fluid typography.
*   **Animation System**: [Motion](https://motion.dev/) for responsive frame enterings and fluid interactive transitions.
*   **Iconography**: [Lucide React](https://lucide.dev/) vector-mapped assets ensuring zero pixelation on ultra-dense Retina screens.

---

## 📂 Project Structure

```bash
├── assets/
│   └── .aistudio/             # Safe configuration directory
├── src/
│   ├── assets/
│   │   └── images/            # Curated imagery & specialist profile portraits
│   ├── components/            # Extracted modular elements & UI elements
│   ├── App.tsx                # Main single-page application dashboard orchestrator
│   ├── index.css              # Main global stylesheet & Tailwind imports
│   └── main.tsx               # Client entry point
├── .env.example               # Template for environment configurations
├── .gitignore                 # Safe exclusion rules for Git tracking
├── metadata.json              # Platform identity and permissions manifest
├── package.json               # Node.js dependencies, linting, and scripts configuration
├── tsconfig.json              # Compiler options for type enforcement
└── vite.config.ts             # Custom plugins and port constraints for Vite
```

---

## 💻 Local Development Setup

To test, execute, or build the platform locally, follow these steps:

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher recommended)
*   `npm` (included with Node.js)

### 1. Close the Repository & Install Dependencies

```bash
git clone <github-repository-url>
cd <repository-folder>
npm install
```

### 2. Run the Development Server

Start a fast, responsive local server with Hot Module Replacement fully compatible with sandbox setups:

```bash
npm run dev
```

The application will bind to:
*   **URL**: `http://localhost:3000` (or `http://0.0.0.0:3000` depending on container routing).

### 3. Lint & Type-Check

To preserve the production-grade integrity, run type-checks before commits:

```bash
npm run lint
```

### 4. Build for Production

Compile optimized production-ready HTML, compiled CJS, and minified client-side bundles into the `dist/` directory:

```bash
npm run build
```

---

## 📋 Compliance & Licences
*   **Agent Registered Name**: Preston Soon
*   **Affiliated Agency**: OrangeTee & Tie Pte Ltd
*   **CEA Salesperson Registration No**: `R067294A`
*   **Corporate Estate Agent Licence No**: `L3009250K`
