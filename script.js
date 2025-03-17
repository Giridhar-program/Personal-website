// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".nav");

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});

// Scroll Animation (Fade-In Effect)
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
});
