const readline = require ('readline-sync');

let programa = true

while (programa == true) {

    const numerodia = readline.questionInt(`Digite um numero de 1 a 7 para saber o dia da semana
Digite 0 para sair do programa:`)

switch (numerodia) {
    case 1:
    console.log("O dia da semana é Domingo")
        
        break;
    case 2:
    console.log("O dia da semana é Segunda")

        break;
    case 3:
    console.log("O dia da semana é Terca-feira")

        break;
    case 4:
    console.log("O dia da semana é Quarta-feira")

        break;
    case 5:
    console.log("O dia da semana é Quinta-feira")

        break;
    case 6:
    console.log("O dia da semana é Sexta-feira")

        break;
    case 7:
    console.log("O dia da semana é Sabado")

        break;
    case 0:
    programa = false
    console.log("Saida efetuada com sucesso!")

        break;
    default:
    console.log("Digite um valor valido")

        break;
}
}

