const SVG_NS = 'http://www.w3.org/2000/svg';
const HOME_HANDWRITING_DURATION = 3900;
const HOME_WRITING_STROKES = [
  ['M50 52 C56 50 62 52 70 56', 'M50 69 C56 62 61 55 66 48', 'M62 63 C66 61 70 61 72 62 C70 66 67 69 65 70'],
  ['M84 58 C91 53 94 48 96 44 C100 48 104 51 108 52', 'M88 57 C92 56 94 54 95 55 C96 59 95 63 94 66', 'M92 69 C96 72 100 73 103 72', 'M104.5 65.4 C106 65.9 107.7 66.8 109 67.9'],
  ['M116 63 C121 58 124 53 128 46', 'M121 62 C121 65 121 68 121 71', 'M129 55 C132 54 135 53 137 54 C135 57 132 59 130 59', 'M127 68 C130 66 132 65 134 65 C134 68 134 70 133 72'],
  ['M150 56 C154 53 156 50 155 49', 'M150 60 C154 58 157 57 158 58 C158 61 157 65 156 68', 'M160 54 C164 52 168 52 170 54 C170 59 168 65 165 69', 'M162 60 C164 61 165 62 166 64'],
  ['M181 58 C189 55 197 52 204 52', 'M193 55 C191 60 187 64 184 66', 'M198 59 C197 63 196 66 195 68'],
  ['M211 58 C214 57 218 56 221 54', 'M216 52 C216 58 216 64 216 70', 'M223 61 C228 58 231 56 232 57 C231 61 230 64 228 66', 'M220 69 C223 70 226 68 228 65 C232 68 236 70 240 70'],
  ['M246 57 C252 55 258 52 263 52', 'M259 54 C257 58 253 63 247 67', 'M258 58 C258 62 258 66 257 70', 'M263 62 C266 63 268 64 270 65'],
  ['M278 56 C282 52 284 49 283 47', 'M278 63 C281 59 283 55 284 54', 'M282 60 C282 64 282 68 281 70', 'M288 58 C292 57 296 55 300 54', 'M295 56 C296 61 296 67 295 72', 'M288 48 C292 49 296 50 298 50']
];

const HOME_EXTRA_GLYPH_STROKES = ['M104.5 65.4 C106 65.9 107.7 66.8 109 67.9'];

function header(active) {
  const links = [
    ['index.html', '首页', 'home'],
    ['products.html', '产品', 'products'],
    ['about.html', '品牌故事', 'story'],
    ['stores.html', '门店', 'stores'],
    ['gifts.html', '赠品', 'gifts'],
    ['about.html', '关于我们', 'about']
  ];

  return `
<header class="site-header">
  <a class="brand logo-brand" href="index.html" aria-label="分子罗曼首页"><img src="assets/figma/logo-m2r.svg" alt="分子罗曼" /></a>
  <input class="nav-toggle" id="nav-toggle" type="checkbox" aria-label="打开导航" />
  <label class="nav-button" for="nav-toggle" aria-hidden="true"><span></span></label>
  <nav class="site-nav" aria-label="主导航">
    ${links.map(([href, label, key]) => `<a class="${key === active ? 'active' : ''}" href="${href}">${label}</a>`).join('')}
  </nav>
  <div class="nav-actions" aria-label="快捷操作"><a href="#" aria-label="搜索"><img class="icon-default" src="assets/figma/icon-search.svg" alt="" /><img class="icon-hover" src="assets/figma/icon-search_hover.svg" alt="" /></a><a href="#" aria-label="账户"><img class="icon-default" src="assets/figma/icon-user.svg" alt="" /><img class="icon-hover" src="assets/figma/icon-user_hover.svg" alt="" /></a><a href="#" aria-label="购物袋"><img class="icon-default" src="assets/figma/icon-buy.svg" alt="" /><img class="icon-hover" src="assets/figma/icon-buy_hover.svg" alt="" /></a></div>
</header>`;
}

function footer() {
  return `
<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-brand"><img class="footer-logo" src="assets/figma/logo-m2r.svg" alt="分子罗曼" /><p>为现代避风港打造的氛围香氛。</p></div>
    <nav class="footer-links" aria-label="服务"><a href="#">订单追踪</a><a href="#">会员中心</a><a href="#">配送服务</a></nav>
    <nav class="footer-links" aria-label="条款"><a href="#">退换货政策</a><a href="#">隐私政策</a><a href="#">服务条款</a></nav>
    <div class="newsletter"><label for="newsletter-email">订阅我们的电子报</label><form><input id="newsletter-email" type="email" placeholder="邮箱地址" /><button type="submit">订阅</button></form></div>
  </div>
  <div class="copyright">© 2024 分子罗曼香氛。保留所有权利。</div>
</footer>`;
}

async function setupHomeHandwriting() {
  const handwritingTitle = document.querySelector('.handwriting-title');
  const writtenText = document.querySelector('#homeWrittenText');
  const maskStrokes = document.querySelector('#homeMaskStrokes');
  if (!handwritingTitle || !writtenText || !maskStrokes) return;

  const response = await fetch('assets/figma/handwriting-title.svg');
  const svgText = await response.text();
  const parsed = new DOMParser().parseFromString(svgText, 'image/svg+xml');
  const glyphPaths = [...parsed.querySelectorAll('path')].map((path) => path.getAttribute('d')).filter(Boolean);

  glyphPaths.forEach((d) => {
    const path = document.createElementNS(SVG_NS, 'path');
    path.setAttribute('d', d);
    writtenText.appendChild(path);
  });

  HOME_EXTRA_GLYPH_STROKES.forEach((d) => {
    const path = document.createElementNS(SVG_NS, 'path');
    path.setAttribute('d', d);
    path.classList.add('home-extra-written-stroke');
    writtenText.appendChild(path);
  });

  const flattenedStrokes = HOME_WRITING_STROKES.flat();
  const lengths = flattenedStrokes.map((d) => {
    const path = document.createElementNS(SVG_NS, 'path');
    path.setAttribute('d', d);
    maskStrokes.appendChild(path);
    return { path, length: path.getTotalLength() };
  });
  const totalLength = lengths.reduce((sum, item) => sum + item.length, 0);
  let elapsed = 0;

  lengths.forEach(({ path, length }) => {
    const duration = Math.max(72, (length / totalLength) * HOME_HANDWRITING_DURATION);
    path.style.setProperty('--stroke-length', length);
    path.style.setProperty('--stroke-duration', `${duration}ms`);
    path.style.setProperty('--stroke-delay', `${elapsed}ms`);
    elapsed += duration * 0.9;
  });

  const observer = new IntersectionObserver(([entry], currentObserver) => {
    if (entry.isIntersecting) {
      handwritingTitle.classList.add('is-writing');
      currentObserver.disconnect();
    }
  }, { threshold: 0.55 });

  observer.observe(handwritingTitle);
}

/* ===== Product Carousel ===== */
function setupProductCarousel() {
  const carousel = document.getElementById('productCarousel');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  const counterEl = document.getElementById('carouselCurrent');
  const total = slides.length;
  let current = 0;
  let startX = 0;
  let diffX = 0;
  let isDragging = false;

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    if (counterEl) counterEl.textContent = current + 1;
  }

  prevBtn.addEventListener('click', (e) => { e.stopPropagation(); goTo(current - 1); });
  nextBtn.addEventListener('click', (e) => { e.stopPropagation(); goTo(current + 1); });

  // Touch swipe support
  track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; isDragging = true; }, { passive: true });
  track.addEventListener('touchmove', (e) => { if (isDragging) diffX = e.touches[0].clientX - startX; }, { passive: true });
  track.addEventListener('touchend', () => {
    if (Math.abs(diffX) > 50) { goTo(diffX > 0 ? current - 1 : current + 1); }
    diffX = 0; isDragging = false;
  });

  // Click to open lightbox
  carousel.addEventListener('click', () => { openLightbox(current); });

  // Auto-play (optional gentle rotation)
  let autoTimer = setInterval(() => goTo(current + 1), 5000);
  carousel.addEventListener('mouseenter', () => clearInterval(autoTimer));
  carousel.addEventListener('mouseleave', () => { autoTimer = setInterval(() => goTo(current + 1), 5000); });

  // Expose for lightbox
  carousel._goTo = goTo;
  carousel._getCurrent = () => current;
  carousel._getTotal = () => total;
}

/* ===== Lightbox / Zoom ===== */
function setupLightbox() {
  const overlay = document.getElementById('lightbox');
  if (!overlay) return;

  const img = document.getElementById('lightboxImg');
  const closeBtn = overlay.querySelector('.lightbox-close');
  const prevBtn = overlay.querySelector('.lightbox-prev');
  const nextBtn = overlay.querySelector('.lightbox-next');
  const counterEl = document.getElementById('lightboxCurrent');
  const carousel = document.getElementById('productCarousel');
  let sources = [];
  let current = 0;

  // Gather image sources from carousel
  if (carousel) {
    sources = [...carousel.querySelectorAll('.carousel-slide img')].map(i => i.src);
  }

  function show(index) {
    if (!sources.length) return;
    current = (index + sources.length) % sources.length;
    img.src = sources[current];
    img.alt = `产品大图 ${current + 1}/${sources.length}`;
    if (counterEl) counterEl.textContent = current + 1;
  }

  window.openLightbox = function (index) {
    if (!sources.length) return;
    show(index);
    overlay.classList.add('is-active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  function closeLightbox() {
    overlay.classList.remove('is-active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', () => show(current - 1));
  nextBtn.addEventListener('click', () => show(current + 1));

  // Close on backdrop click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === overlay.querySelector('.lightbox-stage')) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('is-active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });

  // Touch swipe in lightbox
  let lbStartX = 0, lbDiffX = 0;
  overlay.addEventListener('touchstart', (e) => { lbStartX = e.touches[0].clientX; }, { passive: true });
  overlay.addEventListener('touchmove', (e) => { lbDiffX = e.touches[0].clientX - lbStartX; }, { passive: true });
  overlay.addEventListener('touchend', () => {
    if (Math.abs(lbDiffX) > 60) { show(lbDiffX > 0 ? current - 1 : current + 1); }
    lbDiffX = 0;
  });
}

/* ===== Quantity Buttons ===== */
function setupQuantity() {
  const minus = document.getElementById('qty-minus');
  const plus = document.getElementById('qty-plus');
  const display = document.getElementById('qty-value');
  if (!minus || !plus || !display) return;

  let qty = 1;
  minus.addEventListener('click', () => { qty = Math.max(1, qty - 1); display.textContent = qty; });
  plus.addEventListener('click', () => { qty = Math.min(99, qty + 1); display.textContent = qty; });
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page || 'home';
  const headerMount = document.querySelector('[data-site-header]');
  const footerMount = document.querySelector('[data-site-footer]');

  if (headerMount) headerMount.outerHTML = header(page);
  if (footerMount) footerMount.outerHTML = footer();

  setupHomeHandwriting();
  setupProductCarousel();
  setupLightbox();
  setupQuantity();
});

// Deploy trigger: 2026-05-22T00:25:00
