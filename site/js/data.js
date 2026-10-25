// DATA WEBSITE ULTAH SHEFIRIA — "Enam Tahun, Satu Panggilan"
// Edit file ini saja. String berawalan "TODO:" = belum diisi (disembunyikan di mode normal, tampil di ?preview=1).
const DATA = {
  unlock: "2026-11-09T00:00:00+07:00", // 9 Nov 2026 00:00 WIB
  lockPesan: "Sayangg, tunggu tengah malam ya 🌙",

  musik: { file: "assets/music/champagne-supernova.mp3", volume: 0.5 },

  telepon: {
    nama: "Sayangg", emojiAwal: "💢", emojiAkhir: "💗",
        foto: "assets/photos/syahrul.jpg",
        tanggal: "🎂9 November 2026🎂",
    teks: "Sleepcall kali ini beda. Jangan ketiduran dulu, ada yang mau kukasih 🐱"
  },

  intro: {
    judul: "Selamat ulang tahun ke-21, Sayangg 🤍",
    sub: "Enam Tahun, Satu Panggilan",
    pesan: "Boleh dibuka sambil rebahan, boleh sambil peluk kucing. Yang nggak boleh: ketiduran sebelum selesai 😤"
  },

  // 6 chapter. Isi tanggal, teks (dan ganti judul bila perlu). Foto: assets/photos/chapter/01.jpg dst.
    chapters: [
    { tanggal: "2020", judul: "Awal Jadian", teks: "Di teras kafe, aku nanya, “Kamu mau nggak jadi pacarku?” Kamu malah jawab nggak mau, katanya aku ngeselin. Aku takut banget ditolak wkwk, tapi ternyata itu awal kita jadian.", foto: "assets/photos/chapter/01.jpg" },
    { tanggal: "2021", judul: "Awal Masuk Sekolah, Masa Corona", teks: "Kita masih di pondok, dan aku selalu nungguin kamu berangkat sekolah. Kamu pernah pesen, “Kalau ketemu jangan lupa nyapa ya.” Aku agak malu karena lagi sama anak-anak, pasti diteriakin kalau aku nyapa ceweku 🙈", foto: "assets/photos/chapter/02.jpg" },
    { tanggal: "2022", judul: "Masa Mau Lulus MTs", teks: "Aku nungguin kamu maju munaqosah, dan kamu lancar banget. Dari situ aku yakin aku nggak salah pilih.", foto: "assets/photos/chapter/03.jpg" },
    { tanggal: "2023", judul: "Bukber Berdua", teks: "Kita bukber berdua di meja makan rumahmu, terus lanjut sholat di sana. Ibumu bilang, “Makan di meja makan sini ya, nak.” Aku deg-degan nggak berhenti, takut campur senang. Itu pertama kalinya aku buka puasa di rumahmu.", foto: "assets/photos/chapter/04.jpg" },
    { tanggal: "2024", judul: "Kenangan di Sekolah", teks: "Waktunya cuma sebentar sebelum guru datang, jadi aku nyuruh kamu cepet-cepet ngomong. Aku lupa kamu bilang apa, tapi aku ingat panik dan deg-degannya. Sekarang malah jadi pengin sekolah lagi wkwk.", foto: "assets/photos/chapter/05.jpg" },
    { tanggal: "2025", judul: "Mantai Bareng", teks: "Ini pertama kalinya kita mantai bareng, di Pantai Tanjung Penyu, Malang. Punggungku pegel banget, “jek suwe ta sampe?” Takut campur seneng, tapi nggak apa-apa buat pengalaman. Lain kali pengin ngulang, tapi bawa mobil aja wkwk.", foto: "assets/photos/chapter/06.jpg" },
    { tanggal: "2026", judul: "Charger Energy", teks: "Di kafe Trawas, aku bilang, “Sayang, perutku sakit,” terus aku kentut. Maaf ya kentutnya bunyi. Tapi kamu ketawa, dan itu cukup jadi charger buatku. Malunya setengah mati sih, nggak mau ngulangin lagi wkwk.", foto: "assets/photos/chapter/07.jpg" }
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
    photos: [
      { src: "assets/photos/gallery/01.jpg", caption: "Kita berdua, dan kamu masih yang paling cantik di fotoku 🤍" },
      { src: "assets/photos/gallery/02.jpg", caption: "Senyum yang bikin aku lupa capek." },
      { src: "assets/photos/gallery/03.jpg", caption: "Kita versi nggak sempat siap-siap, tapi tetap bahagia." },
      { src: "assets/photos/gallery/04.jpg", caption: "Satu foto, seribu kenangan, dan sejuta kangen." },
      { src: "assets/photos/gallery/05.jpg", caption: "Kamu yang lagi ketawa. Ini favoritku." },
      { src: "assets/photos/gallery/06.jpg", caption: "Hari biasa, tapi bareng kamu jadi spesial." },
      { src: "assets/photos/gallery/07.jpg", caption: "Kalau kangen, aku buka foto ini." },
      { src: "assets/photos/gallery/08.jpg", caption: "Yang penting kita masih bareng sampai sekarang." },
      { src: "assets/photos/gallery/09.jpg", caption: "Foto lain mungkin hilang, tapi yang ini kusimpan terus." }
    ]
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
    judul: "Kamu nemu rahasianya 😆",
    pesan: "Ini bukti aku nyimpen foto-foto lucumu. Manyun pun tetap kusayang, tapi senyum tetap juara 🤍",
    foto: ["assets/photos/egg/1.jpg", "assets/photos/egg/2.jpg", "assets/photos/egg/3.jpg"]
  }
};
