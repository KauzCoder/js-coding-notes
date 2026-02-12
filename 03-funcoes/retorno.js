// ============================================================
//  RETURN EM FUNÇÕES
// ============================================================
//
// A palavra-chave "return" é usada para
// devolver um valor de dentro da função.
//
// Quando o JavaScript encontra um return,
// a função é imediatamente encerrada.
//
// ============================================================
//  PARA QUE SERVE O RETURN?
// ============================================================
//
// - Devolver um resultado
// - Encerrar a execução da função
// - Permitir reutilização do valor retornado
//
// Sem return, a função retorna undefined.
//
// ============================================================
//  EXEMPLO 1 — Função com return
// ============================================================

function somar(a, b) {
  return a + b;
}

let resultado = somar(5, 3);
console.log(resultado);

// Saída: 8
//
// Explicação:
// A função devolve o valor 8.
// Esse valor pode ser armazenado em uma variável.


// ============================================================
//  EXEMPLO 2 — Função sem return
// ============================================================

function teste() {
  console.log("Executando...");
}

let valor = teste();
console.log(valor);

// Saída:
// Executando...
// undefined
//
// Explicação:
// Como não há return,
// o JavaScript retorna undefined automaticamente.


// ============================================================
//  EXEMPLO 3 — Return encerra a função
// ============================================================

function verificar(numero) {
  if (numero > 10) {
    return "Maior que 10";
  }

  return "Menor ou igual a 10";
}

console.log(verificar(15));

// Saída: Maior que 10
//
// Explicação:
// Assim que encontra o primeiro return,
// a função para de executar.


// ============================================================
//  EXEMPLO 4 — Código após return não executa
// ============================================================

function exemplo() {
  return "Fim";
  console.log("Isso nunca aparece");
}

console.log(exemplo());

// Saída: Fim
//
// Explicação:
// Tudo depois do return é ignorado.


// ============================================================
//  EXEMPLO 5 — Return em Arrow Function
// ============================================================

const multiplicar = (a, b) => {
  return a * b;
};

console.log(multiplicar(4, 2));

// Saída: 8


// ============================================================
//  EXEMPLO 6 — Retorno implícito (Arrow Function)
// ============================================================

const dividir = (a, b) => a / b;

console.log(dividir(10, 2));

// Saída: 5
//
// Explicação:
// Em arrow functions de uma linha,
// o return é implícito.


// ============================================================
//  RETURN DE OBJETOS (CUIDADO)
// ============================================================

const criarPessoa = () => ({
  nome: "Ana",
  idade: 25
});

console.log(criarPessoa());

//
// Explicação:
// Para retornar objeto em arrow function,
// use parênteses ( ) ao redor do objeto.


// ============================================================
//  BOAS PRÁTICAS
// ============================================================
//
// - Sempre deixar claro o que a função retorna
// - Evitar múltiplos returns confusos
// - Usar return para tornar funções reutilizáveis
// - Preferir early return para deixar o código mais limpo
//
//
// ============================================================
//  CONCLUSÃO
// ============================================================
//
// O return é fundamental para que funções
// produzam resultados.
//
// Ele encerra a execução da função
// e devolve um valor para quem a chamou.
//
// Sem return, não há reaproveitamento de resultado.
// ============================================================
