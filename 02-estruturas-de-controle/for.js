// ============================================================
//  ESTRUTURA DE REPETIÇÃO FOR
// ============================================================
//
//  A estrutura de repetição for é usada quando sabemos exatamente
//  quantas vezes queremos repetir um bloco de código.
//
//  O for permite percorrer sequências, repetir ações, acessar 
//  arrays e muito mais, de forma organizada.
//
// ============================================================
//  SINTAXE DO FOR(LOGICA BÁSICA)
// ============================================================
//
//  for (inicialização; condição; incremento) {
//      // código a ser repetido
//  }
//
//  inicialização → executa apenas uma vez, no início
//  condição      → verificada antes de cada repetição
//  incremento    → executado após cada ciclo (loop)
//  Nao esqueca que os numeros em programcao se le o 0 caso tenha. Lembre-se disso ao definir os limites do loop.
//
// ============================================================
//  IMPORTANTE SOBRE INCREMENTAÇÃO EM LOOPS
// ============================================================
//
//  Em programação, a contagem normalmente começa NO ZERO.
//  Isso afeta diretamente o número de repetições do loop.
//  
//  Quando iniciamos o loop com i = 0:
//
//     for (let i = 0; i < 5; i++)
//
//  Isso NÃO significa "começar do 1", significa que o loop
//  terá 5 repetições:
//
//     i = 0  → 1ª repetição
//     i = 1  → 2ª repetição
//     i = 2  → 3ª repetição
//     i = 3  → 4ª repetição
//     i = 4  → 5ª repetição
//
//  O valor 5 NÃO será executado, pois a condição é i < 5.
//
// ============================================================
//  REGRA FUNDAMENTAL SOBRE INCREMENTAÇÃO
// ============================================================
//
//  Se iniciar o loop com 0 → ajuste a condição para evitar 1 repetição extra.
//  Se iniciar com 1 → saiba que perderá a posição inicial do array.
//
//  SEMPRE pense:
//  - Onde o loop começa? (i = ?)
//  - Onde ele deve parar? (condição)
//  - Quanto ele anda por vez? (i++ / i += X)
//
// ============================================================
// ============================================================
//  EXEMPLO 1 — Loop simples de 1 a 5
// ============================================================

for (let i = 1; i <= 5; i++) {
  console.log("Contagem: " + i);
}

// Saída:
// Contagem: 1
// Contagem: 2
// Contagem: 3
// Contagem: 4
// Contagem: 5
//
// Explicação:
// i começa em 1
// Enquanto i <= 5, o loop continua
// A cada repetição, i++ soma +1


// ============================================================
//  EXEMPLO 2 — Loop de contagem regressiva
// ============================================================

for (let i = 5; i >= 1; i--) {
  console.log("Voltando em: " + i);
}

// Saída:
// Voltando: 5
// Voltando: 4
// Voltando: 3
// Voltando: 2
// Voltando: 1


// ============================================================
//  EXEMPLO 3 — Pulando números com incremento personalizado
// ============================================================

for (let i = 0; i <= 20; i += 5) {
  console.log("Número: " + i);
}

// Saída:
// Número: 0
// Número: 5
// Número: 10
// Número: 15
// Número: 20


// ============================================================
//  EXEMPLO 4 — Percorrendo um array com for
// ============================================================

const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta: " + frutas[i]);
}

// Saída:
// Fruta: Maçã
// Fruta: Banana
// Fruta: Laranja
// Fruta: Uva

// Explicação:
// i começa em 0 (primeiro índice)
// i < frutas.length garante que não passe do tamanho do array
// frutas[i] acessa cada elemento


// ============================================================
//  EXEMPLO 5 — Somando valores de um array
// ============================================================

const numeros = [10, 20, 30, 40];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i]; // soma = soma + numeros[i]
}

console.log("Soma total:", soma);

// Saída: Soma total: 100


// ============================================================
//  EXEMPLO 6 — Usando for para repetir ações
// ============================================================

for (let i = 1; i <= 3; i++) {
  console.log("Tentando conectar... Tentativa " + i);
}

//
// Saída:
// Tentando conectar... Tentativa 1
// Tentando conectar... Tentativa 2
// Tentando conectar... Tentativa 3


// ============================================================
//  EXEMPLO 7 — Loop infinito (NÃO USE! KKKKKK)
// ============================================================
//
// Atenção: este código nunca para, pois a condição nunca fica falsa.
//
// for (let i = 1; i >= 1; i++) {
//   console.log(i);
// }
//
// Isso é um erro comum. Sempre garanta que a condição do loop
// possa um dia se tornar falsa, senão sua aplicação trava.


// ============================================================
//  EXEMPLO 8 — Usando break e continue
// ============================================================

// break → interrompe o loop
// continue → pula para a próxima repetição

for (let i = 1; i <= 5; i++) {

  if (i === 3) {
    console.log("Pulando o número 3...");
    continue; // ignora o restante do ciclo e vai para o próximo
  }

  if (i === 5) {
    console.log("Parando no 5...");
    break; // encerra o loop completamente
  }

  console.log("Valor:", i);
}

// Saída:
// Valor: 1
// Valor: 2
// Pulando o número 3...
// Valor: 4
// Parando no 5...


// ============================================================
//  CONCLUSÃO
// ============================================================
//
// O laço for é uma das estruturas mais importantes da programação.
// Ele permite repetir ações, percorrer arrays e controlar o fluxo 
// do programa de forma previsível.
//
// Use for quando:
// - Você sabe quantas vezes quer repetir algo
// - Precisa percorrer posições de um array manualmente
// - Deseja controlar índice, condição e incremento
//
// Outras alternativas incluem:
// - for...of (para arrays)
// - for...in (para objetos)
// - while e do...while (quando não sabemos o número exato de repetições)
//
// ============================================================
