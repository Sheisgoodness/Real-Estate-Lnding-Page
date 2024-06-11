document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Swiper initialization
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Tab functionality for buy, sell, and rent buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    const heroForm = document.querySelector('.hero-form');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const tab = button.dataset.tab;
            const formSection = document.querySelector(`#${tab}`);

            heroForm.querySelectorAll('form').forEach(form => form.style.display = 'none');
            if (formSection) {
                formSection.style.display = 'block';
            }
        });
    });

    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.1
    };

    const sectionsToAnimate = document.querySelectorAll('.section.service, .section.about, .section.team, section.wrapper, section.newsletter');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    sectionsToAnimate.forEach(section => observer.observe(section));
});
