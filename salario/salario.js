const prompt = require('prompt-sync')({ sigint: true });

const ganhoHora = Number(prompt("Quanto você ganha por hora: "));

const horasTrabalhadas = Number(prompt("Quantas horas você trabalha por mês ?"))

const salarioMes = ganhoHora * horasTrabalhadas;

console.log(`Você ganha ${salarioMes} reais por mês`)