// Regras do Camel Case no JavaScript

// 1. Estrutura:
// - A primeira palavra começa com letra minúscula.
// - Cada nova palavra inicia com letra maiúscula, sem espaços, underlines ou hífens.

// Exemplo correto:
let nomeCompleto = "Kauã Silva";

// Exemplo incorreto:
let NomeCompleto = "Errado";   // Classes usam PascalCase, não variáveis
let nome_completo = "Errado";  // Underline é snake_case
//let nome-completo = "Errado";  // Hífen é inválido em identificadores

// 2. Onde usar:
// - Variáveis, funções, parâmetros e propriedades de objetos → camelCase

let idadeAluno = 19;
const alunoAtivo = true;

// - Classes e construtores → PascalCase
class PessoaEstudante {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

// 3. Boas práticas:
// - Seja consistente: use camelCase para tudo que não for classe.
// - Prefira nomes descritivos, mesmo que mais longos.

let qtdAlunosPresentes = 25; // Melhor que "qtd" ou "alunos"

//4. Declarar variaveis com var, let e const
// var: escopo global ou de função, pode ser redeclarada e atualizada.
// let: escopo de bloco, pode ser atualizada mas não redeclarada.
// const: escopo de bloco, não pode ser redeclarada nem atualizada.

// Exemplos:
var escola = "Escola A";
let curso = "JavaScript";
const anoLetivo = 2024;

console.log(`Bem-vindo à ${escola}, curso de ${curso} - Ano: ${anoLetivo}`);

//observação 01: Evite usar var em código moderno; prefira let e const para melhor controle de escopo e imutabilidade.
//observação 02: pode criar uma variavel sem precisar atribuir um valor, porem o valor sera undefined:

let cidade;
console.log(cidade); // undefined
