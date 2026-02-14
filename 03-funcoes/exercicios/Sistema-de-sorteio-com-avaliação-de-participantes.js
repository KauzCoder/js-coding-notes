const participantes = [
    { nome: "Alice", idade: 25, avaliacao: 90 },
    { nome: "Bob", idade: 30, avaliacao: 70 },
    { nome: "Charlie", idade: 22, avaliacao: 42 },
    { nome: "Diana", idade: 28, avaliacao: 49 },
    { nome: "Eve", idade: 35, avaliacao: 100 }
];


function sortearParticipante(participantes) {
    console.log("Sorteando participante...");
    const indiceSorteado =  Math.floor(Math.random() * participantes.length)
    setTimeout(() => {
        console.log("Participante sorteado:", participantes[indiceSorteado].nome);
        console.log('Avaliação do participante sorteado:', participantes[indiceSorteado].avaliacao);
        if (participantes[indiceSorteado].avaliacao > 80) {
            console.log("Parabéns! Você foi selecionado para a próxima fase!");
        }
        else if(participantes[indiceSorteado].avaliacao >= 50 && participantes[indiceSorteado].avaliacao <= 80) {
            console.log("Você quase conseguiu! Fique de olho nos próximos sorteios.");
        }
        else if (participantes[indiceSorteado].avaliacao < 50) {
            console.log("Infelizmente, não foi desta vez. Continue se esforçando e tente novamente no próximo sorteio.");
        }
    }, 2000);
};

sortearParticipante(participantes);