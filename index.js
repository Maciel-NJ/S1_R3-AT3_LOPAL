// Pede um número ao usuário
let numero = parseInt(prompt("Digite um número para ver a tabuada:"));

let tabuada = "Tabuada de " + numero + ":\n";

// Loop de 1 até 10 para montar a tabuada
for (let i = 1; i <= 10; i++) {
  tabuada += numero + " x " + i + " = " + (numero * i) + "\n";
}

// Exibe tudo em um alert
alert(tabuada);

