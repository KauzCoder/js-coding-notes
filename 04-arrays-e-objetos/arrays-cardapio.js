// Exercício de arrays e manipulação básica - Cardápio
const cardapioDoces = ["Brigadeiro", "Beijinho", "Pastel de Belem", "Pudim", "Brownie", "Orelha"];
const precosDoces = [5, 4.5, 6, 7, 8, 3.5];

// Função que exibe o cardápio numerado
function exibeDoces(cardapioDoces) {
    console.log(`Número do doce no cardápio:`);
    cardapioDoces.forEach(function(doce, i) {
        console.log(`${i} - ${doce}`);
    });
}

// Função que junta doces e preços
function juntaDocesEPrecos([...cardapioDoces], [...precosDoces]) {
    console.log(`Doces e seus respectivos preços:`);
    console.log(cardapioDoces, precosDoces); 
}

// Exemplo de uso
exibeDoces(cardapioDoces);
juntaDocesEPrecos(cardapioDoces, precosDoces);

// Cálculo do total usando reduce
const somaDosPrecos = precosDoces.reduce((acumlador, preco) => acumlador + preco, 0);
console.log(`A soma dos preços dos doces é de R$${somaDosPrecos.toFixed(2)}.`);