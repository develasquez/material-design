# 🎨 Material Design 3 (Material You) Design System (`material-design`)

[![npm version](https://img.shields.io/npm/v/@develasquez/material-design.svg)](https://www.npmjs.com/package/@develasquez/material-design)
[![license](https://img.shields.io/github/license/develasquez/material-design.svg)](https://github.com/develasquez/material-design/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/develasquez/material-design?style=social)](https://github.com/develasquez/material-design)
[![AI Agent Compatible](https://img.shields.io/badge/AI%20Agent-Antigravity%20%7C%20Claude%20%7C%20Cursor%20%7C%20Gemini-blueviolet)](https://github.com/develasquez/material-design)
[![Design System](https://img.shields.io/badge/Design%20System-Material%20You%20M3-006874)](https://m3.material.io/)
[![WCAG AAA](https://img.shields.io/badge/Accessibility-WCAG%20AAA%20%E2%89%A57%3A1-426B29)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html)

**Material Design 3 (Material You)** is an **AI Agent Skill & CLI** designed to equip AI coding assistants—including **Google Antigravity**, **Claude**, **Cursor**, and **Gemini**—with a strict, framework-agnostic, and production-grade implementation of the official **Material Design 3 (M3 / Material You)** specification and **Material Web Components (`@material/web` / MDC Web)**.

This skill is **100% focused on design**, visual architecture, HCT chromatic tokens, typography, surface hierarchies, and component fidelity. It is completely decoupled from any application framework and can be seamlessly consumed in Vanilla-Core, Vanilla JS, React, Vue, Svelte, or pure UI/UX specifications.

---

## 🌟 Key Capabilities

1. 🌈 **HCT Chromatic Foundation**: Exact Hue-Chroma-Tone mathematical relationships ensuring perceptually accurate color harmony and tonal contrast.
2. 🏷️ **10 Official Semantic Color Schemes**: Curated across 5 distinct tonal families, strictly selected 1 per project for visual cohesion.
3. 🏛️ **3 Surface & Background Modes**: Tonal M3 Color, Pure White, and Neutral Grayscale.
4. 🛡️ **WCAG AAA Contrast Contract**: Certified minimum 7:1 contrast ratio for all badges, pills, and critical state indicators.
5. 🖥️ **Interactive Visual Selector & `DESIGN.md`**: Live browser preview gallery with 1-click generation of `DESIGN.md` adhering to the **Google Stitch Design-MD Specification**.
6. 📦 **100% Offline Vendored Assets**: Built-in Material Symbols Outlined font, classic Material Icons, and `@material/web` custom elements bundle—zero external CDN dependencies.
7. 📐 **Responsive App Shells**: Canonical Desktop 3-pane layouts and Mobile drill-down patterns with Bottom Navigation.

---

## 🌈 The 10 Semantic Color Schemes (5 Tonal Families)

Every project implementing this skill uses **strictly 1 palette** from the catalog:

| Family | Palette | Seed Hex | Psychological Atmosphere & Ideal Use Cases |
| :--- | :--- | :--- | :--- |
| **Greens & Olive** | **Forest Sage** | `#426B29` | Health, meditation, sustainability, nature, ecology |
| | **Olive Slate** | `#5A641F` | Agriculture, ethical finance, documentation, editorial reading |
| **Reds & Terracotta** | **Crimson Quartz**| `#BB1834` | Fitness, critical alerts, high-conversion commerce, news |
| | **Terracotta Dusk** | `#A24244` | Social platforms, cultural events, interior design, culinary arts |
| **Purples & Violet** | **Lavender Breeze** | `#6750A4` | Email suites, productivity platforms, SaaS dashboards |
| | **Orchid Velvet** | `#8E4A8D` | Creative studios, luxury, lifestyle, wellness, beauty |
| **Blues & Cyan** | **Oceanic Slate** | `#2B638B` | FinTech, cloud architecture, telemetry, data analytics |
| | **Aqua Frost** | `#006874` | Telemedicine, infrastructure monitoring, clean tech |
| **Organics & Amber**| **Golden Amber** | `#7A5900` | Culinary notes, executive dashboards, legal technology |
| | **Desert Bloom** | `#85511A` | Gastronomy, travel, craftsmanship, editorial publications |

### 🏛️ The 3 Surface Modes

* **Mode A: Tonal M3 Color (Default)**: The `Surface` canvas adopts the subtle tonal hue of the palette (e.g., `#F3F6E8` for Forest Sage). Delivers authentic, organic Material You immersion.
* **Mode B: Pure White**: The `Surface` canvas is pure `#FFFFFF` and containers are `#F8F9FA`. Ideal for clean, high-density editorial layouts.
* **Mode C: Neutral Grayscale**: The `Surface` canvas is set to neutral gray (`#F5F5F7` / `#EEEEF0`). Ideal for corporate enterprise consoles.

---

## 📦 Installation & Setup

Install this skill into your local project workspace or globally across your machine:

### 1. Local Workspace Installation (Recommended)
Run inside your project root:

```bash
npx @develasquez/material-design
```

This installs the skill into `.agents/skills/material-design/` where AI agents (Antigravity, Claude, Cursor) automatically discover and activate it.

### 2. Global Installation
Install globally across all AI workspace sessions on your computer:

```bash
npx @develasquez/material-design --global
```

This installs the skill to `~/.gemini/config/skills/material-design/`.

### 3. Interactive Visual Palette Selector (Browser)
Launch the interactive visual palette gallery in your browser:

```bash
npx @develasquez/material-design --preview
```

* Explores all 10 color schemes on live M3 components.
* Toggles between Light & Dark mode and the 3 Surface modes in real time.
* Generates **`DESIGN.md`** at your project root with 1 click conforming to the **Google Stitch Design-MD Specification**.

### 4. Terminal Truecolor Palette Preview (24-bit ANSI)
Inspect schemes directly inside your terminal:

```bash
# View summary table of all 10 schemes
npx @develasquez/material-design --palettes

# Detailed view of a specific scheme
npx @develasquez/material-design --palettes forest-sage
npx @develasquez/material-design --palettes oceanic-slate
```

### 5. CLI Help
```bash
npx @develasquez/material-design --help
```

---

## 🚀 How to Use & Framework Integration

### 1. How AI Agents Use This Skill

When paired with an AI coding assistant (such as Antigravity, Claude, Cursor, or Gemini):

1. **Activate the Skill**: The agent loads `material-design`.
2. **Interactive Visual Palette Selection**:
   > ⚠️ **Zero Text Prompting Rule**: The agent will NEVER ask you to pick colors via terminal text lists (`ask_question`). Instead, it executes `npx @develasquez/material-design --preview` for live visual evaluation in your browser.
3. **Read `DESIGN.md`**: The agent reads the generated `DESIGN.md` as the Single Source of Truth for design tokens.
4. **Copy Offline Assets**: The agent copies vendored fonts and bundles to `public/vendor/`.
5. **Implement UI**: Markup uses semantic CSS custom properties (`var(--md-sys-color-*)`) and `@material/web` components.

---

### 2. Vanilla-Core UI Integration

If you use [**`vanilla-core-ui`**](https://github.com/develasquez/vanilla-core-ui):

```bash
# 1. Initialize architectural app shell
npx vanilla-core-ui

# 2. Add Material Design 3 system
npx @develasquez/material-design

# 3. Launch palette selector
npx @develasquez/material-design --preview
```

In your project:
* Copy vendor assets:
  ```bash
  mkdir -p public/vendor
  cp -R .agents/skills/material-design/vendor/* public/vendor/
  ```
* Include in `index.html`:
  ```html
  <link rel="stylesheet" href="/vendor/material-web/material-symbols.css">
  <link rel="stylesheet" href="/style.css">
  <script type="module" src="/vendor/material-web/material-web.bundle.js"></script>
  ```
* Copy CSS tokens from `references/tokens-template.css` into `style.css`.
* Bind events in Vanilla-Core `components/` and update `store.js` using surgical rendering in `ui/renderer.js`.

---

### 3. Standard Vanilla HTML / JS Integration

```html
<!DOCTYPE html>
<html lang="en" data-theme="forest-sage">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Material 3 Application</title>
  
  <!-- Offline Material Symbols & Bundle -->
  <link rel="stylesheet" href="/vendor/material-web/material-symbols.css">
  <link rel="stylesheet" href="/style.css">
  <script type="module" src="/vendor/material-web/material-web.bundle.js"></script>
</head>
<body class="bg-[var(--md-sys-color-surface)] text-[var(--md-sys-color-on-surface)]">
  <header class="h-16 flex items-center px-6 bg-[var(--md-sys-color-surface)] border-b border-[var(--md-sys-color-outline-variant)]">
    <div class="flex items-center gap-2 font-medium text-lg">
      <md-icon class="text-[var(--md-sys-color-primary)]">dashboard</md-icon>
      <span>Application Title</span>
    </div>
  </header>

  <main class="p-6">
    <div class="m3-card p-6 max-w-md">
      <h2 class="text-xl font-bold mb-2">Welcome</h2>
      <p class="text-sm text-[var(--md-sys-color-on-surface-variant)] mb-4">
        Production-ready Material You design system.
      </p>
      <div class="flex gap-3">
        <md-filled-button id="btn-submit">
          <md-icon slot="icon">check</md-icon>
          Submit
        </md-filled-button>
        <md-outlined-button id="btn-cancel">Cancel</md-outlined-button>
      </div>
    </div>
  </main>
</body>
</html>
```

---

### 4. React / Next.js / Vue / Svelte Integration

Because Material Design 3 tokens are pure CSS custom properties and `@material/web` components are standard W3C Custom Elements:

1. Import `tokens-template.css` into your global stylesheet (`globals.css` or `App.vue`).
2. Import the bundle in your client root:
   ```javascript
   import './vendor/material-web/material-web.bundle.js';
   import './vendor/material-web/material-symbols.css';
   ```
3. Use custom elements natively with standard props, refs, and event listeners:
   ```jsx
   <md-filled-button onClick={handleClick}>
     <md-icon slot="icon">cloud_upload</md-icon>
     Deploy
   </md-filled-button>
   ```

---

## 📚 Component Catalog Quick-Start

### 1. Buttons
* `<md-filled-button>`: High emphasis primary action.
* `<md-tonal-button>`: Medium emphasis secondary action.
* `<md-outlined-button>`: Bordered subordinate action.
* `<md-text-button>`: Flat text action without container.
* `<md-icon-button>`: Icon-only clickable element (`<md-icon>settings</md-icon>`).

### 2. Form Inputs
* `<md-outlined-text-field label="Email" type="email" required></md-outlined-text-field>`
* `<md-switch selected></md-switch>`
* `<md-checkbox checked></md-checkbox>`
* `<md-slider min="0" max="100" value="50"></md-slider>`

### 3. Modals & Dialogs
```html
<md-dialog id="my-dialog">
  <div slot="headline">Confirm Action</div>
  <form slot="content" id="dialog-form" method="dialog">
    Are you sure you want to proceed?
  </form>
  <div slot="actions">
    <md-text-button form="dialog-form" value="cancel">Cancel</md-text-button>
    <md-filled-button form="dialog-form" value="confirm">Confirm</md-filled-button>
  </div>
</md-dialog>
```

### 4. WCAG AAA Badges
```html
<span class="m3-badge-success">Operational</span>
<span class="m3-badge-error">Critical Failure</span>
<span class="m3-badge-warning">Maintenance Required</span>
<span class="m3-badge-neutral">Archived</span>
```

---

## 📦 Offline Vendored Assets

All assets are bundled within `vendor/` for 100% offline, zero-network operation:

```text
vendor/
├── material-web/
│   ├── MaterialSymbolsOutlined.ttf    # Offline icon font (2.9 MB)
│   ├── material-symbols.css           # Local @font-face declaration
│   └── material-web.bundle.js         # Complete M3 web components bundle (646 KB)
└── material/
    ├── MaterialIcons-Regular.ttf      # Classic Material Icons font (335 KB)
    ├── material-icons.css             # Classic icon stylesheet
    ├── material-components-web.min.js # Legacy MDC Web JS bundle (607 KB)
    └── material-components-web.min.css# Legacy MDC Web CSS bundle (324 KB)
```

---

## 📜 Technical Documentation & References

Explore detailed guides in `references/`:

* [**material-you-design-system.md**](references/material-you-design-system.md): Comprehensive HCT color tokens, 10 palette tables, and surface modes.
* [**material-catalog.md**](references/material-catalog.md): Complete component API reference and functional color roles.
* [**tokens-template.css**](references/tokens-template.css): Ready-to-copy CSS variables for all 10 schemes in Light & Dark modes.
* [**app-shell-templates.md**](references/app-shell-templates.md): Responsive Desktop 3-pane and Mobile drill-down layout markup.
* [**visual-selector-spec.md**](references/visual-selector-spec.md): Interactive visual selection protocol & Google Stitch `DESIGN.md` specification.
* [**material-boilerplate.md**](references/material-boilerplate.md): Full starter kit with zero-dependency Node HTTP dev server.

---

## 📄 License & Author

* **Author**: [develasquez](https://github.com/develasquez)
* **License**: [MIT](LICENSE)
* **Repository**: [https://github.com/develasquez/material-design](https://github.com/develasquez/material-design)
* **npm Package**: [https://www.npmjs.com/package/@develasquez/material-design](https://www.npmjs.com/package/@develasquez/material-design)
* **Architectural Companion**: [`vanilla-core-ui`](https://github.com/develasquez/vanilla-core-ui)
