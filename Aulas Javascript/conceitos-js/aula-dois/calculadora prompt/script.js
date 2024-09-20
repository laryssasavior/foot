// Função para calcular
function calculate(operation) {
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    /* Define a variável para o nº 1
    Torna o número em decimais (Float) 
    Abre o comando PROMPT para permitir a entrada do dado */
    if (!confirm("Você digitou: " + num1 + ". Confirmar?")) {
        return;
    // Abre um pop-up solicitando confirmação do valor inserido na variável num1
    }
    // Return conclui o "se" da função
    var num2 = parseFloat(prompt("Digite o segundo número:"));
    if (!confirm("Você digitou: " + num2 + ". Confirmar?")) {
        return;
    }

    var result; // Variável para o resultado
    if (operation === 'add') { // Condição de adição
        result = num1 + num2; // Resultado é igual a soma das duas variáveis
        alert("O resultado da adição é: " + result); // Resultado como alerta 
    } else if (operation === 'subtract') { // Condição de subtração
        result = num1 - num2; // Resultado é igual a subtração das duas variáveis
        alert("O resultado da subtração é: " + result); // Resultado como alerta
    } else if (operation === 'multiply') { 
        result = num1 * num2;
        alert("O resultado da multiplicação é: " + result);
    } else if (operation === 'divide') {
        if (num2 === 0) { // Se o número for Zero
            alert("Erro: divisão por zero!"); // Exiba uma mensagem de erro
            return;
        } 
        result = num1 / num2;
        alert("O resultado da divisão é: " + result);
    }
}