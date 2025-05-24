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
    'pd1': {
    title: 'Luxury Perfume Product Shot',
    prompt: 'Botol parfum mewah dengan desain minimalis berwarna emas dan hitam, nama brand nya jejak diletakkan di atas meja marmer gold, di samping bunga mawar merah, pencahayaan studio yang elegan, fokus tajam, render 3D, mockup produk.',
    images: [
      'assets/img/Artificial/product/product-pfm-1.png',
      'assets/img/Artificial/product/product-pfm-2.png'
    ],
    description: 'Prompt ini menghasilkan visual produk parfum eksklusif yang menekankan keindahan desain botol dan nuansa mewah. Detail refleksi dan pencahayaan studio dibuat untuk memperkuat kesan premium, sangat cocok digunakan untuk katalog, iklan digital, atau mockup brand kosmetik dan lifestyle.',
    settings: '--ar 3:4 --style product --v 6 --q 2',
    category: 'Product Showcase',
    date: 'Mei 2025',
    client: 'Jejak Studio',
    features: [
      'Render Produk 3D Tajam',
      'Desain Minimalis & Premium',
      'Komposisi Cahaya Studio Profesional',
      'Refleksi dan Shadow Natural',
      'Sangat Cocok untuk E-commerce & Brand Fashion',
      'Tampilan Elegan & Simetris'
    ]
  },
    'pd2': {
      title: 'Kemasan Keripik Singkong Premium',
      prompt: 'Sebuah kemasan pouch stand-up berwarna doff dengan desain minimalis untuk keripik singkong pedas, logo produk terlihat jelas, diletakkan di atas permukaan beton abu-abu dengan beberapa keripik singkong berserakan di depannya, pencahayaan studio yang bersih, fokus tajam, mockup produk makanan.',
      images: [
        'assets/img/Artificial/product/product-skg-1.png',
        'assets/img/Artificial/product/product-skg-2.jpg'
      ],
      description: 'Prompt ini menghasilkan visualisasi produk makanan ringan berupa keripik singkong dengan kemasan modern bergaya minimalis. Desainnya cocok untuk kebutuhan branding, promosi digital, atau mockup packaging produk makanan ringan lokal.',
      settings: '--ar 4:5 --style product --v 6 --q 2 --no blur --no watermark --no shadow distortion --no distorsi, --no label buram, --no bayangan aneh',
      category: 'Produk & Branding',
      date: 'Mei 2025',
      client: 'Singkong Gurih Brand',
      features: [
        'Kemasan Stand-Up Pouch Doff',
        'Pencahayaan Studio yang Elegan',
        'Fokus pada Branding Produk',
        'Detail Tinggi untuk Kemasan dan Tekstur Keripik',
        'Kompatibel untuk Mockup Produk atau Iklan',
        'Visual Realistis & Profesional'
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