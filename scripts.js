document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const nav = document.querySelector('nav ul');
    const toggleButton = document.createElement('button');
    toggleButton.innerText = '☰';
    toggleButton.classList.add('menu-toggle');

    document.querySelector('nav').insertBefore(toggleButton, nav);

    toggleButton.addEventListener('click', function () {
        nav.classList.toggle('open');
    });

    // Smooth Scroll
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });

            nav.classList.remove('open');
        });
    });
})