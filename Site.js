// Função para alertar ao clicar no botão "Jogar"
document.getElementById("play").addEventListener("click", function() {
    alert("MOJANG E MEU OVUUUUUO");
});

// Função para rolar suavemente para as seções ao clicar nos botões da barra de navegação
document.querySelectorAll(".navbar a").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Evita o comportamento padrão do clique
        const targetId = this.getAttribute("href").substring(1); // Obtém o ID do destino
        const targetElement = document.getElementById(targetId); // Localiza o elemento alvo
        
        // Rola suavemente para a seção desejada
        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
