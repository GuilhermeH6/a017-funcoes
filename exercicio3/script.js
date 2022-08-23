// # Exercício 3

// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).
function soma(num1, num2) {
    let resultado = num1 + num2
    return resultado
}

///////////////////////////////////////////////

function subtrair(num1, num2) {
    let resultado = num1 - num2
    return resultado
}

//////////////////////////////////////////////

function multiplicar(num1, num2) {
    let resultado = num1 * num2
    return resultado
}

///////////////////////////////////////////////

function dividir(num1, num2) {
    let resultado = num1 / num2
    return resultado
}

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações
let num1 = +prompt('insira o primeiro numero')
let num2 = +prompt('insira o segundo numero')

console.log(soma(num1, num2))
console.log(subtrair(num1, num2))
console.log(multiplicar(num1, num2))
console.log(dividir(num1, num2))

