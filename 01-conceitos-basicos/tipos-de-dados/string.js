const estudante = "Kauã Mendes";
const senha = 'senhaSegura123';
const matricula = `20240012345`;
const docente = 'Juliana Amoasei';
const cumprimento = `Olá, ${estudante}! Seja bem-vindo ao curso de JavaScript com a ${docente}.`;
console.log(cumprimento);
 
console.log('Sua matrícula é: ' + matricula);
console.log(`O nome do estudante em minúsculas é: ${estudante.toLowerCase()}`);
//toLowerCase deixa todas as letras minusculas
console.log(`Sua senha é: ${senha.toUpperCase()}`);
//colocar toUpperCase deixa todas as letras maiusculas e poder ser uma boa pratica para senhas, pois mantem uma padronizacao
console.log('A senha tem ' + senha.length + ' caracteres.');
console.log(`A matrícula tem ${matricula.length} caracteres.`);
console.log(`A primeira letra do nome do estudante é: ${estudante.charAt(0)}`);
//charAt(0) mostra a letra que esta na posicao 0, ou seja a primeira letra

//Funções de conversão para String
//esta função converte qualquer outro tipo de dado em um tipo String.
String(100); // retorna '100'
String(2); // retorna '2'
String(undefined); // retorna 'undefined'
String(true); // retorna 'true'

console.log(`A última letra do nome do docente é: ${docente.charAt(docente.length - 1)}`);
//docente.length -1 mostra a ultima letra, pois o length conta a partir de 1 e o charAt conta a partir de 0
//Uma string pode ser tratada como um array de caracteres, onde cada caractere tem um índice baseado em zero.

console.log(`O nome do estudante dividido em caracteres: ${estudante.split('')}`);
//split('') divide a string em um array de caracteres individuais
console.log(`O nome do docente dividido em palavras: ${docente.split(' ')}`);
//split(' ') divide a string em um array de palavras, usando o espaço como separador


//Unicode e Conjuntos de Caracteres

//Para que o computador consiga decifrar caracteres especiais, é preciso utilizar um sistema específico que tenha basicamente um código para cada caractere. O computador precisa acessar esse sistema para fazer a conversão - uma ideia similar a que está por trás da criptografia.

//Foram desenvolvidos diversos conjuntos de caracteres, desde os específicos de cada linguagem como Western, Latin-US, Japanese e assim por diante, até o ASCII (American Standard Code for Information Interchange ou ”Código Padrão Americano para o Intercâmbio de Informação”). Só a partir de 2007 foi adotado o formato Unicode.
console.log('');
console.log('Unicode e Conjuntos de Caracteres:');
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//Os caracteres \u no início do código são caracteres de escape que usamos para sinalizar ao JavaScript de que estamos falando de códigos Unicode, e não de strings de texto usuais.

