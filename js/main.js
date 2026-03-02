// ================================
// HERO TEXT ANIMATION (Typewriter Premium)
// ================================

const hero = document.querySelector(".hero h1");
const heroTextEN = "Software Developer & Development Economist";
const heroTextFR = "Développeur Logiciel & Économiste du Développement";

let currentLang = "en";

function typeWriter(text, element, speed = 40) {
    element.textContent = "";
    let i = 0;

    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

typeWriter(heroTextEN, hero);


// ================================
// LANGUAGE TOGGLE (IMPROVED)
// ================================

const toggleBtn = document.getElementById("lang-toggle");

const translations = {
    fr: {
        nav_about: "À propos",
        nav_projects: "Projets",
        nav_economics: "Économie",
        nav_contact: "Contact",
        about_title: "À propos de moi",
        about_text: "Je suis étudiant en développement logiciel à BYU–Idaho et en Master en Économie du Développement. Je combine analyse économique et solutions technologiques modernes.",
        skills_title: "Compétences principales"
    },
    en: {
        nav_about: "About",
        nav_projects: "Projects",
        nav_economics: "Economics",
        nav_contact: "Contact",
        about_title: "About Me",
        about_text: "I am a software development student at BYU–Idaho and a Master's student in Development Economics. I combine economic analysis with modern technical solutions.",
        skills_title: "Core Skills"
    }
};

toggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "fr" : "en";
    toggleBtn.textContent = currentLang === "en" ? "FR" : "EN";

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[currentLang][key];
    });

    // Re-type hero text with animation
    if (currentLang === "en") {
        typeWriter(heroTextEN, hero);
    } else {
        typeWriter(heroTextFR, hero);
    }
});


// ================================
// SCROLL REVEAL ANIMATION
// ================================

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll("section .container").forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 1s ease";
    observer.observe(section);
});


// ================================
// ACTIVE NAV LINK ON SCROLL
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
// ================================
// BURGER TOGGLE + ANIMATION X
// ================================

const burger = document.getElementById("burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
});
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        burger.classList.remove("active");
    });
});
