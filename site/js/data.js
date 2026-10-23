// DATA WEBSITE ULTAH SHEFIRIA — "Enam Tahun, Satu Panggilan"
// Edit file ini saja. String berawalan "TODO:" = belum diisi (disembunyikan di mode normal, tampil di ?preview=1).
const DATA = {
  unlock: "2026-11-09T00:00:00+07:00", // 9 Nov 2026 00:00 WIB
  lockPesan: "Sayangg, tunggu tengah malam ya 🌙",

  musik: { file: "assets/music/champagne-supernova.mp3", volume: 0.5 },

  telepon: {
    nama: "Sayangg", emojiAwal: "💢", emojiAkhir: "💗",
    teks: "Sleepcall kali ini beda. Jangan ketiduran dulu, ada yang mau kukasih 🐱"
  },

  intro: {
    judul: "Selamat ulang tahun ke-21, Sayangg 🤍",
    sub: "Enam Tahun, Satu Panggilan",
    pesan: "Boleh dibuka sambil rebahan, boleh sambil peluk kucing. Yang nggak boleh: ketiduran sebelum selesai 😤"
  },

  // 6 chapter. Isi tanggal, teks (dan ganti judul bila perlu). Foto: assets/photos/chapter/01.jpg dst.
  chapters: [
    { tanggal: "TODO: tanggal", judul: "PM Nomor di Pondok", teks: "TODO: cerita chapter 1", foto: "assets/photos/chapter/01.jpg" },
    { tanggal: "16 Juni 2020", judul: "Jadian", teks: "TODO: cerita chapter 2", foto: "assets/photos/chapter/02.jpg" },
    { tanggal: "TODO: tanggal", judul: "Sleepcall", teks: "TODO: cerita chapter 3", foto: "assets/photos/chapter/03.jpg" },
    { tanggal: "TODO: tanggal", judul: "Kehujanan Bareng", teks: "TODO: cerita chapter 4", foto: "assets/photos/chapter/04.jpg" },
    { tanggal: "TODO: tanggal", judul: "Motor Mogok", teks: "TODO: cerita chapter 5", foto: "assets/photos/chapter/05.jpg" },
    { tanggal: "TODO: tanggal", judul: "Pantai", teks: "TODO: cerita chapter 6", foto: "assets/photos/chapter/06.jpg" }
  ],

  kucing: {
    judul: "Rumah Kucing",
    petunjuk: "Ada 6 kucing yang lagi ngumpet. Ketuk tempat sembunyinya 🐱",
    selesai: "Semua kucing sudah ketemu 💗",
    tempat: ["🧺", "📦", "🛏️", "🪴", "🧸", "🪟"],
    daftar: [
      { nama: "Aheng", foto: "assets/photos/kucing/aheng.jpg", pesan: "Maaf ya, aku banyak omong. Tapi kamu tetap dengerin sampai habis 🙈" },
      { nama: "Nowy", foto: "assets/photos/kucing/nowy.jpg", pesan: "Maaf juga sering bikin kamu marah 💢. Kamu tetap yang paling sabar." },
      { nama: "Sasa", foto: "assets/photos/kucing/sasa.jpg", pesan: "Kalau lagi badmood, boleh kok. Tapi jangan lama-lama ya, aku kangen senyummu." },
      { nama: "Mili", foto: "assets/photos/kucing/mili.jpg", pesan: "Jangan males makan ya, harus teratur. Aku nggak mau kamu kecapekan." },
      { nama: "Caca", foto: "assets/photos/kucing/caca.jpg", pesan: "Jangan buru-buru bukanya ya. Nikmatin pelan-pelan, satu per satu 🤍" },
      { nama: "Cio", foto: "assets/photos/kucing/cio.jpg", pesan: "Intinya, makasih udah ada di sini 🤍" }
    ]
  },

  galeri: {
    judul: "Galeri Kita",
    photos: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => ({ src: `assets/photos/gallery/0${n}.jpg`, caption: `TODO: caption foto ${n}` }))
  },

  tiket: {
    judul: "Tiket Recharge",
    sub: "Screenshot aja, simpan buat kapan pun kamu butuh.",
    daftar: [
      { judul: "Tiket Dengerin Curhat", isi: "Berlaku tanpa disela." },
      { judul: "Tiket Sleepcall Sampai Ketiduran", isi: "Kamu duluan yang tidur, aku jagain." },
      { judul: "Tiket Jalan-jalan", isi: "Kamu yang pilih tempat." },
      { judul: "Tiket Boleh Ngomel", isi: "Aku diam. Beneran." }
    ],
    catatan: "Berlaku seumur hidup. Tidak bisa diuangkan. Tidak bisa ditukar dengan bantahan."
  },

  surat: {
    judul: "Untuk Shefiria Tersayang",
    paragraf: [
      "Sayangg, tenang, ini bukan surat tagihan 😤",
      "Aku suka hal-hal kecil darimu: kucing-kucingmu, kesabaranmu, dan ketawamu yang bikin aku lupa lagi mau ngeluh apa.",
      "Enam tahun lalu ada yang PM nomor di pondok. Sejak 16 Juni 2020 kita jalan bareng, dari hujan sampai motor mogok, dari pantai sampai sleepcall yang nggak pernah sengaja selesai. Jombang dan Mojokerto nggak pernah cukup jauh buat kita.",
      "Aku bangga banget sama kamu. Kamu kuat, mandiri, dan tetap bisa ketawa. Tapi kamu nggak harus kuat sendirian.",
      "Aku tetap akan sempatkan waktu, se-sibuk apa pun. Jadi tempat cerita, dan ngajak jalan kalau kamu butuh recharge.",
      "Doaku: semoga kamu jadi pribadi yang lebih baik lagi, dimudahkan segala urusannya, dilancarkan rezekinya, dan tambah sayang aku wkwk.",
      "Kamu pernah bilang, “terima kasih sudah menjadi ayah, kakak, teman, dan pasangan hidupku.” Itu hadiah terbesar yang pernah kudengar. Selamat ulang tahun ke-21, sayang 🤍"
    ],
    tandaTangan: "dari Syahrul, cowok yang sering dibilang ngeselin, tapi selalu pulang ke kamu 🐱"
  },

  // Easter egg: ketuk judul di halaman intro 5 kali. Foto: assets/photos/egg/1.jpg dst.
  easterEgg: {
    judul: "TODO: judul easter egg",
    pesan: "TODO: pesan rahasia",
    foto: ["assets/photos/egg/1.jpg", "assets/photos/egg/2.jpg", "assets/photos/egg/3.jpg"]
  }
};
