/* Author: Afaq Butt
   Description: Premium Portfolio Interactions with Mobile Menu Fix
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // --- MOBILE MENU LOGIC (New Addition) ---
    const menuIcon = document.querySelector('.menu-icon'); // 3 lines wala icon
    const menu = document.querySelector('.menu');         // Aapki links wali list
    const navLinksList = document.querySelectorAll('.menu a');

    if (menuIcon && menu) {
        menuIcon.addEventListener('click', () => {
            menu.classList.toggle('active'); // Click karne par menu khulega/band hoga
        });

        // Link par click karte hi menu khud band ho jaye (Smooth experience)
        navLinksList.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
            });
        });
    }

    // --- YOUR ORIGINAL CODE (Animations & Scroll) ---
    const observerOptions = {
        threshold: 0.1
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.hero-text, .hero-image, .skill-card, .section-title');
    
    animateElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
        revealOnScroll.observe(el);
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (current && link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    console.log("%cCrafted by Afaq Butt", "color: #6366f1; font-size: 20px; font-weight: bold;");
});
