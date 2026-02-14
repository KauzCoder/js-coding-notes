// ============================================================
//  CALLBACK FUNCTION
// ============================================================
//
// Callback é uma função passada como argumento
// para outra função.
//
// Essa função será executada depois,
// geralmente após algum evento ou processamento.
//
// ============================================================
//  PARA QUE SERVE CALLBACK?
// ============================================================
//
// - Permitir execução personalizada
// - Trabalhar com eventos
// - Trabalhar com código assíncrono
// - Tornar funções reutilizáveis
//
// ============================================================
//  EXEMPLO 1 — Callback simples
// ============================================================

function executar(funcao) {
  funcao();
}

function dizerOi() {
  console.log("Oi!");
}

executar(dizerOi);

// Saída: Oi!
//
// Explicação:
// A função dizerOi foi passada como argumento.
// Ela é executada dentro da função executar.


// ============================================================
//  EXEMPLO 2 — Callback anônimo
// ============================================================

executar(function() {
  console.log("Executando callback anônimo");
});

// Saída: Executando callback anônimo
//
// Explicação:
// Aqui usamos uma função sem nome.


// ============================================================
//  EXEMPLO 3 — Callback com Arrow Function
// ============================================================

executar(() => {
  console.log("Callback com arrow function");
});

// Saída: Callback com arrow function


// ============================================================
//  EXEMPLO 4 — Callback com parâmetros
// ============================================================

function calcular(a, b, operacao) {
  return operacao(a, b);
}

function multiplicar(a, b) {
  return a * b;
}

function somar(a, b) {
  return a + b;
}

console.log(calcular(5, 3, somar));
console.log(calcular(5, 3, multiplicar));
// Saída: 8
// Saída: 15
//
// Explicação:
// A função somar foi passada como callback.
// A função multiplicar foi passada como callback.

// ============================================================
//  CALLBACK ASSÍNCRONO
// ============================================================

setTimeout(function() {
  console.log("Executou depois de 2 segundos");
}, 2000);

//
// Explicação:
// A função só executa após o tempo definido.


// ============================================================
//  CUIDADO — CALLBACK HELL
// ============================================================
//
// Quando callbacks ficam muito aninhados,
// o código se torna difícil de ler.
//
// Exemplo:
//
// func1(() => {
//   func2(() => {
//     func3(() => {
//       console.log("Confuso!");
//     });
//   });
// });
//
// Para resolver isso surgiram:
// - Promises
// - Async/Await
//
// ============================================================
//  BOAS PRÁTICAS
// ============================================================
//
// - Use nomes claros para callbacks
// - Prefira arrow functions quando possível
// - Evite aninhamento excessivo
// - Use Promises em código moderno
//
//
// ============================================================
//  CONCLUSÃO
// ============================================================
//
// Callback é um dos conceitos mais importantes
// do JavaScript.
//
// Ele permite programação assíncrona,
// eventos e funções dinâmicas.
// ============================================================
