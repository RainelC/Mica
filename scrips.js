
const headerSuperior = document.querySelector('.header_superior');
const nav = document.querySelector('.container__menu');
const logo = document.querySelector('.logo');
const searchBar = document.querySelector('.search');

const headerOffset = headerSuperior.offsetTop;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScrollTop && currentScroll > headerOffset) {
        // Scroll hacia abajo
        nav.classList.add('sticky');
        logo.classList.add('hidden');
        searchBar.classList.add('hidden');
    } else {
        // Scroll hacia arriba o en la parte superior
        if (currentScroll <= 0) { // Si el scroll está en la parte superior
            nav.classList.remove('sticky');
            logo.classList.remove('hidden');
            searchBar.classList.remove('hidden');
        } else {
            // Scroll hacia arriba pero no en la parte superior
            nav.classList.add('sticky');
            logo.classList.add('hidden');
            searchBar.classList.add('hidden');
        }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});



