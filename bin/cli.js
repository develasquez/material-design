#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const args = process.argv.slice(2);
const isGlobal = args.includes('--global') || args.includes('-g');
const isHelp = args.includes('--help') || args.includes('-h');
const isPalettes = args.includes('--palettes') || args.includes('-p');
const isPreview = args.includes('--preview') || args.includes('--html');

if (isPreview) {
  const { openPreview } = require('./preview.js');
  openPreview();
  // Keep process alive for web preview
  return;
}

if (isPalettes) {
  const { showPalette, showAllPalettesSummary } = require('./palettes.js');
  const paletteArg = args.find(a => !a.startsWith('-'));
  if (paletteArg) {
    showPalette(paletteArg);
  } else {
    showAllPalettesSummary();
  }
  process.exit(0);
}

if (isHelp) {
  console.log(`
🎨 Material Design 3 Skill Installer & CLI (@develasquez/material-design)

Usage:
  npx @develasquez/material-design             Install skill into local workspace (.agents/skills/material-design)
  npx @develasquez/material-design --global    Install skill globally (~/.gemini/config/skills/material-design)
  npx @develasquez/material-design --preview   Open interactive visual HTML palette gallery in your browser
  npx @develasquez/material-design --palettes  Show Truecolor 24-bit terminal preview of the 10 M3 palettes
  npx @develasquez/material-design --help      Show help message

AI Agent & Design System Integration:
  - Equips Antigravity, Claude, Cursor, and Gemini with Material Design 3 (Material You).
  - Framework-agnostic: Vanilla-Core, Vanilla JS, React, Vue, Svelte, or raw HTML.
  - Generates official Google Stitch DESIGN.md with 1 click.
  - Includes offline vendored Material Symbols Outlined and Material Web Components.
`);
  process.exit(0);
}

const packageRoot = path.join(__dirname, '..');
const itemsToInstall = ['SKILL.md', 'references', 'vendor'];

let targetDir;
if (isGlobal) {
  targetDir = path.join(os.homedir(), '.gemini', 'config', 'skills', 'material-design');
} else {
  targetDir = path.join(process.cwd(), '.agents', 'skills', 'material-design');
}

function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

try {
  console.log(`📦 Installing Material Design 3 skill to:\n   ${targetDir}\n`);
  fs.mkdirSync(targetDir, { recursive: true });
  for (const item of itemsToInstall) {
    const srcPath = path.join(packageRoot, item);
    const destPath = path.join(targetDir, item);
    if (fs.existsSync(srcPath)) {
      copyRecursive(srcPath, destPath);
    }
  }
  console.log('✅ Material Design 3 skill installed successfully!');
  console.log('🤖 Your AI Agent can now discover and use "material-design".');
} catch (err) {
  console.error('❌ Error installing Material Design Skill:', err.message);
  process.exit(1);
}
