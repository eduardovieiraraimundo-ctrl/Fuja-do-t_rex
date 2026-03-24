const botoesProximo = document.querySelectorAll('.btn-proximo');
const botoesFinalizar = document.querySelectorAll('.finalizar');
const displayResultado = document.getElementById('resultado');

botoesProximo.forEach(button => {
    button.addEventListener('click', function() {
        // 1. Encontra a seção que está visível agora e a esconde
        const atual = document.querySelector('.passo.ativo') || document.querySelector('.passo[style*="display: block"]');
        if (atual) {
            atual.classList.remove('ativo');
            atual.style.display = 'none';
        }

        // 2. Pega o ID do próximo passo e o mostra
        const proximoId = this.getAttribute('data-proximo');
        const proximoPasso = document.getElementById(proximoId);
        
        if (proximoPasso) {
            proximoPasso.classList.add('ativo');
            proximoPasso.style.display = 'block';
        }
    });
});

// Lógica para o clique final na cidade
botoesFinalizar.forEach(button => {
    button.addEventListener('click', function() {
        displayResultado.textContent = "Boa viagem para " + this.textContent + "!";
        displayResultado.style.color = "var(--azul)"; 
    });
});