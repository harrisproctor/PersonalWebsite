// script.js

document.addEventListener("DOMContentLoaded", function() {
    const fadeSection = document.getElementById("fade-section-home");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(fadeSection);
});
