/* ============================ Animação de texto ===========================*/
var typed = new Typed(".typing", {
    strings: ["Web Developer", "Software Engineer", "Cybersecurity Specialist"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
/* ============================= Abrir/Fechar Switcher ================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

if (styleSwitcherToggle && styleSwitcher) {
    styleSwitcherToggle.addEventListener("click", () => {
        styleSwitcher.classList.toggle("open");
    });
}

// Fechar ao rolar a página para não atrapalhar a visão
window.addEventListener("scroll", () => {
    if (styleSwitcher?.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});

/* ============================= Cores do Tema ============================ */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
    // Opcional: Salvar a cor escolhida também
    localStorage.setItem("color-theme", color);
}
