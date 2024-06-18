const prompt = require('prompt-sync')({ sigint: true });

let tipoQuarto = prompt("Escolha seu tipo de quarto, temos Standard, Luxo e Suíte: ");

const diaria = Number(prompt("Quantos dias deseja se hospedar ?"));

let valorDiaria;

let valorEstadia;

if (tipoQuarto == "Standard") {
    valorDiaria = 150
} else if (tipoQuarto == "Luxo") {
    valorDiaria = 350
} else if (tipoQuarto == "Suite") {
    valorDiaria = 500
}

valorEstadia = valorDiaria * diaria;

console.log(`Tipo de quarto: ${tipoQuarto}
Quantidade de diárias: ${diaria}
Valor total de estadia: ${valorEstadia} reais`)