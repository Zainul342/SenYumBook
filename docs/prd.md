---
classification: PRD
version: '1.1'
status: draft
inputDocuments: ['product-brief.md', 'senyumbook-portofolio-summary.md']
---

# Product Requirements Document (PRD): SenYumBook

## 1. Executive Summary

SenYumBook adalah SaaS *reservation-first* dengan pengingat otomatis via WhatsApp untuk klinik gigi berskala kecil di Indonesia. Produk ini menyelesaikan masalah operasional manual (membalas WA, double-booking, no-show pasien) dengan menyediakan sistem booking instan tanpa aplikasi dan pengingat jadwal yang terjadwal. Diferensiator utamanya adalah kesederhanaan (*setup* di bawah 5 menit) dan pendekatan non-AI yang menjamin keandalan *cost-effective*.

## 2. Success Criteria

- **SC-01:** Akuisisi 100 klinik gigi aktif berbayar dalam 90 hari pertama pasca-peluncuran, diukur melalui dashboard analytics platform.
- **SC-02:** Tingkat konversi dari pengguna *trial* ke pengguna berbayar (> 25%), diukur per siklus penagihan 30 hari.
- **SC-03:** Penurunan tingkat *no-show* pasien pada klinik pengguna aktif minimal 50%, diukur melalui rasio *booked* vs *attended* harian.
- **SC-04:** Pendapatan berulang (MRR) mencapai Rp 20 juta hingga Rp 30 juta per bulan pada bulan keenam pasca-peluncuran.

## 3. User Journeys

### 3.1 Pasien Melakukan Booking (First-Time User)
Pasien menerima link booking klinik dari bio Instagram atau WhatsApp klinik. Pasien membuka link di browser HP, memilih layanan, memilih jadwal yang tersedia dari kalender real-time, dan memasukkan nama serta nomor WhatsApp. Setelah menekan submit, pasien langsung menerima pesan konfirmasi booking di WhatsApp mereka.

### 3.2 Pasien Menerima Reminder (Engagement)
Sistem berjalan di latar belakang. Pada H-1 jadwal dan 1 jam sebelum jadwal, sistem mendeteksi booking aktif dan mengirimkan pesan template pengingat yang ramah via WhatsApp ke pasien. Pasien dapat membalas pesan tersebut untuk konfirmasi atau permintaan *reschedule*.

### 3.3 Admin Klinik Mengelola Jadwal Harian (Daily Ops)
Mbak Rina (Admin) membuka dashboard web dari browser HP atau tablet di meja kasir. Ia melihat tampilan kalender hari ini dengan slot-slot yang sudah terisi otomatis oleh booking online. Saat ada pasien *walk-in*, Rina menambahkan booking secara manual ke dalam kalender untuk mencegah pasien online memesan slot tersebut.

### 3.4 Owner Klinik Memeriksa Performa (Analytics)
dr. Salma (Owner) masuk ke dashboard web dari laptopnya seminggu sekali. Ia melihat laporan ringkas jumlah pasien minggu ini dan rasio ketidakhadiran (*no-show*). Di akhir bulan, ia memeriksa status langganan dan melakukan pembayaran otomatis bulanan.

## 4. Product Scope

### Phase 1: MVP (Peluncuran Awal - 6-8 Minggu)
Fokus pada *core loop* reservasi dan pengingat.
- **Included:** FR-01, FR-02, FR-03, FR-04, FR-05, FR-06, FR-07, FR-10, FR-11, FR-12, FR-20, FR-21, FR-22, FR-30, FR-31, FR-32.

### Phase 2: Growth (Optimasi Monetisasi - 8-12 Minggu)
Fokus pada pembayaran, kolaborasi admin, dan analitik dasar.
- **Included:** FR-13, FR-23, FR-24, FR-33, FR-40, FR-41, FR-42.

### Phase 3: Scale (Fitur Lanjutan - >12 Minggu)
Fokus pada kustomisasi, *waitlist automation*, dan fitur *multi-branch*.
- **Included:** FR-14, *Waitlist magic*, *Template promo*, *Multi-cabang support*.

## 5. Functional Requirements

### 5.1 Booking System (Core)
| ID | Requirement (Capability) | Priority | Phase |
| :--- | :--- | :--- | :--- |
| FR-01 | Pasien dapat memesan jadwal via tautan publik tanpa instalasi aplikasi tambahan. | P0 | MVP |
| FR-02 | Sistem menampilkan ketersediaan slot waktu secara *real-time* per dokter. | P0 | MVP |
| FR-03 | Sistem mengirimkan pesan konfirmasi reservasi otomatis ke WhatsApp pasien sesaat setelah pemesanan berhasil. | P0 | MVP |
| FR-04 | Pengguna internal (admin/dokter) dapat membuat, mengubah, dan membatalkan pesanan jadwal dari dashboard. | P0 | MVP |
| FR-05 | Sistem mengunci slot waktu (*slot lock*) saat sebuah jadwal dipilih untuk menghindari *double booking*. | P0 | MVP |
| FR-06 | Sistem menyediakan URL booking khusus untuk setiap klinik yang dapat diakses publik. | P1 | MVP |
| FR-07 | Pengguna internal dapat memasukkan data pesanan manual (*walk-in*) ke dalam jadwal. | P1 | MVP |

### 5.2 WhatsApp Reminder (Core)
| ID | Requirement (Capability) | Priority | Phase |
| :--- | :--- | :--- | :--- |
| FR-10 | Sistem mencari dan mengirimkan notifikasi pengingat via WhatsApp tepat 24 jam sebelum jadwal pasien. | P0 | MVP |
| FR-11 | Sistem mencari dan mengirimkan notifikasi pengingat via WhatsApp tepat 1 jam sebelum jadwal pasien. | P0 | MVP |
| FR-12 | Sistem menyisipkan format pesan pengingat berbahasa Indonesia formal-ramah secara *default*. | P0 | MVP |
| FR-13 | Sistem dapat menerima balasan WhatsApp pasien dan memicu pembaruan status konfirmasi pada dashboard. | P1 | Growth |
| FR-14 | Pengguna internal dapat mengubah templat pesan pengingat sesuai kebutuhan klinik. | P2 | Scale |

### 5.3 Dashboard & Management
| ID | Requirement (Capability) | Priority | Phase |
| :--- | :--- | :--- | :--- |
| FR-20 | Antarmuka dashboard dapat menyesuaikan tampilan (*responsive*) seluruhnya pada perangkat *mobile* dan desktop. | P0 | MVP |
| FR-21 | Sistem menampilkan tata letak jadwal harian dan mingguan menggunakan indikator warna pembeda. | P0 | MVP |
| FR-22 | Sistem merekam riwayat pesanan, secara otomatis menyimpan nama dan kontak WhatsApp pasien ke dalam daftar terpusat. | P0 | MVP |
| FR-23 | Sistem mendukung akses minimal 2 *role* (pemilik, admin) dengan batasan maksimal 5 pengguna per klinik. | P1 | Growth |
| FR-24 | Sistem mengkalkulasi dan menampilkan total jumlah reservasi serta persentase *no-show* secara bulanan. | P2 | Growth |

### 5.4 Onboarding & Setup
| ID | Requirement (Capability) | Priority | Phase |
| :--- | :--- | :--- | :--- |
| FR-30 | Calon pengguna mendaftarkan akun menggunakan alamat surel (email) atau nomor WhatsApp. | P0 | MVP |
| FR-31 | Pengguna baru mengikuti *wizard* pengaturan terstruktur untuk profil klinik, jam operasional, dan dokter. | P0 | MVP |
| FR-32 | Sistem mengaktifkan dan dapat menerima akses halaman tautan publik klinik seketika pengaturan selesai. | P0 | MVP |
| FR-33 | Sistem memberikan akses fitur penuh selama 14 hari percobaan awal secara otomatis. | P0 | Growth |

### 5.5 Payment & Subscription
| ID | Requirement (Capability) | Priority | Phase |
| :--- | :--- | :--- | :--- |
| FR-40 | Sistem mendukung siklus penagihan pembayaran berulang dengan integrasi penyedia pembayaran lokal Indonesia (menangani VA, e-wallet, dan QRIS). | P1 | Growth |
| FR-41 | Pengguna dapat mengganti tipe paket berlangganan (*upgrade/downgrade*) langsung dalam platform. | P1 | Growth |
| FR-42 | Sistem menerbitkan bukti transaksi dan memberitahu pengguna via surel sesudah pembayaran sukses. | P2 | Growth |

## 6. Non-Functional Requirements (NFR)

| ID | Requirement Condition & Measurement |
| :--- | :--- |
| NFR-01 | Waktu muat halaman dashboard (*page load time*) tidak boleh lebih dari 2 detik untuk persentil ke-95, diukur menggunakan Vercel Analytics selama periode 30 hari. |
| NFR-02 | Ketersediaan sistem (*uptime*) mencapai 99.5% selama jam operasional wajar (06:00-22:00 WIB), diukur melalui monitor *uptime* eksternal bulanan. |
| NFR-03 | Antarmuka beroperasi secara penuh (100% *layout and functional compliance*) di iOS Safari dan Android Chrome terbaru, diuji melalui automasi UI. |
| NFR-04 | Tingkat keberhasilan pengiriman pesan WhatsApp pengingat melampaui 95% dari total perintah kirim bulanan, dievaluasi melalui tanggapan sukses API webhook pelaporan eksternal. |
| NFR-05 | Arsitektur mendukung akses simultan dari setidaknya 5 perangkat per akun tanpa penurunan performa yang melampaui metrik NFR-01, diukur via *load test* sistem. |

## 7. Domain Requirements (Healthcare & Privacy)

Sistem ini memproses Data Pribadi (nama dan nomor telepon pasien) dan informasi pesanan medis, mengharuskan kepatuhan dasar perlindungan privasi.

| ID | Requirement (Compliance) |
| :--- | :--- |
| DR-01 | Informasi PII (Personally Identifiable Information) pasien (Nama, No WhatsApp) harus dienkripsi dalam penyimpanan (*at rest*, minimum standar AES-256). |
| DR-02 | Semua transmisi lalu lintas data antara *client* (publik/admin) dan *server* menggunakan *secure protocol* (in transit, TLS 1.2+). |
| DR-03 | Pengguna platform harus diwajibkan melewati otentikasi sesi terbatas waktu (*time-limited token*) untuk memuat data pasien. |
| DR-04 | Sesuai kelayakan UU Perlindungan Data Pribadi (UU PDP), pasien melalui administrasi berhak meminta penghapusan total histori datanya (*right to be forgotten*), dan sistem harus sepenuhnya menghapusnya secara lunak dan keras. |
| DR-05 | Sistem menyimpan replika data cadangan (*database backup*) sedikitnya satu kali per 24 jam dengan durasi penyimpanan historis minimal 30 hari. |

## 8. Technology Stack Representation
Spesifikasi infrastruktur dan pilihan kerangka kerja (*framework*), secara khusus menggunakan pendekatan fungsional sistem konvensional otomatis (non-AI), didokumentasikan sepenuhnya di halaman eksternal:
👉 **[Tech Stack Decision Document](./tech-stack.md)**

## 9. Landing Page Capabilities
Kebutuhan fungsional representasi pemasaran depan publikasi produk.
1. Halaman web memuat area sorotan ganda ("Hero") yang mengarahkan ke formulir konversi "Mulai Trial Gratis 14 Hari".
2. Menampilkan kredensial *social proof* fiktif / awal untuk memvalidasi kepercayaan portofolio awal.
3. Halaman menggambarkan resolusi persoalan *scheduling* pasien WhatsApp kacau menjadi antarmuka dashboard seragam.
4. Menu fungsional menjabarkan daftar kelebihan (fitur kunci + cuplikan UI/screenshot layar).
5. Tabular matriks penetapan harga tiga (*tiga-tier pricing model*).
6. Segmen FAQ lipat (komponen *accordion*).
7. Palet warna didasarkan pada visual Biru (Kepercayaan) dan Hijau (Solusi Medis Tenang/Calming) — mewakili kesan klinis modern.

## 10. Out of Scope (Exclusions)
Batasan sistem tegas dideklarasikan; elemen berikut absolut tidak dirancang dan tidak diizinkan masuk ke tahapan R&D (sesuai filosofi operasional non-AI yang dipandu pengembang):

- ❌ Pembuatan/Penyimpanan Rekam Medis Elektronik (RME).
- ❌ Komponen diagram rekam periksa digital seperti Odontogram interaktif.
- ❌ Pertukaran basis data birokrasi asuransi silang (Misal: Integrasi langsung BPJS atau Kemenkes SatuSehat).
- ❌ Manajemen pengelolaan suplai logistik klinik obat/alat (*inventory tracking*).
- ❌ Robot percakapan dinamis penjawab (AI Chatbot) atau agen penjadwalan NLP analitis.
- ❌ Aplikasi kompilasi OS mandiri Android/iOS (*Native Apps*) — pendekatan eksklusif pada web responsive (PWA).

---
*End of PRD*
