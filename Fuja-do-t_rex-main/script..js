const avanca = document.querySelectorAll('.btn-proximo')
avanca.forEach(button=>{
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo')
        const proximoPasso = 'passo-'+ this.getAtributte('data-proximo')

        atual.classList.remove('ativo')
        Document.getElementbyId(proximoPasso).classList.add('ativo')
    })
})