// //um sistema pede ao usuario o preço de 5 produtos, armazene os valores em um array depois percorra o array e mostre a soma dos preços dos produtos, o produto mais caro e o mais barato.

// let precos = [];
// let preco = null;

// for(let i = 0 ; i < 5; i++){
//     preco = Number(prompt(`Digite o valor do ${i+1}`))
//     precos.push(preco)
// }

// let soma = 0;

// for(let i = 0; i <5; i++){
//     soma += precos[i]
// }
// console.log(`A soma dos valores é: ${soma}`)

// let min = precos[0]
// let max = precos[0]

// for(let i = 0 ; i<5; i++){
//     if(min > precos[i]){
//         min = precos[i]
//     }
//     if(max > precos[i]){
//         max = precos[i]
//     }
// }
// console.log(`O menor valor é: ${min}`)


//crie um sistema para cadastrar um lista de convidados, o usuario tera duas opções, CADASTRAR ou SAIR. depois d cadastrar os convidados cria um programa que peca para o usuario diigtar seu nome e veja se ele esta na lista de convidados, se estiver BOAS VINDAS se nao VOCE NAO FOI CONVIDADO.

let listaConvidados = [];
let opcao = null;
let convidado

while (opcao !== 3) {

    opcao = Number(prompt('DIGITE 1 -CADASTRAR CONVIDADO \nDIGITE 2 - VERIFICAR\nDIGITE 3 - SAIR'))

    switch (opcao) {

        case 1:
            convidado = prompt('Nome do convidado:').toLowerCase().trim()

            if (convidado === '') {
                console.log('Nome inválido')
                break;
            }

            if (listaConvidados.includes(convidado)) {
                console.log('Convidado já cadastrado')
                break;
            }

            listaConvidados.push(convidado)
            console.log(listaConvidados)
            break;

        case 2:
            convidado = prompt('Nome do convidado:').toLowerCase().trim()

            let encontrado = false;

            for(let i = 0; i < listaConvidados.length; i++){
                if(convidado === listaConvidados[i]){
                    encontrado = true;
                    break;
                }
            }

            if (encontrado) {
                console.log('PODE ENTRAR')
            } else {
                console.log('NEGADO')
            }
            break;

        case 3:
            //SAIR
            break;
        default:
            console.log('Opção inválida')
    }
}

