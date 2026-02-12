// ============================================================
//  FOR...IN
// ============================================================
//
// O for...in é uma estrutura de repetição
// usada para percorrer PROPRIEDADES (CHAVES)
// de um objeto.
//
// Também pode ser usado em arrays,
// mas NÃO é recomendado.
//
// ============================================================
//  QUANDO USAR FOR...IN
// ============================================================
//
// Use quando:
// - Quiser percorrer objetos
// - Precisar acessar as chaves
//
// Evite quando:
// - Estiver trabalhando com arrays
//   (prefira for...of)
//
// ============================================================
//  EXEMPLO 1 — Percorrendo Objeto
// ============================================================

const pessoa = {
  nome: "Ana",
  idade: 25,
  cidade: "Fortaleza"
};

for (let chave in pessoa) {
  console.log(chave);
}

// Saída:
// nome
// idade
// cidade
//
// Explicação:
// O for...in percorre as CHAVES do objeto.


// ============================================================
//  EXEMPLO 2 — Acessando valores
// ============================================================

for (let chave in pessoa) {
  console.log(pessoa[chave]);
}

// Saída:
// Ana
// 25
// Fortaleza
//
// Explicação:
// Usamos pessoa[chave] para acessar o valor.


// ============================================================
//  EXEMPLO 3 — For...in em Array (NÃO recomendado)
// ============================================================

const numeros = [10, 20, 30];

for (let indice in numeros) {
  console.log(indice);
}

// Saída:
// 0
// 1
// 2
//
// Explicação:
// Ele percorre os índices (chaves).
// Pode causar problemas se o array tiver métodos extras.

// ============================================================
//  PROPRIEDADES HERDADAS (IMPORTANTE)
// ============================================================
//
// for...in também percorre propriedades herdadas.
// Para evitar isso, use hasOwnProperty().
//

for (let chave in pessoa) {
  if (pessoa.hasOwnProperty(chave)) {
    console.log(chave);
  }
}


// ============================================================
//  BOAS PRÁTICAS
// ============================================================
//
// - Use for...in para objetos
// - Evite usar em arrays
// - Use hasOwnProperty para segurança
// - Prefira Object.keys() em código moderno
//
//
// ============================================================
//  CONCLUSÃO
// ============================================================
//
// for...in é ideal para percorrer objetos
// quando você precisa das chaves.
//
// Para arrays, prefira for...of,
// que é mais seguro e moderno.
// ============================================================
