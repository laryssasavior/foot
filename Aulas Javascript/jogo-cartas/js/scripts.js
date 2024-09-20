
function revealCard(cardId) {
    const card = document.getElementById(cardId); 
    // Seleciona o elemento HTML da carta pelo ID
    const randomNumber = Math.floor(Math.random() * 10) + 1; 
    // Gera um número aleatório entre 1 e 10
    card.textContent = randomNumber; 
    // Substitui o conteúdo da carta pelo número gerado
}

// Atribuir eventos de clique às cartas
document.getElementById('card1').addEventListener('click', function() {
    revealCard('card1'); 
    // Ao clicar na carta 1, chamamos a função revealCard passando 'card1' como argumento
});
document.getElementById('card2').addEventListener('click', function() {
    revealCard('card2'); 
    // Ao clicar na carta 2, chamamos a função revealCard passando 'card2' como argumento
});
document.getElementById('card3').addEventListener('click', function() {
    revealCard('card3'); 
    // Ao clicar na carta 3, chamamos a função revealCard passando 'card3' como argumento
});

