# SPESIFIKASI KEBUTUHAN DAN PERANCANGAN PERANGKAT LUNAK

## Aplikasi SODIKAP (Solusi Digital Kapal Pemeliharaan)

Dipersiapkan oleh:
[Nama Tim Pengembang]

Program Studi Teknologi Rekayasa Perangkat Lunak
Politeknik Negeri Batam
Jl. Ahmad Yani, Batam 29461
2025

## DAFTAR ISI
1 [PENDAHULUAN](#1-pendahuluan)
  1.1 [TUJUAN](#11-tujuan)
  1.2 [LINGKUP MASALAH](#12-lingkup-masalah)
  1.3 [DEFINISI, AKRONIM DAN SINGKATAN](#13-definisi-akronim-dan-singkatan)
  1.4 [ATURAN PENAMAAN DAN PENOMORAN](#14-aturan-penamaan-dan-penomoran)
  1.5 [REFERENSI](#15-referensi)
  1.6 [IKHTISAR DOKUMEN](#16-ikhtisar-dokumen)
2 [DESKRIPSI UMUM PERANGKAT LUNAK](#2-deskripsi-umum-perangkat-lunak)
  2.1 [DESKRIPSI UMUM SISTEM](#21-deskripsi-umum-sistem)
  2.2 [PROSES BISNIS SISTEM](#22-proses-bisnis-sistem)
  2.3 [KARAKTERISTIK PENGGUNA](#23-karakteristik-pengguna)
  2.4 [BATASAN](#24-batasan)
  2.5 [RANCANGAN LINGKUNGAN IMPLEMENTASI](#25-rancangan-lingkungan-implementasi)
3 [DESKRIPSI RINCI KEBUTUHAN](#3-deskripsi-rinci-kebutuhan)
  3.1 [DESKRIPSI FUNGSIONAL](#31-deskripsi-fungsional)
    3.1.1 [Use Case Diagram](#311-use-case-diagram)
    3.1.2 [Use Case Mengelola Jadwal Pemeliharaan](#312-use-case-mengelola-jadwal-pemeliharaan)
    3.1.3 [Use Case Mencatat Log Pemeliharaan](#313-use-case-mencatat-log-pemeliharaan)
    3.1.4 [Use Case Melihat Riwayat Pemeliharaan](#314-use-case-melihat-riwayat-pemeliharaan)
    3.1.5 [Use Case Melihat Notifikasi](#315-use-case-melihat-notifikasi)
  3.2 [DESKRIPSI KEBUTUHAN NON FUNGSIONAL](#32-deskripsi-kebutuhan-non-fungsional)
4 [DESKRIPSI KELAS-KELAS](#4-deskripsi-kelas-kelas)
  4.1 [CLASS DIAGRAM](#41-class-diagram)
  4.2 [CLASS PENGGUNA](#42-class-pengguna)
  4.3 [CLASS KAPAL](#43-class-kapal)
  4.4 [CLASS JADWAL_PEMELIHARAAN](#44-class-jadwal_pemeliharaan)
  4.5 [CLASS LOG_PEMELIHARAAN](#45-class-log_pemeliharaan)
  4.6 [STATE MACHINE DIAGRAM](#46-state-machine-diagram)
5 [DESKRIPSI DATA](#5-deskripsi-data)
  5.1 [ENTITY-RELATIONSHIP DIAGRAM](#51-entity-relationship-diagram)
  5.2 [DAFTAR TABEL](#52-daftar-tabel)
  5.3 [STRUKTUR TABEL PENGGUNA](#53-struktur-tabel-pengguna)
  5.4 [STRUKTUR TABEL KAPAL](#54-struktur-tabel-kapal)
  5.5 [STRUKTUR TABEL JADWAL_PEMELIHARAAN](#55-struktur-tabel-jadwal_pemeliharaan)
  5.6 [STRUKTUR TABEL LOG_PEMELIHARAAN](#56-struktur-tabel-log_pemeliharaan)
  5.7 [STRUKTUR TABEL NOTIFIKASI](#57-struktur-tabel-notifikasi)
  5.8 [SKEMA RELASI ANTAR TABEL](#58-skema-relasi-antar-tabel)
6 [PERANCANGAN ANTARMUKA](#6-perancangan-antarmuka)
  6.1 [ANTARMUKA LOGIN](#61-antarmuka-login)
  6.2 [ANTARMUKA DASHBOARD](#62-antarmuka-dashboard)
  6.3 [ANTARMUKA KELOLA KAPAL](#63-antarmuka-kelola-kapal)
  6.4 [ANTARMUKA JADWAL PEMELIHARAAN](#64-antarmuka-jadwal-pemeliharaan)
  6.5 [ANTARMUKA LOG PEMELIHARAAN](#65-antarmuka-log-pemeliharaan)
  6.6 [ANTARMUKA NOTIFIKASI](#66-antarmuka-notifikasi)
7 [MATRIKS KETERUNUTAN](#7-matriks-keterunutan)

## 1 PENDAHULUAN

### 1.1 TUJUAN

Dokumen Spesifikasi Kebutuhan dan Perancangan Perangkat Lunak (SKPPL) ini bertujuan untuk menjelaskan kebutuhan dan rancangan dari SODIKAP (Solusi Digital Kapal Pemeliharaan), sebuah sistem informasi pemeliharaan kapal berbasis web yang dirancang untuk meningkatkan efisiensi dan efektivitas dalam proses pemeliharaan kapal. Dokumen ini akan menjadi acuan bagi pengembang dalam membangun sistem dan bagi pengguna untuk memahami fungsionalitas yang akan tersedia.

### 1.2 LINGKUP MASALAH

SODIKAP berfokus pada peningkatan efisiensi dan efektivitas dalam proses pemeliharaan kapal melalui platform digital. Lingkup dari aplikasi SODIKAP meliputi:

- Manajemen dan penjadwalan pemeliharaan kapal secara digital
- Pencatatan dan pelacakan aktivitas pemeliharaan kapal
- Pemantauan kondisi kapal secara real-time
- Pengelolaan dokumen terkait pemeliharaan kapal
- Pelaporan dan analisis data pemeliharaan kapal
- Notifikasi untuk jadwal pemeliharaan dan kondisi kritis
- Koordinasi antar stakeholder dalam proses pemeliharaan

Aplikasi ini dirancang untuk mengatasi masalah keterlambatan dalam pemeliharaan, tingginya biaya operasional, serta masalah terkait keselamatan kapal yang sering terjadi dalam proses pemeliharaan kapal konvensional.

### 1.3 DEFINISI, AKRONIM DAN SINGKATAN

| Istilah/Akronim | Definisi |
|-----------------|----------|
| SKPPL | Spesifikasi Kebutuhan dan Perancangan Perangkat Lunak |
| SODIKAP | Solusi Digital Kapal Pemeliharaan |
| UI | User Interface (Antarmuka Pengguna) |
| UX | User Experience (Pengalaman Pengguna) |
| API | Application Programming Interface |
| CRUD | Create, Read, Update, Delete |
| IoT | Internet of Things |
| PM | Preventive Maintenance (Pemeliharaan Pencegahan) |
| CM | Corrective Maintenance (Pemeliharaan Korektif) |
| PdM | Predictive Maintenance (Pemeliharaan Prediktif) |

### 1.4 ATURAN PENAMAAN DAN PENOMORAN

- Penomoran bab dimulai dari angka 1 dengan format angka Arab
- Penomoran sub-bab menggunakan format [nomor bab].[nomor sub-bab]
- Penamaan use case menggunakan format [UC-nomor]
- Penamaan kelas menggunakan format PascalCase
- Penamaan tabel database menggunakan format snake_case
- Penamaan atribut dan method menggunakan format camelCase

### 1.5 REFERENSI

1. IEEE Std 830-1998, IEEE Recommended Practice for Software Requirements Specifications
2. UML 2.5 Specification
3. Peraturan Menteri Perhubungan Republik Indonesia nomor PM 154 Tahun 2015
4. ISM Code (International Safety Management)
5. SOLAS (Safety of Life at Sea)
6. Peraturan Pemerintah Republik Indonesia Nomor 51 Tahun 2017 mengenai Pelayaran
7. Peraturan Menteri Perhubungan Nomor 108 Tahun 2017 tentang Keselamatan Pelayaran

### 1.6 IKHTISAR DOKUMEN

Dokumen SKPPL ini terdiri dari tujuh bagian utama:
1. Pendahuluan: menjelaskan tujuan, lingkup, dan konvensi dokumen
2. Deskripsi Umum Perangkat Lunak: memberikan gambaran umum tentang sistem dan lingkungannya
3. Deskripsi Rinci Kebutuhan: menjelaskan kebutuhan fungsional dan non-fungsional secara detail
4. Deskripsi Kelas-Kelas: menjelaskan struktur dan relasi antar kelas dalam sistem
5. Deskripsi Data: menjelaskan struktur data dan skema database
6. Perancangan Antarmuka: menampilkan rancangan antarmuka pengguna
7. Matriks Keterunutan: menunjukkan hubungan antara kebutuhan dan implementasinya

## 2 DESKRIPSI UMUM PERANGKAT LUNAK

### 2.1 DESKRIPSI UMUM SISTEM

SODIKAP adalah sistem informasi pemeliharaan kapal berbasis web yang dirancang untuk meningkatkan efisiensi dan efektivitas dalam proses pemeliharaan kapal. Aplikasi ini menyediakan fitur komprehensif untuk manajemen pemeliharaan kapal, termasuk penjadwalan, pencatatan aktivitas, pemantauan kondisi, dan pengelolaan dokumen terkait.

Sistem ini dibangun sebagai solusi digital yang memungkinkan pengguna untuk:
- Membuat dan mengelola jadwal pemeliharaan kapal
- Mencatat dan melacak aktivitas pemeliharaan secara real-time
- Memantau kondisi kapal dan komponen-komponen kritis
- Mengelola dokumen dan data pemeliharaan kapal
- Menganalisis data pemeliharaan untuk pengambilan keputusan
- Menerima notifikasi untuk tindakan pemeliharaan yang diperlukan
- Meningkatkan koordinasi antar stakeholder dalam proses pemeliharaan

Aplikasi ini bertujuan untuk mengurangi keterlambatan dalam pemeliharaan, menekan biaya operasional, dan meningkatkan keselamatan kapal melalui pendekatan pemeliharaan yang lebih terstruktur dan terpantau.

Sistem ini dibangun dengan arsitektur client-server, dengan aplikasi web responsif yang dapat diakses melalui browser di berbagai perangkat.

### 2.2 PROSES BISNIS SISTEM

Proses bisnis dari aplikasi SODIKAP meliputi:

1. **Autentikasi dan Manajemen Pengguna**
   - Pengguna login dengan kredensial yang sesuai
   - Sistem menampilkan fitur sesuai dengan peran pengguna (Admin Operasional, Manajer Armada, Teknisi Kapal)

2. **Manajemen Kapal**
   - Admin Operasional mendaftarkan kapal baru ke dalam sistem
   - Admin Operasional mengelola data kapal (update, view, delete)
   - Manajer Armada melihat daftar kapal yang dikelola

3. **Penjadwalan Pemeliharaan**
   - Manajer Armada membuat jadwal pemeliharaan untuk kapal
   - Admin Operasional menyetujui jadwal pemeliharaan
   - Sistem mengirimkan notifikasi ke Teknisi Kapal tentang jadwal yang telah disetujui

4. **Pelaksanaan dan Pencatatan Pemeliharaan**
   - Teknisi Kapal menerima tugas pemeliharaan
   - Teknisi Kapal melakukan pemeliharaan sesuai jadwal
   - Teknisi Kapal mencatat aktivitas pemeliharaan pada sistem
   - Teknisi Kapal mengunggah dokumen pendukung jika diperlukan

5. **Pemantauan dan Pelaporan**
   - Manajer Armada memantau kemajuan pemeliharaan kapal
   - Admin Operasional melihat laporan pemeliharaan
   - Sistem menghasilkan laporan analisis data pemeliharaan

6. **Notifikasi dan Pengingat**
   - Sistem mengirimkan notifikasi untuk jadwal pemeliharaan yang akan datang
   - Sistem memberikan pengingat untuk tindakan pemeliharaan yang tertunda
   - Sistem mengirimkan peringatan untuk kondisi kapal yang memerlukan perhatian segera

### 2.3 KARAKTERISTIK PENGGUNA

Aplikasi SODIKAP akan digunakan oleh tiga jenis pengguna utama, antara lain:

1. **Admin Operasional**
   - Memiliki pengetahuan tentang manajemen operasional kapal
   - Bertanggung jawab atas pengawasan keseluruhan sistem pemeliharaan
   - Melakukan persetujuan jadwal dan anggaran pemeliharaan
   - Menganalisis laporan pemeliharaan untuk pengambilan keputusan strategis
   - Mengelola pengguna sistem dan hak akses

2. **Manajer Armada**
   - Memiliki pengetahuan teknis tentang kapal dan pemeliharaannya
   - Bertanggung jawab untuk perencanaan jadwal pemeliharaan kapal
   - Mengkoordinasikan aktivitas pemeliharaan dengan teknisi
   - Memantau status dan kondisi kapal
   - Menganalisis data pemeliharaan untuk optimasi

3. **Teknisi Kapal**
   - Memiliki keahlian teknis dalam pemeliharaan dan perbaikan kapal
   - Melaksanakan tugas pemeliharaan sesuai jadwal
   - Mencatat aktivitas pemeliharaan dan kondisi kapal
   - Melaporkan masalah dan kebutuhan perbaikan
   - Mengupload dokumentasi pemeliharaan

### 2.4 BATASAN

Beberapa batasan dalam pengembangan aplikasi SODIKAP:

1. **Batasan Teknis**
   - Aplikasi web harus kompatibel dengan browser modern (Chrome, Firefox, Safari, Edge)
   - Responsif untuk berbagai ukuran layar (desktop, tablet, mobile)
   - Menggunakan teknologi web standar (HTML5, CSS3, JavaScript)
   - Integrasi dengan IoT dan sensor terbatas pada protokol standar

2. **Batasan Operasional**
   - Aplikasi membutuhkan koneksi internet untuk sebagian besar fitur
   - Beberapa fitur pemantauan real-time bergantung pada sensor dan perangkat IoT yang terpasang di kapal
   - Kapasitas penyimpanan data terbatas pada konfigurasi server

3. **Batasan Keamanan**
   - Data sensitif harus dienkripsi
   - Akses ke sistem dibatasi berdasarkan peran pengguna
   - Audit trail harus diimplementasikan untuk tindakan kritis

### 2.5 RANCANGAN LINGKUNGAN IMPLEMENTASI

Aplikasi SODIKAP akan diimplementasikan dengan lingkungan sebagai berikut:

1. **Frontend**
   - Framework: ReactJS
   - UI Library: Material-UI
   - State Management: Redux
   - Styling: Tailwind CSS
   - Chart Library: Chart.js

2. **Backend**
   - Framework: Laravel
   - Database: MySQL
   - Authentication: Laravel Sanctum
   - ORM: Eloquent
   - API: RESTful

3. **Deployment**
   - Cloud Platform: AWS / Google Cloud
   - CI/CD: GitHub Actions
   - Monitoring: Sentry

4. **Persyaratan Perangkat Pengguna**
   - Browser versi terbaru (Chrome, Firefox, Safari, Edge)
   - Koneksi internet minimal 3G
   - Untuk fitur upload dokumen: kamera atau scanner

## 3 DESKRIPSI RINCI KEBUTUHAN

### 3.1 DESKRIPSI FUNGSIONAL

Aplikasi SODIKAP memiliki kebutuhan fungsional sebagai berikut:

1. **Manajemen Pengguna**
   - UC-01: Registrasi pengguna baru (Admin Operasional)
   - UC-02: Login dan autentikasi
   - UC-03: Melihat dan mengedit profil
   - UC-04: Reset password
   - UC-05: Manajemen peran dan hak akses (Admin Operasional)

2. **Manajemen Kapal**
   - UC-06: Menambahkan kapal baru (Admin Operasional)
   - UC-07: Mengedit informasi kapal (Admin Operasional)
   - UC-08: Melihat detail kapal
   - UC-09: Mencari kapal berdasarkan kriteria
   - UC-10: Mengarsipkan data kapal (Admin Operasional)

3. **Penjadwalan Pemeliharaan**
   - UC-11: Membuat jadwal pemeliharaan baru (Manajer Armada)
   - UC-12: Mengedit jadwal pemeliharaan (Manajer Armada)
   - UC-13: Menyetujui jadwal pemeliharaan (Admin Operasional)
   - UC-14: Melihat kalender pemeliharaan
   - UC-15: Mengatur pengingat pemeliharaan

4. **Pencatatan dan Pelacakan Pemeliharaan**
   - UC-16: Mencatat aktivitas pemeliharaan (Teknisi Kapal)
   - UC-17: Mengunggah dokumentasi pemeliharaan (Teknisi Kapal)
   - UC-18: Melaporkan masalah dan kerusakan (Teknisi Kapal)
   - UC-19: Melihat riwayat pemeliharaan
   - UC-20: Mencari catatan pemeliharaan berdasarkan kriteria

5. **Pemantauan Kondisi Kapal**
   - UC-21: Memantau kondisi komponen kapal (Manajer Armada, Teknisi Kapal)
   - UC-22: Melihat data sensor real-time (jika tersedia)
   - UC-23: Menerima peringatan untuk kondisi abnormal
   - UC-24: Melihat tren kondisi kapal berbasis data historis

6. **Pelaporan dan Analisis**
   - UC-25: Menghasilkan laporan pemeliharaan (Admin Operasional, Manajer Armada)
   - UC-26: Menganalisis biaya pemeliharaan (Admin Operasional)
   - UC-27: Melihat statistik ketersediaan kapal (Manajer Armada)
   - UC-28: Mengekspor data ke format standar (Excel, PDF)

7. **Notifikasi**
   - UC-29: Menerima notifikasi jadwal pemeliharaan
   - UC-30: Menerima peringatan untuk kondisi kritis
   - UC-31: Mengelola preferensi notifikasi
   - UC-32: Melihat riwayat notifikasi

#### 3.1.1 Use Case Diagram

[Use Case Diagram SODIKAP]

**Use Case Diagram SODIKAP mencakup:**
1. **Aktor**:
   - Admin Operasional
   - Manajer Armada
   - Teknisi Kapal

2. **Use Case Utama**:
   - UC-01 sampai UC-32 (sesuai deskripsi fungsional di atas)

#### 3.1.2 Use Case Mengelola Jadwal Pemeliharaan

##### 3.1.2.1 Skenario

**Nama Use Case:** UC-11: Membuat Jadwal Pemeliharaan Baru

**Aktor:** Manajer Armada

**Deskripsi:** Use case ini menggambarkan proses pembuatan jadwal pemeliharaan baru untuk kapal.

**Kondisi Awal:** Manajer Armada telah login ke aplikasi SODIKAP.

**Alur Utama:**
1. Manajer Armada memilih menu "Jadwal Pemeliharaan".
2. Sistem menampilkan daftar jadwal pemeliharaan yang ada dan opsi untuk membuat jadwal baru.
3. Manajer Armada memilih opsi "Buat Jadwal Baru".
4. Sistem menampilkan form dengan field:
   - Kapal (dropdown)
   - Tanggal mulai
   - Tanggal selesai
   - Status (default: Dijadwalkan)
   - Deskripsi pemeliharaan
   - Prioritas
5. Manajer Armada mengisi formulir dan memilih "Simpan".
6. Sistem memvalidasi input dan menyimpan jadwal pemeliharaan baru.
7. Sistem mengirimkan notifikasi ke Admin Operasional untuk persetujuan jadwal.
8. Sistem menampilkan konfirmasi bahwa jadwal telah berhasil dibuat dan menunggu persetujuan.

**Kondisi Akhir:** Jadwal pemeliharaan baru tersimpan dalam sistem dengan status "Dijadwalkan" dan menunggu persetujuan dari Admin Operasional.

**Alur Alternatif:**
- Pada langkah 5, jika validasi gagal, sistem menampilkan pesan error dan meminta Manajer Armada untuk memperbaiki input.
- Pada langkah 3, Manajer Armada dapat memilih untuk melihat detail atau mengedit jadwal yang sudah ada.

##### 3.1.2.2 Interaksi Objek

[Sequence Diagram UC-11]

#### 3.1.3 Use Case Mencatat Log Pemeliharaan

##### 3.1.3.1 Skenario

**Nama Use Case:** UC-16: Mencatat Aktivitas Pemeliharaan

**Aktor:** Teknisi Kapal

**Deskripsi:** Use case ini menggambarkan proses pencatatan aktivitas pemeliharaan yang telah dilakukan oleh Teknisi Kapal.

**Kondisi Awal:** Teknisi Kapal telah login ke aplikasi SODIKAP dan memiliki tugas pemeliharaan yang dijadwalkan.

**Alur Utama:**
1. Teknisi Kapal memilih menu "Log Pemeliharaan".
2. Sistem menampilkan daftar jadwal pemeliharaan yang ditugaskan kepada Teknisi Kapal.
3. Teknisi Kapal memilih jadwal pemeliharaan yang ingin dicatat aktivitasnya.
4. Sistem menampilkan form dengan field:
   - Jadwal Pemeliharaan (terisi otomatis)
   - Catatan aktivitas
   - Upload dokumen/foto (opsional)
   - Tanggal (terisi otomatis dengan tanggal saat ini)
5. Teknisi Kapal mengisi catatan aktivitas dan mengunggah dokumen/foto jika diperlukan.
6. Teknisi Kapal memilih "Simpan".
7. Sistem memvalidasi dan menyimpan log pemeliharaan.
8. Sistem mengirimkan notifikasi ke Manajer Armada tentang aktivitas pemeliharaan yang telah dicatat.
9. Sistem menampilkan konfirmasi bahwa log pemeliharaan telah berhasil disimpan.

**Kondisi Akhir:** Log pemeliharaan tersimpan dalam sistem dan Manajer Armada mendapat notifikasi.

**Alur Alternatif:**
- Pada langkah 5, Teknisi Kapal dapat memilih untuk menandai bahwa pemeliharaan telah selesai, yang akan mengubah status jadwal pemeliharaan menjadi "Selesai".
- Pada langkah 6, jika validasi gagal, sistem menampilkan pesan error dan meminta Teknisi Kapal untuk memperbaiki input.

##### 3.1.3.2 Interaksi Objek

[Sequence Diagram UC-16]

#### 3.1.4 Use Case Melihat Riwayat Pemeliharaan

##### 3.1.4.1 Skenario

**Nama Use Case:** UC-19: Melihat Riwayat Pemeliharaan

**Aktor:** Admin Operasional, Manajer Armada, Teknisi Kapal

**Deskripsi:** Use case ini menggambarkan proses melihat riwayat pemeliharaan kapal.

**Kondisi Awal:** Pengguna telah login ke aplikasi SODIKAP.

**Alur Utama:**
1. Pengguna memilih menu "Riwayat Pemeliharaan".
2. Sistem menampilkan form filter dengan opsi:
   - Kapal
   - Rentang tanggal
   - Status pemeliharaan
3. Pengguna mengisi filter (opsional) dan memilih "Cari".
4. Sistem menampilkan daftar aktivitas pemeliharaan sesuai dengan filter yang dipilih, termasuk:
   - Nama kapal
   - Tanggal pemeliharaan
   - Status
   - Deskripsi
   - Teknisi yang melakukan
5. Pengguna dapat memilih salah satu riwayat untuk melihat detail.
6. Sistem menampilkan detail riwayat pemeliharaan, termasuk catatan dan dokumen yang diunggah.

**Kondisi Akhir:** Pengguna melihat riwayat pemeliharaan sesuai dengan filter yang dipilih.

**Alur Alternatif:**
- Pada langkah 4, jika tidak ada riwayat yang sesuai dengan filter, sistem menampilkan pesan bahwa tidak ada data yang ditemukan.
- Pada langkah 5, pengguna dapat memilih untuk mengekspor data riwayat ke format Excel atau PDF.

##### 3.1.4.2 Interaksi Objek

[Sequence Diagram UC-19]

#### 3.1.5 Use Case Melihat Notifikasi

##### 3.1.5.1 Skenario

**Nama Use Case:** UC-32: Melihat Riwayat Notifikasi

**Aktor:** Admin Operasional, Manajer Armada, Teknisi Kapal

**Deskripsi:** Use case ini menggambarkan proses melihat dan mengelola notifikasi.

**Kondisi Awal:** Pengguna telah login ke aplikasi SODIKAP.

**Alur Utama:**
1. Pengguna melihat indikator notifikasi di bagian header aplikasi, yang menunjukkan jumlah notifikasi yang belum dibaca.
2. Pengguna mengklik ikon notifikasi.
3. Sistem menampilkan daftar notifikasi terbaru, dengan notifikasi yang belum dibaca ditandai.
4. Pengguna dapat memilih salah satu notifikasi untuk dibaca.
5. Sistem menampilkan detail notifikasi dan menandainya sebagai telah dibaca.
6. Jika notifikasi terkait dengan tindakan tertentu (misalnya persetujuan jadwal), pengguna dapat memilih untuk mengakses halaman terkait langsung dari notifikasi.

**Kondisi Akhir:** Pengguna melihat detail notifikasi dan notifikasi ditandai sebagai telah dibaca.

**Alur Alternatif:**
- Pada langkah 3, pengguna dapat memilih untuk menandai semua notifikasi sebagai telah dibaca.
- Pada langkah 3, pengguna dapat memilih untuk melihat semua riwayat notifikasi, tidak hanya yang terbaru.

##### 3.1.5.2 Interaksi Objek

[Sequence Diagram UC-32]

### 3.2 DESKRIPSI KEBUTUHAN NON FUNGSIONAL

1. **Keamanan**
   - Sistem harus mengenkripsi semua password pengguna dengan algoritma hashing yang kuat.
   - Sistem harus mengimplementasikan mekanisme autentikasi dan otorisasi yang aman.
   - Akses ke API dan data sensitif harus diamankan dengan token autentikasi.
   - Sistem harus menyediakan audit trail untuk tindakan kritis yang dilakukan pengguna.

2. **Kinerja**
   - Waktu respons untuk operasi umum tidak boleh lebih dari 3 detik.
   - Sistem harus dapat menangani setidaknya 100 pengguna konkuren.
   - Waktu downtime yang direncanakan tidak boleh lebih dari 8 jam per tahun.

3. **Ketersediaan**
   - Sistem harus tersedia 99.5% dari waktu operasional.
   - Sistem harus dapat dipulihkan dalam waktu 2 jam setelah kegagalan.
   - Backup sistem harus dilakukan setidaknya sekali sehari.

4. **Kegunaan**
   - Antarmuka pengguna harus intuitif dan mudah digunakan oleh pengguna dengan berbagai tingkat kemampuan teknis.
   - Sistem harus menyediakan panduan pengguna dan bantuan kontekstual.
   - Sistem harus responsif dan dapat diakses dari berbagai perangkat (desktop, tablet, mobile).

5. **Skalabilitas**
   - Sistem harus dapat diskalakan untuk menangani peningkatan jumlah kapal, pengguna, dan data pemeliharaan.
   - Arsitektur sistem harus modular untuk memudahkan perluasan fitur di masa depan.

6. **Kompatibilitas**
   - Aplikasi web harus kompatibel dengan browser modern (Chrome, Firefox, Safari, Edge).
   - API harus mengikuti standar RESTful untuk interoperabilitas dengan sistem lain.

7. **Pemeliharaan**
   - Kode sumber harus didokumentasikan dengan baik untuk memudahkan pemeliharaan.
   - Sistem harus menyediakan log yang cukup untuk troubleshooting.
   - Sistem harus dapat diupdate tanpa downtime yang signifikan.

## 4 DESKRIPSI KELAS-KELAS

### 4.1 CLASS DIAGRAM

[Class Diagram SODIKAP]

### 4.2 CLASS PENGGUNA

**Deskripsi:** Kelas ini merepresentasikan pengguna sistem SODIKAP.

**Atribut:**
- id: integer
- nama_lengkap: string
- email: string
- password: string
- role: enum (Admin Operasional, Manajer Armada, Teknisi Kapal)
- created_at: timestamp
- updated_at: timestamp

**Method:**
- login()
- logout()
- resetPassword()
- updateProfile()
- getNotifications()

### 4.3 CLASS KAPAL

**Deskripsi:** Kelas ini merepresentasikan kapal yang terdaftar dalam sistem.

**Atribut:**
- id: integer
- nama_kapal: string
- kode_kapal: string
- jenis: string
- tahun_pembuatan: year
- created_at: timestamp

**Method:**
- getJadwalPemeliharaan()
- getLogPemeliharaan()
- getKondisiTerkini()
- hitungKetersediaan()

### 4.4 CLASS JADWAL_PEMELIHARAAN

**Deskripsi:** Kelas ini merepresentasikan jadwal pemeliharaan kapal.

**Atribut:**
- id: integer
- kapal_id: integer
- tanggal_mulai: date
- tanggal_selesai: date
- status: enum (Dijadwalkan, Berjalan, Selesai, Dibatalkan)
- deskripsi: text
- created_at: timestamp

**Method:**
- approve()
- cancel()
- updateStatus()
- getLogPemeliharaan()
- notifyTeknisi()

### 4.5 CLASS LOG_PEMELIHARAAN

**Deskripsi:** Kelas ini merepresentasikan catatan aktivitas pemeliharaan yang dilakukan.

**Atribut:**
- id: integer
- jadwal_id: integer
- teknisi_id: integer
- catatan: text
- dokumen: string
- tanggal_input: timestamp

**Method:**
- uploadDokumen()
- updateCatatan()
- notifyManager()
- getDokumen()

### 4.6 STATE MACHINE DIAGRAM

[State Machine Diagram untuk

### 4.7 COLLOR PALETTE 

1. Warna Utama (Primary Colors)
Navy Blue (#002B5B) – Mewakili laut, keandalan, dan profesionalisme.

Steel Gray (#4D5E70) – Memberi kesan teknologi dan ketegasan.

2. Warna Aksen (Accent Colors)
Turquoise Blue (#00B4D8) – Untuk elemen penting atau interaktif (button, highlight).

Safety Orange (#F77F00) – Memberi kesan peringatan atau aksi penting (status perbaikan, alert).

3. Warna Latar dan Teks (Background & Text)
White Smoke (#F5F5F5) – Latar belakang yang netral dan ringan.

Dark Slate (#2E2E2E) – Untuk teks utama.

Slate Gray (#6C757D) – Untuk teks sekunder/deskripsi.

### 4.8 Navigation Bar Menu for the main landing page
Logo/Brand - SODIKAP logo with link to home page
Home - Link to the main landing page
About - Information about the SODIKAP system and its purpose
Features - Overview of key capabilities:
Manajemen Pemeliharaan
Pencatatan & Pelacakan
Pemantauan Kondisi Kapal
Pelaporan & Analisis
Contact - Information about support or contact details
Authentication:
Login - Button/link to login page (UC-02)
Register - Link to registration page (UC-01, limited to Admin Operasional)
Once logged in, the navbar would change to show role-specific menu items for Admin Operasional, Manajer Armada, or Teknisi Kapal.
