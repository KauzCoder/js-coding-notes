// ============================================================
//  FUNÇÕES DECLARADAS (DECLARATION FUNCTION)
// ============================================================
//
// Funções declaradas são criadas usando a palavra-chave
// "function" seguida do nome da função.
//
// Esse é o modelo mais tradicional de função no JavaScript.
//
// ============================================================
//  CARACTERÍSTICA PRINCIPAL
// ============================================================
//
// Funções declaradas sofrem HOISTING.
//
// Isso significa que podem ser chamadas antes mesmo
// de serem escritas no código.
//
// ============================================================
//  EXEMPLO 1 — Estrutura básica
// ============================================================

function saudacao() {
  console.log("Olá, mundo!");
}

saudacao();

// Saída: Olá, mundo!
//
// Explicação:
// A função é declarada com a palavra "function"
// e pode ser chamada normalmente.


// ============================================================
//  EXEMPLO 2 — Função com parâmetros
// ============================================================

function somar(a, b) {
  return a + b;
}

console.log(somar(10, 5));

// Saída: 15
//
// Explicação:
// A função recebe parâmetros
// e retorna um valor com "return".


// ============================================================
//  EXEMPLO 3 — Hoisting (Içamento)
// ============================================================

mostrarMensagem();

function mostrarMensagem() {
  console.log("Função chamada antes da declaração!");
}

// Saída: Função chamada antes da declaração!
//
// Explicação:
// Mesmo sendo chamada antes de ser escrita,
// funciona por causa do hoisting.

// Hoisting é o comportamento do JavaScript de "mover"
// declarações para o topo do escopo antes da execução.
//
// IMPORTANTE:
// O JavaScript NÃO move o código fisicamente.
// Ele apenas registra as declarações antes de executar.
//
// var  -> içada como undefined
// let  -> TDZ (erro se acessar antes)
// const -> TDZ (erro se acessar antes)
// function declaration -> içada completamente
// arrow function -> não é executável antes


// ============================================================
//  EXEMPLO 4 — Escopo
// ============================================================

function testeEscopo() {
  let mensagem = "Dentro da função";
  console.log(mensagem);
}

testeEscopo();

// console.log(mensagem);  // ERRO

//
// Explicação:
// Variáveis declaradas dentro da função
// só existem dentro dela.


// ============================================================
//  EXEMPLO 5 — Função com retorno condicional
// ============================================================

function verificarIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(verificarIdade(20));

// Saída: Maior de idade


// ============================================================
//  DIFERENÇA PARA FUNÇÃO EXPRESSA
// ============================================================
//
// Função declarada:
//
function exemplo() {
  console.log("Declarada");
}
//
// Pode ser chamada antes da declaração.
//
// Função expressa:
//
const exemplo2 = function() {
  console.log("Expressa");
};
//
// NÃO pode ser chamada antes da declaração.


// ============================================================
//  BOAS PRÁTICAS
// ============================================================
//
// - Use nomes claros para funções
// - Evite funções muito longas
// - Use return para devolver valores
// - Organize o código em blocos reutilizáveis
//
//
// ============================================================
//  CONCLUSÃO
// ============================================================
//
// Funções declaradas são a forma clássica
// de criar funções no JavaScript.
//
// São fáceis de ler, reutilizar
// e permitem hoisting.
//
// Ideais para estruturas principais do sistema.
// ============================================================
