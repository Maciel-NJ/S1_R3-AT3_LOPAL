let soma = 0; // Variável para guardar a soma dos números

// Repete 10 vezes para pedir os números
for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt("Digite o " + i + "º número inteiro:"));
  soma += numero; // Adiciona o número à soma
}

// Exibe o resultado final com alert
alert("A soma dos 10 números é: " + soma);
