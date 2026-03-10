"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CalendarDays,
    CheckCircle2,
    ChevronRight,
    Clock3,
    Mail,
    MessageCircle,
    ShieldCheck,
    Sparkles,
    Star,
    Stethoscope,
} from "lucide-react";

const featureCards = [
    {
        title: "Booking link yang langsung bisa dibagikan",
        body: "Taruh di bio Instagram, WhatsApp Business, atau Google Maps. Pasien bisa pilih jadwal tanpa chat berulang.",
    },
    {
        title: "Reminder WhatsApp berjalan otomatis",
        body: "Konfirmasi booking, reminder H-24, dan reminder H-1 terkirim tanpa kerja manual tambahan dari admin.",
    },
    {
        title: "Dashboard yang relevan untuk klinik kecil",
        body: "Jadwal mingguan, status pasien, dan konteks operasional terlihat cepat bahkan dari layar laptop kecil atau HP.",
    },
    {
        title: "Tampilan brand yang lebih meyakinkan",
        body: "Landing page tidak terasa seperti prototipe kosong. Calon pengguna langsung melihat bentuk produk dan value utamanya.",
    },
];

const proofCards = [
    {
        icon: Star,
        title: "Lebih profesional sejak klik pertama",
        body: "Screenshot produk nyata membuat presentasi produk terasa kredibel dan tidak abstrak.",
    },
    {
        icon: Stethoscope,
        title: "Bahasa visualnya cocok untuk klinik kecil",
        body: "Tidak terasa seperti software rumah sakit. Lebih ringan, lebih bersih, dan lebih dekat ke konteks meja depan klinik.",
    },
    {
        icon: Sparkles,
        title: "Siap dipakai untuk validasi lead",
        body: "CTA sekarang bisa langsung diarahkan ke WhatsApp dan email yang benar-benar Anda pakai.",
    },
];

const faqItems = [
    {
        question: "Apakah pasien harus install aplikasi?",
        answer: "Tidak. Pasien cukup buka link booking di browser HP lalu pilih jadwal. Tidak ada aplikasi yang perlu diunduh.",
    },
    {
        question: "Cocok untuk klinik kecil atau praktek mandiri?",
        answer: "Ya. SenYumBook diposisikan untuk klinik gigi kecil yang ingin booking rapi tanpa software operasional yang berat.",
    },
    {
        question: "Apakah lead form ini butuh backend?",
        answer: "Belum. Untuk tahap MVP, data lead diarahkan langsung ke WhatsApp atau email supaya validasi pasar bisa berjalan cepat.",
    },
];

const stats = [
    { label: "Setup awal", value: "< 5 menit" },
    { label: "Alur booking", value: "< 1 menit" },
    { label: "Posisi produk", value: "Reservation-first" },
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

function FadeIn({
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
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

function LeadButton({
    href,
    enabled,
    variant,
    children,
}: {
    href: string;
    enabled: boolean;
    variant: "primary" | "secondary";
    children: React.ReactNode;
}) {
    const className = variant === "primary" ? "bbtn-primary" : "bbtn-secondary";

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
    return (
        <span
            className={
                tone === "light"
                    ? "inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700"
                    : "inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-200"
            }
        >
            {children}
        </span>
    );
}

function Navbar() {
    return (
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.05] bg-white/78 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <a href="#top" className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-zinc-950 text-sm font-semibold text-white">
                        S
                    </div>
                    <div>
                        <p className="text-sm font-semibold tracking-tight text-zinc-950">SenYumBook</p>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">Reservation-first</p>
                    </div>
                </a>

                <div className="hidden items-center gap-8 text-sm font-medium text-zinc-500 md:flex">
                    <a href="#fitur" className="transition-colors hover:text-zinc-950">
                        Fitur
                    </a>
                    <a href="#produk" className="transition-colors hover:text-zinc-950">
                        Produk
                    </a>
                    <a href="#lead-form" className="transition-colors hover:text-zinc-950">
                        Kontak
                    </a>
                </div>

                <a href="#lead-form" className="bbtn-primary text-sm">
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
        <section id="top" className="section-shell bg-grid-pattern overflow-hidden px-6 pb-18 pt-32 md:pb-24">
            <div className="hero-orb hero-orb-left" />
            <div className="hero-orb hero-orb-right" />

            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
                    <FadeIn className="relative z-10 max-w-xl">
                        <SectionTag>Landing page MVP</SectionTag>

                        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-zinc-400">
                            Untuk klinik gigi kecil di Indonesia
                        </p>

                        <h1 className="mt-4 text-[clamp(2.9rem,5vw,4.8rem)] leading-[0.96] text-zinc-950">
                            Booking yang rapi, reminder yang jalan, dan brand yang terasa lebih siap.
                        </h1>

                        <p className="mt-6 max-w-lg text-base leading-8 text-zinc-600 md:text-lg">
                            SenYumBook membantu klinik berhenti bergantung pada chat manual untuk reservasi. Pasien booking lebih cepat, admin lebih tenang, dan follow-up terasa profesional.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <LeadButton href={buildWhatsAppHref(heroMessage)} enabled={Boolean(whatsappNumber)} variant="primary">
                                Chat WhatsApp
                                <MessageCircle className="h-4 w-4" />
                            </LeadButton>
                            <LeadButton href={heroEmail} enabled={Boolean(leadEmail)} variant="secondary">
                                Kirim Email
                                <Mail className="h-4 w-4" />
                            </LeadButton>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            {stats.map((item) => (
                                <div key={item.label} className="trust-card rounded-[1.45rem] p-5">
                                    <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">{item.label}</p>
                                    <p className="mt-2 text-lg font-semibold tracking-tight text-zinc-950">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1} className="relative mx-auto w-full max-w-[760px]">
                        <div className="relative rounded-[2rem] border border-white/70 bg-white/92 p-4 shadow-[0_40px_100px_-32px_rgba(15,23,42,0.22)] backdrop-blur-xl">
                            <div className="overflow-hidden rounded-[1.6rem] border border-black/[0.06] bg-white">
                                <Image
                                    src="/hero-dashboard.png"
                                    alt="Tampilan dashboard SenYumBook dengan jadwal mingguan dan status booking pasien."
                                    width={640}
                                    height={640}
                                    priority
                                    className="h-auto w-full"
                                />
                            </div>
                        </div>

                        <div className="absolute -left-4 bottom-8 hidden w-56 rounded-[1.35rem] border border-white/80 bg-white/90 p-4 shadow-lg backdrop-blur-xl xl:block">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">Booking flow</p>
                            <div className="mt-3 overflow-hidden rounded-2xl border border-black/[0.06] bg-zinc-50">
                                <Image
                                    src="/booking-flow-card.svg"
                                    alt="Ringkasan visual alur booking pasien SenYumBook."
                                    width={360}
                                    height={280}
                                    className="h-auto w-full"
                                />
                            </div>
                        </div>

                        <div className="absolute right-3 top-6 hidden rounded-[1.3rem] border border-white/80 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-xl lg:block">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                                    <CheckCircle2 className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-zinc-950">Reminder terkirim</p>
                                    <p className="text-xs text-zinc-500">WhatsApp H-1 tanpa follow-up manual</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

function ProofSection() {
    return (
        <section className="px-6 py-8 md:py-10">
            <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
                {proofCards.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <FadeIn key={item.title} delay={index * 0.06} className="trust-card rounded-[1.6rem] p-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                                <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="mt-5 text-xl text-zinc-950">{item.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-zinc-600">{item.body}</p>
                        </FadeIn>
                    );
                })}
            </div>
        </section>
    );
}

function FeatureSection() {
    return (
        <section id="fitur" className="px-6 py-20 md:py-24">
            <div className="mx-auto max-w-7xl">
                <FadeIn className="mx-auto max-w-3xl text-center">
                    <SectionTag>Fitur inti</SectionTag>
                    <h2 className="mt-5 text-[clamp(2.4rem,4.5vw,3.8rem)] leading-[1] text-zinc-950">
                        Cukup fitur yang membuat pasien booking dan klinik terlihat rapi.
                    </h2>
                    <p className="mt-5 text-base leading-8 text-zinc-600 md:text-lg">
                        Halaman ini dijaga fokus agar value produk tertangkap cepat, bukan tenggelam di copy yang terlalu banyak.
                    </p>
                </FadeIn>

                <div className="mt-14 grid gap-6 lg:grid-cols-2">
                    {featureCards.map((card, index) => (
                        <FadeIn key={card.title} delay={index * 0.06} className="bento-card min-h-[220px]">
                            <span className="inline-flex rounded-full border border-black/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                                0{index + 1}
                            </span>
                            <h3 className="mt-7 max-w-sm text-[1.7rem] text-zinc-950">{card.title}</h3>
                            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-600">{card.body}</p>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProductSection() {
    return (
        <section id="produk" className="px-6 py-20 md:py-24">
            <div className="mx-auto max-w-7xl rounded-[2.2rem] bg-white/72 p-6 shadow-[0_28px_80px_-42px_rgba(15,23,42,0.25)] backdrop-blur-xl md:p-8">
                <div className="grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr]">
                    <FadeIn className="max-w-xl">
                        <SectionTag>Screenshot produk</SectionTag>
                        <h2 className="mt-5 text-[clamp(2.4rem,4.4vw,3.8rem)] leading-[1] text-zinc-950">
                            Bukan mockup abstrak. Produk utamanya langsung kelihatan.
                        </h2>
                        <p className="mt-5 text-base leading-8 text-zinc-600 md:text-lg">
                            Di desktop, section ini harus terasa seperti pembuktian. Pengguna melihat tampilan jadwal, flow booking, dan konteks reminder dalam satu blok yang rapi.
                        </p>

                        <div className="mt-8 space-y-4">
                            {[
                                "Jadwal mingguan langsung terbaca.",
                                "Reminder dan booking terasa konkret, bukan cuma janji.",
                                "Proporsi section lebih seimbang dengan hero.",
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                                    <p className="text-sm leading-7 text-zinc-600">{item}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.08} className="bento-card p-4 md:p-5">
                        <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
                            <div className="overflow-hidden rounded-[1.5rem] border border-black/[0.06] bg-white">
                                <Image
                                    src="/hero-dashboard.png"
                                    alt="Dashboard SenYumBook dengan weekly schedule dan status pasien."
                                    width={640}
                                    height={640}
                                    className="h-auto w-full"
                                />
                            </div>

                            <div className="grid gap-4">
                                <div className="overflow-hidden rounded-[1.5rem] border border-black/[0.06] bg-zinc-50">
                                    <Image
                                        src="/booking-flow-card.svg"
                                        alt="Visual ringkas alur booking pasien SenYumBook."
                                        width={360}
                                        height={280}
                                        className="h-auto w-full"
                                    />
                                </div>

                                <div className="rounded-[1.5rem] border border-blue-100 bg-blue-50/90 p-5">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">Lead ready</p>
                                    <p className="mt-3 text-xl font-semibold tracking-tight text-zinc-950">CTA sekarang sudah terhubung ke kontak riil.</p>
                                    <p className="mt-3 text-sm leading-7 text-zinc-600">
                                        WhatsApp dan email lead siap dipakai untuk demo atau trial tanpa menambah backend form lebih dulu.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

function FaqSection() {
    return (
        <section className="px-6 py-20 md:py-24">
            <div className="mx-auto max-w-7xl">
                <FadeIn className="mx-auto max-w-3xl text-center">
                    <SectionTag>FAQ</SectionTag>
                    <h2 className="mt-5 text-[clamp(2.4rem,4.4vw,3.7rem)] leading-[1] text-zinc-950">
                        Pertanyaan penting sebelum calon pengguna klik demo.
                    </h2>
                </FadeIn>

                <div className="mx-auto mt-14 max-w-4xl space-y-4">
                    {faqItems.map((faq, index) => (
                        <FadeIn key={faq.question} delay={index * 0.06}>
                            <details className="faq-item group" open={index === 0}>
                                <summary className="flex items-center justify-between gap-4">
                                    <span className="text-lg font-semibold tracking-tight text-zinc-950">{faq.question}</span>
                                    <span className="rounded-full border border-black/[0.06] px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-400 transition-colors group-open:text-zinc-950">
                                        Buka
                                    </span>
                                </summary>
                                <p className="pt-4 text-sm leading-7 text-zinc-600">{faq.answer}</p>
                            </details>
                        </FadeIn>
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
            <FadeIn className="mx-auto max-w-7xl rounded-[2rem] border border-black/[0.06] bg-zinc-950 px-8 py-12 text-white shadow-[0_40px_100px_-32px_rgba(15,23,42,0.45)] md:px-12 lg:px-14">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="max-w-xl">
                        <SectionTag tone="dark">Lead capture</SectionTag>
                        <h2 className="mt-5 text-[clamp(2.4rem,4.5vw,3.8rem)] leading-[1] text-white">
                            Calon pengguna bisa langsung masuk ke WhatsApp atau email Anda.
                        </h2>
                        <p className="mt-5 text-base leading-8 text-zinc-300 md:text-lg">
                            Form ini tetap ringan. Untuk tahap MVP, data lead diteruskan ke kanal follow-up yang benar-benar Anda pakai.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <LeadButton href={buildWhatsAppHref(leadMessage)} enabled={Boolean(whatsappNumber)} variant="secondary">
                                Kirim ke WhatsApp
                                <MessageCircle className="h-4 w-4" />
                            </LeadButton>
                            <LeadButton
                                href={buildMailtoHref("Lead Baru SenYumBook", emailBody)}
                                enabled={Boolean(leadEmail)}
                                variant="secondary"
                            >
                                Kirim ke Email
                                <Mail className="h-4 w-4" />
                            </LeadButton>
                        </div>

                        <div className="mt-6 space-y-2 text-sm text-zinc-400">
                            <p>WhatsApp: {whatsappNumber ? `aktif ke ${whatsappNumber}` : "belum dikonfigurasi"}</p>
                            <p>Email: {leadEmail || "belum dikonfigurasi"}</p>
                        </div>
                    </div>

                    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                        <div className="grid gap-4">
                            <label className="grid gap-2 text-sm text-zinc-300">
                                Nama
                                <input
                                    className="lead-input"
                                    placeholder="dr. Salma"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </label>

                            <label className="grid gap-2 text-sm text-zinc-300">
                                Nama klinik
                                <input
                                    className="lead-input"
                                    placeholder="Klinik Senyum Sehat"
                                    value={clinic}
                                    onChange={(event) => setClinic(event.target.value)}
                                />
                            </label>

                            <label className="grid gap-2 text-sm text-zinc-300">
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
            </FadeIn>
        </section>
    );
}

function Footer() {
    return (
        <footer className="border-t border-black/[0.05] px-6 py-10">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-sm font-semibold tracking-tight text-zinc-950">SenYumBook</p>
                    <p className="mt-1 text-sm text-zinc-500">Landing page MVP untuk reservation-first SaaS klinik gigi kecil di Indonesia.</p>
                </div>

                <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-500">
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
                        CTA siap dipakai
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default function LandingPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <HeroSection />
            <ProofSection />
            <FeatureSection />
            <ProductSection />
            <FaqSection />
            <LeadSection />
            <Footer />
        </main>
    );
}
