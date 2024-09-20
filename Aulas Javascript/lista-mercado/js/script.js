// Array para armazenar os produtos inseridos
let produtos = [];  
// Cria um array vazio que irá conter os produtos (nome e valor).
let total = 0;  
// Variável para armazenar o valor total dos produtos.

// Elementos que serão manipulados com o DOM
const produtoInput = document.getElementById("produto");  
// Captura o campo de entrada de nome do produto.
const valorInput = document.getElementById("valor");
// Captura o campo de entrada de valor do produto.
const tabela = document.getElementById("tabelaProdutos");  
// Captura o elemento da tabela onde os produtos serão exibidos.
const tbody = tabela.querySelector("tbody");  
// Captura o corpo da tabela onde as linhas de produtos serão inseridas.
const totalElement = document.getElementById("total");  
// Captura o elemento onde será exibido o valor total.

// Função para adicionar um produto ao array e atualizar a tabela
document.getElementById("adicionar").addEventListener("click", function() {
    const nomeProduto = produtoInput.value;  
    // Obtém o valor do campo de nome do produto.
    const valorProduto = parseFloat(valorInput.value);  
    // Converte o valor do campo para um número de ponto flutuante.

    // Verifica se o nome do produto foi preenchido, se o valor é numérico e positivo.
    if (nomeProduto && !isNaN(valorProduto) && valorProduto > 0) {
        // Adiciona o produto (nome e valor) ao array de produtos.
        produtos.push({ nome: nomeProduto, valor: valorProduto });

        // Atualiza o valor total com o valor do produto recém-adicionado.
        total += valorProduto;

        // Limpa os campos de entrada de nome e valor para permitir a inserção de novos produtos.
        produtoInput.value = '';
        valorInput.value = '';
    } else {
        // Exibe um alerta se os dados inseridos forem inválidos.
        alert("Por favor, insira um nome de produto válido e um valor numérico positivo.");
    }
});

// Função para exibir a tabela com os produtos
document.getElementById("visualizarTabela").addEventListener("click", function() {
    // Limpa o conteúdo atual da tabela para evitar duplicações.
    tbody.innerHTML = '';

    // Itera sobre o array de produtos e adiciona uma linha para cada produto na tabela.
    produtos.forEach(function(produto) {
        let linha = document.createElement("tr");  // Cria uma nova linha na tabela.
        let nomeCell = document.createElement("td");  // Cria uma célula para o nome do produto.
        let valorCell = document.createElement("td");  // Cria uma célula para o valor do produto.

        // Preenche as células com os dados do produto.
        nomeCell.textContent = produto.nome;
        valorCell.textContent = "R$ " + produto.valor.toFixed(2);  // Formata o valor do produto com duas casas decimais.

        // Adiciona as células à linha.
        linha.appendChild(nomeCell);
        linha.appendChild(valorCell);
        // Adiciona a linha ao corpo da tabela.
        tbody.appendChild(linha);
    });

    // Atualiza o valor total no rodapé da tabela, também formatado com duas casas decimais.
    totalElement.textContent = "R$ " + total.toFixed(2);

    // Remove a classe "oculto" da tabela para que ela seja exibida.
    tabela.classList.remove("oculto");
});
