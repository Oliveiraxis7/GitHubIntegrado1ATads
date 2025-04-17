// Navegação entre páginas
document.querySelectorAll(".navbar a").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Evita o comportamento padrão do clique no link
        const targetHref = this.getAttribute("href"); // Obtém o destino do link
        window.location.href = targetHref; // Navega para a página correspondente
    });
});

// Função para exibir o console log no botão jogar, como exemplo interativo
const playButton = document.getElementById("play");
if (playButton) {
    playButton.addEventListener("mouseover", function() {
        console.log("Prepare-se para jogar!");
    });
}

// Mensagem de envio do formulário (formulário de contato)
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o comportamento padrão do formulário (recarregar página)
        alert("Obrigado por entrar em contato! Sua mensagem foi enviada com sucesso.");
        contactForm.reset(); // Reseta os campos do formulário após o envio
    });
}
