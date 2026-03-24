const botoesProximo = document.querySelectorAll('.btn-proximo');
const botoesFinalizar = document.querySelectorAll('.finalizar');
const displayResultado = document.getElementById('resultado');

botoesProximo.forEach(button => {
    button.addEventListener('click', function() {
        // 1. Esconde todas as seções (passos)
        const todosOsPassos = document.querySelectorAll('.passo');
        todosOsPassos.forEach(passo => {
            passo.style.display = 'none';
            passo.classList.remove('ativo');
        });

        // 2. Mostra apenas o próximo passo baseado no data-proximo
        const proximoId = this.getAttribute('data-proximo');
        const proximoPasso = document.getElementById(proximoId);
        
        if (proximoPasso) {
            proximoPasso.style.display = 'block';
            proximoPasso.classList.add('ativo');
        }
    });
});

// Mensagem final ao escolher a cidade
botoesFinalizar.forEach(button => {
    button.addEventListener('click', function() {
        displayResultado.textContent = "Boa escolha! Partiu " + this.textContent + "!";
        displayResultado.style.color = "var(--azul)"; // Usa a cor do seu CSS
    });
});