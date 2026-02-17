document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
            navbar.style.background = 'rgba(26, 26, 46, 0.98)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(26, 26, 46, 0.95)';
        }
    });

    // Mobile Menu Toggle (Simple implementation)
    const hamburger = document.querySelector('.hamburger');
    // Note: To make this fully functional, we'd need to add a mobile menu container in HTML
    // For now, let's just log or add a basic alert if clicked to show interactivity
    // Or simpler: let's toggle a class on a mobile menu if it existed.
    // Given the current HTML structure, we hid nav-links on mobile.
    // Let's add a class to body or nav to show links if we want a mobile menu.
    
    // For this deliverable, we'll keep it simple:
    hamburger.addEventListener('click', () => {
        alert('Mobil menü megnyitása... (Ez egy demó funkció)');
    });
});
