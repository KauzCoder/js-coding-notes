/*
O operador ternário tem esse nome pois é o único em JavaScript que utiliza três operandos:

a condição, seguida do sinal ?
o código a ser executado se a condição for true, seguida de :
o código a ser executado se a condição for false

//condição ?      caso 'true'    :     caso 'false'
valor < 50 ? 'valor insuficiente' : 'valor suficiente';
*/

console.log("\n=== Operador Ternário ===");
const idade = 20;
const podeBeber = idade >= 18 ? "Pode beber" : "Não pode beber";
console.log(podeBeber); // Pode beber

// Exemplo com mais de uma instrução em cada caso
const numero = 7;
numero % 2 === 0
  ? console.log(`${numero} é par`)
  : console.log(`${numero} é ímpar`); // 7 é ímpar

// Exemplo aninhado
const nota = 85;
const conceito =    nota >= 90
  ? "A"
  : nota >= 80
    ? "B"
    : nota >= 70
        ? "C"
        : "D";
console.log(`Conceito: ${conceito}`); // Conceito: B

// Exemplo usando ternário em atribuição de variável
const temperatura = 30;
const clima = temperatura > 25 ? "Quente" : "Frio";
console.log(`Clima: ${clima}`); // Clima: Quente    