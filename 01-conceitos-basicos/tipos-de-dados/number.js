
const nome = 'Kauã Mendes';
const matriculaSituacao = true;
const idade = 29;
const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const notaQuartoBi = Number.parseInt("10"); // Conversão explícita de String → Number

// Exibição de informações básicas
console.log('=== Dados do aluno ===');
console.log('Nome do aluno: ' + nome);
console.log('Idade: ' + idade + ' anos');
console.log('Situação da matrícula: ' + matriculaSituacao);
console.log('');

// Tipos de dados das notas
console.log('=== Tipos de dados das notas ===');
console.log(`a nota ${notaPrimeiroBi} é do primeiro bimestre, e ela e é um numero ${typeof notaPrimeiroBi}`);
console.log(`a nota ${notaSegundoBi} é do segundo bimestre, e ela e é um numero ${typeof notaSegundoBi}`);
console.log(`a nota ${notaTerceiroBi} é do terceiro bimestre, e ela e é um numero ${typeof notaTerceiroBi}`);
console.log(`a nota ${notaQuartoBi} é do quarto bimestre, e ela e é um numero ${typeof notaQuartoBi}`);
console.log('');

// Cálculo da média das notas
console.log('=== Cálculo da média das notas ===');
const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

// Exibição da média formatada com duas casas decimais
console.log('a média das notas é ' + total.toFixed(2));

//Funções de conversão para Number
//esta função converte qualquer outro tipo de dado em um tipo Number. Caso o valor não possa ser convertido, retornará NaN.
Number("1"); // retorna o número 1 
Number("Alura"); // retorna NaN
Number(undefined); // retorna NaN
Number(null); // retorna 0

/*
  Observações:
  - a função Number() pode converter strings numéricas para números.
  - NaN significa "Not a Number" e indica que a conversão falhou.
  - typeof retorna o tipo do dado (ex: "string", "number", "boolean").
  - Number.parseInt() converte strings para números inteiros.
  - .toFixed(2) limita o número de casas decimais.
  - Cuidado com notas negativas: podem indicar erro de entrada ou penalização.
*/

