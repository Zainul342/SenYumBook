# Tech Stack Decision: SenYumBook

**Date:** 2026-02-27
**Decision Status:** Proposed

---

## Stack Overview

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Frontend** | Next.js 15 + TypeScript | SSR/SSG untuk SEO landing page. React ecosystem besar. |
| **Styling** | Vanilla CSS / CSS Modules | Ringan, no build dependency, full control. |
| **Backend** | Supabase (BaaS) | PostgreSQL, Auth, Realtime, Edge Functions. Open-source. |
| **Database** | PostgreSQL (via Supabase) | Relational, ACID, cocok untuk booking/scheduling. |
| **Auth** | Supabase Auth | Email + OAuth. Row Level Security (RLS) built-in. |
| **WhatsApp** | Meta Official Cloud API | Compliance resmi. Template message + webhook. |
| **Payments** | Xendit | Recurring billing, e-wallet, QRIS, VA. Indonesia-focused. |
| **Hosting** | Vercel + Supabase Cloud | Auto-scaling, edge network, managed DB. |
| **Monitoring** | Vercel Analytics | Performance, Core Web Vitals. |

---

## Why This Stack (vs Alternatives)

### Frontend: Next.js vs Alternatives
- ✅ **Next.js** — SSR + SSG hybrid, SEO-friendly landing page, React ecosystem.
- ❌ Nuxt.js — Bagus, tapi ekosistem Vue lebih kecil di Indonesia.
- ❌ SvelteKit — Performant tapi talent pool lebih kecil.
- ❌ Remix — Solid SSR, tapi less ecosystem support.

### Backend: Supabase vs Alternatives
- ✅ **Supabase** — PostgreSQL-based, real-time, auth, storage. Open-source.
- ❌ Firebase — NoSQL (Firestore) kurang cocok untuk relational booking data.
- ❌ Custom Node.js + Express — Lebih banyak boilerplate, slower development.
- ❌ PocketBase — Terlalu lightweight untuk multi-tenant SaaS.

### WhatsApp: Meta Official vs Unofficial
- ✅ **Meta Cloud API** — Long-term compliance, template approval system, reliable.
- ❌ WaSenderAPI / Green API — Unofficial, risk di-block WhatsApp.
- ❌ Twilio — Mahal untuk volume pesan Indonesia.

### Payments: Xendit vs Midtrans
- ✅ **Xendit** — Dedicated subscription product, recurring e-wallet support.
- ⚠️ Midtrans — Bagus juga, tapi subscription API kurang mature dibanding Xendit.

---

## Non-AI-Centric Philosophy

SenYumBook sengaja **tidak menggunakan AI/ML** di versi MVP dan Growth:

| Fitur | Pendekatan | Bukan AI |
| :--- | :--- | :--- |
| Reminder scheduling | Cron job / Supabase Edge Function | ❌ Bukan AI prediction |
| Booking confirmation | Template message WhatsApp | ❌ Bukan chatbot AI |
| Dashboard analytics | SQL query + chart library | ❌ Bukan AI insights |
| Slot management | Database constraints + locking | ❌ Bukan ML optimization |

**Alasan:**
1. **Biaya rendah** — Tidak perlu bayar inference API.
2. **Reliability tinggi** — Cron job lebih predictable daripada AI.
3. **Simplicity** — Klinik kecil tidak butuh AI, butuh "it just works".
4. **Maintenance mudah** — Tidak perlu ML engineer.

---

## Cost Estimation (Monthly)

| Service | Tier | Est. Cost |
| :--- | :--- | :--- |
| Vercel | Pro | $20/bulan |
| Supabase | Pro | $25/bulan |
| WhatsApp Cloud API | Per-message | ~$15/bulan (est. 5000 msg) |
| Xendit | Per-transaction | Variable (IDR 2.500/plan + tx fee) |
| Domain | .id | ~$15/tahun |
| **Total** | | **~$75/bulan** (~Rp 1.2jt) |

> Dengan 50 klinik di plan Pro (Rp 199k), revenue = Rp 9.95jt/bulan. **Margin sangat sehat.**

---

## Sources (MCP Research)

- Next.js + Supabase SaaS stack: reddit.com, supabase.com, uideck.com
- WhatsApp Business Cloud API Node.js SDK: github.io (Meta official), npmjs.com
- Xendit subscription billing: xendit.co
- Midtrans comparison: midtrans.com, finqfy.com
