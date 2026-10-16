# Globus Elevators — Web Platform

> **"Reaching newer heights"**  
> *Elevating Standards, Enriching Spaces*

Official web platform for **Globus Elevators**, specializing in custom design, manufacturing, assembly, and maintenance of premium vertical transportation solutions for luxury residential villas and high-traffic commercial complexes.

---

## Technical Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: TypeScript (`^5`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with Vanilla CSS variables
- **Motion & Interactions**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment Target**: [Vercel](https://vercel.com/)
- **Transactional Email**: [Brevo](https://www.brevo.com/) (formerly Sendinblue) REST API v3

---

## Architectural & Design Guidelines

The site is built strictly following the **Globus Elevators Architectural Editorial Brutalism** design system:
- **Strict Monochrome**: True Black (`#000000`), True White (`#ffffff`), and subtle grayscale opacities.
- **Natural Equipment Imagery**: 100% natural architectural lighting and contrast without artificial color overlays.
- **Brutalist Geometry**: Pure rectilinear forms (`rounded-none`). No pill badges or artificial card borders.
- **Negative Space**: Content is structured using expansive typographic hierarchy and magazine-style negative space.
- **Human Engineering Copywriting**: Precise, confident technical language calibrated for architectural blueprints and engineering specifications.

---

## Environment Configuration

Configure these environment variables in your Vercel Project Settings (or in `.env.local` for local development):

| Variable | Description | Example |
|---|---|---|
| `BREVO_API_KEY` | Brevo v3 API Key (starts with `xkeysib-...`) | `xkeysib-xxxxxxxxxxxx` |
| `BREVO_SENDER_EMAIL` | Verified sender address registered in Brevo | `info@globuselevators.com` |
| `BREVO_SENDER_NAME` | Sender display name for lead alerts | `Globus Elevators Web` |
| `CONTACT_RECEIVER_EMAIL` | Recipient inbox where customer inquiries are sent | `info@globuselevators.com` |

See [`.env.example`](.env.example) for reference.

---

## Getting Started Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Local Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Verify Production Build**:
   ```bash
   npm run build
   ```

---

## Deployment to Vercel

1. Import the repository into your Vercel Dashboard.
2. Under **Environment Variables**, add:
   - `BREVO_API_KEY`
   - `BREVO_SENDER_EMAIL`
   - `BREVO_SENDER_NAME`
   - `CONTACT_RECEIVER_EMAIL`
3. Click **Deploy**. Next.js App Router and Serverless API routes will be provisioned automatically.

---

## License

&copy; 2026 Globus Elevators. All rights reserved.
