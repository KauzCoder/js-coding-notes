/*
🌟 Operadores Spread e Rest em JavaScript
-----------------------------------------

Tanto o **Spread** quanto o **Rest** usam a mesma sintaxe (`...`), 
mas o comportamento muda dependendo de **onde** eles são usados.

*/

console.log("\n=== Spread e Rest ===");
// Spread → espalha elementos
const numeros = [1, 2, 3];
const novos = [...numeros, 4, 5];
console.log(novos); // [1, 2, 3, 4, 5]


// Rest → junta parâmetros
function somar(...valores) {
  return valores.reduce((total, num) => total + num, 0);
}
console.log(somar(2, 4, 6)); // 12