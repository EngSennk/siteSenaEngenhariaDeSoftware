/* =============================== typing animation ==================== */
// Certifique-se de que Typed.js esteja carregado antes de usá-lo
window.addEventListener('load', function() {
    const typingElement = document.querySelector('.typing');
    if (typingElement) { // Verifica se o elemento .typing existe
        const typed = new Typed('.typing', {
            strings: ['Web Developer', 'Full Stack Developer', 'Engineer of Software', 'Web Developer'], 
            typeSpeed: 100,
            backSpeed: 10,
            backDelay: 1000,
            loop: true
        });
    }
});

/* ================================== Aside / Navegação Principal =========================== */ 

// Seletores para os elementos do aside (menu lateral) e o botão hamburguer
const aside = document.querySelector(".aside"); // O aside principal
const navTogglerBtn = document.querySelector(".aside-toggler"); // O botão hamburguer (renomeado no CSS)
const nav = document.querySelector(".nav"); // A ul com os itens de navegação
const navListItems = nav ? nav.querySelectorAll("li") : []; // Itens da lista de navegação (corrigido para usar 'nav')
const totalNavList = navListItems.length;
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;

// Função para remover a classe "back-section" de todas as seções
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

// Função para adicionar a classe "back-section" a uma seção específica
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

// Função para mostrar a seção correta e esconder as outras
function showSection(element) {
    // Remove a classe "active" de todas as seções
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    // Adiciona a classe "active" à seção alvo
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

// Função para atualizar o estado "active" dos itens da navegação
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navListItems[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navListItems[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navListItems[i].querySelector("a").classList.add("active");
        }
    }
}

// Lógica para alternar o aside e as seções
function asideSectionToggler() {
    // Alterna a classe 'open' no aside (menu lateral)
    aside.classList.toggle("open");
    // Alterna a classe 'open' no botão hamburguer (para animar o ícone)
    navTogglerBtn.classList.toggle("open");
    // Alterna a classe 'open' em todas as seções (para aplicar padding/margin de acordo com o aside)
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

// Event listener para o clique no botão hamburguer
if (navTogglerBtn && aside) { // Garante que ambos os elementos existam
    navTogglerBtn.addEventListener("click", () => {
        asideSectionToggler();
    });
}


// Adiciona evento de clique a cada item da navegação do aside
for (let i = 0; i < totalNavList; i++) {
    const a = navListItems[i].querySelector("a");
    a.addEventListener("click", function() {
        removeBackSection(); // Esconde a seção anterior
        for (let j = 0; j < totalNavList; j++) {
            if (navListItems[j].querySelector("a").classList.contains("active")) {
                addBackSection(j); // Marca a seção anterior para animação
            }
            navListItems[j].querySelector("a").classList.remove("active"); // Remove active de todos
        }
        this.classList.add("active"); // Adiciona active ao clicado
        showSection(this); // Mostra a nova seção

        // Fecha o aside e reajusta as seções em telas menores
        if (window.innerWidth < 992) { // Use o mesmo breakpoint do CSS para o aside
            asideSectionToggler();
        }
    });
}

// Evento para o botão "Hire Me"
document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index"); // Certifique-se de que este atributo existe
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});


// ==================== formulario de email ==============================//
const form = document.getElementById('meuFormulario');
const mensagemSucesso = document.getElementById('mensagemSucesso');

if (form && mensagemSucesso) { // Garante que os elementos existam
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        setTimeout(() => {
            mensagemSucesso.style.display = 'block';
            form.style.display = 'none';
        }, 1000);
    });
}
// script.js
// Evitar conflito de variáveis se este script for carregado múltiplas vezes ou junto com outros
(function() {
    // ... (seu código existente para asideToggler, aside, allSections, navList, navLinks, etc.) ...

    // ======== Esconder/Mostrar elementos ao scroll ============
    const asideToggler = document.querySelector(".aside-toggler"); // Seleciona o botão aside-toggler
    const styleSwitcher = document.querySelector(".style-switcher"); // Seleciona o style-switcher

    let lastScrollY = 0; // Variável para armazenar a última posição de rolagem

    // Oculta/mostra os elementos quando a largura da tela é menor que 1463px
    function handleScrollVisibility() {
        // Apenas aplica a lógica de esconder/mostrar ao scroll em telas menores que 1463px
        if (window.innerWidth < 1463) {
            if (window.scrollY > lastScrollY && window.scrollY > 100) { // Rolando para baixo e já rolou um pouco
                asideToggler.classList.add("hide-on-scroll");
                if (styleSwitcher) { // Verifica se styleSwitcher existe
                    styleSwitcher.classList.add("hide-on-scroll");
                }
            } else { // Rolando para cima
                asideToggler.classList.remove("hide-on-scroll");
                if (styleSwitcher) { // Verifica se styleSwitcher existe
                    styleSwitcher.classList.remove("hide-on-scroll");
                }
            }
        } else {
            // Em telas maiores que 1463px, garanta que estejam sempre visíveis
            asideToggler.classList.remove("hide-on-scroll");
            if (styleSwitcher) {
                styleSwitcher.classList.remove("hide-on-scroll");
            }
        }
        lastScrollY = window.scrollY; // Atualiza a última posição de rolagem
    }

    // Adiciona o event listener para o scroll
    window.addEventListener("scroll", handleScrollVisibility);

    // Adiciona um listener para o redimensionamento da janela para garantir que a visibilidade seja ajustada
    window.addEventListener("resize", handleScrollVisibility);

    // Chama a função uma vez ao carregar a página para definir o estado inicial
    window.addEventListener("load", function() {
        handleScrollVisibility(); // Garante o estado inicial baseado na largura da tela
        // ... (seu código existente para ativar a seção correta na carga da página) ...
    });

})(); // Fim da IIFE