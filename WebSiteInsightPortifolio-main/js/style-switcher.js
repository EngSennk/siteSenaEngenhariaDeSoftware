// ============================= toggle style switcher 2 ==================
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// ================== hide style switcher on scroll ======================
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});
// ============================= toggle aside section ================== // 
// ============================= toggle aside ==================
const aside = document.querySelector(".aside"); // Seleciona o elemento aside
const menuToggle = document.querySelector("#menu-toggle"); // Seleciona o botão de menu (pelo ID)

if (menuToggle) { // Verifica se o botão de menu existe no DOM
    menuToggle.addEventListener("click", () => {
        aside.classList.toggle("open"); // Adiciona/remove a classe 'open' do aside
    });
}

// ================== hide aside on scroll ======================
window.addEventListener("scroll", () => {
    if (aside.classList.contains("open")) {
        aside.classList.remove("open"); // Remove a classe 'open' se o aside estiver aberto durante o scroll
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

// Set initial mode to dark
document.body.classList.add("dark");
dayNight.querySelector("i").classList.add("fa-sun"); // Initially show sun icon

dayNight.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");


    // Optional: Store user preference in localStorage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

window.addEventListener("load", () => {
    // Check for stored preference, if none, default to dark (already set above)
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.remove("dark");
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
    } else if (savedTheme === "dark") { // Explicitly handle "dark" for clarity
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.add("fa-sun");
         dayNight.querySelector("i").classList.remove("fa-moon");
    }
});


// ==========================================================