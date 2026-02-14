// PARTE 1: Arrays Básicos - Comparação e Manipulação Simples

// Exemplo com variáveis soltas vs array
const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;

const media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(media);

// Utilizando array simples
const notas1 = [10, 6.5, 8, 7.5];
const media1 = (notas1[0] + notas1[1] + notas1[2] + notas1[3]) / notas1.length;
console.log(media1);

// Utilizando array e loop
const notas2 = [10, 6.5, 8, 7.5];
let soma = 0;
for (let i = 0; i < notas2.length; i++) {
    soma += notas2[i];
}
const media2 = soma / notas2.length;
console.log(media2);

// PARTE 2: Métodos de Array (push, pop)

// Exemplo com push
const notas3 = [];
notas3.push(10);
notas3.push(6.5);
notas3.push(8);
notas3.push(7.5);
const media3 = (notas3[0] + notas3[1] + notas3[2] + notas3[3]) / notas3.length;
console.log(media3);

// Exemplo com push e pop
const jantarDeHoje = ['burguer', 'hot dog', 'pizza'];
jantarDeHoje.pop();
jantarDeHoje.pop();
jantarDeHoje.push('ovo frito');
jantarDeHoje.push('salada');
jantarDeHoje.push('maçã');
console.log(jantarDeHoje);

// Exemplo com pop e toFixed
const notas4 = [10, 6.5, 8, 7.5, 10];
notas4.pop();
const media4 = (notas4[0] + notas4[1] + notas4[2] + notas4[3]) / notas4.length;
console.log(media4.toFixed(2));

// PARTE 3: Valores Truthy e Falsy em Arrays

// Verificando elementos
const arrayVazio1 = [''];
const arrayVazio2 = [null];
const arrayVazio3 = [undefined];
const arrayVazio4 = [0];
const arrayVazio5 = [NaN];

console.log(Boolean(arrayVazio1[0])); // false - string vazia é "falsy"
console.log(Boolean(arrayVazio2[0])); // false - null é "falsy"
console.log(Boolean(arrayVazio3[0])); // false - undefined é "falsy"
console.log(Boolean(arrayVazio4[0])); // false - 0 é "falsy"

// Verificando arrays
const arrayVazio = [];
const arrayNaoVazio = [1, 2, 3];
const objetoVazio = {};

console.log(Boolean(objetoVazio));    // true - objetos são sempre "truthy"
console.log(Boolean(arrayVazio));     // true - arrays são sempre "truthy"
console.log(Boolean(arrayNaoVazio));  // true - arrays são sempre "truthy"

// PARTE 4: Métodos de Array (slice, splice, concat)

// Dividindo array com slice
const estudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = estudantes.slice(0, estudantes.length / 2);
const sala2 = estudantes.slice(estudantes.length / 2);

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);

// Atualizando elementos com splice
const listaEstudantes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia', 'Ana', 'Carlos'];
listaEstudantes.splice(1, 2, 'Joana', 'Eduarda');
console.log(listaEstudantes);

// Concatenando arrays
const salaA = ['João', 'Juliana', 'Caio'];
const salaB = ['Ana', 'Marjorie', 'Guilherme'];
const salaUnificada = salaA.concat(salaB);
console.log(salaUnificada);

// PARTE 5: Arrays Multidimensionais

const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const mediaDosAlunos = [10, 8, 7.5, 9];
const lista = [alunos, mediaDosAlunos];
console.log(`O aluno ${lista[0][1]} tem a média ${lista[1][1]}`);

// PARTE 6: Métodos de Busca (includes, indexOf)

function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`O aluno ${aluno} tem a média ${mediaAluno}`);
    }
}

// PARTE 7: Loops em Arrays (for...of, for...in, forEach)

// Com for...of
const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;
for (let nota of notas) {
   somaDasNotas += nota;
}
const mediaFinal = somaDasNotas / notas.length;
console.log(`A média final é ${mediaFinal}`);

// Com for...in (exemplo com objeto)
const pessoa = {
  nome: "Kauã",
  idade: 19,
  curso: "Ciência da Computação"
};
for (const chave in pessoa) {
  console.log(chave, "→", pessoa[chave]);
}

// Com forEach
const notasDoAluno = [10, 6.5, 8, 7.5];
let somaDasNotas1 = 0;
notasDoAluno.forEach(function(nota) {
  somaDasNotas1 += nota;
});
const mediaFinal1 = somaDasNotas1 / notasDoAluno.length;
console.log(`A média final é ${mediaFinal1}`);

// PARTE 8: Transformação de Arrays (map)

// Adicionando ponto extra
const notasOriginais = [10, 6.5, 8, 7.5];
const notasAtualizadas = notasOriginais.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);
console.log(notasAtualizadas);

// Padronizando strings
const nomes = ['Kauã', 'maria', 'João', 'ana', 'CARLOS'];
const nomesPadronizado = nomes.map((nome) => nome.toUpperCase());
console.log(nomesPadronizado);

// PARTE 9: Filtragem de Arrays (filter)

const alunosEscola = ["Enzo", "Kaleb", "Marcos", "Danilo"];
const mediasAlunosEscola = [5, 10, 8, 4];

const AlunosReprovados = alunosEscola.filter((aluno, indice) => {
  return mediasAlunosEscola[indice] < 7;
});

console.log(AlunosReprovados);