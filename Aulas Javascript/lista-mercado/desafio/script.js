// Array para armazenar os produtos inseridos
let produtos = [];
let total = 0;

// Elementos do DOM
const produtoInput = document.getElementById("produto");
const valorInput = document.getElementById("valor");
const tabela = document.getElementById("tabelaProdutos");
const tbody = tabela.querySelector("tbody");
const totalElement = document.getElementById("total");

// Função para adicionar um produto ao array e atualizar a tabela
document.getElementById("adicionar").addEventListener("click", function() {
    const nomeProduto = produtoInput.value;
    const valorProduto = parseFloat(valorInput.value);

    if (nomeProduto && !isNaN(valorProduto) && valorProduto > 0) {
        // Adiciona o produto ao array
        produtos.push({ nome: nomeProduto, valor: valorProduto });

        // Atualiza o valor total
        total += valorProduto;

        // Limpa os campos de entrada
        produtoInput.value = '';
        valorInput.value = '';
    } else {
        alert("Por favor, insira um nome de produto válido e um valor numérico positivo.");
    }
});

// Função para remover um produto
function removerProduto(index) {
    const confirmacao = confirm("Tem certeza de que deseja remover este produto?");
    if (confirmacao) {
        total -= produtos[index].valor; // Subtrai o valor do produto removido do total
        produtos.splice(index, 1); // Remove o produto do array
        atualizarTabela(); // Atualiza a tabela
    }
}

// Função para exibir e atualizar a tabela com os produtos
document.getElementById("visualizarTabela").addEventListener("click", function() {
    atualizarTabela();
});

function atualizarTabela() {
    tbody.innerHTML = '';

    produtos.forEach(function(produto, index) {
        let linha = document.createElement("tr");
        let nomeCell = document.createElement("td");
        let valorCell = document.createElement("td");
        let removerCell = document.createElement("td");

        nomeCell.textContent = produto.nome;
        valorCell.textContent = "R$ " + produto.valor.toFixed(2);

        // Cria o botão de remoção
        let removerButton = document.createElement("button");
        removerButton.textContent = "Remover";
        removerButton.classList.add("remover");
        removerButton.addEventListener("click", function() {
            removerProduto(index);
        });

        removerCell.appendChild(removerButton);
        linha.appendChild(nomeCell);
        linha.appendChild(valorCell);
        linha.appendChild(removerCell);
        tbody.appendChild(linha);
    });

    // Atualiza o valor total no rodapé da tabela
    totalElement.textContent = "R$ " + total.toFixed(2);

    // Exibe a tabela
    tabela.classList.remove("oculto");
}

// Função para imprimir a tabela
document.getElementById("imprimirTabela").addEventListener("click", function() {
    const tabelaConteudo = tabela.outerHTML;
    const novaJanela = window.open('', '', 'width=800,height=600');
    novaJanela.document.write('<html><head><title>Impressão da Tabela</title></head><body>');
    novaJanela.document.write(tabelaConteudo);
    novaJanela.document.write('</body></html>');
    novaJanela.document.close();
    novaJanela.print();
});
