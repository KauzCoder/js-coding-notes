// ============================================================
//  MANIPULANDO PROPRIEDADES DE OBJETOS
// ============================================================
//
// Manipular propriedades significa:
//
// - Acessar
// - Adicionar
// - Alterar
// - Remover
// - Verificar existência
//
// ============================================================
//  EXEMPLO BASE
// ============================================================

const pessoa = {
  nome: "Ana",
  idade: 25
};



// ============================================================
//  1) ACESSANDO PROPRIEDADES
// ============================================================

// Notação ponto
console.log(pessoa.nome);

// Notação colchetes
console.log(pessoa["idade"]);

//
// Explicação:
// Use ponto quando souber o nome da propriedade.
// Use colchetes quando o nome for dinâmico.


// ============================================================
//  2) ADICIONANDO NOVA PROPRIEDADE
// ============================================================

pessoa.cidade = "Fortaleza";

console.log(pessoa);

//
// Explicação:
// Basta atribuir um valor a uma nova chave.


// ============================================================
//  3) ALTERANDO PROPRIEDADE EXISTENTE
// ============================================================

pessoa.idade = 26;

console.log(pessoa.idade);

//
// Explicação:
// Basta reatribuir o valor.


// ============================================================
//  4) REMOVENDO PROPRIEDADE
// ============================================================

delete pessoa.cidade;

console.log(pessoa);

//
// Explicação:
// A palavra-chave delete remove a propriedade.


// ============================================================
//  5) VERIFICANDO SE PROPRIEDADE EXISTE
// ============================================================

console.log("nome" in pessoa); // true
console.log("cidade" in pessoa); // false

//
// Também podemos usar:

console.log(pessoa.hasOwnProperty("idade"));

// ============================================================
//  DIFERENÇA ENTRE FOR...IN E HASOWNPROPERTY
// ============================================================
//
// Ambos são usados para trabalhar com propriedades
// de objetos, mas têm funções diferentes.
//
// ============================================================
//  HASOWNPROPERTY
// ============================================================
//
// - Verifica se a propriedade pertence
//   diretamente ao objeto
// - NÃO percorre nada
// - Retorna true ou false
//
// ============================================================
//  FOR...IN
// ============================================================
//
// - Percorre todas as propriedades enumeráveis
// - Inclui propriedades herdadas do prototype
// - É usado como estrutura de repetição
//


// ============================================================
//  6) ALTERANDO MÚLTIPLAS PROPRIEDADES
// ============================================================

Object.assign(pessoa, {
  idade: 30,
  profissao: "Desenvolvedora"
});

console.log(pessoa);

//
// Explicação:
// Object.assign permite atualizar ou adicionar
// várias propriedades de uma vez.


// ============================================================
//  7) CONGELANDO OBJETO
// ============================================================

const usuario = {
  nome: "Carlos"
};

Object.freeze(usuario);

usuario.nome = "Pedro"; // não altera
usuario.idade = 40;     // não adiciona

console.log(usuario);

//
// Explicação:
// Object.freeze impede alterações.


// ============================================================
//  BOAS PRÁTICAS
// ============================================================
//
// - Prefira const para objetos
// - Evite modificar objetos desnecessariamente
// - Use Object.freeze quando precisar de imutabilidade
