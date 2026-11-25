# Panduan Checklist Migrasi: Onty Cake & Bakery
> **Dari WordPress Lama &rarr; Ke Website Statis Baru di Domain Utama (`https://ontycake.com/`)**

Dokumen ini berisi panduan teknis langkah demi langkah yang harus dijalankan begitu website baru telah **di-ACC** pada tahap preview GitHub Pages (`https://rafandika-zero.github.io/ontycake/`).

---

## 📋 Bagian 1: Data Bisnis & Informasi yang Wajib Dikumpulkan Sebelum Hari-H

Selama masa preview dan sebelum proses migrasi dimulai, kumpulkan data-data berikut:

1. **Daftar URL Lama WordPress (Wajib untuk 301 Redirect)**:
   - Unduh sitemap lama WordPress (biasanya di `https://ontycake.com/sitemap_index.xml` atau `sitemap.xml`) atau cek Google Search Console.
   - Catat link-link artikel, postingan promosi lama, dan halaman produk lama yang sudah terindeks di Google agar tidak menghasilkan error 404.
2. **Data Resmi Bakery (Schema & Kontak)**:
   - Alamat lengkap Outlet 1 (Jl. Toba No. 39) & Outlet 2 (Jl. Imam Bonjol No. 37).
   - Koordinat Google Maps / Link embed resmi terbaru.
   - Nomor WhatsApp CS aktif, jam operasional, dan link media sosial resmi (Instagram, TikTok, YouTube, Facebook).
3. **Akses Hosting & Domain**:
   - Akun cPanel / DirectAdmin / CyberPanel hosting `ontycake.com`.
   - Akun Cloudflare / DNS Manager domain `ontycake.com`.

---

## 🚀 Bagian 2: Tindakan Sebelum Upload (Pra-Deploy)

### 1. Backup Menyeluruh WordPress Lama
* [ ] Buat **Full Backup File**: Compress seluruh folder `public_html` ke file `.zip` dan download ke komputer lokal.
* [ ] Buat **Full Backup Database**: Export database MySQL WordPress lama (`.sql`) melalui phpMyAdmin dan simpan di tempat aman.

### 2. Bersihkan Mode Preview (Lepas `noindex`)
* [ ] Di seluruh 7 file HTML (`index.html`, `products.html`, `about.html`, `location.html`, `order.html`, `social.html`, `baking-class.html`), cari tag berikut:
  ```html
  <!-- PREVIEW MODE: Cegah index mesin pencari di GitHub Pages. HAPUS / GANTI saat migrasi ke https://ontycake.com/ -->
  <meta name="robots" content="noindex, nofollow">
  ```
* [ ] Hapus baris tersebut atau ganti menjadi:
  ```html
  <meta name="robots" content="index, follow">
  ```

### 3. Salin File Konfigurasi dari Folder `_migration_prep/`
* [ ] Salin `_migration_prep/.htaccess` ke root folder website (sejajar dengan `index.html`).
* [ ] Buka `.htaccess` dan lengkapi bagian `# WORDPRESS TO STATIC 301 REDIRECTS` dengan daftar URL lama WordPress yang sudah dicatat.
* [ ] Salin `_migration_prep/robots.txt` ke root folder website.
* [ ] Salin `_migration_prep/sitemap.xml` ke root folder website.

---

## 🛠️ Bagian 3: Pelaksanaan Upload ke Hosting (Deploy)

1. [ ] Buka File Manager cPanel di hosting domain `ontycake.com`.
2. [ ] Pindahkan file WordPress lama ke dalam folder arsip (misal: `public_html/_archive_wp/`) atau kosongkan folder web root jika sudah di-backup penuh.
3. [ ] Upload seluruh file proyek website baru ke root direktori (`public_html/`), termasuk:
   - File HTML (`index.html`, `products.html`, dll.)
   - Folder `assets/` (gambar, icons, video)
   - Folder `css/` dan `js/`
   - File `.htaccess`, `robots.txt`, dan `sitemap.xml`
4. [ ] Pastikan folder `_migration_prep/` **tidak perlu di-upload** atau tidak diakses publik.

---

## ✅ Bagian 4: Verifikasi Pasca-Deploy (Quality Check)

Setelah website aktif di `https://ontycake.com/`:

* [ ] **Cek SSL / HTTPS**: Buka `http://ontycake.com` & pastikan otomatis diarahkan (*redirect 301*) ke `https://ontycake.com`.
* [ ] **Cek Canonical Domain**: Buka `https://www.ontycake.com` & pastikan diarahkan ke apex `https://ontycake.com`.
* [ ] **Cek 301 Redirect**: Uji 3 s/d 5 URL lama WordPress, pastikan mulus masuk ke halaman website baru tanpa 404.
* [ ] **Cek Responsif Mobile & Desktop**: Uji semua halaman di smartphone dan desktop.
* [ ] **Cek Interaktivitas**:
  - Filter dan search box katalog menu (`products.html`).
  - Pagination angka (`← 1 2 3 ... 10 → >>`).
  - Menu slider tab di *Tentang Onty* dan *Choose Your Moment*.
  - Link WhatsApp CS dan Maps.
* [ ] **Submit ke Google Search Console**:
  - Masuk ke Google Search Console properti `https://ontycake.com/`.
  - Submit sitemap baru di URL: `https://ontycake.com/sitemap.xml`.
  - Minta pengindeksan ulang (*Request Indexing*) untuk halaman beranda.
