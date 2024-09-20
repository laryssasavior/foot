// Pega os elementos do botão "Sim" e "Não"
let botaoNao = document.getElementById("nao");
let botaoSim = document.getElementById("sim");
let mensagemErro = document.getElementById("erro");
// Função que move o botão "Não" para uma nova posição
botaoNao.addEventListener("mouseover", function() {
    // Move o botão "Não" aleatoriamente na tela
    let posX = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    let posY = Math.random() * (window.innerHeight - botaoNao.offsetHeight);
    botaoNao.style.position = "absolute";
    botaoNao.style.left = posX + "px";
    botaoNao.style.top = posY + "px";
    // Exibe a mensagem de erro
    mensagemErro.style.display = "block";
});
// Mantém o botão "Sim" fixo
botaoSim.addEventListener("click", function() {
    alert("Ótima escolha! Minha Chave PIX é o N° do celular!");
}) ; 
// FINAL