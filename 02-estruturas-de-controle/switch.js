// ============================================================
//  SWITCH CASE 
// ============================================================
//
// O switch-case é uma estrutura de controle usada quando
// queremos comparar o MESMO valor com várias possibilidades.
//
// Ele é uma alternativa mais organizada ao uso excessivo
// de if, else if e else.
//
// ============================================================
//  QUANDO USAR SWITCH
// ============================================================
//
// Use switch quando:
// - A mesma variável é comparada várias vezes
// - Os valores possíveis são conhecidos
// - Você quer um código mais limpo e legível
//
// Não é indicado para:
// - Condições complexas
// - Comparações com >, <, >=, <=
//
// ============================================================
//  EXEMPLO 1 — Estrutura básica do switch
// ============================================================

let opcao = 2;

switch (opcao) {
  case 1:
    console.log("Opção 1 selecionada");
    break;

  case 2:
    console.log("Opção 2 selecionada");
    break;

  case 3:
    console.log("Opção 3 selecionada");
    break;

  default:
    console.log("Opção inválida");
}

// Saída: Opção 2 selecionada
//
// Explicação:
// O valor da variável 'opcao' é comparado com cada 'case'.
// Quando encontra um valor igual, executa o bloco
// até encontrar o break.


// ============================================================
//  IMPORTÂNCIA DO BREAK
// ============================================================
//
// O break interrompe a execução do switch.
// Sem ele, ocorre o chamado "fall-through".


// ============================================================
//  EXEMPLO 2 — Switch SEM break
// ============================================================

let numero = 1;

switch (numero) {
  case 1:
    console.log("Número 1");
  case 2:
    console.log("Número 2");
  case 3:
    console.log("Número 3");
  default:
    console.log("Fim");
}

// Saída:
// Número 1
// Número 2
// Número 3
// Fim
//
// Explicação:
// Como não há break, o código continua executando
// todos os casos abaixo do que foi verdadeiro.


// ============================================================
//  EXEMPLO 3 — Usando break corretamente
// ============================================================

numero = 1;

switch (numero) {
  case 1:
    console.log("Número 1");
    break;
  case 2:
    console.log("Número 2");
    break;
  case 3:
    console.log("Número 3");
    break;
  default:
    console.log("Fim");
}

// Saída: Número 1


// ============================================================
//  EXEMPLO 4 — Agrupando vários cases
// ============================================================

let dia = 6;

switch (dia) {
  case 6:
  case 7:
    console.log("Final de semana");
    break;
  default:
    console.log("Dia útil");
}

// Saída: Final de semana
//
// Explicação:
// Vários cases podem executar o mesmo bloco.


// ============================================================
//  EXEMPLO 5 — Switch com string
// ============================================================

let cor = "azul";

switch (cor) {
  case "vermelho":
    console.log("Cor quente");
    break;
  case "azul":
    console.log("Cor fria");
    break;
  case "verde":
    console.log("Cor neutra");
    break;
  default:
    console.log("Cor desconhecida");
}

// Saída: Cor fria

// ============================================================
//  EXEMPLO 6 — Switch realiza comparação estrita
// ============================================================

let valor = "2";

switch (valor) {
    case 1:
        console.log("Número 1");
        break;
    case 2:
        console.log("Número 2");
        break;
    case "2":
        console.log("String '2'");
        break;
    default:
        console.log("Nenhum caso corresponde");
}

// Saída: String '2'
//
// Explicação:
// O switch usa comparação estrita (===),
// então tipos diferentes não são iguais.

// ============================================================
//  BOAS PRÁTICAS
// ============================================================
//
// - Sempre usar break (salvo quando quiser fall-through)
// - Usar default
// - Evitar lógica complexa dentro dos cases
// - Manter o switch simples e legível


// ============================================================
//  CONCLUSÃO
// ============================================================
//
// O switch-case melhora a legibilidade do código quando
// trabalhamos com várias opções fixas.
//
// Ele não substitui o if-else, mas complementa,
// tornando o código mais organizado e fácil de manter.
// ============================================================
