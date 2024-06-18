const prompt = require('prompt-sync')({ sigint: true });

const metro = Number(prompt("Digite o valor em metros: "));

const centimetro = metro * 100

console.log(`${centimetro} Centímetros`);

