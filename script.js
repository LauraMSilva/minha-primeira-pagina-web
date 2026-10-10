function mostrarCuriosidade() {
    const mensagem = document.getElementById("mensagem-curiosidade");

    if (mensagem) {
        mensagem.textContent =
            "Ada Lovelace é considerada uma pioneira da programação por ter escrito um algoritmo para a Máquina Analítica de Charles Babbage.";

        mensagem.hidden = false;
    }
}
