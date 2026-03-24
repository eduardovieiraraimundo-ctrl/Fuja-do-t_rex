const display = document.getElementById('resultado');
const secaoEstados = document.getElementById('estados');
const secaoCidades = document.getElementById('cidades');
const listaEstados = document.getElementById('lista-estados');
const listaCidades = document.getElementById('lista-cidades');

const dadosSudeste = {
    "Espírito Santo": ["Vitória", "Vila Velha"],
    "Minas Gerais": ["Belo Horizonte", "Ouro Preto"],
    "Rio de Janeiro": ["Rio de Janeiro", "Búzios"],
    "São Paulo": ["Santos", "Aparecida"]
};


document.querySelectorAll('.btn-regiao').forEach(botao => {
    botao.addEventListener('click', () => {
        const regiao = botao.textContent.toLowerCase();
        
      
        if (regiao === "sudeste") {
            mostrarEstados();
        } else {
            secaoEstados.style.display = "none";
            secaoCidades.style.display = "none";
            display.textContent = "Em breve teremos opções para " + regiao + "!";
        }
    });
});

function mostrarEstados() {
    listaEstados.innerHTML = ""; 
    secaoEstados.style.display = "block";
    secaoCidades.style.display = "none";
    display.textContent = "";

    Object.keys(dadosSudeste).forEach(estado => {
        const btn = document.createElement("button");
        btn.textContent = estado;
        btn.onclick = () => mostrarCidades(estado);
        listaEstados.appendChild(btn);
    });
}

function mostrarCidades(estado) {
    listaCidades.innerHTML = ""; // Limpa botões anteriores
    secaoCidades.style.display = "block";
    
    dadosSudeste[estado].forEach(cidade => {
        const btn = document.createElement("button");
        btn.textContent = cidade;
        btn.onclick = () => {
            display.textContent = `Boa escolha! Vamos para ${cidade} em ${estado}!`;
            display.style.color = "#0b132b"; // Cor corrigida do seu CSS
        };
        listaCidades.appendChild(btn);
    });
}