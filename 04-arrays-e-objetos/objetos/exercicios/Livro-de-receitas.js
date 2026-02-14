const livroDeReceitas = {
    pagina1:{
        receita1: {
            nome: "Bolo de Chocolate",
            ingredientes: ["farinha", "açúcar", "ovos", "manteiga"],
            tempoDePreparo: "1 hora",
            dificuldade: "média"
        },
        receita2: {
            nome: "Salada de Frutas",
            ingredientes: ["maçã", "banana", "laranja", "uva"],
            tempoDePreparo: "15 minutos",
            dificuldade: "fácil"
        },
        receita3: {
            nome: "Lasagna",
            ingredientes: ["massa", "molho de tomate", "queijo", "carne moída"],
            tempoDePreparo: "2 horas",
            dificuldade: "difícil"
        }
    },

    pagina2:{
        receita1: {
            nome: "Pão de Queijo",
            ingredientes: ["polvilho", "queijo", "ovos", "leite"],
            tempoDePreparo: "30 minutos",
            dificuldade: "fácil"
        },  
        receita2: {
            nome: "Mousse de Maracujá",
            ingredientes: ["maracujá", "leite condensado", "creme de leite"],   
            tempoDePreparo: "20 minutos",
            dificuldade: "fácil"
        },  

        receita3: {
            nome: "Feijoada",
            ingredientes: ["feijão preto", "carne seca", "linguiça", "costelinha"],
            tempoDePreparo: "3 horas",
            dificuldade: "difícil"
        }
    }
};

function exibirReceita(livro, pagina, receita) {
    const receitaSelecionada = livro[pagina][receita];
    console.log("Nome da Receita: " + receitaSelecionada.nome);
    console.log("Ingredientes: " + receitaSelecionada.ingredientes.join(", "));
    console.log("Tempo de Preparo: " + receitaSelecionada.tempoDePreparo);
    console.log("Dificuldade: " + receitaSelecionada.dificuldade);
}

exibirReceita(livroDeReceitas, "pagina1", "receita2");