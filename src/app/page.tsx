export default function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section
                className="zen-section"
                style={{ textAlign: "center", paddingTop: "8rem", paddingBottom: "5rem" }}
            >
                <p
                    style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--muted-foreground)",
                        marginBottom: "1.5rem",
                    }}
                >
                    Reservasi klinik gigi, tanpa ribet.
                </p>
                <h1>
                    Jadwal rapi.
                    <br />
                    Pasien datang.
                </h1>
                <p
                    style={{
                        maxWidth: "540px",
                        margin: "1.5rem auto 2.5rem",
                        fontSize: "1.125rem",
                    }}
                >
                    Sistem booking online & pengingat otomatis via WhatsApp untuk klinik
                    gigi Anda. Setup 5 menit, tanpa aplikasi tambahan.
                </p>
                <a href="#pricing" className="zen-btn-primary">
                    Mulai Trial Gratis 14 Hari
                </a>
            </section>

            {/* Features Section */}
            <section className="zen-section" style={{ textAlign: "center" }}>
                <h2>
                    Semua yang klinik
                    <br />
                    Anda butuhkan.
                </h2>
                <p
                    style={{
                        maxWidth: "480px",
                        margin: "1rem auto 3rem",
                    }}
                >
                    Dari booking online hingga pengingat WhatsApp, semua berjalan otomatis.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "1.5rem",
                        maxWidth: "900px",
                        margin: "0 auto",
                    }}
                >
                    {[
                        {
                            icon: "🔗",
                            title: "Link Booking Instan",
                            desc: "Bagikan link klinik Anda di Instagram atau WhatsApp. Pasien booking tanpa install aplikasi.",
                        },
                        {
                            icon: "💬",
                            title: "WhatsApp Reminder",
                            desc: "Pengingat otomatis H-24 dan 1 jam sebelum jadwal. Kurangi no-show hingga 50%.",
                        },
                        {
                            icon: "📱",
                            title: "Dashboard Mobile",
                            desc: "Kelola jadwal dari HP. Swipe untuk selesaikan atau batalkan. Semudah cek WhatsApp.",
                        },
                    ].map((feature) => (
                        <div key={feature.title} className="zen-card" style={{ textAlign: "left" }}>
                            <span style={{ fontSize: "2rem", display: "block", marginBottom: "1rem" }}>
                                {feature.icon}
                            </span>
                            <h4 style={{ marginBottom: "0.5rem" }}>{feature.title}</h4>
                            <p style={{ fontSize: "0.9375rem" }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing Section */}
            <section
                id="pricing"
                className="zen-section"
                style={{ textAlign: "center" }}
            >
                <h2>
                    Satu harga,
                    <br />
                    tanpa kejutan.
                </h2>
                <p
                    style={{
                        maxWidth: "480px",
                        margin: "1rem auto 3rem",
                    }}
                >
                    Mulai gratis 14 hari. Bisa batal kapan saja.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "1.5rem",
                        maxWidth: "900px",
                        margin: "0 auto",
                    }}
                >
                    {[
                        {
                            name: "Starter",
                            price: "Rp 99rb",
                            period: "/bulan",
                            features: [
                                "1 dokter",
                                "Link booking publik",
                                "WhatsApp reminder",
                                "Dashboard mobile",
                            ],
                            highlighted: false,
                        },
                        {
                            name: "Pro",
                            price: "Rp 199rb",
                            period: "/bulan",
                            features: [
                                "Hingga 3 dokter",
                                "Semua fitur Starter",
                                "Multi-admin (5 user)",
                                "Laporan bulanan",
                                "Prioritas support",
                            ],
                            highlighted: true,
                        },
                        {
                            name: "Enterprise",
                            price: "Rp 399rb",
                            period: "/bulan",
                            features: [
                                "Unlimited dokter",
                                "Semua fitur Pro",
                                "Custom branding",
                                "Dedicated support",
                                "SLA 99.9%",
                            ],
                            highlighted: false,
                        },
                    ].map((plan) => (
                        <div
                            key={plan.name}
                            className="zen-card"
                            style={{
                                textAlign: "left",
                                border: plan.highlighted
                                    ? "2px solid var(--primary)"
                                    : "1px solid var(--border)",
                                position: "relative",
                            }}
                        >
                            {plan.highlighted && (
                                <span
                                    style={{
                                        position: "absolute",
                                        top: "-12px",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        background: "var(--primary)",
                                        color: "var(--primary-foreground)",
                                        padding: "0.25rem 1rem",
                                        borderRadius: "var(--radius-full)",
                                        fontSize: "0.75rem",
                                        fontWeight: 600,
                                        fontFamily: "var(--font-body)",
                                    }}
                                >
                                    Rekomendasi
                                </span>
                            )}
                            <h4 style={{ marginBottom: "0.5rem" }}>{plan.name}</h4>
                            <div style={{ marginBottom: "1.5rem" }}>
                                <span
                                    style={{
                                        fontSize: "2.25rem",
                                        fontFamily: "var(--font-heading)",
                                        color: "var(--foreground)",
                                    }}
                                >
                                    {plan.price}
                                </span>
                                <span
                                    style={{
                                        color: "var(--muted-foreground)",
                                        fontSize: "0.875rem",
                                    }}
                                >
                                    {plan.period}
                                </span>
                            </div>
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    marginBottom: "1.5rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.5rem",
                                }}
                            >
                                {plan.features.map((f) => (
                                    <li
                                        key={f}
                                        style={{
                                            fontSize: "0.9375rem",
                                            color: "var(--muted-foreground)",
                                        }}
                                    >
                                        ✓ {f}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#"
                                className={
                                    plan.highlighted ? "zen-btn-primary" : "zen-btn-secondary"
                                }
                                style={{ width: "100%", textAlign: "center" }}
                            >
                                Mulai Trial Gratis
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="zen-section" style={{ textAlign: "center" }}>
                <h2>
                    Ada pertanyaan?
                    <br />
                    Ini jawabannya.
                </h2>

                <div
                    style={{
                        maxWidth: "700px",
                        margin: "3rem auto 0",
                        textAlign: "left",
                    }}
                >
                    {[
                        {
                            q: "Apa itu SenYumBook?",
                            a: "SenYumBook adalah sistem booking online dan pengingat jadwal otomatis via WhatsApp, dirancang khusus untuk klinik gigi kecil di Indonesia.",
                        },
                        {
                            q: "Apakah pasien perlu install aplikasi?",
                            a: "Tidak. Pasien cukup klik link booking dari Instagram atau WhatsApp klinik Anda, lalu pilih jadwal langsung dari browser HP mereka.",
                        },
                        {
                            q: "Berapa lama setup-nya?",
                            a: "Kurang dari 5 menit. Daftar, isi nama klinik, jam operasional, layanan — dan link booking Anda langsung aktif.",
                        },
                        {
                            q: "Apakah data pasien aman?",
                            a: "Ya. Data pasien dienkripsi (AES-256) dan kami mematuhi UU Perlindungan Data Pribadi (UU PDP) Indonesia.",
                        },
                        {
                            q: "Bisa batal langganan kapan saja?",
                            a: "Tentu. Tidak ada kontrak. Anda bisa berhenti kapan saja dan data Anda tetap aman selama 30 hari.",
                        },
                    ].map((faq, i) => (
                        <details
                            key={i}
                            style={{
                                borderBottom: "1px solid var(--border)",
                                padding: "1.25rem 0",
                            }}
                        >
                            <summary
                                style={{
                                    fontFamily: "var(--font-body)",
                                    fontWeight: 500,
                                    fontSize: "1.0625rem",
                                    cursor: "pointer",
                                    color: "var(--foreground)",
                                    listStyle: "none",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                {faq.q}
                                <span style={{ fontSize: "1.25rem", color: "var(--muted-foreground)" }}>+</span>
                            </summary>
                            <p style={{ marginTop: "0.75rem", fontSize: "0.9375rem" }}>
                                {faq.a}
                            </p>
                        </details>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer
                style={{
                    background: "var(--foreground)",
                    color: "var(--background)",
                    padding: "3rem 1.5rem",
                    textAlign: "center",
                }}
            >
                <h2 style={{ color: "var(--background)", marginBottom: "1rem" }}>
                    SenYumBook
                </h2>
                <p
                    style={{
                        color: "rgba(253, 252, 249, 0.6)",
                        maxWidth: "480px",
                        margin: "0 auto 2rem",
                        fontSize: "0.9375rem",
                    }}
                >
                    Sistem reservasi dan pengingat WhatsApp untuk klinik gigi modern di
                    Indonesia.
                </p>
                <p
                    style={{
                        color: "rgba(253, 252, 249, 0.4)",
                        fontSize: "0.8125rem",
                    }}
                >
                    © 2026 SenYumBook. Hak cipta dilindungi.
                </p>
            </footer>
        </main>
    );
}
