document.addEventListener("DOMContentLoaded", () => {
    console.log("Studio Priscila Peres carregado com sucesso!");
    
    // Efeito suave ao clicar nos links de agendamento
    const buttons = document.querySelectorAll(".btn-service, .btn-main-agendar, .btn-top-agendar, .btn-address-outline");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            console.link("Redirecionando para o WhatsApp de agendamento...");
        });
    });
});

