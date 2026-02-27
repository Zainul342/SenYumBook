import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "SenYumBook — Sistem Reservasi & Pengingat WhatsApp untuk Klinik Gigi",
    description:
        "Otomatis booking online & pengingat jadwal pasien via WhatsApp. Setup 5 menit, tanpa aplikasi tambahan. Kurangi no-show hingga 70%.",
    keywords: [
        "reservasi klinik gigi",
        "booking online dokter gigi",
        "whatsapp reminder pasien",
        "software klinik gigi indonesia",
        "SenYumBook",
    ],
    openGraph: {
        title: "SenYumBook — Booking Online & WhatsApp Reminder Klinik Gigi",
        description:
            "Sistem reservasi online dan pengingat otomatis WhatsApp untuk klinik gigi. Mulai trial gratis 14 hari.",
        type: "website",
        locale: "id_ID",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
