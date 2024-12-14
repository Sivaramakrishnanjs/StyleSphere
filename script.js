
    document.addEventListener('DOMContentLoaded', () => {
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.padding = '0.5rem 2rem';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.padding = '1rem 2rem';
                navbar.style.backdropFilter = 'blur(5px)';
            }
        });

    // Search bar animation
    const searchBar = document.querySelector('.search-bar');
        searchBar.addEventListener('focus', () => {
        searchBar.style.width = '280px';
        });
        searchBar.addEventListener('blur', () => {
        searchBar.style.width = '220px';
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const footerElements = document.querySelectorAll('[data-footer-animate]');

        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
        }, {threshold: 0.1 });

        footerElements.forEach(element => observer.observe(element));
    });
    // Smooth scroll animation for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Scroll reveal animation for elements
    const scrollReveal = () => {
        const elements = document.querySelectorAll('.product-card, .feature-item, .hero-content, [data-footer-animate]');

        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
        }, {
        threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(element => observer.observe(element));
    };

    // Hover animations for product cards
    const initHoverAnimations = () => {
        const productCards = document.querySelectorAll('.product-card');

        productCards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            card.style.transform = 'translateY(-15px) scale(1.03)';
            card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.zIndex = '1';
        });

            card.addEventListener('mouseleave', (e) => {
        card.style.transform = 'translateY(0) scale(1)';
    card.style.zIndex = '0';
            });
        });
    };

    // Initialize all animations when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        scrollReveal();
    initHoverAnimations();
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
        } else {
        navbar.classList.remove('navbar-scrolled');
        }
    });

