# Theme & Logo Switcher Patches

This directory contains patches to easily toggle between the **NewLine Green/Teal Theme (with company logo.webp)** and the **Indigo/Blue Theme (with Return-N SVG logo)**.

---

## Quick Switch Guide

### Method 1: Using Git Branches (Recommended)
Both themes are tracked in dedicated branches:

- **Green/Teal Theme (Official Brand)**: on branch `main`
- **Blue/Indigo Theme (Return-N System)**: on branch `blue-theme`

```bash
# Switch to Blue/Indigo theme + Return-N SVG logo
git checkout blue-theme

# Switch back to Green/Teal theme + logo.webp
git checkout main
```

---

### Method 2: Applying the Patch on Any Branch
If you want to stay on your current branch but apply the Blue theme & Return-N logo:

```bash
# Apply Blue Theme & Return-N Logo:
git apply patches/blue-theme.patch

# Revert back to Green/Teal Theme & logo.webp:
git apply -R patches/blue-theme.patch
```

---

## What `patches/blue-theme.patch` Changes

| Target | Green/Teal (Current `main`) | Blue/Indigo (`patches/blue-theme.patch`) |
| :--- | :--- | :--- |
| **Theme Primary** | `oklch(0.75 0.16 160)` (Green) | `oklch(0.62 0.19 275)` (Indigo) |
| **Theme Foreground** | `oklch(0.28 0.05 209)` (Ink) | `oklch(0.20 0.02 270)` (Deep Slate) |
| **Tokens Brand** | `oklch(0.75 0.16 160)` | `oklch(0.62 0.19 275)` |
| **Site Header Logo** | `@/assets/logos/logo.webp` (24x24) | `@/assets/logos/newline-mark.svg` (Return-N) |
| **Site Footer Logo** | `@/assets/logos/logo.webp` (48x48) | Pure typography + Return arrow mark |
| **SVG Mark Assets** | Base64-wrapped `logo.webp` | Precision SVG Return-N path |
| **Social / OG Glow** | Emerald / Green `#1ace8b` | Electric Indigo `#6366f1` |
