// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
// function olaMundo() {
//     let nome = prompt('digite aqui seu nome')
//     console.log(`olá ${nome}`)
// }
// olaMundo()

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.
// function tabuada(num1) {
//     for(i=1;i<=10;i++){
//         let mult;
//         mult = num1 * i
//         console.log(mult)
//     }
// }

// tabuada(6)

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__
const olaMundo = () => {
    let nome = prompt('digite aqui seu nome')
    console.log(`olá ${nome}`)
}
olaMundo()

///////////////////////////////////////////

const tabuada = (num1) => {
    for (i = 1; i <= 10; i++) {
        let mult;
        mult = num1 * i
        console.log(mult)
    }

}
tabuada(6)