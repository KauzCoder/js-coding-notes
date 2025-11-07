/*
Operadores de Tipo (Type Operators)

Os operadores de tipo servem para **verificar ou manipular o tipo de uma variável** em JavaScript.

1️⃣ typeof
-----------------
- Serve para descobrir o tipo de um valor ou variável.
- Retorna uma string indicando o tipo: "string", "number", "boolean", "object", "function", "undefined", etc.

Exemplo:
*/

console.log(typeof 42);        // "number"
console.log(typeof "Kauã");    // "string"
console.log(typeof true);      // "boolean"
console.log(typeof {});        // "object"
console.log(typeof undefined); // "undefined"
console.log(typeof function(){}); // "function"

/*

2️⃣ instanceof
-----------------
- Verifica se um objeto é instância de uma determinada função construtora ou classe.
- Retorna true ou false.

Exemplo:
*/

const data = new Date();
console.log(data instanceof Date); // true
console.log(data instanceof Object); // true
console.log(data instanceof Array);  // false


/*
3️⃣ constructor
-----------------
- Indica o **construtor que criou** um objeto.
- Útil para verificar o tipo do objeto de forma mais detalhada.

Exemplo:
*/
const arr = [1, 2, 3];
console.log(arr.constructor); // ƒ Array() { [native code] }

/*

💡 Observação:
- Use `typeof` para tipos primitivos (string, number, boolean, undefined, symbol, bigint).  
- Use `instanceof` para objetos e classes personalizadas.  
- `constructor` é útil para identificar rapidamente a “classe” que criou o objeto.

*/