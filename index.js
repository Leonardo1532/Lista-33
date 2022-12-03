// Caso fique em dúvida durante a resolução do exercício, procurar pelas funções:
// arrays - foreach, filter, find, splice / string - split, length, charAt, match
// Pesquisar sobre essas funções pode ser um ponto de partida, não necessariamente elas
// são a solução dos desafios.
// 1. Faça uma função que recebe uma string como parâmetro e faça a contagem de
// vogais (a,e,i,o,u) e retorne esse número.
// Ex.:
// Entrada: “agua” 3
// Saída: “eu fiz o meu almoço hoje” 11
function ContarVogal(frase) {
    var numeroVogal = 0;
    var vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for (var index_1 = 0; index_1 < frase.length; index_1++) {
        if (vogais.indexOf(frase[index_1]) != -1) {
            numeroVogal++;
        }
    }
    return numeroVogal;
}
// 2. Faça uma função que recebe uma palavra como parâmetro, você deve retornar o
// caractere do meio dessa palavra. Se o comprimento da palavra for ímpar, retorne o
// caractere do meio. Se o comprimento for par retorne os dois caracteres do meio.
// Ex.:
// Entrada: “código” Saída:“di” 
//Entrada: “jogando” Saída:“a”
var index;
function RetornarCaractere(palavra) {
    var caractere = palavra.split("");
    var metade = (palavra.length / 2);
    if (palavra.length % 2 != 0) {
        index = (metade - 0.5);
        return palavra[index];
    }
    else if (palavra.length % 2 == 0) {
        index = (metade);
        var concatenar = palavra[index - 1] + palavra[index];
        return concatenar;
    }
}
// 3. Faça uma função que receba um número qualquer inteiro e positivo como
// parâmetro. O objetivo é reorganizar os dígitos desse número em ordem decrescente,
// de maneira a formar o maior número possível e retornar esse número.
// Ex.:
// Entrada: 42145 Saída: 54421
// Entrada: 145263 Saída: 654321
function OrganizarNumero(numeros) {
    var numerosString = String(numeros);
    var numerosSeprados = numerosString.split("");
    numerosSeprados.sort();
    numerosSeprados.reverse();
    var concatenar = ("");
    for (var index_2 = 0; index_2 < numerosSeprados.length; index_2++) {
        concatenar = concatenar + numerosSeprados[index_2];
    }
    var numerosNumber = parseInt(concatenar);
    return numerosNumber;
}
