// ============================================================
//  PARÂMETROS EM FUNÇÕES
// ============================================================
//
// Parâmetros são variáveis declaradas na definição
// da função para receber valores.
//
// Quando chamamos a função e passamos valores,
// esses valores são chamados de ARGUMENTOS.
//
// ============================================================
//  PARÂMETRO x ARGUMENTO
// ============================================================
//
// Parâmetro → nome usado na declaração
// Argumento → valor passado na chamada
//
// ============================================================
//  EXEMPLO 1 — Função com parâmetros
// ============================================================

function somar(a, b) {
  return a + b;
}

console.log(somar(5, 3));

// Saída: 8
//
// Explicação:
// a e b são parâmetros.
// 5 e 3 são argumentos.


// ============================================================
//  EXEMPLO 2 — Parâmetro único
// ============================================================

function saudacao(nome) {
  return "Olá, " + nome;
}

console.log(saudacao("Ana"));

// Saída: Olá, Ana
//
// Explicação:
// O valor passado substitui o parâmetro.


// ============================================================
//  EXEMPLO 3 — Parâmetros padrão (Default)
// ============================================================

function multiplicar(a, b = 2) {
  return a * b;
}

console.log(multiplicar(5));
console.log(multiplicar(5, 3));

// Saída:
// 10
// 15
//
// Explicação:
// Se o segundo argumento não for passado,
// ele assume o valor padrão 2.


// ============================================================
//  EXEMPLO 4 — Parâmetros Rest (...)
// ============================================================

function somarTodos(...numeros) {
  let total = 0;
  for (let numero of numeros) {
    total += numero;
  }
  return total;
}

console.log(somarTodos(1, 2, 3, 4));

// Saída: 10
//
// Explicação:
// O operador ... agrupa vários argumentos
// em um array.

// ============================================================
//  EXEMPLO 5 — Parâmetro não informado
// ============================================================

function teste(valor) {
  console.log(valor);
}

teste();

// Saída: undefined
//
// Explicação:
// Se nenhum argumento for passado,
// o parâmetro recebe undefined.


// ============================================================
//  IMPORTANTE — Ordem dos parâmetros
// ============================================================
//
// A ordem importa.
// JavaScript associa argumentos pela posição,
// não pelo nome.


// ============================================================
//  BOAS PRÁTICAS
// ============================================================
//
// - Usar nomes claros
// - Usar parâmetros padrão quando necessário
// - Evitar funções com muitos parâmetros
// - Preferir objetos quando houver muitos dados
//
//
// ============================================================
//  CONCLUSÃO
// ============================================================
//
// Parâmetros permitem que funções sejam reutilizáveis
// e dinâmicas.
//
// ============================================================