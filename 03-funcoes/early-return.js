// ============================================================
//  EARLY RETURN (RETORNO ANTECIPADO)
// ============================================================
//
// Early Return é uma técnica onde usamos "return"
// no início da função para evitar estruturas
// aninhadas (if dentro de if dentro de if).
//
// O objetivo é deixar o código mais limpo,
// legível e fácil de manter.
//
// ============================================================
//  POR QUE USAR EARLY RETURN?
// ============================================================
//
// - Evita código muito indentado
// - Melhora a leitura
// - Reduz complexidade
// - Facilita manutenção
//
// ============================================================
//  EXEMPLO 1 — SEM Early Return
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
//
// Problema:
// Uso desnecessário de else.


// ============================================================
//  EXEMPLO 2 — COM Early Return
// ============================================================

function verificarIdade(idade) {
  if (idade < 18) {
    return "Menor de idade";
  }

  return "Maior de idade";
}

console.log(verificarIdade(20));

// Saída: Maior de idade
//
// Explicação:
// Eliminamos o else.
// Se a condição for verdadeira,
// a função já termina.


// ============================================================
//  EXEMPLO 3 — Evitando IFs aninhados
// ============================================================

function processarUsuario(usuario) {
  if (!usuario) {
    return "Usuário inválido";
  }

  if (!usuario.nome) {
    return "Nome obrigatório";
  }

  if (!usuario.email) {
    return "Email obrigatório";
  }

  return "Usuário válido";
}

console.log(processarUsuario({ nome: "Ana", email: "ana@email.com" }));

// Saída: Usuário válido
//
// Explicação:
// Cada verificação encerra a função
// caso haja problema.
// O fluxo fica claro e direto.


// ============================================================
//  EXEMPLO 4 — SEM Early Return (Confuso)
// ============================================================

function exemplo(valor) {
  if (valor > 0) {
    if (valor < 100) {
      console.log("Valor válido");
    }
  }
}

//
// Problema:
// Código muito aninhado,
// difícil de ler.


// ============================================================
//  EXEMPLO 5 — COM Early Return (Profissional)
// ============================================================

function exemplo(valor) {
  if (valor <= 0) return;
  if (valor >= 100) return;

  console.log("Valor válido");
}

//
// Explicação:
// Regras negativas vêm primeiro.
// Fluxo principal fica limpo.


// ============================================================
//  BOAS PRÁTICAS
// ============================================================
//
// - Valide erros primeiro
// - Evite else desnecessário
// - Use para tratar casos especiais
// - Deixe o fluxo principal por último
//
//
// ============================================================
//  CONCLUSÃO
// ============================================================
//
// Early Return é uma prática profissional
// para escrever código mais claro.
//
// Ele reduz indentação,
// melhora legibilidade
// e evita complexidade desnecessária.
//
// É muito usado em projetos reais.
// ============================================================