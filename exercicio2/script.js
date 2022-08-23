// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.
function soma(num1, num2) {
    let resultado = num1 + num2
    console.log(resultado)
}

soma(3,4)

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
function maiorOuIgual(num1, num2) {
    if(num1 >= num2){
        console.log('o número 1 é maior ou igual ao número 2');
    } else {
        console.log('o número 1 não é maior ou igual ao número 2.');
    }
}

maiorOuIgual(9,7)

// c) Uma função que receba um número e imprima se ele é par ou não
function par(num1) {
    if(num1 % 2 == 0) {
        console.log('o número é par')
    } else {
        console.log('o número não é par');
    }
}

par(21)

// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.
function mensagem(param1) {
    let frase = param1
    console.log('quantidade de caracteres:', frase.length)
    console.log(frase.toUpperCase())
}

mensagem('só quero aprender react')