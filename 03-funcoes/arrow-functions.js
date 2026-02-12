// ============================================================
//  ARROW FUNCTION (FUNÇÃO DE SETA)
// ============================================================
//
// Arrow Function é uma forma mais curta de escrever funções
// no JavaScript. Foi introduzida no ES6 (ECMAScript 2015).
//
// Usa a sintaxe:  =>
//
// ============================================================
//  QUANDO USAR ARROW FUNCTION
// ============================================================
//
// Use arrow function quando:
// - Quiser código mais limpo e curto
// - Trabalhar com callbacks
// - Não precisar de um "this" próprio
//
// Eu não indico quando:
// - Você precisa de um this dinâmico
// - Está criando métodos em objetos tradicionais
//
// ============================================================
//  EXEMPLO 1 — Função tradicional
// ============================================================

function somar(a, b) {
  return a + b;
}

console.log(somar(2, 3));

// Saída: 5
//
// Explicação:
// Função tradicional usando a palavra-chave "function".


// ============================================================
//  EXEMPLO 2 — Arrow Function básica
// ============================================================

const somarArrow = (a, b) => {
  return a + b;
};

console.log(somarArrow(2, 3));

// Saída: 5
//
// Explicação:
// Mesmo resultado, mas usando sintaxe moderna.


// ============================================================
//  EXEMPLO 3 — Retorno implícito
// ============================================================

const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 5));

// Saída: 20
//
// Explicação:
// Quando há apenas uma linha,
// não precisamos usar {} nem return.


// ============================================================
//  EXEMPLO 4 — Apenas um parâmetro
// ============================================================

const dobrar = numero => numero * 2;

console.log(dobrar(6));

// Saída: 12
//
// Explicação:
// Com apenas um parâmetro,
// os parênteses são opcionais.


// ============================================================
//  EXEMPLO 5 — Sem parâmetros
// ============================================================

const dizerOi = () => "Olá!";

console.log(dizerOi());

// Saída: Olá!
//
// Explicação:
// Sem parâmetros, usamos ().


// ============================================================
//  EXEMPLO 6 — Diferença no THIS
// ============================================================

function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}

// Explicação:
// Arrow function NÃO cria seu próprio "this".
// Ela herda o "this" do contexto onde foi criada.


// ============================================================
//  BOAS PRÁTICAS
// ============================================================
//
// - Use arrow function para funções curtas
// - Ideal para callbacks (map, filter, forEach)
// - Evite usar como método principal de objetos
// - Lembre-se que não possui próprio "this"
//
//
// ============================================================
//  CONCLUSÃO
// ============================================================
//
// Arrow functions deixam o código mais moderno,
// curto e legível.
//
// São muito usadas no React, Node.js e JavaScript moderno.
//
// Mas é importante entender como o "this" funciona
// para evitar bugs inesperados.
// ============================================================
