/*
✅ Valores Truthy e Falsy

Em JavaScript, nem todo valor é explicitamente booleano (`true` ou `false`). 
Em contextos que esperam um valor booleano, como `if`, os valores são convertidos para `true` ou `false` automaticamente.  

- **Truthy** → valores que são considerados verdadeiros.
- **Falsy** → valores que são considerados falsos.

---

1️⃣ Valores Falsy (avaliam como false)
--------------------------------------
Existem apenas **7 valores falsy** em JavaScript:

| Valor           | Explicação                  |
|-----------------|----------------------------|
| false           | Booleano falso             |
| 0               | Número zero                |
| -0              | Número negativo zero       |
| 0n              | BigInt zero                |
| ""              | String vazia               |
| null            | Ausência de valor          |
| undefined       | Não definido               |
| NaN             | Valor não numérico         |

2️⃣ Valores Truthy (avaliam como true)
--------------------------------------
Existem apenas **7 valores falsy** em JavaScript:
| Valor                    | Explicação                 |
|--------------------------|----------------------------|
| `true`                   | Booleano                   |
| `1`, `-5`, `3.14`        | Número                     |
| `"Olá"`, `"0"`, `"false" | String                     |
| `[]` (mesmo vazio)       | Array                      |
| `{}` (mesmo vazio)       | Objeto                     |
| `function() {}`          | Função                     |
| `1n`                     | BigInt                     |

Valores falsy são úteis para verificações simples de existência ou zero.

Valores truthy permitem testar se algo está definido ou preenchido.

Use sempre com cuidado em comparações, porque JS faz a coerção de tipo automática.

*/


// -----------------------------
// ⚡ VALORES FALSY
// -----------------------------
console.log("---- Valores Falsy ----");

if (!false) console.log("false é falsy");
if (!0) console.log("0 é falsy");
if (!-0) console.log("-0 é falsy");
if (!0n) console.log("0n (BigInt zero) é falsy");
if (!"") console.log('"" (string vazia) é falsy');
if (!null) console.log("null é falsy");
if (!undefined) console.log("undefined é falsy");
if (!NaN) console.log("NaN é falsy");

//Foi usado o operador de negação (!) para demonstrar os valores falsy, pois assim o bloco de codigo pode ser execultado.


// -----------------------------
// 💎 VALORES TRUTHY
// -----------------------------
console.log("\n---- Valores Truthy ----");

if (true) console.log("true é truthy");
if ("JavaScript") console.log('"JavaScript" é truthy');
if ("false") console.log('"false" (string) é truthy');
if ("0") console.log('"0" (string) é truthy');
if (42) console.log("42 é truthy");
if ([]) console.log("[] (array vazio) é truthy");
if ({}) console.log("{} (objeto vazio) é truthy");
if (function() {}) console.log("função é truthy");
