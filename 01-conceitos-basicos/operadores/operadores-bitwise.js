/* Operadores Bitwise (Operadores de Bits) em JavaScript

Exemplo:
5 → 0101 (binário)
3 → 0011 (binário)

Operações bit a bit:

| Operador | Nome                  | Exemplo  | Resultado | Descrição |
|-----------|----------------------|-----------|------------|------------|
| &         | AND (E)              | 5 & 3     | 1 (0001)   | Retorna 1 apenas se ambos os bits forem 1. |
| \|        | OR (OU)              | 5 \| 3    | 7 (0111)   | Retorna 1 se pelo menos um dos bits for 1. |
| ^         | XOR (OU exclusivo)   | 5 ^ 3     | 6 (0110)   | Retorna 1 se os bits forem diferentes. |
| ~         | NOT (negação)        | ~5        | -6         | Inverte todos os bits (inclui sinal). |
| <<        | Shift à esquerda     | 5 << 1    | 10 (1010)  | Move os bits para a esquerda (multiplica por 2ⁿ). |
| >>        | Shift à direita      | 5 >> 1    | 2 (0010)   | Move os bits para a direita (divide por 2ⁿ e mantém o sinal). |
*/

console.log("\n=== Bitwise ===");
console.log(5 & 3); // 0101 & 0001 → 0001 → 1
console.log(5 | 3); // 0101 | 0001 → 0101 → 5
console.log(5 ^ 3); // 0101 ^ 0001 → 0100 → 4
console.log(~5);    // NOT → inverte bits → -6
console.log(5 << 1);// Desloca bits para a esquerda (×2) → 10
console.log(5 >> 1);// Desloca bits para a direita (÷2) → 2

//💡 Observação
//Basicamente, o operador bitwise trabalha com os bits que compõem os números inteiros, realizando operações lógicas em nível binário. Para  entender melhor recomenda-se estudar a representação binaria em tabela verdade, operações lógicas e analisar a tabela binária dos números envolvidos ajuda a entender como cada operador atua sobre os bits individuais, pois são conceitos fundamentais para compreender como os operadores bitwise funcionam. 

/* Esses operadores são muito usados em:
- Otimização de cálculos matemáticos
- Manipulação de cores, permissões e máscaras binárias
- Criptografia e compressão de dados */