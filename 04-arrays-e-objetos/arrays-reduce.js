// Exercício de reduce - Soma de array
const arr = [10, 20, 30, 40, 50];

function somaArray(arr) {
    return arr.reduce((acumulador, numero) => acumulador + numero, 0);
}

const somaTotal = somaArray(arr);
console.log(`A soma dos números do array é: ${somaTotal}.`);