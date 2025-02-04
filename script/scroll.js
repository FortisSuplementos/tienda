window.addEventListener('scroll', function() {
    const navbarbox = document.getElementById('navbarbox');
    if (window.scrollY > navbarbox.offsetTop) {
        navbarbox.classList.add('scroll');
    } else {
        navbarbox.classList.remove('scroll')
    }
})
