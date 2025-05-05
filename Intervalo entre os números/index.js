// Pede dois números ao usuário
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

// Garante que num1 seja o menor e num2 o maior
let inicio = Math.min(num1, num2);
let fim = Math.max(num1, num2);

let pares = "Números pares entre " + inicio + " e " + fim + ":\n";

// Percorre o intervalo e pega apenas os pares
for (let i = inicio; i <= fim; i++) {
  if (i % 2 === 0) {
    pares += i + "\n";
  }
}

// Mostra o resultado com alert
alert(pares);
