// ============================================================
//  ESTRUTURA DE REPETIÇÃO DO WHILE 
// ============================================================
//
//  O do...while é uma estrutura de repetição que executa o bloco
//  de código AO MENOS UMA VEZ, independente da condição.
//
//  Diferença principal:
//      - while: testa a condição antes de executar
//      - do...while: executa primeiro e testa depois
//
// ============================================================
//  SINTAXE
// ============================================================
//
//  do {
//      // código a ser repetido
//  } while (condicao);
//
//  OBS: Sempre termina com ponto e vírgula após o while.
//
// ============================================================
//  EXEMPLO 1 — Executa ao menos uma vez
// ============================================================

let contador = 1;

do {
  console.log("Execução:", contador);
  contador++;
} while (contador <= 3);

// Saída:
// Execução: 1
// Execução: 2
// Execução: 3
//
// Explicação:
// Mesmo se a condição fosse falsa na primeira verificação,
// o bloco ainda executaria a primeira vez.


// ============================================================
//  EXEMPLO 2 — Executando mesmo quando a condição é falsa
// ============================================================

let numero = 10;

do {
  console.log("Isso será executado mesmo que não devesse.");
  numero++;
} while (numero < 5);

// Saída:
// Isso será executado mesmo que não devesse.
//
// Explicação:
// Como o código só verifica a condição DEPOIS de rodar,
// o bloco executa ao menos uma vez.


// ============================================================
//  EXEMPLO 3 — Loop até o usuário digitar valor válido
// ============================================================
//
//  Este é um uso comum: validação de entrada que precisa
//  rodar ao menos uma vez.

let opcao;

do {
  opcao = 2;  // Exemplo: valor que veio do usuário
  console.log("Opção escolhida:", opcao);
} while (opcao < 1 || opcao > 3);

//
// Explicação:
// O bloco repete enquanto a opção NÃO estiver entre 1 e 3.
// Ideal para formulários, menus e interações repetitivas.


// ============================================================
//  EXEMPLO 4 — Usando do while com decremento
// ============================================================

let i = 5;

do {
  console.log("Valor de i:", i);
  i--; // decrementando
} while (i >= 1);

// Saída:
// Valor de i: 5
// Valor de i: 4
// Valor de i: 3
// Valor de i: 2
// Valor de i: 1


// ============================================================
//  EXEMPLO 5 — Diferença prática entre while e do while
// ============================================================

let x = 0;

while (x > 0) {
  console.log("Isso NUNCA será executado.");
}

// (nenhuma saída)


do {
  console.log("Agora será executado UMA vez.");
} while (x > 0);

// Saída:
// Agora será executado UMA vez.


// ============================================================
//  OBSERVAÇÃO IMPORTANTE SOBRE CONDIÇÃO
// ============================================================
//
//  Como o do...while executa pelo menos uma vez, tenha cuidado
//  com condições que poderiam gerar loops indesejados.
//
//  Exemplo de risco:
//
//  let n = 1;
//  do {
//      console.log(n);
//      // sem alteração na variável n
//  } while (n === 1);
//
//  → Loop infinito!
//
//  SEMPRE garanta que a variável da condição seja alterada dentro do loop.


// ============================================================
//  QUANDO USAR DO WHILE
// ============================================================
//
//  ✔ Quando o código PRECISA rodar pelo menos uma vez
//  ✔ Quando a verificação da condição depende de algo executado antes
//  ✔ Quando pedimos entrada do usuário repetidamente
//  ✔ Quando queremos repetir um bloco até encontrar um valor válido
//
//  Evite usar quando:
//
//  O loop pode correr risco de nunca ser interrompido
//  A lógica não exige execução imediata antes da verificação
//
// ============================================================
//  FIM DA DOCUMENTAÇÃO
// ============================================================
