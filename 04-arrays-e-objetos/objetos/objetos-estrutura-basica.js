// ============================================================
//  ESTRUTURA DE OBJETOS EM JAVASCRIPT
// ============================================================
//
// Um objeto é uma estrutura formada por
// pares de CHAVE : VALOR.
//
// Sintaxe básica:
//
// const nomeDoObjeto = {
//   chave: valor
// };
//
// ============================================================
//  ESTRUTURA BÁSICA
// ============================================================

const obj = {
  chave: "valor"
};

//
// Explicação:
// - obj → nome do objeto
// - chave → propriedade
// - valor → dado armazenado
// - {} → delimitam o objeto
// - : → separa chave e valor
// - , → separa propriedades


// ============================================================
//  MÚLTIPLAS PROPRIEDADES
// ============================================================

const pessoa = {
  nome: "Kaua",
  idade: 18,
  cidade: "Belem"
};

//
// Explicação:
// Cada linha representa um par chave: valor.
// As propriedades são separadas por vírgula.


// ============================================================
//  TIPOS DE VALORES PERMITIDOS
// ============================================================

const exemplo = {
  texto: "Olá",
  numero: 10,
  booleano: true,
  array: [1, 2, 3],
  objetoInterno: {
    ativo: true
  },
  saudacao: function() {
    console.log("Olá, " + this.nome);
  }
};

//
// Explicação:
// O valor pode ser:
// - String
// - Number
// - Boolean
// - Array
// - Outro objeto
// - Função


// ============================================================
//  CHAVES
// ============================================================
//
// Chaves podem ser:
//
// 1) Identificadores simples
// 2) Strings
// 3) Números
//

const exemploChaves = {
  nome: "Ana",
  "sobrenome": "Silva",
  123: "Número como chave"
};


//
// ============================================================
//  FORMATO VISUAL DA ESTRUTURA
// ============================================================
//
// const objeto = {
//   chave1: valor1,
//   chave2: valor2,
//   chave3: valor3
// };
//
// Sempre:
// - Abre com {
// - Fecha com }
// - Cada par separado por vírgula
//
// ============================================================
//  CONCLUSÃO
// ============================================================
//
// A estrutura de um objeto é composta por:
//
// { chave: valor }
//
// É a base para organizar dados
// no JavaScript.
// ============================================================
