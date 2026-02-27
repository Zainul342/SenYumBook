import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "SenYumBook — Sistem Reservasi & Pengingat WhatsApp untuk Klinik Gigi",
    description:
        "Otomatis booking online & pengingat jadwal pasien via WhatsApp. Setup 5 menit, tanpa aplikasi tambahan. Kurangi no-show hingga 50%.",
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
            <body>{children}</body>
        </html>
    );
}
