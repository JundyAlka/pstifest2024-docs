# Website Dokumentasi PSTI FEST 2024

## Deskripsi
Website dokumentasi untuk acara seminar dan lomba PSTI FEST 2024 dengan tema "Technology Driven Society Empowerment". Website ini dibuat dengan desain futuristik yang sesuai dengan homepage PSTI FEST 2025 dan mengadopsi tata letak dari website oprec24.my.id.

## Fitur Utama

### 1. Design System Futuristik
- **Color Palette**: Dark blue (#1a1a2e), Cyan (#00d4ff), Red accent (#ff6b6b)
- **Typography**: Poppins (headings), Inter (body), Orbitron (accent)
- **Effects**: Glassmorphism, neon glow, particle background, parallax scrolling

### 2. Sections Website
- **Hero Section**: Judul utama dengan efek typewriter dan card floating
- **Overview Section**: Statistik acara dengan counter animation
- **Seminar Section**: Dokumentasi seminar dengan info narasumber
- **Lomba Section**: Dokumentasi 3 kompetisi (Ideathon, Badminton, Smart Village Awards)
- **Timeline Section**: Timeline interaktif kegiatan PSTI FEST 2024
- **Gallery Section**: Galeri foto dengan filter dan lightbox
- **About Section**: Informasi tentang PSTI FEST 2024
- **Footer**: Kontak dan social media links

### 3. Fitur Interaktif
- **Responsive Navigation**: Sticky navbar dengan mobile hamburger menu
- **Smooth Scrolling**: Navigasi halus antar section
- **Gallery Lightbox**: Modal untuk preview gambar
- **Filter Gallery**: Filter foto berdasarkan kategori
- **Counter Animation**: Animasi angka statistik
- **Parallax Effects**: Efek parallax pada elemen visual
- **Hover Effects**: Efek hover pada cards dan buttons

### 4. Teknologi yang Digunakan
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript**: Vanilla JS untuk interaktivitas
- **Particles.js**: Background particle effects
- **Responsive Design**: Mobile-first approach

## Struktur File

```
psti-fest-docs/
├── index.html              # File HTML utama
├── css/
│   ├── style.css           # CSS utama dengan design system
│   ├── navbar.css          # Styling navigation
│   ├── hero.css            # Styling hero section
│   ├── sections.css        # Styling semua sections
│   └── gallery.css         # Styling gallery dan lightbox
├── js/
│   ├── main.js             # JavaScript utama
│   ├── gallery.js          # Fungsi gallery dan lightbox
│   └── animations.js       # Animasi dan efek visual
├── images/
│   ├── seminar/            # Foto-foto seminar
│   ├── lomba/              # Foto-foto lomba
│   └── galeri/             # Foto-foto galeri umum
└── assets/
    ├── icons/              # Icon files
    └── fonts/              # Font files
```

## Konten Website

### Statistik Acara
- **500+ Peserta**: Total peserta semua kegiatan
- **3 Kompetisi**: Ideathon, Badminton, Smart Village Awards
- **4 Hari Acara**: Durasi pelaksanaan PSTI FEST 2024
- **1 Seminar**: Seminar Nasional AI dan Smart Village

### Timeline Kegiatan
1. **18 Jun 2024**: Pembukaan Pendaftaran
2. **22 Jul 2024**: Seminar Nasional
3. **24 Jul 2024**: Lomba Ideathon
4. **26 Jul 2024**: Lomba Badminton
5. **29 Jul 2024**: Acara Puncak

### Kompetisi
1. **Ideathon**: 50+ tim, hadiah Rp 2.25M
2. **Badminton**: 32 peserta, hadiah Rp 650K
3. **Smart Village Awards**: 15 desa, penghargaan plakat

## Cara Deployment

### 1. Static Hosting
Website dapat di-deploy ke platform static hosting seperti:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

### 2. Web Server
Dapat dijalankan di web server dengan:
- Apache
- Nginx
- Python HTTP Server

### 3. Langkah Deployment
1. Upload semua file ke hosting
2. Pastikan struktur folder tetap sama
3. Set index.html sebagai file utama
4. Konfigurasi domain (jika diperlukan)

## Optimasi yang Telah Dilakukan

### 1. Performance
- Lazy loading untuk gambar
- Optimized CSS dengan custom properties
- Efficient JavaScript dengan debouncing
- Compressed images

### 2. SEO
- Semantic HTML markup
- Meta tags yang sesuai
- Alt text untuk gambar
- Structured data

### 3. Accessibility
- Keyboard navigation support
- Screen reader friendly
- High contrast colors
- Focus indicators

### 4. Mobile Optimization
- Responsive design
- Touch-friendly navigation
- Optimized images untuk mobile
- Fast loading times

## Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Customization

### Mengganti Warna
Edit variabel CSS di `css/style.css`:
```css
:root {
    --primary-color: #1a1a2e;
    --secondary-color: #00d4ff;
    --accent-color: #ff6b6b;
}
```

### Menambah Konten
1. Edit `index.html` untuk menambah section
2. Tambah styling di file CSS yang sesuai
3. Tambah JavaScript jika diperlukan interaktivitas

### Mengganti Gambar
1. Upload gambar baru ke folder `images/`
2. Update path di HTML
3. Pastikan ukuran dan format sesuai

## Maintenance
- Update konten secara berkala
- Backup file secara rutin
- Monitor performance website
- Update dependencies jika diperlukan

## Contact
Untuk pertanyaan atau support, hubungi:
- Program Studi Teknologi Informasi
- Universitas Muhammadiyah Purworejo
- Email: psti@ump.ac.id

---

Website ini dibuat dengan ❤️ untuk mendokumentasikan PSTI FEST 2024

