// Caso fique em dúvida durante a resolução do exercício, procurar pelas funções:
// arrays - foreach, filter, find, splice / string - split, length, charAt, match
// Pesquisar sobre essas funções pode ser um ponto de partida, não necessariamente elas
// são a solução dos desafios.

// 1. Faça uma função que recebe uma string como parâmetro e faça a contagem de
// vogais (a,e,i,o,u) e retorne esse número.
// Ex.:
// Entrada: “agua” 3
// Saída: “eu fiz o meu almoço hoje” 11


function ContarVogal(frase: string): number {
    let numeroVogal = 0
    let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

    for (let index = 0; index < frase.length; index++) {
        if (vogais.indexOf(frase[index]) != -1) {
            numeroVogal++;
        }
    }
    return numeroVogal
}

// 2. Faça uma função que recebe uma palavra como parâmetro, você deve retornar o
// caractere do meio dessa palavra. Se o comprimento da palavra for ímpar, retorne o
// caractere do meio. Se o comprimento for par retorne os dois caracteres do meio.
// Ex.:
// Entrada: “código” Saída:“di” 
//Entrada: “jogando” Saída:“a”

let index: number
function RetornarCaractere(palavra: string) {
    let caractere = palavra.split("")
    console.log(caractere)
    let metade: number = (palavra.length / 2)
    
    if (palavra.length % 2 != 0) {
        index = (metade - 0.5)
        console.log(palavra[index])

    } else if (palavra.length % 2 == 0) {
        index = (metade)
        console.log(palavra[index -1]+palavra[index])
    }
}


// 3. Faça uma função que receba um número qualquer inteiro e positivo como
// parâmetro. O objetivo é reorganizar os dígitos desse número em ordem decrescente,
// de maneira a formar o maior número possível e retornar esse número.
// Ex.:
// Entrada: 42145 Saída: 54421
// Entrada: 145263 Saída: 654321


function OrganizarNumero(numeros: number) {
    let numerosString = String(numeros)
    let numerosSeprados = numerosString.split("")

    numerosSeprados.sort()
    numerosSeprados.reverse()

    let concatenar: string = ("")
    for (let index = 0; index < numerosSeprados.length; index++) {
        concatenar = concatenar + numerosSeprados[index]

    }

    let numerosNumber = parseInt(concatenar)
    console.log(numerosNumber)
}