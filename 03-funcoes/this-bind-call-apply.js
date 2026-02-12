// ============================================================
//  THIS, BIND, CALL E APPLY
// ============================================================
//
// Em JavaScript, "this" representa o contexto
// de execução da função.
//
// O valor de "this" depende de COMO a função é chamada.
//
// bind, call e apply servem para controlar
// manualmente o valor de "this".
//
// ============================================================
//  O QUE É THIS?
// ============================================================
//
// "this" aponta para o objeto que está executando
// a função naquele momento.
//
// ============================================================
//  EXEMPLO 1 — THIS em objeto
// ============================================================

const pessoa = {
  nome: "Ana",
  falar: function() {
    console.log(this.nome);
  }
};

pessoa.falar();

// Saída: Ana
//
// Explicação:
// "this" aponta para o objeto pessoa.


// ============================================================
//  EXEMPLO 2 — THIS fora de objeto
// ============================================================

function mostrar() {
  console.log(this);
}

mostrar();

//
// Explicação:
// No navegador → window
// No Node → objeto global
//
// Depende do ambiente.


// ============================================================
//  PROBLEMA CLÁSSICO DE CONTEXTO
// ============================================================

const usuario = {
  nome: "Carlos",
  saudacao: function() {
    console.log("Olá " + this.nome);
  }
};

const funcaoSeparada = usuario.saudacao;

funcaoSeparada(); // perde o contexto

//
// Explicação:
// Ao separar a função,
// "this" deixa de apontar para usuario.


// ============================================================
//  CALL()
// ============================================================
//
// Executa a função imediatamente
// e permite definir o this manualmente.
//

function apresentar(cidade) {
  console.log(this.nome + " mora em " + cidade);
}

const pessoa1 = { nome: "Ana" };

apresentar.call(pessoa1, "São Paulo");

// Saída: Ana mora em São Paulo
//
// Explicação:
// call define o this como pessoa1.


// ============================================================
//  APPLY()
// ============================================================
//
// Igual ao call, mas recebe argumentos
// em formato de ARRAY.
//

apresentar.apply(pessoa1, ["Rio de Janeiro"]);

// Saída: Ana mora em Rio de Janeiro


// ============================================================
//  BIND()
// ============================================================
//
// NÃO executa imediatamente.
// Retorna uma nova função com this fixo.
//

const novaFuncao = apresentar.bind(pessoa1, "Fortaleza");

novaFuncao();

// Saída: Ana mora em Fortaleza
//
// Explicação:
// bind cria uma nova função
// com this permanentemente ligado.


// ============================================================
//  DIFERENÇA ENTRE CALL, APPLY E BIND
// ============================================================
//
// call  -> executa agora, argumentos separados
// apply -> executa agora, argumentos em array
// bind  -> não executa, retorna nova função
//
// ============================================================
//  THIS EM ARROW FUNCTION
// ============================================================

const objeto = {
  nome: "Lucas",
  mostrar: () => {
    console.log(this.nome);
  }
};

objeto.mostrar();

//
// Explicação:
// Arrow function NÃO tem seu próprio this.
// Ela herda do escopo externo.
//
// Por isso bind/call/apply não funcionam
// para alterar this em arrow functions.


// ============================================================
//  BOAS PRÁTICAS
// ============================================================
//
// - Usar bind para callbacks
// - Preferir arrow function quando quiser
//   manter o this do escopo externo
// - Entender contexto antes de usar call/apply
//
//
// ============================================================
//  CONCLUSÃO
// ============================================================
//
// this depende de como a função é chamada.
// bind, call e apply permitem controlar
// manualmente esse contexto.
//
// ============================================================
