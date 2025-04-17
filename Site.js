// Navegação entre páginas
document.querySelectorAll(".navbar a").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Evita o comportamento padrão de recarregar a página
        const targetHref = this.getAttribute("href"); // Obtém o destino do link
        if (targetHref.startsWith("http")) {
            window.open(targetHref, "_blank"); // Abre links externos em uma nova aba
        } else {
            window.location.href = targetHref; // Navega para páginas internas
        }
    });
});

// Mensagem de envio do formulário (Formspree)
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o comportamento padrão do formulário
        alert("Obrigado! Sua mensagem foi enviada com sucesso.");
        contactForm.reset(); // Reseta os campos após o envio
    });
}
