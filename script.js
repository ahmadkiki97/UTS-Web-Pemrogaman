
const backToTopButton = document.getElementById('backToTop');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.getElementById('menuCV');
const memberCards = document.querySelectorAll('.member-card[data-card-link]');

console.log('Selamat datang di website CV GROUP 10 — UTS Pemrograman Web I!');

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

memberCards.forEach((card) => {
    const animateCard = () => {
        card.classList.remove('card-clicked');
        void card.offsetWidth; 
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
