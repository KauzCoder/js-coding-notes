// ============================================================
//  IF, ELSE e ELSE IF 
// ============================================================
//
//  As estruturas de controle if, else e else if permitem que o 
//  programa tome decisões. Elas executam diferentes blocos de 
//  código com base em condições que retornam true ou false.
//
//  Uma condição é qualquer expressão que possa ser avaliada
//  como verdadeira (true) ou falsa (false).
//
// ============================================================
//  EXEMPLO 1 — Usando if e else
// ============================================================

let temperatura = 35;

if (temperatura > 30) {
  console.log("Está muito quente!");
} 
else {
  console.log("A temperatura está agradável.");
}

// Saída: Está muito quente!

// Explicação:
// A condição (temperatura > 30) é verdadeira,
// portanto o bloco dentro do if é executado.
// O else é ignorado.


// ============================================================
//  EXEMPLO 1.1 — Usando apenas if com condição falsa
// ============================================================

temperatura = 20;

if (temperatura > 30) {
  console.log("Está muito quente!");
}

// Saída: (nenhuma)
// Como a condição é falsa e não existe else,
// simplesmente nada acontece.


// ============================================================
//  EXEMPLO 2 — Usando if, else if e else
// ============================================================

temperatura = 25;

if (temperatura > 30) {
  console.log("Está muito quente!");
}
else if (temperatura < 15) {
  console.log("Está muito frio!");
}
else {
  console.log("A temperatura está agradável.");
}

// Saída: A temperatura está agradável.
//
// O JavaScript verifica cada condição em ordem:
// - Primeira: falsa
// - Segunda: falsa
// - Executa o else final


// ============================================================
//  SOBRE A AVALIAÇÃO DAS CONDIÇÕES
// ============================================================
//
// O JavaScript testa os blocos em sequência:
// 1. Testa o if
// 2. Se for falso, testa o else if
// 3. Se ainda for falso, executa o else
// Apenas UM bloco será executado.

// é importante usar essas estruturas com cuidado para evitar complexidade excessiva no código. Muitas condições aninhadas podem tornar o código difícil de ler e manter. Nesses casos, pode ser útil considerar outras abordagens, como o uso de switch-case ou a criação de funções separadas para lidar com diferentes cenários. Vamos ver um exemplo de como o uso excessivo de if-else pode complicar o código:

// ============================================================
//  EXEMPLO 3 — Uso excessivo de if-else (má prática)
// ============================================================

let diaDaSemana = 3; // 1 = Segunda, 2 = Terça, 3 = Quarta, etc.

if (diaDaSemana === 1) {
  console.log("Hoje é Segunda-feira");
}
else if (diaDaSemana === 2) {
  console.log("Hoje é Terça-feira");
}
else if (diaDaSemana === 3) {
  console.log("Hoje é Quarta-feira");
}
else if (diaDaSemana === 4) {
  console.log("Hoje é Quinta-feira");
}
else if (diaDaSemana === 5) {
  console.log("Hoje é Sexta-feira");
}
else if (diaDaSemana === 6) {
  console.log("Hoje é Sábado");
}
else if (diaDaSemana === 7) {
  console.log("Hoje é Domingo");
}

// Saída: Hoje é Quarta-feira

// Problema:
// Esse tipo de código cresce rapidamente, fica repetitivo e
// difícil de manter.


// ============================================================
//  EXEMPLO 4 — Melhorando usando um array
// ============================================================

const diasDaSemana = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo"
];

diaDaSemana = 3;

console.log("Hoje é " + diasDaSemana[diaDaSemana - 1]);

// Saída: Hoje é Quarta-feira
//
// Explicação:
// Arrays tornam o código mais enxuto, fácil de manter e 
// evitam dezenas de estruturas if-else.


// ============================================================
//  CONCLUSÃO
// ============================================================
//
// Use if, else if e else para controlar o fluxo lógico do 
// programa. Eles são essenciais, mas devem ser usados com 
// cuidado para evitar excesso de condições.
//
// Se o código começar a ficar muito grande ou repetitivo, 
// considere alternativas como:
// - arrays
// - objetos
// - switch-case
// - funções separadas
//
// Caso ainda tenha dúvidas sobre arrays, revise a seção
// "arrays-e-objetos" para reforçar o entendimento.
// ============================================================
