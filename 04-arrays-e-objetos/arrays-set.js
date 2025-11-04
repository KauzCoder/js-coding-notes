// Exercício de manipulação de arrays com Set - Cores únicas
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

// Unindo as cores e removendo duplicatas usando Set
const coresUnidas = [...new Set(coresLista1.concat(coresLista2))];
console.log(`As cores unidas das duas listas são: ${coresUnidas}.`);