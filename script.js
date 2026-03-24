const botoesProximo = document.querySelectorAll('.btn-proximo');
const botoesFinalizar = document.querySelectorAll('.finalizar');
const botoesVoltar = document.querySelectorAll('.btn-voltar');
const displayResultado = document.getElementById('resultado');

function trocarPasso(proximoId) {
    // Esconde todos
    document.querySelectorAll('.passo').forEach(passo => {
        passo.style.display = 'none';
    });
    // Mostra o destino
    const destino = document.getElementById(proximoId);
    if (destino) {
        destino.style.display = 'block';
    }
    // Limpa o resultado ao navegar
    displayResultado.textContent = "";
}

botoesProximo.forEach(button => {
    button.addEventListener('click', () => {
        const proximo = button.getAttribute('data-proximo');
        trocarPasso(proximo);
    });
});

botoesVoltar.forEach(button => {
    button.addEventListener('click', () => {
        const anterior = button.getAttribute('data-voltar');
        trocarPasso(anterior);
    });
});

botoesFinalizar.forEach(button => {
    button.addEventListener('click', function() {
        displayResultado.textContent = "Boa escolha! Partiu " + this.textContent + "!";
        displayResultado.style.color = "var(--azul)";
    });
});