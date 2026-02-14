const potencia = 600
const horasPorDia = 6
const tipoDeConsumo = {
    baixo: 'Baixo',
    medio: 'Médio',
    alto: 'Alto'
}

const consumo = (potencia, horasPorDia) => (potencia * horasPorDia * 30) / 1000;
const classificacao = consumo => {
    if (consumo <= 50) return tipoDeConsumo.baixo;
    if (consumo > 50 && consumo <= 100) return tipoDeConsumo.medio;
    return tipoDeConsumo.alto;
}

const aparelho = {
    nome: 'Geladeira',
    potencia,
    horasPorDia,
    consumo: consumo(potencia, horasPorDia),
    classificacao: classificacao(consumo(potencia, horasPorDia))
}


function exibirInformacoes(aparelho) {
    console.log(`O consumo mensal do aparelho ${aparelho.nome} é de ${aparelho.consumo.toFixed(2)} kWh, classificado como ${aparelho.classificacao}.`);
}

exibirInformacoes(aparelho);