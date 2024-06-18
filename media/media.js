const prompt = require('prompt-sync')({ sigint: true });

const nota1 = Number(prompt("Insira sua primeira nota: "));

const nota2 = Number(prompt("Insira sua segunda nota: "));

const nota3 = Number(prompt("Insira sua terceira nota: "))

const nota4 = Number(prompt("Insira sua quarta nota: "))

const media = (nota1 + nota2 + nota3 + nota4) / 4

console.log(media)

