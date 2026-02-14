// Exercícios com filter - Números pares e múltiplos
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrando números pares
const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(`Números pares: ${numerosPares}.`);    

// Filtrando múltiplos de 3 maiores ou iguais a 5
const numeroMultiploDe3 = numeros.filter(numero => numero % 3 === 0 && numero >= 5);
console.log(`Números múltiplos de 3: ${numeroMultiploDe3}.`);