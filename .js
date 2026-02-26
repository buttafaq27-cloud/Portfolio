/* Author: Afaq Butt
   Description: Premium Portfolio Interactions
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Reveal Animation on Scroll
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

    // Elements to animate
    const animateElements = document.querySelectorAll('.hero-text, .hero-image, .skill-card, .section-title');
    
    animateElements.forEach(el => {
        // Initial state set kar rahe hain (hidden)
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
        revealOnScroll.observe(el);
    });

    // 2. Active Navigation Highlight
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 3. Simple Console Message (A "Easter Egg" for other developers)
    console.log("%cCrafted by Afaq Butt", "color: #6366f1; font-size: 20px; font-weight: bold;");
    console.log("Looking for a Full Stack Developer? Let's connect!");

});
.menu a.active {
    color: var(--accent) !important;
    border-bottom: 2px solid var(--accent);
}