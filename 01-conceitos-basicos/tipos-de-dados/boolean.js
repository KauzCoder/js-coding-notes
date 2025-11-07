/*
 Boolean em JavaScript

 O tipo Boolean representa apenas dois valores possíveis:
   - true  → verdadeiro
   - false → falso

 Ele é muito usado em comparações, estruturas condicionais e controle de fluxo.
*/

let ativo = true;            // Variável booleana verdadeira
let usuarioLogado = false;   // Variável booleana falsa

// Comparações retornam valores booleanos
let maiorDeIdade = 18 >= 18;  // true
let menorDeIdade = 16 < 18;   // true
let mesmoNome = "Kauã" === "João";  // false

// Uso em estruturas condicionais
if (ativo) {
  console.log("O usuário está ativo.");
} else {
  console.log("O usuário está inativo.");
}

// Conversão implícita para Boolean
console.log(Boolean(0));        // false → zero é considerado falso
console.log(Boolean(1));        // true  → qualquer número diferente de 0 é verdadeiro
console.log(Boolean(""));       // false → string vazia é falsa
console.log(Boolean("texto"));  // true  → string não vazia é verdadeira
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean([]));       // true  → arrays vazios são verdadeiros
console.log(Boolean({}));       // true  → objetos vazios também

/*
 Boas práticas:
  - Use nomes de variáveis que indiquem claramente condição booleana:
      isAtivo, temPermissao, estaLogado, etc.
  - Evite usar 1/0 em vez de true/false — seja explícito.
*/
