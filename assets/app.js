// script.js
// =========================
// Mobile Menu Toggle
// =========================
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.getElementById('mobileNav');
  menuToggle.addEventListener('click', function () {
    mobileNav.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });

  // =========================
  // Hero Slider
  // =========================
  const slides = document.querySelectorAll('.hero-slide');
  const prevBtn = document.querySelector('.hero-prev');
  const nextBtn = document.querySelector('.hero-next');
  const dotsContainer = document.querySelector('.hero-dots');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
    // Dots
    if (dotsContainer) {
      dotsContainer.querySelectorAll('button').forEach((dot, i) => {
        dot.classList.toggle('active', i === idx);
      });
    }
    currentSlide = idx;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
  }
  function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  // Dots
  if (dotsContainer) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.setAttribute('aria-label', `Chuyển đến slide ${i + 1}`);
      dot.addEventListener('click', () => showSlide(i));
      dotsContainer.appendChild(dot);
    });
  }
  showSlide(0);

  // Auto slide
  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }
  function stopAutoSlide() {
    clearInterval(slideInterval);
  }
  startAutoSlide();

  // Controls
  nextBtn.addEventListener('click', () => { nextSlide(); stopAutoSlide(); startAutoSlide(); });
  prevBtn.addEventListener('click', () => { prevSlide(); stopAutoSlide(); startAutoSlide(); });

  // Pause on hover
  document.querySelector('.hero-slider').addEventListener('mouseenter', stopAutoSlide);
  document.querySelector('.hero-slider').addEventListener('mouseleave', startAutoSlide);

  // =========================
  // Add to Cart Toast
  // =========================
  const cartToast = document.getElementById('cartToast');
  function showToast(msg) {
    cartToast.textContent = msg;
    cartToast.classList.add('show');
    setTimeout(() => {
      cartToast.classList.remove('show');
    }, 2000);
  }
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', function () {
      const product = btn.getAttribute('data-product');
      showToast(`Đã thêm "${product}" vào giỏ hàng!`);
    });
  });

  // =========================
  // Debounced Search Filter
  // =========================
  const searchInput = document.getElementById('productSearch');
  const productsGrid = document.getElementById('productsGrid');
  let debounceTimer;
  searchInput.addEventListener('input', function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = searchInput.value.trim().toLowerCase();
      productsGrid.querySelectorAll('.product-card').forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        card.style.display = title.includes(query) ? '' : 'none';
      });
    }, 250);
  });

  // =========================
  // Progressive Enhancement
  // =========================
  // If JS is disabled, all content is visible and usable.
});