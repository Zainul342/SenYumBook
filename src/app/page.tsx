"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    CalendarDays,
    CheckCircle2,
    ChevronRight,
    Clock3,
    Mail,
    MessageCircle,
    ShieldCheck,
    Sparkles,
    Stethoscope,
} from "lucide-react";

const proofCards = [
    {
        title: "Reservasi lebih cepat dipahami pasien",
        body: "Link booking bisa langsung dipakai tanpa edukasi panjang. Pasien pilih jadwal, admin tidak perlu chat bolak-balik.",
    },
    {
        title: "Reminder otomatis yang konsisten",
        body: "Konfirmasi, H-24, dan H-1 berjalan otomatis agar no-show turun tanpa menambah beban tim front desk.",
    },
    {
        title: "Presentasi produk terlihat matang",
        body: "Visual produk ditampilkan seperti software siap pakai, bukan konsep abstrak yang membuat calon user ragu.",
    },
];

const featureCards = [
    {
        title: "Booking Link",
        body: "Taruh di Instagram, WhatsApp Business, dan Google Maps. Satu link untuk semua kanal akuisisi pasien.",
        metric: "Live < 5 menit",
    },
    {
        title: "WhatsApp Reminder",
        body: "Trigger otomatis saat booking dibuat. Tidak ada lagi follow-up manual yang terlupa ketika jam operasional sibuk.",
        metric: "H-24 + H-1 otomatis",
    },
    {
        title: "Jadwal Operasional",
        body: "Dashboard menampilkan konteks harian secara cepat dari desktop maupun HP supaya keputusan operasional lebih sigap.",
        metric: "Mobile-ready",
    },
    {
        title: "Brand Presence",
        body: "Tampilan klinik lebih profesional sejak pertama kali pasien lihat halaman booking dan reminder yang dikirim.",
        metric: "First impression kuat",
    },
];

const timelineSteps = [
    {
        label: "01",
        title: "Pasang link booking",
        body: "Aktifkan link booking di channel yang sudah dipakai klinik sekarang.",
    },
    {
        label: "02",
        title: "Pasien pilih jadwal",
        body: "Pasien booking langsung tanpa percakapan administratif panjang.",
    },
    {
        label: "03",
        title: "Reminder berjalan",
        body: "Sistem kirim pengingat WhatsApp otomatis sampai hari kunjungan.",
    },
    {
        label: "04",
        title: "Admin fokus pelayanan",
        body: "Tim front desk fokus ke operasional klinik, bukan follow-up manual.",
    },
];

const faqItems = [
    {
        question: "Apakah pasien harus install aplikasi?",
        answer: "Tidak. Pasien cukup buka link booking lewat browser HP lalu pilih jadwal yang tersedia.",
    },
    {
        question: "Cocok untuk klinik kecil atau praktik mandiri?",
        answer: "Ya. Posisi produk ini memang untuk klinik gigi kecil yang ingin alur reservasi rapi tanpa software operasional berat.",
    },
    {
        question: "Apakah form lead butuh backend khusus dulu?",
        answer: "Untuk MVP tidak wajib. Data lead bisa langsung diteruskan ke WhatsApp atau email untuk validasi demand lebih cepat.",
    },
];

const kpiItems = [
    { label: "Setup", value: "< 5 menit" },
    { label: "Flow Booking", value: "< 1 menit" },
    { label: "Reminder", value: "Otomatis" },
];

function normalizeWhatsAppNumber(rawValue?: string) {
    const digits = rawValue?.replace(/\D/g, "") ?? "";

    if (!digits) {
        return "";
    }

    if (digits.startsWith("62")) {
        return digits;
    }

    if (digits.startsWith("0")) {
        return `62${digits.slice(1)}`;
    }

    return digits;
}

const whatsappNumber = normalizeWhatsAppNumber(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER);
const leadEmail = process.env.NEXT_PUBLIC_LEAD_EMAIL ?? "";

function buildMailtoHref(subject: string, body: string) {
    if (!leadEmail) {
        return "#lead-form";
    }

    return `mailto:${leadEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildWhatsAppHref(message: string) {
    if (!whatsappNumber) {
        return "#lead-form";
    }

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function buildLeadMessage(name: string, clinic: string, phone: string) {
    return [
        "Halo SenYumBook, saya tertarik mencoba produknya.",
        `Nama: ${name || "-"}`,
        `Klinik: ${clinic || "-"}`,
        `WhatsApp: ${phone || "-"}`,
        "Mohon info demo atau trial yang tersedia.",
    ].join("\n");
}

function buildLeadEmailBody(name: string, clinic: string, phone: string) {
    return [
        "Halo SenYumBook,",
        "",
        "Saya tertarik mencoba produk SenYumBook.",
        "",
        `Nama: ${name || "-"}`,
        `Klinik: ${clinic || "-"}`,
        `WhatsApp: ${phone || "-"}`,
        "",
        "Mohon info demo atau trial yang tersedia.",
    ].join("\n");
}

function Reveal({
    children,
    delay = 0,
    className,
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-64px" }}
            transition={{ duration: 0.56, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

function LeadButton({
    href,
    enabled,
    children,
    tone,
}: {
    href: string;
    enabled: boolean;
    children: React.ReactNode;
    tone: "dark" | "light";
}) {
    const className = tone === "dark" ? "action-btn action-btn-dark" : "action-btn action-btn-light";

    if (!enabled) {
        return (
            <span className={`${className} cursor-not-allowed opacity-55`} aria-disabled="true">
                {children}
            </span>
        );
    }

    return (
        <a href={href} className={className}>
            {children}
        </a>
    );
}

function SectionTag({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
    const className = tone === "light" ? "section-tag" : "section-tag section-tag-dark";

    return <span className={className}>{children}</span>;
}

function Navbar() {
    return (
        <nav className="site-nav">
            <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-6">
                <a href="#top" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                        S
                    </div>
                    <div>
                        <p className="text-sm font-semibold tracking-tight text-slate-950">SenYumBook</p>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Reservation-first</p>
                    </div>
                </a>

                <div className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">
                    <a href="#fitur" className="transition-colors hover:text-slate-950">
                        Fitur
                    </a>
                    <a href="#produk" className="transition-colors hover:text-slate-950">
                        Produk
                    </a>
                    <a href="#faq" className="transition-colors hover:text-slate-950">
                        FAQ
                    </a>
                </div>

                <a href="#lead-form" className="action-btn action-btn-dark text-sm">
                    Minta Demo
                    <ChevronRight className="h-4 w-4" />
                </a>
            </div>
        </nav>
    );
}

function HeroSection() {
    const heroMessage = buildLeadMessage("", "Klinik saya", "");
    const heroEmail = buildMailtoHref("Demo SenYumBook", buildLeadEmailBody("", "Klinik saya", ""));

    return (
        <section id="top" className="hero-shell px-6 pb-16 pt-24 md:pb-20 md:pt-28">
            <div className="hero-grid-layer" />
            <div className="hero-glow hero-glow-left" />
            <div className="hero-glow hero-glow-right" />

            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
                    <Reveal className="relative z-10 max-w-[34rem] pt-6 lg:pt-10">
                        <SectionTag>Tech executive landing page</SectionTag>
                        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Untuk klinik gigi kecil di Indonesia</p>

                        <h1 className="display-title mt-4 text-[clamp(2.4rem,4.4vw,4.3rem)] text-slate-950">
                            Booking rapi,
                            <br />
                            reminder otomatis,
                            <br />
                            operasional lebih tenang.
                        </h1>

                        <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 md:text-lg">
                            SenYumBook membantu klinik menangani reservasi dengan alur yang jelas. Pasien cepat paham, admin lebih fokus, dan follow-up berjalan konsisten.
                        </p>

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                            <LeadButton href={buildWhatsAppHref(heroMessage)} enabled={Boolean(whatsappNumber)} tone="dark">
                                WhatsApp Demo
                                <MessageCircle className="h-4 w-4" />
                            </LeadButton>
                            <LeadButton href={heroEmail} enabled={Boolean(leadEmail)} tone="light">
                                Email Proposal
                                <Mail className="h-4 w-4" />
                            </LeadButton>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            {kpiItems.map((item) => (
                                <div key={item.label} className="metric-card">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                                    <p className="mt-2 text-[1.45rem] font-semibold tracking-tight text-slate-950">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={0.08} className="relative lg:pt-2">
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            className="product-frame"
                        >
                            <div className="frame-toolbar" />
                            <div className="overflow-hidden rounded-[1.4rem] border border-slate-200/80 bg-white">
                                <Image
                                    src="/hero-dashboard.png"
                                    alt="Dashboard SenYumBook menampilkan jadwal mingguan dan status booking pasien."
                                    width={640}
                                    height={640}
                                    priority
                                    className="h-auto w-full"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.22, duration: 0.5 }}
                            className="floating-note right-4 top-3 hidden lg:block"
                        >
                            <span className="note-dot bg-emerald-500" />
                            <p className="text-sm font-semibold text-slate-950">Reminder Terkirim</p>
                            <p className="text-xs text-slate-500">WhatsApp H-1 tanpa follow-up manual</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -18 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.28, duration: 0.5 }}
                            className="floating-card left-2 bottom-6 hidden xl:block"
                        >
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Booking flow</p>
                            <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50">
                                <Image
                                    src="/booking-flow-card.svg"
                                    alt="Ringkasan alur booking pasien SenYumBook."
                                    width={360}
                                    height={280}
                                    className="h-auto w-full"
                                />
                            </div>
                        </motion.div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

function TrustSection() {
    return (
        <section className="px-6 py-8 md:py-10">
            <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
                {proofCards.map((item, index) => (
                    <Reveal key={item.title} delay={index * 0.06}>
                        <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.22 }} className="executive-card p-6">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                                {index === 0 && <Sparkles className="h-5 w-5" />}
                                {index === 1 && <Stethoscope className="h-5 w-5" />}
                                {index === 2 && <CheckCircle2 className="h-5 w-5" />}
                            </div>
                            <h3 className="mt-5 text-[1.38rem] font-semibold tracking-tight text-slate-950">{item.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                        </motion.article>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

function FeatureSection() {
    return (
        <section id="fitur" className="px-6 py-20 md:py-24">
            <div className="mx-auto max-w-7xl">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <SectionTag>Core capabilities</SectionTag>
                    <h2 className="display-title mt-5 text-[clamp(2rem,3.8vw,3.4rem)] text-slate-950">Fitur inti yang relevan untuk validasi MVP klinik.</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                        Struktur halaman dibuat cepat dipahami. Fokus pada alur reservasi, reminder, dan presentasi produk yang terlihat serius.
                    </p>
                </Reveal>

                <div className="mt-14 grid gap-5 lg:grid-cols-2">
                    {featureCards.map((item, index) => (
                        <Reveal key={item.title} delay={index * 0.06}>
                            <motion.article whileHover={{ y: -5 }} transition={{ duration: 0.22 }} className="executive-card h-full p-7">
                                <div className="flex items-center justify-between gap-4">
                                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">0{index + 1}</p>
                                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                                        {item.metric}
                                    </span>
                                </div>
                                <h3 className="mt-6 text-[1.56rem] font-semibold tracking-tight text-slate-950">{item.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                            </motion.article>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-10 grid gap-4 rounded-[1.9rem] border border-slate-200/80 bg-slate-50/80 p-6 md:grid-cols-2 xl:grid-cols-4">
                    {timelineSteps.map((step, index) => (
                        <Reveal key={step.title} delay={index * 0.05}>
                            <div className="rounded-2xl border border-slate-200/75 bg-white px-4 py-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{step.label}</p>
                                <p className="mt-3 text-lg font-semibold tracking-tight text-slate-950">{step.title}</p>
                                <p className="mt-2 text-sm leading-7 text-slate-600">{step.body}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProductSection() {
    return (
        <section id="produk" className="px-6 py-20 md:py-24">
            <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200/85 bg-white/92 p-6 shadow-[0_32px_90px_-52px_rgba(15,23,42,0.35)] backdrop-blur-xl md:p-8">
                <div className="grid gap-10 lg:grid-cols-[0.83fr_1.17fr]">
                    <Reveal className="max-w-xl">
                        <SectionTag>Product evidence</SectionTag>
                        <h2 className="display-title mt-5 text-[clamp(2rem,3.8vw,3.3rem)] text-slate-950">Tampilan produk langsung membangun kepercayaan.</h2>
                        <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                            Di section ini, calon pengguna melihat konteks nyata: jadwal mingguan, flow booking, dan kanal konversi yang benar-benar aktif.
                        </p>

                        <div className="mt-8 space-y-4">
                            {[
                                "Informasi utama terbaca dalam hitungan detik.",
                                "Visual produk terasa siap dipakai, bukan konsep.",
                                "CTA WA dan Email selalu terlihat tanpa friksi.",
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={0.08} className="executive-card p-4 md:p-5">
                        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
                            <div className="overflow-hidden rounded-[1.4rem] border border-slate-200/80 bg-white">
                                <Image
                                    src="/hero-dashboard.png"
                                    alt="Dashboard SenYumBook dengan jadwal mingguan dan status kunjungan pasien."
                                    width={640}
                                    height={640}
                                    className="h-auto w-full"
                                />
                            </div>

                            <div className="grid gap-4">
                                <div className="overflow-hidden rounded-[1.35rem] border border-slate-200/80 bg-slate-50">
                                    <Image
                                        src="/booking-flow-card.svg"
                                        alt="Visual alur booking pasien SenYumBook."
                                        width={360}
                                        height={280}
                                        className="h-auto w-full"
                                    />
                                </div>

                                <div className="rounded-[1.35rem] border border-blue-100 bg-blue-50/85 p-5">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700">Live contact channels</p>
                                    <p className="mt-3 text-xl font-semibold tracking-tight text-slate-950">Konversi langsung ke kanal follow-up riil.</p>
                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                        Tombol WhatsApp dan email sudah siap dipakai untuk demo, trial, atau diskusi pricing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

function FaqSection() {
    return (
        <section id="faq" className="px-6 py-20 md:py-24">
            <div className="mx-auto max-w-7xl">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <SectionTag>Frequently asked</SectionTag>
                    <h2 className="display-title mt-5 text-[clamp(2rem,3.6vw,3.15rem)] text-slate-950">Pertanyaan sebelum klinik memutuskan demo.</h2>
                </Reveal>

                <div className="mx-auto mt-12 max-w-4xl space-y-4">
                    {faqItems.map((faq, index) => (
                        <Reveal key={faq.question} delay={index * 0.06}>
                            <details className="faq-item group" open={index === 0}>
                                <summary className="flex items-center justify-between gap-4">
                                    <span className="text-base font-semibold tracking-tight text-slate-950 md:text-lg">{faq.question}</span>
                                    <span className="faq-pill">Buka</span>
                                </summary>
                                <p className="pt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
                            </details>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function LeadSection() {
    const [name, setName] = useState("");
    const [clinic, setClinic] = useState("");
    const [phone, setPhone] = useState("");

    const leadMessage = buildLeadMessage(name, clinic, phone);
    const emailBody = buildLeadEmailBody(name, clinic, phone);

    return (
        <section id="lead-form" className="px-6 py-20 md:py-24">
            <Reveal className="mx-auto max-w-7xl rounded-[2rem] border border-slate-800/80 bg-slate-950 px-8 py-12 text-white shadow-[0_42px_120px_-56px_rgba(2,8,20,0.9)] md:px-12 lg:px-14">
                <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
                    <div className="max-w-xl">
                        <SectionTag tone="dark">Lead capture</SectionTag>
                        <h2 className="display-title mt-5 text-[clamp(2rem,3.8vw,3.25rem)] text-white">Kirim lead ke WhatsApp dan email tanpa integrasi kompleks.</h2>
                        <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                            Untuk fase MVP, funnel cukup diarahkan ke channel follow-up yang sudah dipakai tim Anda setiap hari.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <LeadButton href={buildWhatsAppHref(leadMessage)} enabled={Boolean(whatsappNumber)} tone="light">
                                Kirim ke WhatsApp
                                <MessageCircle className="h-4 w-4" />
                            </LeadButton>
                            <LeadButton
                                href={buildMailtoHref("Lead Baru SenYumBook", emailBody)}
                                enabled={Boolean(leadEmail)}
                                tone="light"
                            >
                                Kirim ke Email
                                <Mail className="h-4 w-4" />
                            </LeadButton>
                        </div>

                        <div className="mt-6 space-y-2 text-sm text-slate-400">
                            <p>WhatsApp: {whatsappNumber ? `aktif ke ${whatsappNumber}` : "belum dikonfigurasi"}</p>
                            <p>Email: {leadEmail || "belum dikonfigurasi"}</p>
                        </div>
                    </div>

                    <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                        <div className="grid gap-4">
                            <label className="grid gap-2 text-sm text-slate-300">
                                Nama
                                <input
                                    className="lead-input"
                                    placeholder="dr. Salma"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </label>

                            <label className="grid gap-2 text-sm text-slate-300">
                                Nama klinik
                                <input
                                    className="lead-input"
                                    placeholder="Klinik Senyum Sehat"
                                    value={clinic}
                                    onChange={(event) => setClinic(event.target.value)}
                                />
                            </label>

                            <label className="grid gap-2 text-sm text-slate-300">
                                Nomor WhatsApp
                                <input
                                    className="lead-input"
                                    placeholder="08xxxxxxxxxx"
                                    value={phone}
                                    onChange={(event) => setPhone(event.target.value)}
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}

function Footer() {
    return (
        <footer className="border-t border-slate-200/70 px-6 py-10">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-sm font-semibold tracking-tight text-slate-950">SenYumBook</p>
                    <p className="mt-1 text-sm text-slate-500">Landing page MVP untuk reservation-first SaaS klinik gigi kecil di Indonesia.</p>
                </div>

                <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2">
                        <Clock3 className="h-4 w-4" />
                        Setup cepat
                    </span>
                    <span className="inline-flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        Booking-first
                    </span>
                    <span className="inline-flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4" />
                        CTA live
                    </span>
                </div>
            </div>
        </footer>
    );
}

function StickyAssist() {
    const floatingMessage = buildLeadMessage("", "Klinik saya", "");

    return (
        <motion.a
            href={buildWhatsAppHref(floatingMessage)}
            whileHover={{ y: -4, scale: 1.01 }}
            className="fixed bottom-5 right-5 z-50 hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-lg lg:inline-flex"
        >
            <MessageCircle className="h-4 w-4" />
            Chat cepat
            <ArrowUpRight className="h-4 w-4" />
        </motion.a>
    );
}

export default function LandingPage() {
    return (
        <main className="app-shell min-h-screen">
            <Navbar />
            <HeroSection />
            <TrustSection />
            <FeatureSection />
            <ProductSection />
            <FaqSection />
            <LeadSection />
            <Footer />
            <StickyAssist />
        </main>
    );
}
