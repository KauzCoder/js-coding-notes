// ============================================================
//  MÉTODOS IMPORTANTES DO OBJETO OBJECT
// ============================================================
//
// O objeto global "Object" possui métodos
// usados para manipular e analisar objetos.
//
// ============================================================
//  1) Object.keys()
// ============================================================
//
// Retorna um array com as CHAVES do objeto.
//

const pessoa = {
  nome: "Ana",
  idade: 25
};

console.log(Object.keys(pessoa));

// Saída: ["nome", "idade"]


// ============================================================
//  2) Object.values()
// ============================================================
//
// Retorna um array com os VALORES do objeto.
//

console.log(Object.values(pessoa));

// Saída: ["Ana", 25]


// ============================================================
//  3) Object.entries()
// ============================================================
//
// Retorna um array com pares [chave, valor].
//

console.log(Object.entries(pessoa));

// Saída:
// [["nome", "Ana"], ["idade", 25]]


// ============================================================
//  4) Object.assign()
// ============================================================
//
// Copia propriedades de um objeto para outro.
//

const destino = {};
Object.assign(destino, pessoa);

console.log(destino);

//
// Muito usado para clonagem simples.


// ============================================================
//  5) Object.freeze()
// ============================================================
//
// Impede alterações no objeto.
//

const usuario = { nome: "Carlos" };
Object.freeze(usuario);

usuario.nome = "Pedro"; // não altera
console.log(usuario);


// ============================================================
//  6) Object.seal()
// ============================================================
//
// Permite alterar valores,
// mas NÃO permite adicionar ou remover propriedades.
//

const produto = { nome: "Notebook" };
Object.seal(produto);

produto.nome = "Tablet"; // altera
produto.preco = 3000; // não adiciona
delete produto.nome; // não remove

console.log(produto);


// ============================================================
//  7) Object.hasOwn()
// ============================================================
//
// Verifica se a propriedade pertence
// diretamente ao objeto.
//

console.log(Object.hasOwn(pessoa, "nome")); // true


// ============================================================
//  8) Object.create()
// ============================================================
//
// Cria um novo objeto com prototype definido.
//

const novoObjeto = Object.create(pessoa);
console.log(novoObjeto.nome);

//
// novoObjeto herda propriedades de pessoa.


// ============================================================
//  9) Object.getOwnPropertyNames()
// ============================================================
//
// Retorna todas as propriedades próprias,
// inclusive não enumeráveis.
//

console.log(Object.getOwnPropertyNames(pessoa));


// ============================================================
//  10) Object.getPrototypeOf()
// ============================================================
//
// Retorna o prototype do objeto.
//

console.log(Object.getPrototypeOf(pessoa));


// ============================================================
//  CONCLUSÃO
// ============================================================
//
// Principais métodos do Object:
//
// keys()        → chaves
// values()      → valores
// entries()     → pares chave-valor
// assign()      → copiar
// freeze()      → congelar
// seal()        → selar
// hasOwn()      → verificar propriedade própria
// create()      → criar com prototype
// getPrototypeOf() → acessar prototype
//
// ============================================================
