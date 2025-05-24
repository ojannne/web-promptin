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
  'ilu1': {
  title: 'Ilustrasi Pesawat',
    prompt: 'Ilustrasi digital pesawat jet futuristik melesat di langit biru dengan jejak asap putih, pencahayaan dramatis matahari senja di latar belakang, detail logam reflektif, perspektif dari bawah ke atas, gaya semi-realistis.',
    images: [
    'assets/img/Artificial/Ilustrasi/ilustration-1.png',
    'assets/img/Artificial/Ilustrasi/ilustration-2.png'
    ],
    description: 'Prompt ini menciptakan ilustrasi pesawat jet modern dengan sentuhan futuristik. Komposisi dibuat dengan fokus pada perspektif dinamis dan pencahayaan sinematik untuk menghadirkan kesan kecepatan dan kekuatan.',
    settings: '--ar 16:9 --v 5 --style semi-realistic',
    category: 'Ilustrasi',
    date: 'Mei 2025',
    client: 'Promptin Aerospace Series',
    features: [
      'Ilustrasi pesawat dengan perspektif dramatis',
      'Efek cahaya dan bayangan yang realistis',
      'Cocok untuk tema teknologi dan masa depan'
    ]
  },

  'ilu2': {   
         title: 'Ilustrasi Anime Bocah Indonesia',
    prompt: 'Gambar anime anak laki-laki Indonesia mengenakan seragam sekolah merah-putih, sedang tersenyum ceria di halaman sekolah dengan latar belakang bendera merah putih berkibar, pencahayaan cerah pagi hari, gaya anime halus dengan warna pastel.',
    images: [      
      'assets/img/Artificial/Ilustrasi/ilustrasi-person-1.png',
      'assets/img/Artificial/Ilustrasi/ilustrasi-person-2.png'
    ],
    description: 'Prompt ini menggambarkan karakter anime anak Indonesia dengan suasana ceria di lingkungan sekolah. Didesain dengan gaya anime Jepang, visual ini menampilkan ekspresi gembira, warna lembut, dan elemen budaya lokal seperti seragam dan bendera nasional.',
    settings: '--ar 3:4 --style anime --v 5',
    category: 'Ilustrasi',
    date: 'Mei 2025',
    client: 'Promptin Education Series',
    features: [
      'Karakter anak-anak khas Indonesia',
      'Warna pastel dan komposisi anime',
      'Cocok untuk poster edukasi atau buku anak'
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
        <img src="${data.images[0]}" title="${data.title}" class="img-fluid glightbox">
      </div>
      ${data.images[1] ? `<div class="swiper-slide">
        <img src="${data.images[1]}" title="${data.title}" class="img-fluid glightbox">
      </div>` : ''}
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