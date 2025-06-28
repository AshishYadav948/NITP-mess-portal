document.addEventListener('DOMContentLoaded', function() {
    // Counter animation
    function animateCounter(elementId, target, duration = 2000) {
        const element = document.getElementById(elementId);
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, 16);
    }

    // Start counters when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter('studentsCounter', 1200);
                animateCounter('mealsCounter', 850);
                animateCounter('wasteCounter', 92);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const countersSection = document.querySelector('.counters');
    if (countersSection) {
        observer.observe(countersSection);
    }

    // Add Font Awesome (if not already loaded)
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const faLink = document.createElement('link');
        faLink.rel = 'stylesheet';
        faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
        document.head.appendChild(faLink);
    }
});