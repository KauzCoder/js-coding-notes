const cliente = {
    nome: "João",
    tipoDeAssinatura: "premium",
    idade: 30,
};

function processarPedido(nome, tipo, callback) {
    callback(nome, tipo);
}

processarPedido(cliente.nome, cliente.tipoDeAssinatura, (nome, tipo) => {
    console.log(`Processando pedido para ${nome}...`);
    
    setTimeout(() => {
        if (tipo === "premium") {
            console.log(`Pedido processado para ${nome} com assinatura premium.`);
        } else if (tipo === "básica") {
            console.log(`Pedido processado para ${nome} com assinatura básica.`);
        } else if (tipo === "gratuita") {
            console.log(`Pedido processado para ${nome} com assinatura gratuita.`);
        } else {
            console.log("Tipo de assinatura inválido.");
        }
    }, 2000);
});
