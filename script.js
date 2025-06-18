document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll(".botao-curso");

    botoes.forEach(botao => {
        botao.addEventListener("mouseover", () => {
            botao.style.transform = "scale(1.1)";
            botao.style.transition = "transform 0.3s";
        });

        botao.addEventListener("mouseout", () => {
            botao.style.transform = "scale(1)";
        });
    });
});
