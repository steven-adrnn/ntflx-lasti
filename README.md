# NTFLX-LASTI

## Deskripsi Proyek

NTFLX-LASTI adalah aplikasi berbasis web yang dirancang untuk membuat prototipe dari pengembangan layanan Netflix yang diajukan sebagai bagian dari tugas mata kuliah II3120 - Layanan Sistem dan Teknologi informasi. Proyek ini dikembangkan menggunakan teknologi modern seperti Next.js dan Tailwind CSS, memberikan pengalaman pengguna yang cepat dan responsif.

Anda dapat mengakses versi deployed dari prototipe ini dengan mengunjungi https://ntflx-lastii.vercel.app/

## Fitur Utama

- **Sistem Voting Film**: Sistem Voting Film (Request a Movie) memungkinkan pengguna berpartisipasi aktif dalam pemilihan konten Netflix melalui sistem voting online. Misalnya, Netflix akan menampilkan beberapa pilihan film atau serial yang sedang dipertimbangkan untuk diproduksi atau dibeli lisensinya, kemudian pengguna bisa memberikan suara dan feedback. Sistem ini membantu Netflix membuat keputusan konten berdasarkan preferensi nyata dari pengguna.

- **Watch Party**: Watch Party adalah fitur yang memungkinkan pengguna menonton konten Netflix bersama-sama secara virtual meskipun berada di lokasi berbeda. Fitur ini menyediakan ruang streaming yang tersinkronisasi dimana semua peserta melihat konten pada waktu yang sama, dilengkapi dengan fitur chat real-time untuk berinteraksi selama menonton. Ketika host melakukan pause atau play, video akan otomatis tersinkronisasi untuk semua peserta.


## Teknologi yang Digunakan

- **Framework**: Next.js

- **Styling**: Tailwind CSS

- **Komponen UI**: Radix UI dan Lucide React

- **Bahasa**: TypeScript

## Struktur Proyek

Berikut adalah struktur folder utama dalam repositori:

```
ntflx-lasti/
├── app/                  # Halaman dan rute aplikasi utama
├── components/           # Komponen UI yang dapat digunakan kembali
├── lib/                  # Pustaka dan fungsi tambahan
├── public/               # File statis (gambar, ikon, dll.)
├── styles/               # Konfigurasi dan gaya khusus
├── package.json          # Informasi dependensi dan skrip npm
├── next.config.mjs       # Konfigurasi untuk Next.js
├── tailwind.config.ts    # Konfigurasi untuk Tailwind CSS
```

## Persyaratan Aplikasi

Node.js: Pastikan Node.js telah terinstal di sistem Anda. [Unduh Node.js di sini](https://nodejs.org/en)

Paket Tambahan: Radix UI dan Lucide React (akan diinstal melalui `npm install`).

## Cara Menjalankan Proyek Secara Lokal

1. Clone repositori ini:
```
git clone https://github.com/steven-adrnn/ntflx-lasti.git
cd ntflx-lasti
```
2. Instal dependensi:

`npm install`

3. Jalankan server pengembangan:

`npm run dev`
atau
`yarn dev`
atau
`pnpm dev`

4. Buka http://localhost:3000 di browser Anda untuk melihat aplikasi.

## Kontributor proyek:
- [Steven Adrian Corne - 18222101](https://github.com/steven-adrnn)
- [Dama Dhananjaya Daliman - 18222047](https://github.com/RunningPie)
- [Alvin Fadhilah Akmal - 18222079](https://github.com/Salt-E)
- [Daffari Adiyatma - 18222003](https://github.com/jackund25)
- [Kezia Caren Cahyadi - 18222041](https://github.com/keziachyd)
