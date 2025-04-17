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

// Função para alertar ao clicar no botão "Jogar"
document.getElementById("play").addEventListener("click", function() {
    alert("MOJANG E MEU OVUUUUUO");
});
