let soma = 0;

// Pede 5 notas ao usuário
for (let i = 1; i <= 5; i++) {
  let nota = parseFloat(prompt("Digite a " + i + "ª nota:"));
  soma += nota;
}

// Calcula a média
let media = soma / 5;

// Exibe a média final
alert("A média das 5 notas é: " + media.toFixed(2)); // Mostra com 2 casas decimais
