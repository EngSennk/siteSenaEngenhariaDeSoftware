
/* ============================ Modo Claro e Escuro ======================== */
const dayNight = document.querySelector(".day-night");

if (dayNight) {
    const icon = dayNight.querySelector("i");
    
    // Função para atualizar o ícone baseado no tema
    const updateIcon = () => {
        if (document.body.classList.contains("dark")) {
            icon.classList.add("fa-sun");
            icon.classList.remove("fa-moon");
        } else {
            icon.classList.add("fa-moon");
            icon.classList.remove("fa-sun");
        }
    };

    // Carregar preferência salva
    window.addEventListener("load", () => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") {
            document.body.classList.remove("dark");
        } else {
            document.body.classList.add("dark");
        }
        updateIcon();
    });

    dayNight.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        
        // Salvar preferência
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
        updateIcon();
    });
}