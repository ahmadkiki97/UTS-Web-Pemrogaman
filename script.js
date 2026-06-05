// Menunggu seluruh konten HTML selesai dimuat sebelum menjalankan script
const backToTopButton = document.getElementById('backToTop');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.getElementById('menuCV');

// Fungsi untuk menampilkan tombol kembali ke atas saat pengguna melakukan scroll
function toggleBackToTopButton() {
    if (window.scrollY > 420) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

// Event scroll untuk memanggil fungsi tombol kembali ke atas
window.addEventListener('scroll', toggleBackToTopButton);

// Event klik pada tombol untuk kembali ke bagian paling atas halaman
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Menutup menu navbar otomatis setelah link diklik pada tampilan mobile
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            const bootstrapCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
            bootstrapCollapse.hide();
        }
    });
});
