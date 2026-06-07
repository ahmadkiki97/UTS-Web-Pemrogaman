/* ================================================================
   INTERAKSI WEBSITE GROUP 10
   Semua elemen dicek terlebih dahulu agar script aman di tiap halaman.
   ================================================================ */
const backToTopButton = document.getElementById('backToTop');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.getElementById('menuCV');
const memberCards = document.querySelectorAll('.member-card[data-card-link]');

// Pesan sederhana untuk mahasiswa yang membuka Developer Tools browser.
console.log('Selamat datang di website CV GROUP 10 — UTS Pemrograman Web I!');

// Tombol back to top hanya diproses jika elemennya tersedia di halaman.
if (backToTopButton) {
    const toggleBackToTopButton = () => {
        backToTopButton.classList.toggle('show', window.scrollY > 420);
    };

    window.addEventListener('scroll', toggleBackToTopButton, { passive: true });
    toggleBackToTopButton();

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Smooth scroll untuk link internal (#bagian), tanpa mengganggu link ke file lain.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        const targetId = anchor.getAttribute('href');
        const targetElement = targetId && targetId !== '#' ? document.querySelector(targetId) : null;

        if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Menu Bootstrap pada HP ditutup otomatis sesudah pengguna memilih link.
if (navbarCollapse && typeof bootstrap !== 'undefined') {
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bootstrapCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
                bootstrapCollapse.hide();
            }
        });
    });
}

// Card diberi umpan balik visual saat ditekan; Enter juga dapat membuka CV.
memberCards.forEach((card) => {
    const animateCard = () => {
        card.classList.remove('card-clicked');
        void card.offsetWidth; // Memulai ulang animasi CSS dengan memicu reflow.
        card.classList.add('card-clicked');
    };

    card.addEventListener('pointerdown', animateCard);
    card.addEventListener('animationend', () => card.classList.remove('card-clicked'));
    card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            animateCard();
            window.setTimeout(() => {
                window.location.href = card.dataset.cardLink;
            }, 180);
        }
    });
});
