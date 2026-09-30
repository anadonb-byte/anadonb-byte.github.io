(function () {
  var root = document.documentElement;

  // Modo claro/oscuro: respeta el sistema salvo que el visitante elija otro.
  var toggle = document.querySelector('[data-theme-toggle]');
  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Menú en móvil
  var navBtn = document.querySelector('[data-nav-toggle]');
  var navList = document.querySelector('[data-nav-list]');
  if (navBtn && navList) {
    navBtn.addEventListener('click', function () {
      var open = navList.classList.toggle('is-open');
      navBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navList.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        navList.classList.remove('is-open');
        navBtn.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navList.classList.contains('is-open')) {
        navList.classList.remove('is-open');
        navBtn.setAttribute('aria-expanded', 'false');
        navBtn.focus();
      }
    });
  }

  // Sombra de la cabecera al hacer scroll
  var header = document.querySelector('[data-header]');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // En la portada, marca en el menú la sección que se está leyendo
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-list a[href^="/#"]'));
  if (links.length && document.body.classList.contains('page-home')) {
    var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
    var ticking = false;
    var update = function () {
      ticking = false;
      var line = window.innerHeight * 0.4, current = null;
      sections.forEach(function (s) { if (s.getBoundingClientRect().top <= line) current = s.id; });
      links.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '/#' + current); });
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  // Botón «Download PDF» del CV
  var printBtn = document.querySelector('[data-print]');
  if (printBtn) printBtn.addEventListener('click', function () { window.print(); });
})();
