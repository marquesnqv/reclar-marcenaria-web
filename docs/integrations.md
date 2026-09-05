# Integrations

This project is ready for Vercel now. Supabase, Stripe, and email are prepared as placeholders so they can be connected later without redesigning the site.

## Vercel

Add these environment variables in Vercel:

```txt
NEXT_PUBLIC_SITE_URL=https://reclarmarcenaria.com
NEXT_PUBLIC_WHATSAPP_NUMBER=5511958943182
QUOTE_TO_EMAIL=rodrigues.regio@yahoo.com.br
```

Optional later:

```txt
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_DEPOSIT=
RESEND_API_KEY=
EMAIL_FROM_DEFAULT="Reclar Marcenaria <rodrigues.regio@yahoo.com.br>"
```

## Supabase

Use Supabase when quote requests, project uploads, or admin editing need to be stored.

Starter tables are in `supabase/schema.sql`.

## Stripe

Use Stripe only when the business wants online deposits or paid consultations.

Suggested future endpoint:

```txt
https://reclarmarcenaria.com/api/stripe/webhook
```

Suggested events for a simple deposit flow:

```txt
checkout.session.completed
payment_intent.succeeded
payment_intent.payment_failed
```

## Current Launch Behavior

The site does not require Supabase, Stripe, or email to launch. Quote requests hand off to WhatsApp, which is the simplest first version for this business.
