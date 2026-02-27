# Product Requirements Document (PRD): SenYumBook

**Version:** 1.0
**Date:** 2026-02-27
**Author:** zen
**Status:** Draft

---

## 1. Overview

SenYumBook adalah SaaS reservasi online + reminder WhatsApp otomatis untuk klinik gigi kecil di Indonesia. Produk ini difokuskan sebagai solusi **"Reservation-First"** — bukan full clinic management system.

**Referensi:** [Product Brief](./product-brief.md) | [Market Research](../senyumbook-portofolio-summary.md)

---

## 2. Goals & Objectives

### Business Goals
- Akuisisi 100 klinik gigi dalam 3 bulan pertama.
- Conversion rate trial → paid > 25%.
- Revenue recurring Rp 20-30 juta/bulan di bulan ke-6.

### Product Goals
- Setup klinik baru selesai dalam < 5 menit.
- Pengurangan no-show 50-70% bagi klinik pengguna.
- Dashboard bisa diakses dan dioperasikan fully dari mobile.

---

## 3. User Personas

### Persona 1: dr. Salma (Pemilik Klinik)
- **Usia:** 32 tahun, dokter gigi praktek mandiri di Malang
- **Goal:** Menambah pasien baru tanpa tambah staf
- **Pain:** Capek balas WA booking manual, pasien sering no-show
- **Tech:** iPhone, IG aktif, WA Business, Google Maps listing

### Persona 2: Mbak Rina (Admin Klinik)
- **Usia:** 24 tahun, staf admin fresh graduate
- **Goal:** Mengelola jadwal tanpa pusing
- **Pain:** Jadwal double-booking, data pasien di buku tulis hilang
- **Tech:** Android, familiar WA, jarang pakai laptop

---

## 4. Functional Requirements

### 4.1 Booking System (Core)

| ID | Requirement | Priority |
| :--- | :--- | :--- |
| FR-01 | Pasien bisa booking via link publik tanpa login/download app | P0 |
| FR-02 | Kalender real-time menampilkan slot tersedia per dokter | P0 |
| FR-03 | Konfirmasi booking otomatis via WhatsApp ke pasien | P0 |
| FR-04 | Admin bisa create/edit/cancel booking dari dashboard | P0 |
| FR-05 | Pencegahan double booking (slot lock mechanism) | P0 |
| FR-06 | Custom booking link per klinik (misal: book.senyumbook.id/salma-medica) | P1 |
| FR-07 | Walk-in booking bisa ditambahkan manual oleh admin | P1 |

### 4.2 WhatsApp Reminder (Core)

| ID | Requirement | Priority |
| :--- | :--- | :--- |
| FR-10 | Reminder otomatis H-1 (24 jam sebelum) via WA | P0 |
| FR-11 | Reminder otomatis H-1jam (1 jam sebelum) via WA | P0 |
| FR-12 | Pesan reminder menggunakan bahasa Indonesia yang natural & ramah | P0 |
| FR-13 | Pasien bisa konfirmasi/reschedule via reply WA | P1 |
| FR-14 | Template WA message bisa di-customize per klinik | P2 |

### 4.3 Dashboard & Management

| ID | Requirement | Priority |
| :--- | :--- | :--- |
| FR-20 | Dashboard web responsive (mobile-first) | P0 |
| FR-21 | Tampilan kalender harian/mingguan dengan color-coded slots | P0 |
| FR-22 | Data pasien tersimpan otomatis (nama, nomor WA, riwayat booking) | P0 |
| FR-23 | Multi-user access (owner + admin) dengan role sederhana | P1 |
| FR-24 | Laporan booking sederhana (jumlah booking, no-show rate) | P2 |

### 4.4 Onboarding & Setup

| ID | Requirement | Priority |
| :--- | :--- | :--- |
| FR-30 | Signup dengan email atau nomor WA | P0 |
| FR-31 | Setup wizard: nama klinik → jam operasional → dokter → selesai | P0 |
| FR-32 | Booking link langsung aktif setelah setup | P0 |
| FR-33 | Trial gratis 14 hari tanpa kartu kredit | P0 |

### 4.5 Payment & Subscription

| ID | Requirement | Priority |
| :--- | :--- | :--- |
| FR-40 | Billing bulanan via Xendit (VA, e-wallet, QRIS) | P1 |
| FR-41 | Upgrade/downgrade plan dari dashboard | P1 |
| FR-42 | Invoice otomatis via email | P2 |

---

## 5. Non-Functional Requirements

| ID | Requirement | Target |
| :--- | :--- | :--- |
| NFR-01 | Page load time (dashboard) | < 2 detik |
| NFR-02 | Uptime | 99.5% |
| NFR-03 | Mobile responsiveness | Full support iOS Safari + Android Chrome |
| NFR-04 | Data security | Enkripsi at rest + in transit, comply UU PDP |
| NFR-05 | Concurrent users per tenant | Minimum 5 |
| NFR-06 | WA message delivery rate | > 95% |

---

## 6. Tech Stack (Non-AI-Centric)

Berdasarkan riset MCP terhadap ekosistem terkini:

### Frontend
- **Next.js 15** (React framework, SSR/SSG untuk SEO landing page + SPA dashboard)
- **TypeScript** (type safety)
- **Vanilla CSS / CSS Modules** (ringan, tanpa dependency berat seperti Tailwind)

### Backend & Database
- **Supabase** (PostgreSQL + Auth + Realtime + Storage + Edge Functions)
  - *Alasan:* Open-source, real-time subscriptions untuk update booking, built-in auth, instant REST API, gratis untuk MVP.

### WhatsApp Integration
- **Meta Official WhatsApp Business Cloud API** + Node.js SDK
  - *Alasan:* Compliance resmi Meta, template message system, webhook support untuk reply handling. Tidak pakai unofficial provider supaya aman jangka panjang.

### Payment Gateway
- **Xendit** (Subscription billing)
  - *Alasan:* Sudah support recurring payment + e-wallet + QRIS + VA. SDK Node.js tersedia. Cocok untuk SaaS di Indonesia.

### Hosting & Deployment
- **Vercel** (untuk Next.js, auto-scaling, edge network)
- **Supabase Cloud** (managed PostgreSQL)

### Monitoring
- **Vercel Analytics** (performance)
- **Supabase Dashboard** (database monitoring)

> **Catatan:** Stack ini sengaja **tidak AI-sentris**. Tidak ada LLM, machine learning, atau AI inference. Fokus pada **automation sederhana** (cron job untuk reminder, webhook untuk WA) yang reliable dan murah.

---

## 7. User Flow (Simplified)

```
Pasien klik booking link (dari IG/WA/GMaps)
  → Pilih tanggal & jam tersedia
  → Isi nama + nomor WA
  → Konfirmasi booking
  → [Sistem] Kirim konfirmasi WA ke pasien
  → [Sistem] Update kalender real-time
  → [Sistem] H-1: Kirim reminder WA
  → [Sistem] H-1jam: Kirim reminder WA
  → Pasien datang ke klinik ✅
```

---

## 8. Landing Page Requirements

Mengikuti struktur dari `senyumbook-portofolio-summary.md`:
1. Hero + CTA "Mulai Trial Gratis 14 Hari"
2. Social Proof (testimoni fiktif untuk portfolio)
3. Problem Identification (visual WA berantakan)
4. Product Features (grid card + screenshot)
5. Pricing (3-tier)
6. FAQ
7. Footer + Trust badges

**Design Direction:** Hybrid Dashboard-Centric + Doctor-Centric
**Color:** Biru muda #4A90E2, Hijau soft #7ED957, Putih #FFFFFF, Abu #F8FAFC

---

## 9. Release Plan

### Phase 1: MVP (6-8 minggu)
- Booking system + calendar
- WA reminder (konfirmasi + H-1 + H-1jam)
- Custom booking link
- Mobile dashboard
- Landing page
- Trial signup flow

### Phase 2: Growth (8-12 minggu)
- Payment integration (Xendit)
- Analytics sederhana
- WA reply handling (konfirmasi/reschedule)
- Multi-user access

### Phase 3: Scale (12+ minggu)
- Waitlist magic (slot kosong otomatis ditawarkan)
- Template promo IG builder
- Multi-cabang support
- API untuk integrasi pihak ketiga

---

## 10. Out of Scope (Sengaja Tidak Dibangun)

- ❌ Rekam Medis Elektronik (RME) — bukan fokus kita
- ❌ Odontogram digital — terlalu kompleks
- ❌ Integrasi BPJS/SatuSehat — untuk klinik besar
- ❌ Inventory management — bukan core value
- ❌ AI chatbot / AI scheduling — **kita non-AI-sentris**
- ❌ Mobile native app — web responsive sudah cukup
