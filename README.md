# Reclar Marcenaria Web

Website package for **Reclar Marcenaria LTDA**, ready to run locally and deploy on Vercel.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3001`.

## Deploy On Vercel

1. Create a new Vercel project from this folder or a Git repository containing it.
2. Add the values from `.env.example` in Vercel Project Settings -> Environment Variables.
3. Deploy.

## Optional Integrations

Supabase is prepared for future quote/project storage. Stripe is prepared for future deposits or paid consultations. They are not required for the first launch; the quote flow works as a WhatsApp handoff by default.

## Main Places To Edit

- `content/site.ts`: company info, services, gallery cards, copy, and links.
- `app/page.tsx`: homepage sections.
- `app/projetos/page.tsx`: project/gallery page.
- `app/orcamento/page.tsx`: quote request page.
- `app/contato/page.tsx`: contact/address page.

## Current Business Info

- Company: Reclar Marcenaria LTDA
- Address: Alameda Minas Gerais, 929, Parque São Bernardo, São Bernardo do Campo, São Paulo
- Hours: Aberto das 8h às 17h
- Phone/WhatsApp: 11 95894-3182
