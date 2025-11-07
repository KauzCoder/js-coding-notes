/*
Operadores Lógicos Avançados

Além dos operadores básicos (&&, ||, !), existem outros operadores lógicos derivados
que são muito usados em eletrônica, lógica computacional e programação avançada.

1️⃣ Operadores Básicos
---------------------
&&   → E lógico (AND)
||   → OU lógico (OR)
!    → NÃO lógico (NOT)

2️⃣ Operadores Derivados (combinados)
-------------------------------------
NAND  → NÃO E (NOT AND)       → !(A && B)
NOR   → NÃO OU (NOT OR)       → !(A || B)
XOR   → OU Exclusivo           → (A && !B) || (!A && B)
XNOR  → Equivalência lógica    → !(A ^ B) ou (A && B) || (!A && !B)


📘 Tabelas de Verdade

AND (&&)
| A     | B     | A && B |
|-------|-------|--------|
| true  | true  | true   |
| true  | false | false  |
| false | true  | false  |
| false | false | false  |

OR (||)
| A     | B     | A || B |
|-------|-------|--------|
| true  | true  | true   |
| true  | false | true   |
| false | true  | true   |
| false | false | false  |

NOT (!)
| A     | !A    |
|-------|-------|
| true  | false |
| false | true  |

NAND
| A     | B     | A NAND B |
|-------|-------|----------|
| true  | true  | false    |
| true  | false | true     |
| false | true  | true     |
| false | false | true     |

NOR
| A     | B     | A NOR B |
|-------|-------|---------|
| true  | true  | false   |
| true  | false | false   |
| false | true  | false   |
| false | false | true    |

XOR
| A     | B     | A XOR B |
|-------|-------|---------|
| true  | true  | false   |
| true  | false | true    |
| false | true  | true    |
| false | false | false   |

XNOR
| A     | B     | A XNOR B |
|-------|-------|----------|
| true  | true  | true     |
| true  | false | false    |
| false | true  | false    |
| false | false | true     |
*/

// Exemplo de uso em JavaScript
let A = true;
let B = false;  

console.log("A AND B:", A && B);           // false (E lógico)
console.log("A OR B:", A || B);            // true (OU lógico)
console.log("NOT A:", !A);                  // false (NÃO lógico)

console.log("A NAND B:", !(A && B));       // true (NÃO E lógico)
console.log("A NOR B:", !(A || B));      // false (NÃO OU lógico)
console.log("A XOR B:", (A && !B) || (!A && B));    // true (OU exclusivo)
console.log("A XNOR B:", !( (A && !B) || (!A && B) ));  // true (Equivalência lógica)

//Vale resaltar que mapa de Karnaugh e simplificação de expressões lógicas podem ser usados para otimizar o uso desses operadores em circuitos digitais e algoritmos complexos.

/*
💡 Observação:
- Use NAND e NOR quando precisar inverter uma operação básica.
- XOR é ótimo para condições de **diferença**.
- XNOR é ótimo para verificar **igualdade** entre booleanos.
*/               // false (NÃO lógico)