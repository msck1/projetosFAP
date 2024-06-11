const prompt = require('prompt-sync')({sigint: true});


const nome = prompt('Qual o seu nome ?');

const telefone = prompt('Qual o seu telefone ?');

const peso = prompt('Qual o seu peso ?');

const altura = prompt('Qual a sual altura ?');

const imc = peso / (altura * altura);

const aguapordia = peso * 35 / 1000;

let nivelobesidade;

if (imc < 18.5){
    nivelobesidade = 'Abaixo do peso'

} else if (imc >= 18.5 && imc <= 24.9){
    nivelobesidade = 'Peso normal'

} else if (imc >= 25 && imc <= 29.9) {
    nivelobesidade = 'Sobrepeso'

} else if (imc >= 30 && imc <= 34.9) {
    nivelobesidade = 'Obesidade grau 1 (leve)'

} else if (imc >= 35 && imc <= 39.9) {
    nivelobesidade = 'Obesidade grau 2 (moderada)'

} else if (imc >= 40) {
    nivelobesidade = 'Obesidade grau 3 (mórbida)'

}

console.log(`Nome: ${nome}
Telefone: ${telefone}
Peso: ${peso}
Altura: ${altura}
IMC: ${imc}
Consumo de água diário: ${aguapordia} litros
Nível de obsesidade: ${nivelobesidade}

`);
