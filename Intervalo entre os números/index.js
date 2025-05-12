// solicita os dois números à pessoa
let numero1 = parseInt(prompt("Digite o primeiro número:"));
let numero2 = parseInt(prompt("Digite o segundo número:"));

// define o início e fim deacordo na ordem dos números digitados
let inicio;
let fim;

if (numero1 < numero2) {
  inicio = numero1;
  fim = numero2;
} else {
  inicio = numero2;
  fim = numero1;
}

// vai mostrar os números pares entre os dois valores
console.log("Números pares entre " + inicio + " e " + fim + ":");

for (let i = inicio; i <= fim; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
