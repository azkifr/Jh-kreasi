# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## JH Kreasi Studio — Official Company Landing Page

---

### Document Information
- **Project Name:** JH Kreasi Studio Landing Page & Digital Presence
- **Client / Company:** JH Kreasi (Studio • Brand Services)
- **Tagline:** *Elevating Brands in Prime Spaces*
- **Version:** 1.0.0
- **Status:** Draft / Ready for Development
- **Target Release:** Q4 2026
- **Author:** Product & Architecture Team

---

## 1. Executive Summary & Project Background

### 1.1 Company Overview
**JH Kreasi** adalah creative & brand services agency berbasis di Jakarta (berkantor di Treasury Tower District 8 SCBD). JH Kreasi memiliki spesialisasi *end-to-end* dalam membantu brand-brand premium & luxury menembus dan mendominasi ruang ritel prestisius (top-tier malls di Indonesia). Layanan mencakup mulai dari inisiasi leasing/landlord, desain dan konstruksi *store fit-out*, peluncuran *grand opening*, hingga aktivasi musiman dan penyelenggaraan *bespoke events*.

### 1.2 Problem Statement
- **Kredibilitas Digital B2B:** Klien ritel premium (brand manager, principal internasional, pemilik bisnis) memerlukan validasi visual yang cepat dan representatif sebelum mengontrak agensi.
- **Kebutuhan Lead Generation:** Selama ini profil perusahaan masih didistribusikan secara manual lewat PDF. Diperlukan platform digital yang selalu aktif, interaktif, mudah diakses di perangkat mobile maupun desktop, dan mampu mengonversi pengunjung menjadi *qualified leads* (via WhatsApp & inquiry form).
- **Positioning Agensi:** Landing page harus memancarkan aura *luxury-grade, architectural, refined, trustworthy*, membedakannya dari kontraktor fit-out konvensional maupun event organizer biasa.

### 1.3 Project Objectives & KPIs
1. **Brand Authority:** Membangun identitas digital yang selaras dengan citra luxury (minimalis, elegan, premium).
2. **Lead Generation:** Memfasilitasi konsultasi kilat bagi *decision-makers* melalui integrasi WhatsApp satu-klik dan form permohonan proposal.
3. **Clear Service Communication:** Menyampaikan 5 pilar layanan utama JH Kreasi secara ringkas, visual, dan komprehensif.
4. **Performance & Responsiveness:** Waktu muat < 1.5 detik, 100% responsif di mobile, skor Google Lighthouse > 90.

---

## 2. Target Audience & User Personas

| Persona | Profil & Jabatan | Kebutuhan Utama | Trigger Konversi |
| :--- | :--- | :--- | :--- |
| **Persona A: The Brand Principal / Expansion Director** | Direktur/Ekspansi Brand Fashion/F&B/Lifestyle Internasional atau Nasional | Ingin membuka toko/booth di mall prestisius Jakarta (Plaza Indonesia, Pacific Place, Senayan City, dll.), butuh koneksi landlord dan izin mall. | Bukti koneksi landlord & jaringan mall top-tier, alamat kantor prestisius di SCBD. |
| **Persona B: The Marketing & Event Lead** | Brand Manager / Head of Marketing | Butuh eksekusi *grand opening* dan aktivasi kampanye yang estetik, rapi, dan sesuai standar brand global. | Portfolio visual yang elegan, pemahaman mendalam tentang estetika luxury retail. |
| **Persona C: The Retail Entrepreneur** | Pengusaha ritel lokal / kurator brand mewah | Mencari solusi *turnkey fit-out* (terima beres, zero headache) untuk booth atau store di mall. | Kemudahan konsultasi langsung lewat WhatsApp, proses kerja yang transparan. |

---

## 3. Brand Identity & Design System

### 3.1 Visual Direction & Tone of Voice
- **Tone:** Luxury, Architectural, Sophisticated, Confident, Curated, High-Trust.
- **Vibe:** Modern Minimalist Editorial, Quiet Luxury (menonjolkan *negative space*, tipografi yang presisi, dan transisi halus).

### 3.2 Color Palette (Sesuai Company Profile)
| Role | Color Name | Hex Code | Penggunaan |
| :--- | :--- | :--- | :--- |
| **Primary Background** | Studio Sage Green | `#5B7062` / `#4E6554` | Latar belakang dominan, mencerminkan ketenangan, kemewahan, dan eksklusivitas. |
| **Accent / Highlight** | Warm Luxury Gold | `#D4AF37` / `#CBA135` | Garis aksen, nomor urut (01-05), badge, hover state CTA. |
| **Neutral Light** | Ivory / Alabaster | `#F9F9F6` | Teks utama, judul, elemen kontras bersih. |
| **Secondary Light** | Soft Sand / Fog | `#E0E6E1` | Teks pendukung/deskripsi body text. |
| **Dark Contrast** | Deep Forest Noir | `#1C2520` | Footer, kartu sorotan gelap, drop shadow dramatis. |
| **Surface Overlays** | Frosted Glass / Translucent | `rgba(255, 255, 255, 0.08)` | Kotak kartu layanan, card border halus (`rgba(255, 255, 255, 0.15)`). |

### 3.3 Typography
- **Headings & Accents:** Serif editorial kontemporer atau geometric sans berkarakter (misal: *Syne*, *Cinzel*, *Cormorant Garamond*, atau *Plus Jakarta Sans Bold*).
- **Body & Captions:** *Inter*, *Plus Jakarta Sans*, atau *Montserrat* dengan *letter-spacing* yang lega untuk menjaga nuansa editorial luxury.

### 3.4 Logo Architecture & Emblem Specifications
- **Emblem / Monogram Mark:**
  * Terdiri dari **dua lingkaran cincin konsentris bergaris halus (*dual concentric rings*)**:
    1. **Lingkaran Putih (*Pure White / Ivory*):** Memberikan aksen kontras yang bersih dan modern.
    2. **Lingkaran Emas (*Warm Luxury Gold `#D4AF37`*):** Melambangkan prestise, kemewahan, dan eksklusivitas.
  * Di bagian dalam lingkaran terdapat teks inisial **"JH"** berkarakter all-caps, modern sans-serif dengan proporsi seimbang dan elegan.
- **Wordmark & Lockup:**
  * Teks utama: **JH KREASI** (huruf kapital tegap dengan *letter-spacing* lebar/editorial).
  * Sub-keterangan: **STUDIO • BRAND SERVICES** (ukuran proporsional dengan pemisah titik tengah).
  * Keterangan asal: **EST. IN JAKARTA** (aksen warna gold hangat).
- **Implementasi Aset Digital:**
  * Dirender dalam format **vektor SVG presisi tinggi** (garis tipis 1px–1.5px) agar tetap tajam di layar Retina/4K tanpa distorsi.
  * **Favicon & Webclip:** Menggunakan emblem dua cincin (putih & emas) dengan inisial "JH" di atas latar belakang Studio Sage Green.
  * **Micro-Interaction (Opsional):** Efek animasi halus saat kursor diarahkan ke logo di navbar (misal: rotasi mikro yang tenang atau *ambient gold glow* lembut).

---

## 4. Information Architecture & Landing Page Structure

Halaman landing page dirancang sebagai **Single-Page Application (SPA)** berkonsep storytelling dengan opsi navigasi smooth scroll dan modal inquiry.

```
[ Sticky Luxury Navigation Bar ]
       │
       ▼
[ 1. Hero Section: "Elevating Brands in Prime Spaces" ]
       │
       ▼
[ 2. About & Philosophy: Commercial Vision into Reality ]
       │
       ▼
[ 3. Core Services Showcase: 5 Strategic Pillars ]
       ├── 01. Landlord Initiation
       ├── 02. Project Fit Out
       ├── 03. Store Opening
       ├── 04. Brand Awareness & Activity
       └── 05. Bespoke Events
       │
       ▼
[ 4. The JH Advantage / Why JH Kreasi ]
       │
       ▼
[ 5. Curated Work & Showcase / Portfolio Preview ]
       │
       ▼
[ 6. Retail Project Timeline & Journey (7-Stage End-to-End Execution) ]
       ├── 01. Location Approval
       ├── 02. LOI Agreement
       ├── 03. Landlord Handover
       ├── 04. Fit Out Project
       ├── 05. Operational Preparation
       ├── 06. Contractor Hand Over
       └── 07. Opening Day
       │
       ▼
[ 7. Prime Location & Contact Section (SCBD Hub) ]
       │
       ▼
[ 8. Premium Minimalist Footer ]
```

---

## 5. Detailed Section Requirements

### 5.1 Sticky Header / Navigation Bar
- **Logo & Brand Identity:** Emblem monogram "JH" yang dibingkai oleh dua cincin konsentris tipis (lingkaran putih & lingkaran emas) yang dipadukan secara harmonis dengan wordmark "JH KREASI — STUDIO • BRAND SERVICES".
- **Navigation Links:**
  - *About* (Tentang Kami)
  - *Services* (Layanan)
  - *Advantage* (Keunggulan)
  - *Portfolio* (Proyek)
  - *Contact* (Kontak)
- **Primary Header Action:** Tombol CTA beraksen emas / outlined glass: *"Start a Project"* (Membuka Contact Modal atau scroll langsung ke Contact Section).
- **Floating WhatsApp Quick Button:** Ikon WhatsApp mengambang di pojok kanan bawah dengan badge *"Chat with our Principal"*.

### 5.2 Hero Section
- **Visual:** Background dengan estetika luxury retail (high-end architectural store interiors atau subtle motion mesh gradient berwarna sage & warm gold).
- **Badge:** `EST. IN JAKARTA • TREASURY TOWER SCBD`
- **Headline (H1):** *"Elevating Brands in Prime Spaces"*
- **Subheadline:** *"Partner strategis brand luxury untuk menembus ruang ritel prestisius di Indonesia. Dari inisiasi landlord dan turnkey fit-out, hingga grand opening dan aktivasi musiman berdaya cipta tinggi."*
- **Call-to-Action (CTA) Dual Buttons:**
  1. Primary CTA: *"Consult Your Space"* (Arah ke WhatsApp / Inquiry Form).
  2. Secondary CTA: *"Explore Core Services"* (Smooth scroll ke Section Layanan).
- **Micro-Metric Bar (Trust Bar):**
  - "Top-Tier Mall Access"
  - "Turnkey End-to-End Execution"
  - "SCBD Jakarta Headquarters"

### 5.3 About JH Kreasi / Studio Narrative
- **Sub-tag:** `HELLO FROM JH KREASI`
- **Lead Text:** Sesuai company profile: *"We transform vision into exceptional commercial reality."*
- **Value Proposition Breakdown:**
  - Menjelaskan positioning JH Kreasi bukan sekadar vendor, melainkan konsultan strategis terpercaya yang memiliki jembatan langsung ke pihak manajemen mall dan kontraktor terbaik di Indonesia.

### 5.4 Core Services Showcase (Interactive Bento Grid / Cards)
Menampilkan 5 layanan utama dengan penomoran elegan (01 - 05):

1. **01. Landlord Initiation**
   - *Deskripsi:* Membuka akses dan memperkenalkan brand Anda langsung kepada manajemen/pemilik mall papan atas (top-tier malls) untuk mengamankan lokasi ritel paling strategis.
   - *Key Deliverables:* Mall feasibility study, landlord pitch deck alignment, lease term negotiation support, prime spot securing.

2. **02. Project Fit Out**
   - *Deskripsi:* Perencanaan dan eksekusi konstruksi toko maupun booth secara menyeluruh (*turnkey*), dengan koordinasi mulus bersama mall management, kontraktor, dan vendor material.
   - *Key Deliverables:* Architectural/Interior coordination, MEP & mall guideline compliance, 3D visualization, quality control, turnkey handover.

3. **03. Store Opening**
   - *Deskripsi:* Mengamplifikasi momen peluncuran toko melalui perancangan *bespoke opening events*, pelibatan media dan KOL terarah, serta perangkat promosi terpadu.
   - *Key Deliverables:* Grand opening concept & rundown, VIP & media guest handling, PR coverage, launch collaterals.

4. **04. Brand Awareness & Activity**
   - *Deskripsi:* Membangun rekognisi merek yang berkelanjutan lewat rangkaian program dan aktivasi kreatif yang disesuaikan untuk setiap musim (*seasonal activations*).
   - *Key Deliverables:* Pop-up retail installations, festive/holiday activations, thematic brand engagement campaigns.

5. **05. Bespoke Events**
   - *Deskripsi:* Mengkurasi acara eksklusif yang menyatu dengan DNA brand untuk memaksimalkan *customer engagement* dan mendorong penjualan langsung.
   - *Key Deliverables:* Private VIP client dinners, trunk shows, product unveiling, brand anniversary galas.

### 5.5 Why JH Kreasi (The Competitive Edge)
- **Prime Mall Network:** Akses dan pemahaman mendalam terhadap regulasi mall grade-A di Jakarta.
- **Turnkey Simplicity:** Klien cukup membawa visi produk; JH Kreasi menangani birokrasi, konstruksi, hingga selebrasi pembukaan toko.
- **Luxury Standard Craftsmanship:** Standar kualitas material dan eksekusi berorientasi pada detail estetika tinggi.
- **Strategic SCBD Location:** Beroperasi di pusat distrik bisnis paling prestisius di Jakarta.

### 5.6 Retail Journey Timeline: 7-Stage End-to-End Execution
Section ini mengadopsi roadmap resmi JH Kreasi yang memvisualisasikan perjalanan sebuah brand dari tahap pemilihan lokasi hingga hari pembukaan toko (*Grand Opening*). Roadmap ini sangat krusial untuk memberikan transparansi timeline, kepastian estimasi waktu, dan rasa tenang bagi para prinsipal ritel & brand managers.

#### 5.6.1 Rincian Tahapan & Ruang Lingkup (7 Stages)
1. **01. LOCATION APPROVAL**
   - *Aktivitas:* Pemilihan lokasi ritel ideal (*site selection*), analisis *traffic* dan visibilitas gerai, serta pengajuan persetujuan manajemen mall (*getting management approval*).
   - *Fokus JH Kreasi:* Kurasi titik prime spot yang sesuai persona brand dan negosiasi awal dengan pihak mall.

2. **02. LOI AGREEMENT**
   - *Aktivitas:* Penandatanganan *Letter of Intent* (LOI) dan penyusunan klausul syarat & ketentuan sewa (*outlining terms*).
   - *Fokus JH Kreasi:* Menjembatani kesepakatan komersial, biaya sewa (*service charge*, deposit, *fitting out period*), dan legalitas dasar.

3. **03. LANDLORD HANDOVER**
   - *Aktivitas:* Serah terima kunci dan penguasaan fisik ruang ritel (*receiving keys and possession of the retail space*).
   - *Fokus JH Kreasi:* Pemeriksaan kondisi eksisting (*site joint survey*), pencatatan utilitas (listrik, air, HVAC, sprinkler), dan persiapan izin kerja fit-out.

4. **04. FIT OUT PROJECT**
   - *Aktivitas:* Desain interior toko, konstruksi sipil, instalasi MEP (mekanikal, elektrikal, pipa), pembuatan mebel kustom (*custom millwork*), dan pemasangan *fixtures & display*.
   - *Fokus JH Kreasi:* Manajemen kontraktor menyeluruh, *daily/weekly progress monitoring*, dan kepatuhan penuh terhadap *Fit-Out Guidelines* mall bersangkutan (durasi pengerjaan fleksibel disesuaikan dengan luasan dan kompleksitas desain outlet).

5. **05. OPERATIONAL PREPARATION**
   - *Aktivitas:* Rekrutmen dan pelatihan staf (*staff hiring & training*), finalisasi menu/katalog produk (*menu & pricing finalization*), setup POS & sistem inventaris (*stock inventory*).
   - *Fokus JH Kreasi:* Sinkronisasi kesiapan operasional yang berjalan beriringan (*in-parallel*) dengan progres fisik toko agar gerai siap langsung beroperasi tanpa *downtime* begitu konstruksi rampung.

6. **06. CONTRACTOR HAND OVER**
   - *Aktivitas:* Penyelesaian akhir konstruksi (*final touches*), inspeksi bersama (*joint inspection / snag list rectification*), dan serah terima unit toko yang telah selesai direnovasi.
   - *Fokus JH Kreasi:* Penjaminan kualitas estetika, kelayakan fungsi peralatan, dan perolehan izin operasional (*Fit-to-Open Certificate*) dari pengelola mall.

7. **07. OPENING DAY**
   - *Aktivitas:* *Grand Launching*, pemotongan pita (*ribbon cutting ceremony*), penyambutan pelanggan perdana, dan selebrasi pembukaan gerai baru.
   - *Fokus JH Kreasi:* Eksekusi acara peluncuran (*bespoke opening event*), manajemen tamu VIP/influencer, dokumentasi media, dan amplifikasi publisitas.

#### 5.6.2 UI/UX & Interaction Design untuk Section Timeline (Bidirectional Scroll-Driven Animations)
- **Catatan Desain Fleksibilitas Timeline:** Durasi waktu tidak dipatok angka bulan statis pada tampilan antarmuka, melainkan disajikan sebagai *milestone flow* adaptif (*"Timeline tailored to project scale & mall specifications"*).
- **Mekanisme Animasi Scroll Dua Arah (Naik & Turun / Bidirectional Scroll Reactive):**
  1. **Dynamic Path Drawing (Garis Jalur Mengalir):**
     * Garis konektor yang menghubungkan tahap 01 hingga 07 terhubung langsung dengan scroll viewport pengguna (`scrollYProgress: 0 → 1`).
     * **Saat Scroll Turun (Scroll Down):** Garis aksen emas (`#D4AF37`) bergerak mengalir ke bawah mengisi jalur secara bertahap. Ketika ujung garis mencapai simpul (*node*) tahap tertentu, kartu tahap tersebut otomatis "menyala" (*activated*).
     * **Saat Scroll Naik (Scroll Up):** Garis aksen emas surut kembali secara mulus (*smooth retreat/reverse*), dan status kartu tahap yang terlewati kembali ke kondisi tenang (*dimmed state*), menciptakan pengalaman interaktif yang responsif dan elegan.
  2. **Card Activation & Parallax Ilustrasi:**
     * **State Pasif (Belum Terjangkau):** Opasitas kartu 35%, ilustrasi berposisi sedikit turun (`translateY(20px)`), warna garis netral semi-transparan.
     * **State Aktif (Fokus Viewport):** Opasitas kartu 100%, border kartu memancarkan *subtle gold glow*, lingkaran cincin putih & emas pada node membesar halus (*spring pulse scale: 1 → 1.15 → 1*), dan ilustrasi SVG terangkat naik secara anggun (*parallax floating lift* `translateY(0)`).
     * **Transisi Dua Arah:** Animasi menggunakan kurva fisika pegas (*spring physics: stiffness 100, damping 20*) via Framer Motion, sehingga tidak patah atau terjadi *layout shift* ketika pengguna menggulir layar dengan cepat bolak-balik.
- **Layout Desktop:**
  - Desain jalur meliuk elegan (*S-curve / serpentine roadmap*) bernuansa Sage Green `#5B7062` dan aksen garis Gold `#D4AF37`.
  - Tiap tahap disajikan dalam format **Visual Milestone Card** yang mengombinasikan **Gambar Ilustrasi Tematik Khusus** dan teks ruang lingkup pekerjaan.
  - Indikator status tahapan (*Interactive Milestone Tracker*) di sisi layar yang menunjukkan posisi tahapan aktif secara *real-time*.
- **Layout Mobile:**
  - Tata letak *vertical stepped journey* dengan garis tulang punggung vertikal (*vertical progress spine*) di sisi kiri.
  - Garis terisi warna emas menyala mengikuti usapan jari pengguna naik dan turun (*touch-scroll responsive*).
- **Smooth Inertia Scrolling Engine:**
  - Mengintegrasikan library *Lenis Smooth Scroll* untuk menghasilkan *scrolling momentum* selembut sutra tanpa hambatan (*silky smooth at 60–120 fps*), khas platform luxury brand kelas dunia.
  - Aset referensi visual tersimpan di `assets/retail_project_timeline.png`.

#### 5.6.3 Spesifikasi Detail 7 Gambar Ilustrasi Timeline (Visual Direction)
Setiap tahapan wajib memiliki ilustrasi bertema khusus dengan gaya **Refined Architectural Line-Art & Luxury Flat Illustration** (menggunakan palet warna konsisten: Sage Green, Warm Gold `#D4AF37`, Charcoal, dan Ivory):

| Tahap | Nama Tahapan | Komposisi & Elemen Ilustrasi | Filosofi Visual | File Aset Vektor (SVG) |
| :--- | :--- | :--- | :--- | :--- |
| **01** | **Location Approval** | Ilustrasi peta denah lantai mall/arsitektural dengan pin lokasi emas (*luxury map pin*) dan lencana centang persetujuan (*approval seal*). | Menunjukkan ketepatan analisis geospasial dan pemilihan *prime spot*. | `assets/illustrations/01_location_approval.svg` |
| **02** | **LOI Agreement** | Ilustrasi map dokumen legal berstempel *LOI*, pena tanda tangan beraksen emas, dan figur jabat tangan kemitraan profesional. | Menggambarkan kepastian hukum, transparansi kontrak sewa, dan kolaborasi bisnis yang kokoh. | `assets/illustrations/02_loi_agreement.svg` |
| **03** | **Landlord Handover** | Ilustrasi tangan yang menyerahkan seikat kunci gerai ritel mewah lengkap dengan gantungan bernomor gerai dan monogram JH. | Menandai momen formal penyerahan kedaulatan ruang fisik dari mall ke pihak brand. | `assets/illustrations/03_landlord_handover.svg` |
| **04** | **Fit Out Project** | Ilustrasi profil arsitek/project manager berhelm keselamatan, gulungan cetak biru (*blueprints*), dan perkakas konstruksi interior presisi (*tools, fixtures, millwork*). | Merefleksikan eksekusi rancang bangun interior dengan ketelitian tinggi dan manajemen kontraktor andal. | `assets/illustrations/04_fit_out_project.svg` |
| **05** | **Operational Preparation** | Ilustrasi terminal mesin kasir modern (POS), lembar checklist pelatihan tim staf/retail associate, dan kotak-kotak inventaris stok produk rapi. | Mengomunikasikan kesiapan operasional internal agar toko langsung siap jualan (*zero downtime*). | `assets/illustrations/05_operational_preparation.svg` |
| **06** | **Contractor Hand Over** | Ilustrasi fasad unit toko ritel yang telah selesai dibangun dan bercahaya anggun, didampingi toolkit finishing dan sertifikat kelayakan (*Fit-to-Open Certificate*). | Menandakan lolos inspeksi akhir standar mall dan serah terima toko dalam kondisi sempurna. | `assets/illustrations/06_contractor_handover.svg` |
| **07** | **Opening Day** | Ilustrasi seremoni pemotongan pita peresmian (*ribbon cutting ceremony*), aksen balon selebrasi emas/sage, taburan konfeti, dan sambutan hangat kepada pelanggan perdana. | Menciptakan euforia keberhasilan peluncuran gerai dan magnet pengunjung baru. | `assets/illustrations/07_opening_day.svg` |

### 5.7 Contact & Location Section (Get in Touch)
- **Header:** `THANK YOU VERY MUCH — Looking forward to working with you`
- **Contact Channels (Card Interaktif):**
  - **Email Address:** `jh.kreasi@gmail.com` (One-click mailto dengan template subjek)
  - **Phone / WhatsApp:** `+62 819 0808 2775` (Tombol direct chat dengan auto-text pesan: *"Halo JH Kreasi, saya tertarik berdiskusi mengenai proyek ritel..."*)
  - **Office Address:** `Treasury Tower 31st Floor, District 8, SCBD, Jakarta Selatan` (Dilengkapi peta interaktif / kartu visual SCBD)
- **Interactive Project Inquiry Form:**
  - *Full Name*
  - *Brand / Company Name*
  - *Email Address & Phone Number*
  - *Services of Interest* (Multi-select: Landlord Initiation, Fit-Out, Store Opening, Brand Activation, Bespoke Events)
  - *Target Mall / Timeline* (Opsional)
  - *Message / Project Vision*
  - *Submit Button:* *"Send Consultation Request"*

### 5.8 Footer
- Hak Cipta: `© 2026 JH Kreasi Studio. All rights reserved.`
- Tagline ringkas: `Studio • Brand Services • Established in Jakarta.`
- Tautan Kebijakan Privasi & Syarat Ketentuan.

---

## 6. Functional & Technical Requirements

### 6.1 Front-End Tech Stack Recommendation
- **Framework:** Next.js (App Router, React 19) atau Astro / Vite React untuk performa ultra cepat dan SEO maksimal.
- **Styling:** Tailwind CSS (dengan extended palette warna `#5B7062` Sage Green, `#D4AF37` Warm Gold, dan `#1C2520` Deep Forest).
- **Animations & Micro-interactions Engine:**
  - **Framer Motion:** Menggunakan hook `useScroll`, `useTransform`, dan `useSpring` untuk mengontrol animasi scroll naik dan turun secara presisi (*bidirectional scroll reactivity*), serta efek hover interaktif.
  - **Lenis Smooth Scroll (`lenis`):** Menyediakan inersia gulir (*smooth momentum scroll*) berkecepatan 60–120 FPS tanpa patah-patah di perangkat desktop maupun mobile.
- **Icons & Graphics:** Lucide-React + SVG kustom (termasuk 7 ilustrasi timeline & emblem logo).

### 6.2 Integrasi & Third-Party Services
1. **WhatsApp Click-to-Chat:** Direct WhatsApp API link (`https://wa.me/6281908082775?text=...`) dengan pesan template terstruktur.
2. **Form Submission Engine:** Formspree / Resend / Web3Forms / EmailJS untuk meneruskan isi form langsung ke email `jh.kreasi@gmail.com`.
3. **Interactive Map:** Google Maps Embed API atau Mapbox berorientasi tema gelap/monokrom untuk Treasury Tower SCBD.
4. **Analytics:** Google Analytics 4 (GA4) & Meta Pixel untuk melacak conversion goal (klik WhatsApp, submit form).

### 6.3 Non-Functional Requirements
- **Responsive Web Design (RWD):** Sempurna di Mobile (iPhone/Android, 375px+), Tablet (768px+), Laptop (1024px+), dan Layar Lebar (1440px+).
- **Performance:** Target Google PageSpeed Insights 95+ di Desktop, 90+ di Mobile.
- **SEO & Meta Tags:**
  - Title: *JH Kreasi Studio | Elevating Brands in Prime Spaces — Jakarta*
  - Meta Description: *Luxury-grade brand services in Jakarta: Landlord initiation, turnkey store fit-outs, store openings, and brand activations in top-tier malls.*
  - OpenGraph / Social Share Card dengan visual banner berlogo JH Kreasi.

---

## 7. Delivery Roadmap & Implementation Phases

| Fase | Durasi | Aktivitas Utama | Output |
| :--- | :--- | :--- | :--- |
| **Fase 1: Desain & Copywriting** | Hari 1 - 3 | Pembuatan wireframe, moodboard visual mewah, finalisasi teks/copy Indonesia & Inggris. | Desain UI Figma / Mockup visual siap bangun. |
| **Fase 2: Frontend Development** | Hari 4 - 8 | Pembangunan komponen React/Next.js, styling Tailwind, setup animasi Framer Motion. | Landing page interaktif & responsif. |
| **Fase 3: Integrasi Form & WA** | Hari 9 - 10 | Integrasi email notification handler, WhatsApp trigger, form validation. | Sistem lead capture siap beroperasi. |
| **Fase 4: Testing & Deployment** | Hari 11 - 12 | Cross-browser testing, mobile audit, optimasi SEO & kecepatan, hosting di Vercel/Cloudflare. | Website live dengan custom domain. |

---

## 8. Open Questions & Future Enhancements

1. **Portfolio Asset Collection:** Kebutuhan foto-foto dokumentasi beresolusi tinggi dari proyek toko/booth/event sebelumnya yang pernah ditangani oleh JH Kreasi untuk ditampilkan pada galeri.
2. **Bilingual Support (ID/EN):** Apakah landing page ingin langsung disiapkan dwibahasa (Bahasa Indonesia & Bahasa Inggris) untuk mengakomodasi brand ekspansi internasional? (Sangat direkomendasikan).
3. **Custom Domain:** Nama domain yang direncanakan (misal: `jhkreasi.com`, `jhkreasi.id`, atau `jhkreasistudio.com`).
