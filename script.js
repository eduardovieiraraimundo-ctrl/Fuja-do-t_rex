const botoesProximo = document.querySelectorAll('.btn-proximo');
const botoesFinalizar = document.querySelectorAll('.finalizar');
const displayResultado = document.getElementById('resultado');

botoesProximo.forEach(button => {
    button.addEventListener('click', function() {
      
        const atual = document.querySelector('.passo.ativo') || document.querySelector('.passo[style*="display: block"]');
        if (atual) {
            atual.classList.remove('ativo');
            atual.style.display = 'none';
        }

        
        const proximoId = this.getAttribute('data-proximo');
        const proximoPasso = document.getElementById(proximoId);
        
        if (proximoPasso) {
            proximoPasso.classList.add('ativo');
            proximoPasso.style.display = 'block';
        }
    });
});


botoesFinalizar.forEach(button => {
    button.addEventListener('click', function() {
        displayResultado.textContent = "Boa viagem para " + this.textContent + "!";
        displayResultado.style.color = "var(--azul)"; 
    });
});