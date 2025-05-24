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
  'id1': {
    title: 'Steampunk Night City',
    prompt: 'Pemandangan kota steampunk malam hari diterangi cahaya neon oranye dan biru yang bersinar, bangunan detail dengan tekstur logam dan ventilasi uap, suasana sinematik dengan kabut tipis di latar belakang, sudut pandang lebar, definisi tinggi.',
    images: [
      'assets/img/Artificial/photoreal/Steampunk-1.png',
      'assets/img/Artificial/photoreal/Steampunk-2.png',
      'assets/img/Artificial/photoreal/Steampunk-3.png',
      'assets/img/Artificial/photoreal/Steampunk-4.png',
      'assets/img/Artificial/photoreal/Steampunk-5.png',
      'assets/img/Artificial/photoreal/Steampunk-6.png'
    ],
    description: 'Prompt ini menghasilkan visualisasi kota steampunk malam hari dengan pencahayaan neon kuning-oranye. Gaya sinematik digunakan untuk menambahkan suasana dramatis dan kedalaman perspektif.',
    settings: '--ar 16:9 --v 6 --style cinematic',
    category: 'Photoreal',
    date: 'September 2024',
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
  'id2': {
    title: 'The Awakening Leviathan',
    prompt: 'In a vast desert with rolling dunes under a pale sky, a lone robed figure faces a massive, barnacle-covered, whale-like creature emerging from the sand. Dust swirls, the figure steps back cautiously, robe and hair billowing in the wind, as the creature rises with glinting eyes and baleen jaws, evoking awe and surreal tension over 10 seconds.',
    images: [
      'assets/img/Artificial/photoreal/photoreal-low-1.jpg',
      'assets/img/Artificial/photoreal/photoreal-low-2.png'
    ],
    description: 'Prompt ini menciptakan visualisasi epik makhluk mitologi leviathan yang bangkit dari lautan. Dengan detail yang sangat realistis dan pencahayaan dramatis, gambar ini menangkap momen menakjubkan dari kebangkitan makhluk legendaris.',
    settings: '--ar 16:9 --v 6 --style cinematic --q 2',
    category: 'Photoreal',
    date: 'September 2024',
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