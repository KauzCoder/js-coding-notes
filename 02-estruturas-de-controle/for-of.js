// ============================================================
//  FOR...OF
// ============================================================
//
// O for...of é uma estrutura de repetição
// usada para percorrer VALORES de estruturas iteráveis.
//
// Ele foi introduzido no ES6.
//
// Funciona com:
// - Arrays
// - Strings
// - Maps
// - Sets
// - Outros iteráveis
//
// ============================================================
//  QUANDO USAR FOR...OF
// ============================================================
//
// Use quando:
// - Quiser acessar diretamente os valores
// - Estiver trabalhando com arrays
// - Quiser código mais limpo que for tradicional
//
// Não use quando:
// - Precisar do índice (prefira for tradicional)
//
// ============================================================
//  EXEMPLO 1 — Percorrendo Array
// ============================================================

const numeros = [10, 20, 30];

for (let numero of numeros) {
  console.log(numero);
}

// Saída:
// 10
// 20
// 30
//
// Explicação:
// O for...of percorre os VALORES do array.


// ============================================================
//  EXEMPLO 2 — Percorrendo String
// ============================================================

const nome = "Ana";

for (let letra of nome) {
  console.log(letra);
}

// Saída:
// A
// n
// a
//
// Explicação:
// Strings também são iteráveis.


// ============================================================
//  EXEMPLO 3 — Usando break
// ============================================================

for (let numero of numeros) {
  if (numero === 20) break;
  console.log(numero);
}

// Saída:
// 10
//
// Explicação:
// O break funciona normalmente.


// ============================================================
//  EXEMPLO 4 — Comparação com FOR tradicional
// ============================================================

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

//
// Explicação:
// Aqui usamos índice.
// No for...of, não há índice automático.


// ============================================================
//  EXEMPLO 5 — Obtendo índice com entries()
// ============================================================

for (let [indice, valor] of numeros.entries()) {
  console.log(indice, valor);
}

// Saída:
// 0 10
// 1 20
// 2 30
//
// Explicação:
// entries() permite acessar índice e valor.

// ============================================================
//  BOAS PRÁTICAS
// ============================================================
//
// - Use for...of para arrays
// - Prefira for...of para código mais limpo
// - Use entries() quando precisar do índice
//
//
// ============================================================
//  CONCLUSÃO
// ============================================================
//
// for...of é uma forma moderna,
// simples e legível de percorrer valores.
// Ele é ideal para a maioria dos casos com arrays e strings,
// tornando seu código mais limpo e fácil de entender.
// ============================================================
