
const botoes = document.querySelectorAll('button');
const display = document.getElementById('resultado');


const respostas = {
    "norte": "Que tal visitar o Amazonas e ver o Encontro das Águas?",
    "sul": "As Serras Gaúchas são perfeitas para um clima frio!",
    "sudeste": "O Rio de Janeiro continua lindo, ou quem sabe a agitação de SP?",
    "nordeste": "As praias de Porto de Galinhas te esperam!",
    "centro-oeste": "A beleza do Pantanal ou a arquitetura de Brasília?"
};

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const regiao = botao.textContent.toLowerCase();
        display.textContent = respostas[regiao];
        
        display.style.color = "var(--laranja)";
    });
});