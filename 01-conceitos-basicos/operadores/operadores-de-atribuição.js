/*
Operadores de Atribuição em JavaScript

Os operadores de atribuição são usados para armazenar valores em variáveis.
O mais básico é o operador "=" (igual), que atribui o valor da direita à variável da esquerda.

Exemplo:
*/
let numero = 10; // atribui o valor 10 à variável "numero"
/*
Além do "=", também existem os operadores de atribuição compostos, 
que realizam uma operação e já atualizam o valor da variável. 
Eles tornam o código mais limpo e reduzido.

Principais operadores de atribuição compostos:

| Operador | Exemplo  | Equivalente  | Descrição                            |
|-----------|-----------|--------------|--------------------------------------|
| +=        | x += 5    | x = x + 5    | Soma e atribui o resultado.          |
| -=        | x -= 3    | x = x - 3    | Subtrai e atribui o resultado.       |
| *=        | x *= 2    | x = x * 2    | Multiplica e atribui o resultado.    |
| /=        | x /= 4    | x = x / 4    | Divide e atribui o resultado.        |
| %=        | x %= 2    | x = x % 2    | Atribui o resto da divisão.          |
| **=       | x **= 3   | x = x ** 3   | Eleva à potência e atribui o valor.  |

Exemplo prático:
*/

let x = 10;

x += 5;  // x = 15 
x -= 3;  // x = 12
x *= 2;  // x = 24
x /= 4;  // x = 6
x %= 5;  // x = 1
x **= 3; // x = 1

console.log(x); // Resultado final: 1

//💡 Observação
//Esses operadores são muito usados em operações matemáticas, loops e contadores,
// pois simplificam expressões que alteram o valor de uma variável.
