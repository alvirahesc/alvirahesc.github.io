/* ===== MOBILE NAVBAR TOGGLE ===== */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Close menu when clicking a link (mobile UX) */
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

/* ===== SCROLL REVEAL ANIMATIONS ===== */
const animatedElements = document.querySelectorAll(
    ".animate-fade-in, .animate-slide-up, .animate-zoom-in"
);

// Start hidden (prevents flashing on load)
animatedElements.forEach(el => {
    el.style.opacity = "0";
});

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    animatedElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.style.opacity = "1";
            el.style.animationPlayState = "running";
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ===== NAVBAR SHADOW ON SCROLL ===== */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

/* ===== OPTIONAL: SMOOTH SCROLL OFFSET (FIX FIXED NAVBAR) ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        const offset = 70; // navbar height
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});
