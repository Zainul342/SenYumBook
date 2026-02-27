---
stepsCompleted: [1, 2, 3, 4]
inputDocuments:
  - docs/prd.md
  - docs/architecture.md
  - docs/ux-design-specification.md
  - docs/tech-stack.md
project_name: 'SenYumBook'
date: '2026-02-27'
---

# Epics & Stories: SenYumBook

## Epic Overview

| Epic | Title | Priority | Phase | Stories |
|:-----|:------|:---------|:------|:--------|
| E1 | Landing Page & Marketing Site | P0 | MVP | 5 |
| E2 | Patient Public Booking Flow | P0 | MVP | 6 |
| E3 | Admin Dashboard & Schedule Management | P0 | MVP | 6 |
| E4 | WhatsApp Reminder Engine | P0 | MVP | 4 |
| E5 | Clinic Onboarding & Setup | P0 | MVP | 4 |
| E6 | Authentication & Multi-Tenancy | P0 | MVP | 3 |
| E7 | Payment & Subscription (Growth) | P1 | Growth | 4 |
| E8 | Analytics & Reporting (Growth) | P2 | Growth | 2 |

---

## E1: Landing Page & Marketing Site

**Goal:** Create a high-conversion landing page that establishes trust and drives clinic owner sign-ups.  
**UX Reference:** Pure Zen design direction, Instrument Serif headings + Inter body text.  
**Dependencies:** None (can start immediately).

### E1-S1: Project Initialization & Design System Setup
**As a** developer  
**I want to** initialize the Next.js project with Shadcn/UI and the Pure Zen theme  
**So that** all subsequent development has a consistent design foundation.

**Acceptance Criteria:**
- Given a new project, when initialized, then Next.js 14+ App Router is configured.
- Given Shadcn/UI is installed, when the theme is applied, then colors match Trust Blue (#0057FF), Calming Green (#22C55E), and Off-White (#FDFCF9).
- Given Tailwind is configured, then `rounded-3xl`, large padding utilities, and Instrument Serif + Inter fonts are available.
- Given the project structure, then it matches the architecture document layout.

**Technical Notes:**
- Install: `npx create-next-app@latest`, Shadcn/UI, Tailwind CSS
- Configure `globals.css` with Pure Zen CSS variables
- Setup Google Fonts: Instrument Serif + Inter

---

### E1-S2: Hero Section
**As a** visiting clinic owner  
**I want to** immediately understand what SenYumBook does and feel compelled to try it  
**So that** I sign up for the free trial.

**Acceptance Criteria:**
- Given a visitor lands on the page, when the Hero loads, then it displays a headline with Instrument Serif font, a subheadline explaining the value prop, and a prominent "Mulai Bebas Antrean" CTA button.
- Given the CTA button, when clicked, then it scrolls to or navigates to the sign-up form.
- Given mobile view, then the Hero is fully responsive with the CTA in the thumb zone.
- Given the Hero section, then it includes a floating 3D mockup of the dashboard with soft drop shadow.

---

### E1-S3: Features & Benefits Section
**As a** visiting clinic owner  
**I want to** see what specific problems SenYumBook solves  
**So that** I understand how it helps my clinic.

**Acceptance Criteria:**
- Given the Features section, when rendered, then it shows 3-4 feature cards with icons, titles, and descriptions.
- Given each card, then it uses the Pure Zen card styling (rounded-3xl, soft shadow, generous padding).
- Given mobile view, then cards stack vertically with proper spacing.
- Features include: Auto-Booking Link, WA Reminder, Dashboard Mobile, Zero Setup.

---

### E1-S4: Pricing Section
**As a** visiting clinic owner  
**I want to** compare pricing plans clearly  
**So that** I can choose the right plan for my clinic.

**Acceptance Criteria:**
- Given the Pricing section, when rendered, then it displays 3 pricing tiers (Starter, Pro, Enterprise) in card format.
- Given each tier, then it clearly shows price, included features, and a CTA button.
- Given the recommended tier, then it has a visual highlight (Trust Blue border or badge).
- Given mobile view, then pricing cards stack vertically.

---

### E1-S5: Trust Signals, FAQ & Footer
**As a** visiting clinic owner  
**I want to** see social proof and get my questions answered  
**So that** I trust SenYumBook enough to sign up.

**Acceptance Criteria:**
- Given the Trust section, when rendered, then it displays client count, testimonial quotes (initial/placeholder), and UU PDP compliance badge.
- Given the FAQ section, when rendered, then it shows an accordion component with 5-7 common questions.
- Given each FAQ, when clicked, then it expands smoothly to reveal the answer.
- Given the Footer, then it includes company info, links, and contact information.

---

## E2: Patient Public Booking Flow

**Goal:** Enable patients to book appointments in under 30 seconds from a social media link.  
**UX Reference:** "The 30-Second Certainty" flow from UX spec.  
**Dependencies:** E6 (Database & Auth setup for clinic data).

### E2-S1: Public Clinic Page
**As a** patient  
**I want to** open my clinic's booking link and see available services  
**So that** I can start booking immediately.

**Acceptance Criteria:**
- Given a valid clinic slug URL (`/book/:slug`), when loaded, then display clinic name, services list using Service Selection Cards.
- Given an invalid slug, when loaded, then display a friendly 404 page.
- Given mobile view, then page loads in <1 second and is fully thumb-navigable.
- Given a service card, when tapped, then it shows selected state (Trust Blue border).

---

### E2-S2: Date & Time Slot Selection
**As a** patient  
**I want to** pick an available date and time  
**So that** I can book a slot that works for me.

**Acceptance Criteria:**
- Given a selected service, when the calendar is shown, then only dates with available slots are selectable.
- Given a selected date, when time slots load, then they display as a Time Slot Grid (pill buttons).
- Given an available slot, when tapped, then it changes to selected state (solid Calming Green).
- Given a booked/blocked slot, then it appears grayed out and is non-clickable.
- Given the layout, then the sticky CTA "Lanjut" button remains visible above the keyboard.

---

### E2-S3: Patient Data Entry Form
**As a** patient  
**I want to** quickly enter my name and WhatsApp number  
**So that** the clinic can contact me.

**Acceptance Criteria:**
- Given the form, when rendered, then it shows only 2 fields: Name and WhatsApp Number.
- Given the WA number field, when focused, then the numeric keypad opens automatically.
- Given the WA number input, when typing, then it auto-formats with hyphens (0812-3456-7890).
- Given top-aligned labels, then labels are above input fields (not placeholders).
- Given inline validation, then errors appear below the field in real-time.

---

### E2-S4: Booking Confirmation & Slot Lock
**As a** patient  
**I want to** confirm my booking and know it's secured  
**So that** I feel confident about my appointment.

**Acceptance Criteria:**
- Given complete form data, when "Konfirmasi Jadwal" is pressed, then the system creates an appointment with optimistic slot locking.
- Given a successful booking, when confirmed, then display a Success page with checkmark animation and appointment summary.
- Given a slot conflict (double-booking), when detected, then display an inline error "Maaf, slot ini sudah terisi" and allow re-selection.
- Given the database, then a unique constraint prevents duplicate `(clinic_id, service_id, appointment_date, appointment_time)`.

---

### E2-S5: WhatsApp Booking Confirmation
**As a** patient  
**I want to** receive an instant WhatsApp confirmation  
**So that** I have proof of my booking.

**Acceptance Criteria:**
- Given a successful booking, when processed, then the system sends a WA template message within 2 seconds.
- Given the WA message, then it includes clinic name, service, date, time, and a friendly confirmation emoji.
- Given a WA API failure, then the booking is still saved and a retry queue processes the message.
- Given the success page, then it shows "Konfirmasi telah dikirim ke WhatsApp Anda ✅".

---

### E2-S6: Patient Deduplication
**As the** system  
**I want to** recognize returning patients by their WA number  
**So that** the clinic builds a patient database automatically (FR-22).

**Acceptance Criteria:**
- Given a booking submission, when the WA number hash matches an existing patient, then link to existing patient record.
- Given a new WA number, when submitted, then create a new patient record with encrypted name and phone.
- Given the patient table, then PII fields use pgcrypto AES-256 encryption.

---

## E3: Admin Dashboard & Schedule Management

**Goal:** Give clinic admins a mobile-first daily schedule view with swipe-to-action queue management.  
**UX Reference:** Admin Daily Operations flow, Swipeable Patient Item component.  
**Dependencies:** E6 (Auth), E2 (Booking data).

### E3-S1: Dashboard Layout & Navigation
**As an** admin  
**I want to** access a clean mobile dashboard with simple navigation  
**So that** I can manage the clinic schedule efficiently.

**Acceptance Criteria:**
- Given an authenticated admin, when accessing `/dashboard`, then display the daily schedule as the default view.
- Given mobile view, then use bottom tab navigation (Schedule, Patients, Settings).
- Given desktop view, then use side navigation.
- Given the layout, then it follows Pure Zen styling with off-white background and rounded cards.

---

### E3-S2: Daily Schedule View
**As an** admin  
**I want to** see today's appointments in a clear chronological list  
**So that** I can manage the daily queue.

**Acceptance Criteria:**
- Given the schedule view, when loaded, then display appointments sorted by time.
- Given each appointment item, then show time, patient name, service, and status badge.
- Given status badges, then use color coding: Green (confirmed), Yellow (pending), Red (cancelled), Gray (completed).
- Given the view, then it auto-refreshes using Supabase Realtime subscriptions.
- Given an empty day, then show friendly empty state with illustration and "+ Tambah Manual" CTA.

---

### E3-S3: Swipe-to-Action Patient Management
**As an** admin  
**I want to** swipe patient items to change their status  
**So that** I can manage the queue with one hand on my phone.

**Acceptance Criteria:**
- Given a patient item, when swiped right, then reveal green "Selesai" action area and mark as completed.
- Given a patient item, when swiped left, then reveal red "Batal" action area.
- Given a "Batal" action, then trigger a confirmation modal before cancellation.
- Given a completed action, then show instant feedback (checkmark animation + toast).

---

### E3-S4: Manual Appointment Entry (Walk-in)
**As an** admin  
**I want to** add walk-in patients to the schedule  
**So that** the slot is blocked from online booking (FR-07).

**Acceptance Criteria:**
- Given the "+ Tambah Manual" button, when tapped, then open a bottom sheet form.
- Given the form, then require only: Patient Name, WA Number, Service, Time.
- Given a saved walk-in, then it appears in the daily list with "Walk-in" badge.
- Given the slot, then it becomes unavailable for online booking immediately.

---

### E3-S5: Weekly Calendar View
**As an** admin  
**I want to** see the week ahead  
**So that** I can plan staffing and preparation (FR-21).

**Acceptance Criteria:**
- Given the weekly view toggle, when selected, then display a 7-day overview with appointment counts per day.
- Given a day in the weekly view, when tapped, then navigate to that day's detailed schedule.
- Given color indicators, then days are color-coded by load (light=few, dark=busy).

---

### E3-S6: Patient List & History
**As an** admin  
**I want to** see all registered patients and their history  
**So that** I can find returning patients quickly (FR-22).

**Acceptance Criteria:**
- Given the Patients tab, when loaded, then display a searchable list of all clinic patients.
- Given a patient entry, when tapped, then show appointment history (dates, services, statuses).
- Given the search bar, then search by name or phone number (decrypted on server).

---

## E4: WhatsApp Reminder Engine

**Goal:** Automatically send H-24 and H-1 reminders via WhatsApp to reduce no-show rates.  
**Dependencies:** E2 (Appointment data), Meta WA API setup.

### E4-S1: Meta WhatsApp Business API Setup
**As a** developer  
**I want to** configure the Meta WA Business Cloud API  
**So that** the system can send template messages.

**Acceptance Criteria:**
- Given Meta Business account, when configured, then obtain permanent access token and phone number ID.
- Given message templates, then register 3 templates (confirmation, H-24 reminder, H-1 reminder) and get them approved.
- Given the webhook URL, when configured, then the system receives delivery status updates.
- Given API credentials, then store as environment variables (never in code).

---

### E4-S2: H-24 Reminder Cron Job
**As the** system  
**I want to** automatically send reminders 24 hours before appointments  
**So that** patients are reminded and no-show rates decrease (FR-10).

**Acceptance Criteria:**
- Given a Vercel Cron Job, when triggered every 15 minutes, then query appointments where `appointment_date = tomorrow` AND `reminder_24h_sent = false`.
- Given matching appointments, then send H-24 WA template message to each patient.
- Given a successful send, then update `reminder_24h_sent = true`.
- Given a send failure, then log the error and retry on next cron cycle.

---

### E4-S3: H-1 Reminder Cron Job
**As the** system  
**I want to** send reminders 1 hour before appointments  
**So that** patients have a final reminder (FR-11).

**Acceptance Criteria:**
- Given a Vercel Cron Job, when triggered every 15 minutes, then query appointments within 45-75 minutes from now AND `reminder_1h_sent = false`.
- Given matching appointments, then send H-1 WA template message.
- Given a successful send, then update `reminder_1h_sent = true`.

---

### E4-S4: Message Delivery Monitoring
**As a** developer  
**I want to** track WA message delivery status  
**So that** I can ensure >95% delivery rate (NFR-04).

**Acceptance Criteria:**
- Given a WA webhook callback, when received, then log delivery status (sent, delivered, read, failed).
- Given failed messages, then create a retry queue with max 3 attempts.
- Given the monitoring dashboard (internal), then show daily delivery success rate.

---

## E5: Clinic Onboarding & Setup

**Goal:** Enable clinic owners to go from sign-up to live booking link in under 5 minutes.  
**UX Reference:** "The 5-Minute Setup" flow, Celebration Link Card component.  
**Dependencies:** E6 (Auth).

### E5-S1: Sign-Up Flow
**As a** clinic owner  
**I want to** create my account quickly  
**So that** I can start setting up my clinic (FR-30).

**Acceptance Criteria:**
- Given the sign-up page, when rendered, then offer Google OAuth and Magic Link (email) options.
- Given a successful auth, then create a `clinic_users` record with role "owner".
- Given a new user, then redirect to the setup wizard.

---

### E5-S2: Setup Wizard (3 Steps)
**As a** clinic owner  
**I want to** configure my clinic profile in a guided 3-step wizard  
**So that** my booking page is ready fast (FR-31).

**Acceptance Criteria:**
- Given Step 1, then collect: Clinic Name and WhatsApp Number.
- Given Step 2, then set default operating hours (pre-filled with 08:00-17:00 Mon-Sat).
- Given Step 3, then add at least 1 service (name + duration). Allow skip.
- Given each step, then show a progress indicator (1/3, 2/3, 3/3).
- Given the wizard, then it uses the Single Intent Screen pattern (1 action per screen).

---

### E5-S3: Generate Public Booking Link
**As a** clinic owner  
**I want to** get my unique booking URL immediately after setup  
**So that** I can share it with patients right away (FR-32).

**Acceptance Criteria:**
- Given wizard completion, when the clinic slug is generated, then show the Celebration Link Card with confetti animation.
- Given the card, then display the full URL prominently with a giant "Copy Link" button.
- Given the link is copied, then show a toast confirmation "Link disalin! ✅".
- Given the slug, then it's auto-generated from clinic name (e.g., "klinik-gigi-salma").

---

### E5-S4: Free Trial Activation
**As a** clinic owner  
**I want to** get 14 days of full access automatically  
**So that** I can try all features before paying (FR-33).

**Acceptance Criteria:**
- Given a new clinic, when created, then set `trial_ends_at = NOW() + 14 days`.
- Given an active trial, then all features are unlocked.
- Given trial expiry approaching (3 days), then show a banner nudging to subscribe.
- Given trial expired, then restrict booking creation but keep data accessible.

---

## E6: Authentication & Multi-Tenancy

**Goal:** Secure the application with proper auth, RLS, and multi-tenant isolation.  
**Dependencies:** None (foundational).

### E6-S1: Supabase Project & Database Setup
**As a** developer  
**I want to** set up the Supabase project with all tables and RLS policies  
**So that** the data layer is ready for all features.

**Acceptance Criteria:**
- Given a Supabase project, when created, then all tables from the Architecture ER diagram are migrated.
- Given each table, then `clinic_id` column is present and indexed.
- Given RLS policies, then authenticated users can only access rows where `clinic_id` matches their JWT claim.
- Given `pgcrypto` extension, then it's enabled for PII encryption.

---

### E6-S2: Authentication Middleware
**As a** developer  
**I want to** protect API routes with JWT verification  
**So that** only authorized clinic users can access admin features.

**Acceptance Criteria:**
- Given a protected API route, when accessed without valid JWT, then return 401 Unauthorized.
- Given a valid JWT, then extract `clinic_id` and `role` from claims.
- Given an "admin" role, then restrict access to management-only endpoints (billing, user management).
- Given public routes (`/api/v1/public/*`), then no auth required.

---

### E6-S3: Role-Based Access Control
**As a** clinic owner  
**I want to** invite admins with limited permissions  
**So that** staff can manage schedules without access to billing (FR-23).

**Acceptance Criteria:**
- Given an owner, then they can invite admins via email.
- Given an admin role, then they can: view/edit schedule, add patients, manage appointments.
- Given an admin role, then they cannot: change billing, delete clinic, manage roles.
- Given the system, then support max 5 users per clinic.

---

## E7: Payment & Subscription (Growth Phase)

**Goal:** Enable monetization through recurring subscriptions via Xendit.  
**Dependencies:** E6, E5.

### E7-S1: Xendit Integration Setup
**Acceptance Criteria:**
- Xendit SDK configured with API keys (stored as env vars).
- Webhook endpoint `/api/v1/webhooks/xendit` processes payment events.
- Support VA, e-wallet (GoPay, OVO, Dana), and QRIS.

### E7-S2: Subscription Plans & Billing Page
**Acceptance Criteria:**
- Billing page shows current plan, usage, and upgrade options.
- 3 tiers: Starter (Rp 99K), Pro (Rp 199K), Enterprise (Rp 399K).
- Plan change (upgrade/downgrade) takes effect next billing cycle.

### E7-S3: Recurring Payment Processing
**Acceptance Criteria:**
- Xendit recurring billing creates monthly invoices automatically.
- Webhook updates clinic subscription status on payment success/failure.
- Grace period of 7 days for failed payments before feature restriction.

### E7-S4: Invoice & Receipt Generation
**Acceptance Criteria:**
- System generates transaction receipts on successful payment (FR-42).
- Email notification sent to clinic owner with receipt attached.

---

## E8: Analytics & Reporting (Growth Phase)

**Goal:** Provide basic analytics for clinic owners.  
**Dependencies:** E3.

### E8-S1: Monthly Summary Dashboard
**Acceptance Criteria:**
- Show total appointments, completed, cancelled, and no-show counts for current month (FR-24).
- Show no-show percentage with trend indicator vs previous month.
- Display charts using a lightweight library (Recharts or Chart.js).

### E8-S2: Patient Growth Metrics
**Acceptance Criteria:**
- Show new vs returning patient ratio.
- Show most popular services by booking count.
- Export monthly report as PDF.

---

## Implementation Priority (Sprint Suggestion)

| Sprint | Epics | Duration | Focus |
|:-------|:------|:---------|:------|
| Sprint 1 | E1, E6 | 2 weeks | Landing Page + Foundation |
| Sprint 2 | E2, E5 | 2 weeks | Patient Booking + Onboarding |
| Sprint 3 | E3 | 2 weeks | Admin Dashboard |
| Sprint 4 | E4 | 1 week | WhatsApp Reminders |
| Sprint 5 | E7, E8 | 2 weeks | Payments + Analytics |

---

*Epics & Stories Document Complete — Ready for implementation readiness check.*
