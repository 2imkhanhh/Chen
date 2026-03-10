const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuClose = document.getElementById('mobileMenuClose');

if (hamburgerBtn && mobileMenuOverlay) {
    hamburgerBtn.addEventListener('click', () => {
        mobileMenuOverlay.classList.add('open');
        document.body.style.overflow = 'hidden'; 
    });

    mobileMenuClose.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('open');
        document.body.style.overflow = '';
    });

    mobileMenuOverlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
}