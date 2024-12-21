// Ensure the page loads at the top
window.addEventListener('load', () => {
    window.scrollTo(0, 0); // Scroll to the top when the page is loaded
});

// Preloader handling
window.onload = () => {
    const preloader = document.querySelector('.pre');

    // Hide preloader after it is displayed
    setTimeout(() => {
        preloader.style.display = 'none';

        // Start GSAP animations after preloader is removed
        startAnimations();
    }); // Adjust the timeout as needed
};

// Smooth scrolling for links
document.querySelectorAll('.scroll-to').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// GSAP animations encapsulated in a function
function startAnimations() {
    // Header and hero animations
    gsap.from("header", { y: -100, duration: 1, opacity: 0 });
    gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 0.5, y: 110 });
    gsap.from(".hero p", { opacity: 0, duration: 1, delay: 1, y: 100 });
    gsap.from(".hero a", { opacity: 0, duration: 1, delay: 1.5, y: 100 });

    // GSAP ScrollTrigger animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".about", {
        opacity: 0,
        duration: 1,
        y: 100,
        scrollTrigger: {
            trigger: ".about",
            start: "top center",
        },
    });

    gsap.from(".services", {
        opacity: 0,
        duration: 1,
        y: 100,
        scrollTrigger: {
            trigger: ".services",
            start: "top center",
        },
    });

    gsap.from(".experience", {
        opacity: 0,
        duration: 1,
        y: 100,
        scrollTrigger: {
            trigger: ".experience",
            start: "top center",
        },
    });

    gsap.from(".contact", {
        opacity: 0,
        duration: 1,
        y: 100,
        scrollTrigger: {
            trigger: ".contact",
            start: "top center",
        },
    });

    gsap.from(".reviews", {
        opacity: 0,
        duration: 1,
        y: 100,
        scrollTrigger: {
            trigger: ".reviews",
            start: "top center",
        },
    });

    gsap.from(".pricing", {
        opacity: 0,
        duration: 1,
        y: 100,
        scrollTrigger: {
            trigger: ".pricing",
            start: "top center",
        },
    });
}

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const header2 = document.querySelector('.header2');
    const overlay = document.querySelector('#overlay');
    const links = document.querySelectorAll('.header2 ul li a');

    // Open the menu
    menuIcon.addEventListener('click', () => {
        header2.classList.remove('translate-x-full');
        header2.classList.add('translate-x-0');
        overlay.classList.remove('hidden');
    });

    // Close the menu
    const closeMenu = () => {
        header2.classList.remove('translate-x-0');
        header2.classList.add('translate-x-full');
        overlay.classList.add('hidden');
    };

    closeIcon.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});

// Hide header on scroll down, show on scroll up
document.addEventListener("DOMContentLoaded", () => {
    let lastScrollY = window.scrollY;
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {  // Start animation after 200px scroll
            if (window.scrollY > lastScrollY) {
                header.classList.add("hidden");
            } else {
                header.classList.remove("hidden");
            }
        }
        lastScrollY = window.scrollY;
    });
});
