import Image from "next/image";

export default function Home() {
    return (
        <>
            {/* ===== NAVBAR ===== */}
            <nav className="nav-bar">
                <div className="nav-inner">
                    <a href="#" className="nav-logo">
                        🦷 SenYumBook
                    </a>
                    <ul className="nav-links">
                        <li><a href="#fitur">Fitur</a></li>
                        <li><a href="#harga">Harga</a></li>
                        <li><a href="#testimoni">Testimoni</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li>
                            <a href="#harga" className="zen-btn-primary" style={{ padding: "0.625rem 1.5rem", fontSize: "0.875rem" }}>
                                Mulai Trial Gratis
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <main style={{ paddingTop: "4.5rem" }}>
                {/* ===== 1. HERO: HEADLINE + SUBHEADLINE + CTA + IMAGE ===== */}
                <section className="zen-section" style={{ textAlign: "center", paddingBottom: "3rem" }}>
                    <div className="animate-fade-in-up">
                        <span className="section-badge">🚀 #1 Booking System Klinik Gigi</span>
                        <h1 style={{ maxWidth: "900px", margin: "0 auto 1.5rem" }}>
                            Tambah 30% Pasien Baru &amp;{" "}
                            <span className="gradient-text">Kurangi No-Show Hingga 70%</span>
                        </h1>
                        <p style={{ maxWidth: "640px", margin: "0 auto 2rem", fontSize: "1.125rem" }}>
                            Pasien booking sendiri 24/7 via link IG / WA / GMaps. Kirim reminder otomatis WhatsApp.
                            Trial gratis 14 hari — tanpa kartu kredit, setup hanya 5 menit.
                        </p>
                        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <a href="#harga" className="zen-btn-primary zen-btn-large">
                                Coba Gratis 14 Hari →
                            </a>
                            <a href="#fitur" className="zen-btn-secondary zen-btn-large">
                                Lihat Fitur
                            </a>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="animate-float" style={{ marginTop: "3.5rem" }}>
                        <Image
                            src="/hero-dashboard.png"
                            alt="SenYumBook Dashboard — Kalender Reservasi Klinik Gigi"
                            width={1100}
                            height={700}
                            priority
                            style={{
                                width: "100%",
                                maxWidth: "1000px",
                                height: "auto",
                                borderRadius: "var(--radius-xl)",
                                boxShadow: "var(--shadow-float)",
                                border: "1px solid var(--border)",
                            }}
                        />
                    </div>
                </section>

                {/* ===== 5. SOCIAL PROOF BAR ===== */}
                <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--muted)" }}>
                    <div className="trust-bar" style={{ maxWidth: "1200px", margin: "0 auto", padding: "1.5rem" }}>
                        <div className="trust-bar-item">
                            <span style={{ fontSize: "1.25rem" }}>🏥</span>
                            <span><strong>50+</strong> klinik gigi di Jatim &amp; Jateng</span>
                        </div>
                        <div className="trust-bar-item">
                            <span style={{ color: "#FBBF24", fontSize: "1.125rem" }}>★★★★★</span>
                            <span>Rating 4.9/5</span>
                        </div>
                        <div className="trust-bar-item">
                            <span style={{ fontSize: "1.25rem" }}>📉</span>
                            <span>No-show turun <strong>70%</strong></span>
                        </div>
                        <div className="trust-bar-item">
                            <span style={{ fontSize: "1.25rem" }}>⏱️</span>
                            <span>Setup <strong>5 menit</strong></span>
                        </div>
                    </div>
                </section>

                {/* ===== 6. PROBLEM SECTION ===== */}
                <section className="zen-section" id="masalah">
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <span className="section-badge" style={{ background: "#FEF2F2", color: "#DC2626" }}>😩 Masalah yang Sering Terjadi</span>
                        <h2>Klinik Anda Masih Hadapi Ini?</h2>
                    </div>
                    <div className="features-grid" style={{ maxWidth: "900px", margin: "0 auto" }}>
                        <div className="problem-card">
                            <div className="problem-icon">📱</div>
                            <div>
                                <h4 style={{ marginBottom: "0.25rem", fontSize: "1rem" }}>WA Booking Berantakan</h4>
                                <p style={{ fontSize: "0.9375rem", margin: 0 }}>Masih balas WA booking satu-satu? Staf capek, rawan terlewat.</p>
                            </div>
                        </div>
                        <div className="problem-card">
                            <div className="problem-icon">🚫</div>
                            <div>
                                <h4 style={{ marginBottom: "0.25rem", fontSize: "1rem" }}>No-Show Tinggi</h4>
                                <p style={{ fontSize: "0.9375rem", margin: 0 }}>Pasien lupa janji → no-show tinggi, slot kosong, omzet hilang.</p>
                            </div>
                        </div>
                        <div className="problem-card">
                            <div className="problem-icon">📅</div>
                            <div>
                                <h4 style={{ marginBottom: "0.25rem", fontSize: "1rem" }}>Double Booking</h4>
                                <p style={{ fontSize: "0.9375rem", margin: 0 }}>Jadwal berantakan / double booking → pasien kecewa, review buruk.</p>
                            </div>
                        </div>
                        <div className="problem-card">
                            <div className="problem-icon">📋</div>
                            <div>
                                <h4 style={{ marginBottom: "0.25rem", fontSize: "1rem" }}>Data Tersebar</h4>
                                <p style={{ fontSize: "0.9375rem", margin: 0 }}>Data pasien tersebar → susah follow-up treatment selanjutnya.</p>
                            </div>
                        </div>
                    </div>
                    <p style={{ textAlign: "center", marginTop: "2rem", fontWeight: 600, color: "var(--destructive)" }}>
                        Rata-rata klinik kecil kehilangan 20–30% omzet karena no-show.
                    </p>
                </section>

                {/* ===== 7. YOUR OFFER ===== */}
                <section style={{ background: "var(--muted)" }}>
                    <div className="zen-section" style={{ textAlign: "center" }}>
                        <span className="section-badge">💡 Solusi</span>
                        <h2 style={{ marginBottom: "1rem" }}>
                            Kenalan dengan <span className="gradient-text">SenYumBook</span>
                        </h2>
                        <p style={{ maxWidth: "680px", margin: "0 auto", fontSize: "1.125rem" }}>
                            Solusi reservasi online khusus klinik gigi kecil. Pasien booking mudah, dokter fokus rawat gigi, bukan admin jadwal.
                        </p>
                    </div>
                </section>

                {/* ===== 8. PRODUCT FEATURES ===== */}
                <section className="zen-section" id="fitur">
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <span className="section-badge">⚡ Fitur Utama</span>
                        <h2>Semua yang Klinik Anda Butuhkan</h2>
                    </div>
                    <div className="features-grid">
                        <div className="zen-card">
                            <div className="feature-icon">📅</div>
                            <h4>Kalender Real-Time</h4>
                            <p style={{ margin: "0.5rem 0 0" }}>
                                Hindari double booking. Lihat slot tersedia secara real-time, sinkron otomatis.
                            </p>
                        </div>
                        <div className="zen-card">
                            <div className="feature-icon">💬</div>
                            <h4>Reminder WhatsApp Otomatis</h4>
                            <p style={{ margin: "0.5rem 0 0" }}>
                                Kirim reminder H-1 &amp; H jam otomatis. Kurangi no-show hingga 70%.
                            </p>
                        </div>
                        <div className="zen-card">
                            <div className="feature-icon">🔗</div>
                            <h4>Link Custom Booking</h4>
                            <p style={{ margin: "0.5rem 0 0" }}>
                                Taruh di bio IG, WA Business, Google Maps. Pasien booking 24/7.
                            </p>
                        </div>
                        <div className="zen-card">
                            <div className="feature-icon">📱</div>
                            <h4>Dashboard Mobile</h4>
                            <p style={{ margin: "0.5rem 0 0" }}>
                                Cek jadwal dari HP kapan saja. Terima notifikasi booking baru instant.
                            </p>
                        </div>
                        <div className="zen-card">
                            <div className="feature-icon">🗂️</div>
                            <h4>Data Pasien Otomatis</h4>
                            <p style={{ margin: "0.5rem 0 0" }}>
                                Riwayat pasien tersimpan rapi. Follow-up treatment jadi mudah.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ===== 9. PRODUCT BENEFITS ===== */}
                <section style={{ background: "var(--muted)" }}>
                    <div className="zen-section">
                        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                            <span className="section-badge">📈 Manfaat Nyata</span>
                            <h2>Hasil yang Bisa Anda Rasakan</h2>
                        </div>
                        <div className="benefits-grid" style={{ maxWidth: "800px", margin: "0 auto" }}>
                            <div className="zen-card" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div className="stat-number" style={{ fontSize: "2rem", minWidth: "3.5rem" }}>10+</div>
                                <div>
                                    <h4 style={{ marginBottom: "0.25rem" }}>Jam/Minggu Dihemat</h4>
                                    <p style={{ margin: 0, fontSize: "0.9375rem" }}>Staf tidak perlu balas WA satu-satu lagi.</p>
                                </div>
                            </div>
                            <div className="zen-card" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div className="stat-number" style={{ fontSize: "2rem", minWidth: "3.5rem" }}>70%</div>
                                <div>
                                    <h4 style={{ marginBottom: "0.25rem" }}>No-Show Berkurang</h4>
                                    <p style={{ margin: 0, fontSize: "0.9375rem" }}>Pasien datang tepat waktu, slot terisi penuh.</p>
                                </div>
                            </div>
                            <div className="zen-card" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div className="stat-number" style={{ fontSize: "2rem", minWidth: "3.5rem" }}>30%</div>
                                <div>
                                    <h4 style={{ marginBottom: "0.25rem" }}>Pasien Baru Naik</h4>
                                    <p style={{ margin: 0, fontSize: "0.9375rem" }}>Tambah pasien baru tanpa tambah orang.</p>
                                </div>
                            </div>
                            <div className="zen-card" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div className="stat-number" style={{ fontSize: "2rem", minWidth: "3.5rem" }}>⭐</div>
                                <div>
                                    <h4 style={{ marginBottom: "0.25rem" }}>Klinik Lebih Profesional</h4>
                                    <p style={{ margin: 0, fontSize: "0.9375rem" }}>Terlihat modern &amp; terpercaya di mata pasien.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== 10. TESTIMONIAL ===== */}
                <section className="zen-section" id="testimoni">
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <span className="section-badge">💬 Testimoni</span>
                        <h2>Apa Kata Mereka?</h2>
                    </div>
                    <div className="features-grid" style={{ maxWidth: "900px", margin: "0 auto" }}>
                        <div className="testimonial-card" style={{ paddingTop: "3rem" }}>
                            <p style={{ fontStyle: "italic", marginBottom: "1rem", fontSize: "1rem" }}>
                                App ini selamatkan waktu saya! Pasien tepat waktu, omzet naik. Support ramah banget.
                            </p>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                <div style={{
                                    width: "2.5rem", height: "2.5rem", borderRadius: "50%",
                                    background: "var(--primary)", display: "flex", alignItems: "center",
                                    justifyContent: "center", color: "white", fontWeight: 700, fontSize: "0.875rem"
                                }}>
                                    DS
                                </div>
                                <div>
                                    <p style={{ margin: 0, fontWeight: 600, color: "var(--foreground)", fontSize: "0.9375rem" }}>dr. Salma</p>
                                    <p style={{ margin: 0, fontSize: "0.8125rem" }}>Klinik Gigi Salma Medica, Malang</p>
                                </div>
                            </div>
                            <div style={{ marginTop: "0.75rem", color: "#FBBF24" }}>★★★★★</div>
                        </div>
                        <div className="testimonial-card" style={{ paddingTop: "3rem" }}>
                            <p style={{ fontStyle: "italic", marginBottom: "1rem", fontSize: "1rem" }}>
                                No-show turun drastis sejak pakai SenYumBook. Sekarang jadwal rapi, pasien happy!
                            </p>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                <div style={{
                                    width: "2.5rem", height: "2.5rem", borderRadius: "50%",
                                    background: "var(--secondary)", display: "flex", alignItems: "center",
                                    justifyContent: "center", color: "white", fontWeight: 700, fontSize: "0.875rem"
                                }}>
                                    AR
                                </div>
                                <div>
                                    <p style={{ margin: 0, fontWeight: 600, color: "var(--foreground)", fontSize: "0.9375rem" }}>drg. Andi R.</p>
                                    <p style={{ margin: 0, fontSize: "0.8125rem" }}>Dental Care Surabaya</p>
                                </div>
                            </div>
                            <div style={{ marginTop: "0.75rem", color: "#FBBF24" }}>★★★★★</div>
                        </div>
                    </div>
                </section>

                {/* ===== 11. BONUS ===== */}
                <section style={{ background: "linear-gradient(135deg, #FFFBEB, #FEF3C7)" }}>
                    <div className="zen-section" style={{ textAlign: "center" }}>
                        <div className="bonus-badge" style={{ marginBottom: "1rem" }}>🎁 BONUS EKSKLUSIF</div>
                        <h2 style={{ marginBottom: "1.5rem" }}>Daftar Sekarang, Dapat Bonus!</h2>
                        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <div className="zen-card" style={{ maxWidth: "320px", textAlign: "left" }}>
                                <h4 style={{ marginBottom: "0.5rem" }}>🎨 Template Promo IG</h4>
                                <p style={{ margin: 0, fontSize: "0.9375rem" }}>Template siap pakai untuk promosi klinik gigi di Instagram. Senilai Rp 500.000.</p>
                            </div>
                            <div className="zen-card" style={{ maxWidth: "320px", textAlign: "left" }}>
                                <h4 style={{ marginBottom: "0.5rem" }}>📞 Konsultasi Setup Gratis</h4>
                                <p style={{ margin: 0, fontSize: "0.9375rem" }}>30 menit konsultasi via WA/Zoom untuk setup optimal. Gratis selama trial.</p>
                            </div>
                        </div>
                        <p style={{ marginTop: "1.5rem", fontWeight: 700, color: "#92400E" }}>
                            Total bonus senilai Rp 1.000.000+ — gratis di masa trial!
                        </p>
                    </div>
                </section>

                {/* ===== 12. FOUNDER'S NOTE ===== */}
                <section className="zen-section" style={{ maxWidth: "720px" }}>
                    <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                        <span className="section-badge">✉️ Dari Founder</span>
                    </div>
                    <div className="zen-card" style={{ background: "var(--muted)", border: "none", textAlign: "center" }}>
                        <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "var(--foreground)" }}>
                            &ldquo;Saya lihat banyak klinik gigi kecil di Malang capek kelola jadwal manual via WA dan buku.
                            Akhirnya saya bikin SenYumBook. Sekarang klinik lebih tenang, pasien lebih puas, dan dokter bisa fokus rawat gigi.&rdquo;
                        </p>
                        <p style={{ marginTop: "1rem", fontWeight: 700, color: "var(--foreground)" }}>
                            Happy ending: Lebih banyak senyum, lebih sedikit stres. 😊
                        </p>
                    </div>
                </section>

                {/* ===== 13. CTA + PRICING ===== */}
                <section style={{ background: "var(--muted)" }} id="harga">
                    <div className="zen-section" style={{ textAlign: "center" }}>
                        <span className="section-badge">💰 Harga Transparan</span>
                        <h2 style={{ marginBottom: "0.5rem" }}>Pilih Paket &amp; Mulai Trial</h2>
                        <p style={{ maxWidth: "540px", margin: "0 auto 3rem" }}>
                            Semua paket termasuk trial gratis 14 hari. Tanpa kartu kredit.
                        </p>
                        <div className="pricing-grid">
                            {/* Starter */}
                            <div className="pricing-card">
                                <h4 style={{ color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>Starter</h4>
                                <div style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.25rem" }}>
                                    Rp 99<span style={{ fontSize: "1.25rem", fontWeight: 500 }}>rb</span>
                                </div>
                                <p style={{ fontSize: "0.875rem", marginBottom: "1.5rem" }}>/ bulan</p>
                                <ul style={{ listStyle: "none", textAlign: "left", marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9375rem" }}>
                                        <span style={{ color: "var(--secondary)" }}>✓</span> 1 dokter
                                    </li>
                                    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9375rem" }}>
                                        <span style={{ color: "var(--secondary)" }}>✓</span> Max 150 booking/bulan
                                    </li>
                                    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9375rem" }}>
                                        <span style={{ color: "var(--secondary)" }}>✓</span> Reminder WA
                                    </li>
                                    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9375rem" }}>
                                        <span style={{ color: "var(--secondary)" }}>✓</span> Link booking custom
                                    </li>
                                </ul>
                                <a href="#" className="zen-btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
                                    Mulai Trial
                                </a>
                            </div>

                            {/* Pro — Popular */}
                            <div className="pricing-card popular">
                                <h4 style={{ color: "var(--primary)", marginBottom: "0.5rem" }}>Pro</h4>
                                <div style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.25rem" }}>
                                    Rp 199<span style={{ fontSize: "1.25rem", fontWeight: 500 }}>rb</span>
                                </div>
                                <p style={{ fontSize: "0.875rem", marginBottom: "1.5rem" }}>/ bulan</p>
                                <ul style={{ listStyle: "none", textAlign: "left", marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9375rem" }}>
                                        <span style={{ color: "var(--secondary)" }}>✓</span> Unlimited booking
                                    </li>
                                    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9375rem" }}>
                                        <span style={{ color: "var(--secondary)" }}>✓</span> Analytics dashboard
                                    </li>
                                    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9375rem" }}>
                                        <span style={{ color: "var(--secondary)" }}>✓</span> Reminder premium (H-1 &amp; H jam)
                                    </li>
                                    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9375rem" }}>
                                        <span style={{ color: "var(--secondary)" }}>✓</span> Multi-dokter
                                    </li>
                                    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9375rem" }}>
                                        <span style={{ color: "var(--secondary)" }}>✓</span> Priority support
                                    </li>
                                </ul>
                                <a href="#" className="zen-btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                                    Mulai Trial Pro →
                                </a>
                            </div>

                            {/* Enterprise */}
                            <div className="pricing-card">
                                <h4 style={{ color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>Enterprise</h4>
                                <div style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.25rem" }}>
                                    Custom
                                </div>
                                <p style={{ fontSize: "0.875rem", marginBottom: "1.5rem" }}>hubungi kami</p>
                                <ul style={{ listStyle: "none", textAlign: "left", marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9375rem" }}>
                                        <span style={{ color: "var(--secondary)" }}>✓</span> Multi cabang
                                    </li>
                                    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9375rem" }}>
                                        <span style={{ color: "var(--secondary)" }}>✓</span> Custom branding
                                    </li>
                                    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9375rem" }}>
                                        <span style={{ color: "var(--secondary)" }}>✓</span> Dedicated account manager
                                    </li>
                                    <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9375rem" }}>
                                        <span style={{ color: "var(--secondary)" }}>✓</span> SLA guarantee
                                    </li>
                                </ul>
                                <a href="#" className="zen-btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
                                    Hubungi Sales
                                </a>
                            </div>
                        </div>
                        <p style={{ marginTop: "2rem", fontSize: "0.9375rem", color: "var(--destructive)", fontWeight: 600 }}>
                            🔥 Harga promo trial terbatas — daftar sekarang!
                        </p>
                    </div>
                </section>

                {/* ===== 14. TRUST ===== */}
                <section className="zen-section" style={{ textAlign: "center" }}>
                    <h2 style={{ marginBottom: "2rem" }}>Kami Jamin Kepuasan Anda</h2>
                    <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <div className="zen-card" style={{ maxWidth: "260px", textAlign: "center" }}>
                            <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🛡️</div>
                            <h4 style={{ marginBottom: "0.5rem" }}>Garansi 30 Hari</h4>
                            <p style={{ margin: 0, fontSize: "0.9375rem" }}>Uang kembali jika tidak puas. Tanpa syarat.</p>
                        </div>
                        <div className="zen-card" style={{ maxWidth: "260px", textAlign: "center" }}>
                            <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>💬</div>
                            <h4 style={{ marginBottom: "0.5rem" }}>Support via WhatsApp</h4>
                            <p style={{ margin: 0, fontSize: "0.9375rem" }}>Tim support ramah, respon cepat via WA.</p>
                        </div>
                        <div className="zen-card" style={{ maxWidth: "260px", textAlign: "center" }}>
                            <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>💰</div>
                            <h4 style={{ marginBottom: "0.5rem" }}>Lebih Murah</h4>
                            <p style={{ margin: 0, fontSize: "0.9375rem" }}>Lebih murah dari kompetitor full management system.</p>
                        </div>
                    </div>
                </section>

                {/* ===== 15. FAQ ===== */}
                <section style={{ background: "var(--muted)" }} id="faq">
                    <div className="zen-section" style={{ maxWidth: "760px" }}>
                        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                            <span className="section-badge">❓ FAQ</span>
                            <h2>Pertanyaan yang Sering Ditanyakan</h2>
                        </div>
                        <div>
                            <div className="faq-item">
                                <div className="faq-question">
                                    Apa bedanya dengan ICONIX / OmniCare / Plexo?
                                    <span>+</span>
                                </div>
                                <div className="faq-answer">
                                    SenYumBook lebih simpel, murah, dan fokus reservasi + WA reminder. Tidak memaksa Anda pakai full RME yang rumit.
                                </div>
                            </div>
                            <div className="faq-item">
                                <div className="faq-question">
                                    Integrasi WhatsApp-nya gimana?
                                    <span>+</span>
                                </div>
                                <div className="faq-answer">
                                    Otomatis kirim konfirmasi &amp; reminder tanpa perlu bot rumit. Cukup connect nomor WA Anda, selesai.
                                </div>
                            </div>
                            <div className="faq-item">
                                <div className="faq-question">
                                    Bisa custom nama klinik saya?
                                    <span>+</span>
                                </div>
                                <div className="faq-answer">
                                    Ya! Link booking &amp; dashboard bisa direbrand dengan nama dan logo klinik Anda.
                                </div>
                            </div>
                            <div className="faq-item">
                                <div className="faq-question">
                                    Bagaimana kalau pasien banyak?
                                    <span>+</span>
                                </div>
                                <div className="faq-answer">
                                    Pro plan unlimited booking, cocok untuk skalabilitas kecil-menengah. Butuh lebih? Paket Enterprise siap.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== FINAL CTA ===== */}
                <section className="zen-section" style={{ textAlign: "center", paddingTop: "5rem", paddingBottom: "5rem" }}>
                    <h2 style={{ marginBottom: "1rem" }}>
                        Siap Buat Klinik Anda Lebih <span className="gradient-text">Ramah &amp; Lancar</span>?
                    </h2>
                    <p style={{ maxWidth: "540px", margin: "0 auto 2rem", fontSize: "1.125rem" }}>
                        Mulai trial gratis 14 hari. Tanpa kartu kredit. Setup 5 menit.
                    </p>
                    <a href="#harga" className="zen-btn-primary zen-btn-large">
                        Coba Gratis Sekarang →
                    </a>
                </section>
            </main>

            {/* ===== FOOTER ===== */}
            <footer className="footer">
                <div className="container">
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2rem" }}>
                        <div>
                            <h4 style={{ color: "var(--background)", marginBottom: "0.75rem", fontWeight: 700 }}>
                                🦷 SenYumBook
                            </h4>
                            <p style={{ color: "rgba(252,252,252,0.6)", maxWidth: "300px", fontSize: "0.9375rem" }}>
                                Sistem reservasi online &amp; pengingat WhatsApp otomatis untuk klinik gigi modern.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ color: "var(--background)", marginBottom: "0.75rem", fontWeight: 700, fontSize: "1rem" }}>
                                Produk
                            </h4>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <li><a href="#fitur">Fitur</a></li>
                                <li><a href="#harga">Harga</a></li>
                                <li><a href="#testimoni">Testimoni</a></li>
                                <li><a href="#faq">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ color: "var(--background)", marginBottom: "0.75rem", fontWeight: 700, fontSize: "1rem" }}>
                                Kontak
                            </h4>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <li><a href="#">WhatsApp</a></li>
                                <li><a href="#">Email</a></li>
                                <li><a href="#">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <div style={{
                        borderTop: "1px solid rgba(252,252,252,0.15)",
                        marginTop: "2rem",
                        paddingTop: "1.5rem",
                        textAlign: "center",
                        color: "rgba(252,252,252,0.5)",
                        fontSize: "0.875rem",
                    }}>
                        © 2026 SenYumBook. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}
