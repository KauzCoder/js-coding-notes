// Exercícios de arrays com callbacks - forEach, find e manipulação
const gatosCasa = ['Mingau', 'Bolinha', 'Luna', 'Simba', 'Nina', 'Oliver', 'Chloe', 'Leo'];
const gatosCasaDoVizinho = ['Mia', 'Max', 'Loki', 'Bella', 'Charlie', 'Lucy', 'Jack', 'Daisy'];

// Exemplo de callback com find
function encontrarGato(nomeGato) {
    const todosGatos = gatosCasa.concat(gatosCasaDoVizinho);
    return todosGatos.find(gato => gato === nomeGato);
}

// Exemplo de callback com forEach
function multiplicarEExibir(numeros) {
    numeros.forEach((num, index) => {
        console.log(`O número na posição ${index} é ${num * 3}.`);
    });
}

// Demonstração das funções
const gatoEncontrado = encontrarGato("Mia");
console.log(`Gato achado: ${gatoEncontrado}.`);

const nums = [6, 9, 12, 15, 18, 21];
multiplicarEExibir(nums);