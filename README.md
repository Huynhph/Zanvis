# Zanvis Customers Growth

Next.js starter for the Zanvis Neon CMO e-commerce customer dashboard.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

The Supabase credentials are configured in Vercel. Never commit `.env.local` or service-role secrets.

## Planned next steps

- Complete Supabase email/password login.
- Enforce first-login password change.
- Protect dashboard and admin routes.
- Add admin user management.
- Add Excel import route and Replace pipeline.
- Connect dashboard queries to Supabase tables.
