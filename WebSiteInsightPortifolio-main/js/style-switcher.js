// ============================= toggle style switcher ==================
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
if (styleSwitcherToggle) { // Garante que o elemento existe antes de adicionar listener
    styleSwitcherToggle.addEventListener("click", () => {
        document.querySelector(".style-switcher").classList.toggle("open");
    });
}

// ================== hide style switcher on scroll ======================
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher") && document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

// ============================= theme colors ============================
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

/* ============================ theme light and dark mode ================================== */
const dayNight = document.querySelector(".day-night");

// Verifica se dayNight existe antes de tentar acessar suas propriedades
if (dayNight) {
    // Set initial mode based on localStorage or default to dark
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.remove("dark");
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
    } else { // Defaults to dark if no preference or "dark" saved
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.add("fa-sun");
        dayNight.querySelector("i").classList.remove("fa-moon");
    }

    dayNight.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        // Troca os ícones de sol/lua
        const icon = dayNight.querySelector("i");
        if (icon) { // Verifica se o ícone existe
            icon.classList.toggle("fa-sun");
            icon.classList.toggle("fa-moon");
        }

        // Optional: Store user preference in localStorage
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}