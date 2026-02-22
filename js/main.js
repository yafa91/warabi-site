// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  menuOverlay.classList.toggle('open');
});

menuClose.addEventListener('click', () => {
  hamburger.classList.remove('open');
  menuOverlay.classList.remove('open');
});

// ── NAVIGATION ENTRE SECTIONS ──
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  hamburger.classList.remove('open');
  menuOverlay.classList.remove('open');
}

// Tous les liens avec data-section
document.querySelectorAll('[data-section]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(link.dataset.section);
  });
}); // ← parenthèse manquante ici dans ton fichier original

// ── FAQ ACCORDION ──
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    btn.classList.toggle('open');
    answer.classList.toggle('open');
  });
});

// ── FAQ CATEGORIES ──
const catBtns = document.querySelectorAll('.faq-cat');
const faqGroups = document.querySelectorAll('.faq-group');

function showCategory(cat) {
  faqGroups.forEach(g => {
    if (cat === 'all' || g.dataset.cat === cat) {
      g.classList.add('visible');
    } else {
      g.classList.remove('visible');
    }
  });
}

showCategory('all');

catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    showCategory(btn.dataset.cat);
  });
});