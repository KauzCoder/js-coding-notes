// Tipos de Escopo em JavaScript
// ---------------------------------------------

// 1. ESCOPO GLOBAL
// Variáveis declaradas fora de qualquer função ou bloco.
// Podem ser acessadas e modificadas de qualquer parte do código.

let nome = "Kauã"; // Escopo global

function exibirNome() {
  console.log(nome); // Acessa variável global
}

exibirNome(); // Saída: Kauã
console.log(nome);  // Também acessível aqui


// 2. ESCOPO DE FUNÇÃO (ou LOCAL)
// Variáveis declaradas dentro de uma função só existem dentro dela.

function saudacao() {
  let mensagem = "Bem-vindo!";
  console.log(mensagem); // Acessível aqui
}

saudacao();
// console.log(mensagem); // Erro: mensagem is not defined


// 3. ESCOPO DE BLOCO
// Criado por estruturas como if, for, while, ou chaves { }.
// Só funciona com let e const (var ignora escopo de bloco).

if (true) {
  let linguagem = "JavaScript";
  const ano = 2025;
  console.log(linguagem, ano); // Acessível aqui
}

// console.log(linguagem); // Erro: linguagem is not defined
// console.log(ano);       // Erro: ano is not defined


// 4. ESCOPO DE VAR
// O var tem comportamento diferente: ele ignora o escopo de bloco
// e é visível fora das chaves, mas respeita escopo de função.

if (true) {
  var linguagemVar = "JS Antigo";
}
console.log(linguagemVar); // Funciona, mesmo fora do bloco


function testeVar() {
  var exemplo = "Dentro da função";
  console.log(exemplo);
}

testeVar();
// console.log(exemplo); // Erro: exemplo is not defined


// 5. ESCOPO LÉXICO (ou CLOSURE)
// Uma função "lembra" do escopo em que foi criada, mesmo sendo chamada fora dele.

function externa() {
  let mensagem = "Sou uma variável do escopo léxico!";

  function interna() {
    console.log(mensagem); // A função interna acessa a variável da função externa
  }

  return interna;
}

const minhaFuncao = externa();
minhaFuncao(); // Saída: Sou uma variável do escopo léxico!


// ---------------------------------------------
// Resumo:
// - Escopo Global → visível em todo o código
// - Escopo de Função → visível apenas dentro da função
// - Escopo de Bloco → criado por {}, só com let/const
// - var → ignora bloco, mas respeita função
// - Escopo Léxico → função lembra o ambiente onde foi criada
