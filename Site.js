// Função para gerenciar navegação entre páginas
document.querySelectorAll(".navbar a").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Evita o comportamento padrão do clique
        const targetHref = this.getAttribute("href"); // Obtém o endereço do destino
        const currentHref = window.location.href; // Obtém o endereço atual da página

        if (currentHref.includes(targetHref)) {
            // Se o botão clicado levar à mesma página, recarrega a página
            window.location.reload();
        } else {
            // Caso contrário, navega para a nova página
            window.location.href = targetHref;
        }
    });
});

// Função para abrir o jogo ao clicar no botão "Jogar"
document.getElementById("play").addEventListener("click", function() {
    // Abre o arquivo principal do jogo exportado em uma nova aba
    window.open('./MeuSite/jogo.html', '_blank');
});

// Exemplo de alerta (mantido como exemplo de interação divertida)
document.getElementById("play").addEventListener("mouseover", function() {
    console.log("Preparado para jogar?");
});
