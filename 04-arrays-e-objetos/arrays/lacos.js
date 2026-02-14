// Laços e iterações com arrays e objetos

const gatosCasa = ['Theo', 'Felicia', 'Oliver', 'Cristal', 'Meggie', 'Neko', 'Felix', 'Fred'];

// for...of: percorre valores do array
for (let gato of gatosCasa) {
    console.log(gato);
}

// Função que exibe número do gato (índice + 1)
function exibeNumeroDoGato(gatosCasa) {
    for (let i = 0; i < gatosCasa.length; i++) {
        console.log(`O ${gatosCasa[i]} é o gato número ${i + 1} da casa.`);
    }
}

exibeNumeroDoGato(gatosCasa);

// Exemplo com soma e média usando for...of
const gastosMensaisCadaGato = [150, 200, 100, 250, 300, 180, 220, 160];

function calculaMediaGasto(gastosMensaisCadaGato) {
  let gastoTotal = 0;
  for (let gasto of gastosMensaisCadaGato) {
    gastoTotal += gasto;
  }

  const mediaGastoComGatos = gastoTotal / gastosMensaisCadaGato.length;
  console.log(`O gasto total mensal com os gatos é de R$${gastoTotal} e a média de gasto por gato é de R$${mediaGastoComGatos.toFixed(2)}.`);

  return { gastoTotal, mediaGastoComGatos };
}

calculaMediaGasto(gastosMensaisCadaGato);

// Encontrar menor e maior gasto (for com índice)
function exibeGatoComMenorEMaiorGasto(gastosMensaisCadaGato, gatosCasa) {
  let menorGasto = gastosMensaisCadaGato[0];
  let maiorGasto = gastosMensaisCadaGato[0];
  let gatoMenorGasto = gatosCasa[0];
  let gatoMaiorGasto = gatosCasa[0];

  for (let i = 0; i < gastosMensaisCadaGato.length; i++) {
    if (gastosMensaisCadaGato[i] < menorGasto) {
      menorGasto = gastosMensaisCadaGato[i];
      gatoMenorGasto = gatosCasa[i];
    }
    else if (gastosMensaisCadaGato[i] > maiorGasto) {
      maiorGasto = gastosMensaisCadaGato[i];
      gatoMaiorGasto = gatosCasa[i];
    }
  }

  console.log(`O gato que menos gasta é o ${gatoMenorGasto} com R$${menorGasto} e o que mais gasta é o ${gatoMaiorGasto} com R$${maiorGasto}.`);
}

exibeGatoComMenorEMaiorGasto(gastosMensaisCadaGato, gatosCasa);

// Exemplo de for...in para percorrer propriedades de objeto
const gato = {
  nome: 'Theo',
  idade: 6,
  raca: 'Não definida',
  cor: 'Cinza',
  peso: 12,
  dono: 'Kauã Mendes',
  familia_pertecente: 'Mendes'
};

console.log('DADOS DO GATO:');
for (let propriedade in gato) {
  console.log(`${propriedade}: ${gato[propriedade]}`);
}
