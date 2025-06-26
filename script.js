document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll(".botao-curso");

    botoes.forEach(function (botao) {
        botao.addEventListener("mouseover", function () {
            botao.style.transform = "scale(1.1)";
        });

        botao.addEventListener("mouseout", function () {
            botao.style.transform = "scale(1)";
        });

        botao.addEventListener("click", function (e) {
            alert(`Você clicou em ${botao.textContent}!`);
        });
    });
});
