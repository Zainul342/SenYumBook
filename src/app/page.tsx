"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Calendar, MessageCircle, BarChart3, Smartphone, Zap, Clock } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper for tailwind class merging
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// ---------------------------------------------------------
// REUSABLE UI PRIMITIVES (Boutique SaaS Style)
// ---------------------------------------------------------

const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={className}
    >
        {children}
    </motion.div>
);

const PillBadge = ({ children, color = "primary" }: { children: React.ReactNode, color?: "primary" | "secondary" }) => (
    <span className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-widest",
        color === "primary" ? "bg-blue-50 text-blue-600 border border-blue-100" : "bg-green-50 text-green-600 border border-green-100"
    )}>
        {children}
    </span>
);

// ---------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------

const Navbar = () => (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-black/[0.03]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-zinc-900 flex items-center justify-center">
                    <span className="text-white font-bold text-xs tracking-tighter">S</span>
                </div>
                <span className="font-bold text-zinc-900 tracking-tight">SenYumBook</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
                <a href="#fitur" className="hover:text-zinc-900 transition-colors">Fitur</a>
                <a href="#harga" className="hover:text-zinc-900 transition-colors">Harga</a>
                <a href="#faq" className="hover:text-zinc-900 transition-colors">FAQ</a>
            </div>
            <div>
                <button className="bbtn-primary text-sm px-4 py-2">
                    Coba Gratis <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    </nav>
);

// CSS Product Mockup: WhatsApp Notification
const FakeWhatsAppNotif = () => (
    <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 20 }}
        className="absolute -right-8 -bottom-8 md:right-0 md:top-32 w-72 bg-white rounded-2xl p-4 shadow-float border border-black/[0.04] z-10"
    >
        <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <MessageCircle className="w-4 h-4" />
            </div>
            <div>
                <div className="text-xs font-semibold text-zinc-900">SenYumBook Bot</div>
                <div className="text-[10px] text-zinc-400">Baru saja</div>
            </div>
        </div>
        <div className="text-xs text-zinc-600 leading-relaxed bg-zinc-50 p-3 rounded-xl border border-black/[0.02]">
            "Halo Budi! Mengingatkan jadwal periksa gigi Anda esok hari pkl 10:00 dengan dr. Salma."
        </div>
    </motion.div>
);

// CSS Product Mockup: Simple Dashboard
const FakeDashboard = () => (
    <div className="relative w-full aspect-[4/3] max-w-lg mx-auto bg-white rounded-3xl border border-black/[0.04] shadow-bento overflow-hidden flex flex-col">
        {/* Mac OS dot header */}
        <div className="h-10 border-b border-black/[0.02] bg-zinc-50/50 flex items-center px-4 gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        {/* Body */}
        <div className="p-6 flex-1 bg-gradient-to-br from-zinc-50/50 to-white">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="font-semibold text-zinc-900">Jadwal Hari Ini</h3>
                    <p className="text-xs text-zinc-400">12 Pasien Terjadwal</p>
                </div>
                <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium border border-blue-100">
                    Otomatis Berjalan
                </div>
            </div>

            <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white border border-black/[0.02] shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                            <div>
                                <div className="text-sm font-medium text-zinc-800">Pasien {i}</div>
                                <div className="text-xs text-zinc-400">Konsultasi Cabut Gigi</div>
                            </div>
                        </div>
                        <div className="text-xs font-medium text-zinc-500">10:00</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const Hero = () => (
    <section className="pt-32 pb-20 px-6 overflow-hidden bg-grid-pattern relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
                <PillBadge>Didesain untuk Klinik Gigi</PillBadge>
                <h1 className="text-5xl md:text-6xl tracking-tighter mt-6 mb-6">
                    Reservasi otomatis. <br />
                    <span className="text-zinc-400">Tanpa ribet chat WA.</span>
                </h1>
                <p className="text-lg text-zinc-500 mb-8 max-w-md leading-relaxed">
                    Link booking publik yang elegan, dashboard harian super simpel, dan pengingat WhatsApp otomatis untuk menekan pasien no-show hingga 70%.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bbtn-primary">
                        Coba Gratis 14 Hari
                    </button>
                    <button className="bbtn-secondary">
                        Lihat Demo
                    </button>
                </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
                <FakeDashboard />
                <FakeWhatsAppNotif />
                {/* Glow behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10" />
            </FadeIn>
        </div>
    </section>
);

const BentoFeatures = () => (
    <section id="fitur" className="py-24 px-6 bg-white border-t border-black/[0.02]">
        <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl tracking-tighter mb-4">Sistem Cerdas, Tampilan Sesederhana Mungkin</h2>
                <p className="text-zinc-500 max-w-xl mx-auto">Kami membuang fitur kalender yang rumit dan hanya menyisakan apa yang benar-benar dibutuhkan oleh klinik gigi Anda.</p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6 auto-rows-[250px]">

                {/* Main Feature: spans 2 cols, 2 rows */}
                <FadeIn delay={0.1} className="bento-card md:col-span-2 md:row-span-2 flex flex-col">
                    <div className="mb-4">
                        <Zap className="w-6 h-6 text-zinc-900 mb-2" />
                        <h3 className="text-xl font-bold tracking-tight mb-2">Automasi WhatsApp Tanpa Ampun</h3>
                        <p className="text-zinc-500 text-sm">Setiap pasien yang booking langsung menerima konfirmasi, H-1 pengingat, dan H-1 jam pengingat tanpa admin Anda menekan satu tombol pun.</p>
                    </div>
                    <div className="flex-1 mt-6 rounded-xl bg-zinc-50 border border-black/[0.02] p-6 relative overflow-hidden flex items-center justify-center">
                        {/* Abstract WA bubble representation */}
                        <div className="space-y-3 w-full max-w-xs">
                            <div className="h-10 bg-green-100/50 rounded-2xl rounded-tl-sm w-3/4 animate-pulse relative">
                                <div className="absolute right-2 bottom-2 w-2 h-2 bg-green-500 rounded-full" />
                            </div>
                            <div className="h-16 bg-blue-50/50 rounded-2xl rounded-tr-sm w-full ml-auto animate-pulse [animation-delay:500ms]" />
                        </div>
                    </div>
                </FadeIn>

                {/* Short Feature 1 */}
                <FadeIn delay={0.2} className="bento-card flex flex-col justify-between group">
                    <div>
                        <Smartphone className="w-5 h-5 text-zinc-400 mb-2 group-hover:text-zinc-900 transition-colors" />
                        <h3 className="font-semibold tracking-tight text-zinc-900 mb-1">Booking Link Publik</h3>
                        <p className="text-xs text-zinc-500">Taruh di bio IG. Pasien booking dalam 35 detik.</p>
                    </div>
                    <div className="h-20 w-full mt-4 bg-gradient-to-t from-zinc-50 to-transparent border-t border-black/[0.02] rounded-b-xl" />
                </FadeIn>

                {/* Short Feature 2 */}
                <FadeIn delay={0.3} className="bento-card flex flex-col justify-between group">
                    <div>
                        <Calendar className="w-5 h-5 text-zinc-400 mb-2 group-hover:text-zinc-900 transition-colors" />
                        <h3 className="font-semibold tracking-tight text-zinc-900 mb-1">Mobile Admin List</h3>
                        <p className="text-xs text-zinc-500">Mbak klinik cukup swipe kanan/kiri untuk validasi kehadiran pasien harian.</p>
                    </div>
                </FadeIn>

                {/* Wide Feature (bottom row, 2 cols if we want, or just let it flow) */}
                <FadeIn delay={0.4} className="bento-card md:col-span-3 flex sm:flex-row flex-col gap-6 items-center">
                    <div className="flex-1">
                        <PillBadge color="secondary">Keamanan Data</PillBadge>
                        <h3 className="text-lg font-bold tracking-tight mt-3 mb-2">Sesuai Standar UU PDP Indonesia</h3>
                        <p className="text-sm text-zinc-500">Data rekam medis ringan dan nomor telepon pasien dienkripsi penuh. Dokter tidur tenang, data pasien aman.</p>
                    </div>
                    <div className="w-full sm:w-64 h-24 rounded-xl bg-zinc-950 flex flex-col justify-center items-center text-zinc-500 font-mono text-xs">
                        <div className="flex gap-2 opacity-50"><CheckCircle2 className="w-4 h-4 text-green-400" /> end-to-end encryption</div>
                        <div className="flex gap-2 opacity-50 mt-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> secure payload</div>
                    </div>
                </FadeIn>

            </div>
        </div>
    </section>
);

const Pricing = () => (
    <section id="harga" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-16">
                <h2 className="text-3xl tracking-tighter mb-4">Harga Simpel. Tanpa Biaya Tersembunyi.</h2>
                <p className="text-zinc-500">Mulai gratis, upgrade saat klinik Anda semakin sibuk.</p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Tier 1 */}
                <FadeIn delay={0.1} className="bento-card flex flex-col">
                    <h3 className="font-bold text-xl tracking-tight mb-2">Starter</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-3xl font-extrabold tracking-tighter">Rp 0</span>
                        <span className="text-zinc-400 text-sm">/bulan</span>
                    </div>
                    <p className="text-sm text-zinc-500 mb-8 border-b border-black/[0.04] pb-6">Sempurna untuk dokter praktik mandiri yang baru merintis.</p>

                    <ul className="space-y-4 flex-1 mb-8">
                        {["Booking Link Basic", "Hingga 50 Reservasi/Bulan", "Dashboard Admin Mobile", "Notifikasi Email"].map((feat, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 text-zinc-300 mt-0.5" />
                                <span className="text-sm text-zinc-600">{feat}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="bbtn-secondary w-full">Mulai Gratis</button>
                </FadeIn>

                {/* Tier 2 */}
                <FadeIn delay={0.2} className="bento-card border-zinc-900 shadow-xl flex flex-col relative">
                    <div className="absolute top-0 inset-x-0 h-1 bg-zinc-900" />
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-xl tracking-tight text-zinc-900">Pro Clinic</h3>
                        <PillBadge color="secondary">Paling Laris</PillBadge>
                    </div>
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-3xl font-extrabold tracking-tighter text-zinc-900">Rp 299k</span>
                        <span className="text-zinc-400 text-sm">/bulan</span>
                    </div>
                    <p className="text-sm text-zinc-500 mb-8 border-b border-black/[0.04] pb-6">Automasi penuh untuk mengurangi pasien batal hadir drastis.</p>

                    <ul className="space-y-4 flex-1 mb-8">
                        {["Semua di Starter", "Reservasi Tanpa Batas", "Automasi WhatsApp Penuh", "Laporan Kehadiran", "Dukungan Prioritas"].map((feat, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 text-zinc-900 mt-0.5" />
                                <span className="text-sm text-zinc-700 font-medium">{feat}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="bbtn-primary w-full">Coba Gratis 14 Hari</button>
                </FadeIn>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="border-t border-black/[0.04] py-12 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-zinc-300 flex items-center justify-center">
                    <span className="text-white font-bold text-[10px]">S</span>
                </div>
                <span className="font-bold text-zinc-800 text-sm">SenYumBook</span>
            </div>
            <p className="text-xs text-zinc-400">© 2026 SenYumBook. Didesain untuk Klinik Gigi Indonesia.</p>
        </div>
    </footer>
);

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <Hero />
            <BentoFeatures />
            <Pricing />
            <Footer />
        </main>
    );
}
