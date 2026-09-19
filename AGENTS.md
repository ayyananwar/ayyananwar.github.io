<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# GLOBUS ELEVATORS DESIGN SYSTEM

## 1. No AI Slop UI
- STRICTLY FORBIDDEN: "Glassmorphism" (e.g., `bg-white/5` with `backdrop-blur` for cards), pill-shaped badges (`rounded-full`), glowing neon gradients, cheesy sliding hover arrows, and bright cyan accents.
- Do not use generic "Bento Box" layouts with soft rounded corners.
- Avoid borders unless absolutely necessary for separation.

## 2. Editorial Brutalism
- **Color Palette**: Strict monochrome (True Black `#000`, True White `#FFF`, and grayscale opacities `white/50`).
- **Shapes**: Sharp, brutalist geometry. Images must be perfect rectangles with `rounded-none`.
- **Layout**: Rely entirely on massive negative space (whitespace/blackspace) and typography hierarchy to structure content, just like a high-end physical architectural magazine.
- **Interactions**: Keep hover effects ultra-subtle (e.g., slight opacity shifts `group-hover:opacity-60`) rather than movement.

## 3. Human Engineering Copywriting
- STRICTLY FORBIDDEN AI BUZZWORDS: "redefine", "seamlessly", "unmatched", "unlock", "unleash", "effortless", "vision", "innovative".
- Use concrete, technical, and highly confident human copywriting.
- Example: Instead of "Effortless motion seamlessly integrated into your vision", use "Precision motion integrated into your structural blueprints."
