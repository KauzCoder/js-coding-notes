const computador = {
    placaMae: "ASUS Prime A320M-K/BR",
    processador: "AMD Ryzen 5 3300GE",
    armazenamento: ["SSD NVMe 500GB", "SSD SATA 500GB"],
    memoriaRAM: "16GB DDR4",
    fonteDeAlimentacao: "650W 80 Plus Bronze",
    tipoDeHardeDisk: ["SSD", "NVMe"],
    quantidadeDeArmazenamento: "1.5TB",
    cooler: "Cooler Master Hyper 212",
    placaDeVideo: "Nao possui",
    gabinete: "Gabinete Gamer",
    quantidadeDeVentoinhas: 3,
    modeloSistemaOperacional: "Windows 11"
}
function exibirEspecificacoes(computador) {
    for (let propriedade in computador) {
        console.log(`${propriedade}: ${computador[propriedade]}`);
    }
}

function atualizarEspecificacao(computador, especificacao, especificacaoNova) {
    computador[especificacao] = especificacaoNova;
    console.log(`Especificação "${especificacao}" atualizada para: ${especificacaoNova}`);
}

exibirEspecificacoes(computador);
atualizarEspecificacao(computador, "processador", "AMD Ryzen 5 5600GT");
exibirEspecificacoes(computador);
