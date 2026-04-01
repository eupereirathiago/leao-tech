//facça um programa que valide se uma pessoa pode dirigir, para isso ela precisa ter uma idade maior de 18 anos e precisa ter carteira de motorista.

// let idade =Number(prompt('digite sua idade:'))
// let cartaMotorista = confirm('é habilitado?')

// if(idade >= 18 && cartaMotorista == true){
//     alert('PODE DIRIGIR!')
// }else{
//     alert('NEGADO!')
// }

//FACA UM PROGRAMA QUE APLIQUE UM DESCONTO EM UM PRODUTO CASO A PESSOA SEJA ESTUDANTE OU UM PROFESSOR, SE FOR OUTRA PROFISSÃO COLOQUE O PREÇO NORMAL

// let profissao = prompt('Digite a profissão')

// if(profissao == 'estudante' || profissao == 'professor'){
//     alert('Ganhou desconto')
// }else{
//     alert('Não terá desconto!')
// }

//



// 1. Verificação de acesso ao cinema

// Crie um programa que receba a idade e se a pessoa tem ingresso. Ela só pode entrar se a idade for maior que 16 anos e tiver ingresso

// let idade = parseInt(prompt('digite sua idade:'))
// let ingresso = confirm('tem ingresso?')

// if(idade >=16 && ingresso){
//     alert('Permitido!')
// }else{
//     alert('NEGADO!')
// }

//

// 2. Validação de login
//         Crie um programa que peça o nome de usuário e a senha, se o nome de usuário for 'admin' e a senha for 'admin123' diga que ela conseguiu logar se ela errar uma das duas diga 'usuário não encontrado'


// 7.Liberação de empréstimo
// Receba salário, score e se é cliente antigo.
// Se salário ≥ 2000
// Dentro disso: aprova se score ≥ 700 ou (score ≥ 500 e cliente antigo)
// Senão: empréstimo negado 

let salario = parseInt(prompt('quanto recebe?'))
let score = parseInt(prompt('Score?'))
let tempoCliente

if(score >= 700){
    tempoCliente = 'otimo'
}else if(score >= 500){
    tempoCliente = 'regular'
}else{
    tempoCliente = 'ruim'
}

if(salario >= 2000 && (tempoCliente == 'otimo' || tempoCliente == 'regular')){
    alert('CREDITO APROVADO!')
}else{
    alert('CREDITO REPROVADO!')
}