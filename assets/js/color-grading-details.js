// Function to get URL parameters
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Get the ID from URL
const promptId = getUrlParameter('id');

// Define prompt data
const promptData = {
  'cg1': {
    title: 'Transformasi Gambar Menjadi Seperti iPhone 15',
    prompt: 'Tingkatkan foto ini agar terlihat seperti diambil dengan kamera iPhone terbaru. Perbaiki kejernihan gambar, ketajaman, dan akurasi warna. terapkan pencahayaan yang realistis dan kontras yang seimbang. Pertahankan warna kulit dan tekstur yang alami. Tambahkan sedikit efek kedalaman bidang (depth of field) jika sesuai. Hindari pengeditan berlebihan atau hasil yang terlihat tidak alami. Hasil akhir harus terlihat bersih, beresolusi tinggi dan profesional.',
    images: [
      'assets/img/Artificial/color-grading/filter-1.png',      
      'assets/img/Artificial/color-grading/filter-2.png'
    ],
    description: 'Prompt ini menghasilkan visualisasi kota steampunk malam hari dengan pencahayaan neon kuning-oranye. Gaya sinematik digunakan untuk menambahkan suasana dramatis dan kedalaman perspektif.',
    settings: '--ar 16:9 --v 6 --style cinematic',
    category: 'Color Grading',
    date: 'Mei 2025',
    client: 'DigitalCraft Solutions',
    features: [
      'Desain Gambar AI Realistis',
      'Hasil Sinematik & Estetik',
      'Dukungan Rasio 16:9',
      'Kompatibel dengan Semua Platform AI',
      'Menghindari Blur & Kartun',
      'Cocok untuk Poster, Wallpaper'
    ]
  },
  'cg2': {
    title: 'Siswa SMA Jepang dengan Pastel Tone & Cahaya Emas Sore',
    prompt: 'A grainy disposable camera photograph, portrait orientation, of a striking Japanese high school boy in a short-sleeved summer sailor uniform, photographed from outside a classroom through a metal window grille. The bars of the grille and the faint reflection of the glass—tiny fingerprints and smudges catching the light—make it unmistakable that the viewer is peering in. He sits inside during a languid late-summer afternoon lesson, his delicate side profile bathed in warm golden sunlight as he stares intently at a chalkboard covered in chalk dust. Specks of dust flutter across the blocks. On his wooden desk lie an open notebook, a reference book, and a sharpened pencil, its edge gleaming. Behind him, another student is slumped forward, asleep with his face in his folded arms. The shallow depth of field keeps the girl, the desk, and the window grille in sharp focus while the chalkboard, the sleeping classmate, and the far wall slowly fade out of focus. The fine grain of 35mm film, the soft pastel color gradations, the melancholy and nostalgia--capture the glimmer of youth glimpsed through the sun-warmed classroom window.',
    images: [
      'assets/img/Artificial/color-grading/filter-cinema-1.png',
      'assets/img/Artificial/color-grading/filter-cinema-2.png'
    ],
    description: 'Gambar ini menangkap suasana nostalgia dan keheningan kelas SMA Jepang saat sore musim panas, dengan efek grainy kamera sekali pakai, pencahayaan keemasan, dan ekspresi serius dari siswa laki-laki yang diamati dari balik jendela berpalang logam. Ini menciptakan nuansa sinematik, seperti potongan dari film drama remaja.',
    settings: '--ar 16:9 --v 6 --style cinematic --q 2',
    category: 'Color Grading',
    date: 'Mei 2025',
    client: 'DigitalCraft Solutions',
    features: [
      'Detail Ultra Realistis',
      'Pencahayaan Dramatis',
      'Efek Air & Atmosfer',
      'Kompatibel dengan Semua Platform AI',
      'Hasil Sinematik',
      'Cocok untuk Konsep Film & Game'
    ]
  }
};

// Update page content based on ID
document.addEventListener('DOMContentLoaded', function() {
  const data = promptData[promptId];
  if (data) {
    // Update title
    document.querySelector('.project-title').textContent = data.title;
// Update title
document.querySelector('.project-title').textContent = data.title;
// document.querySelector('h1').textContent = data.title; // <-- hapus atau komentar baris ini
    
    // Update prompt text
    document.getElementById('promptText').textContent = data.prompt;
    
    // Update swiper content
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = `
      <div class="swiper-slide">
        <img src="${data.images[0]}" title="${data.title} - ${data.title === 'Steampunk Night City' ? 'Kota Steampunk Malam Hari' : 'Leviathan Bangkit dari Pasir'}" class="img-fluid glightbox">
      </div>
      <div class="swiper-slide">
        <img src="${data.images[1]}" title="${data.title} - ${data.title === 'Steampunk Night City' ? 'Detail Bangunan Steampunk' : 'Figur Berjubah Menghadapi Leviathan'}" class="img-fluid glightbox">
      </div>
    `;

    // Update description
    document.querySelector('#prompt-detail-collapse-1 .accordion-body p').textContent = data.description;
    
    // Update settings
    document.querySelector('#prompt-detail-collapse-2 .accordion-body p:last-child').textContent = `Setting: ${data.settings}`;

    // Update category badge
    document.querySelector('.project-badge').textContent = data.category;

    // Update date and client
    document.querySelector('.meta-item:nth-child(1) span').textContent = data.date;
    document.querySelector('.meta-item:nth-child(2) span').textContent = data.client;

    // Update features
    const featureLists = document.querySelectorAll('.feature-list');
    featureLists[0].innerHTML = data.features.slice(0, 3).map(feature => `
      <li><i class="bi bi-check2-circle"></i> ${feature}</li>
    `).join('');
    featureLists[1].innerHTML = data.features.slice(3).map(feature => `
      <li><i class="bi bi-check2-circle"></i> ${feature}</li>
    `).join('');

    // Update page title
    document.title = `Promptin | ${data.title}`;

    // Initialize GLightbox
    const lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
      zoomable: true,
      draggable: true,
      openEffect: 'zoom',
      closeEffect: 'fade',
      cssEfects: {
        fade: { in: 'fadeIn', out: 'fadeOut' },
        zoom: { in: 'zoomIn', out: 'zoomOut' }
      }
    });
  }
}); 