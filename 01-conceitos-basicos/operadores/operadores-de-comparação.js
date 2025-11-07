/*
Operadores de Comparação

Os operadores de comparação são usados para **comparar dois valores**.
Eles retornam sempre um valor **booleano** (`true` ou `false`), dependendo do resultado da comparação.

1️⃣ Operadores Principais
-------------------------
==   → Igualdade (com conversão de tipo)
===  → Igualdade Estrita (sem conversão de tipo)
!=   → Diferença (com conversão de tipo)
!==  → Diferença Estrita (sem conversão de tipo)
>    → Maior que
<    → Menor que
>=   → Maior ou igual
<=   → Menor ou igual

📘 Operadores de Igualdade Estrita

Caso não saiba a diferença entre os operadores de igualdade (==, !=) e os de igualdade estrita (===, !==), veja a tabela abaixo:

| Operador | Nome                | Compara Tipo? | Retorna `true` quando...                          | Exemplo      | Resultado | Explicação |
|-----------|--------------------|----------------|--------------------------------------------------|---------------|------------|-------------|
| ===       | Igualdade Estrita  | ✅ Sim         | O valor **e** o tipo são iguais                  | 5 === 5       | true  | Mesmo valor e mesmo tipo (número). |
|           |                    |                |                                                  | 5 === "5"     | false | Tipos diferentes (número ≠ string). |
| !==       | Diferença Estrita  | ✅ Sim         | O valor **ou** o tipo são diferentes             | 5 !== 5       | false | Mesmo valor e mesmo tipo. |
|           |                    |                |                                                  | 5 !== "5"     | true  | Tipos diferentes (número ≠ string). |


💡 Observação:
- Sempre que possível, **prefira os operadores estritos (`===` e `!==`)** para evitar erros de conversão implícita de tipo.
- `==` e `!=` podem gerar resultados inesperados porque o JavaScript tenta converter os tipos antes de comparar.
- Esses operadores são muito usados em estruturas condicionais, como `if`, `while` e `for`.
*/

// Exemplo de uso dos operadores aritméticos
console.log("\n=== Comparação ===");
console.log(5 == "5");   // true (compara apenas valor)
console.log(5 === "5");  // false (compara valor e tipo)
console.log(10 != "10"); // false
console.log(10 !== "10");// true
console.log(8 > 5);      // true
console.log(8 <= 5);     // false
