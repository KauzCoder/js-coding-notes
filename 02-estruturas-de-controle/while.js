// ============================================================
//  WHILE 
// ============================================================
//
// O while é uma estrutura de repetição que executa um bloco
// de código ENQUANTO uma condição for verdadeira (true).
//
// A condição é testada ANTES de cada execução.
//
// ============================================================
//  ESTRUTURA BÁSICA
// ============================================================
//
// while (condicao) {
//   // código repetido
// }
//
// ============================================================
//  EXEMPLO 1 — Contador simples
// ============================================================

let contador = 1;

while (contador <= 5) {
  console.log(contador);
  contador++; // incremento obrigatório
}

// Saída:
// 1
// 2
// 3
// 4
// 5


// ============================================================
//  IMPORTANTE: ATUALIZAÇÃO DA VARIÁVEL
// ============================================================
//
// Se a variável de controle não for alterada,
// o loop nunca termina.


// ============================================================
//  EXEMPLO 2 — Loop infinito (ERRO)
// ============================================================

contador = 1;

while (contador <= 5) {
  console.log(contador);
  // contador NÃO é incrementado
}

// Resultado:
// Loop infinito (trava o programa)


// ============================================================
//  EXEMPLO 3 — While com condição lógica
// ============================================================

let senha = "";

while (senha !== "1234") {
  senha = "1234";
}

console.log("Senha correta!");

// Explicação:
// O loop continua até a condição ser falsa.


// ============================================================
//  EXEMPLO 4 — Soma de números
// ============================================================

let soma = 0;
let numero = 1;

while (numero <= 5) {
  soma += numero;
  numero++;
}

console.log(soma);

// Saída: 15


// ============================================================
//  EXEMPLO 5 — While com array
// ============================================================

const nomes = ["Ana", "Bruno", "Carlos"];
let indice = 0;

while (indice < nomes.length) {
  console.log(nomes[indice]);
  indice++;
}

// Saída:
// Ana
// Bruno
// Carlos


// ============================================================
//  EXEMPLO 6 — INTERFACE DE OPÇÕES USANDO WHILE (MENU)
// ============================================================
//
// Este exemplo simula um menu de opções simples.
// O programa continua rodando ENQUANTO o usuário
// não escolher a opção de sair.
//
// ============================================================

let opcao = 0;

while (opcao !== 4) {

  console.log("=================================");
  console.log("        MENU DE OPÇÕES");
  console.log("=================================");
  console.log("1 - Ver saldo");
  console.log("2 - Depositar");
  console.log("3 - Sacar");
  console.log("4 - Sair");
  console.log("=================================");

  // Simulação da escolha do usuário
  // (em aula, isso pode vir de prompt ou input)
  opcao = 1; // altere o valor para testar

  switch (opcao) {
    case 1:
      console.log("Saldo atual: R$ 100,00");
      break;

    case 2:
      console.log("Depósito realizado com sucesso.");
      break;

    case 3:
      console.log("Saque realizado com sucesso.");
      break;

    case 4:
      console.log("Encerrando o sistema...");
      break;

    default:
      console.log("Opção inválida.");
  }

  console.log(""); // linha em branco
}


// ============================================================
//  WHILE x FOR
// ============================================================
//
// while → quando não sabemos quantas repetições ocorrerão
// for   → quando o número de repetições é conhecido


// ============================================================
//  BOAS PRÁTICAS
// ============================================================
//
// - Inicialize a variável antes do while
// - Atualize a variável dentro do loop
// - Garanta que a condição possa se tornar falsa
// - Evite lógica complexa dentro do while


// ============================================================
//  CONCLUSÃO
// ============================================================
//
// O while é ideal para repetições baseadas em condição.
// Deve ser usado com cuidado para evitar loops infinitos.
// ============================================================
