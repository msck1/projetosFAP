const prompt = require('prompt-sync')({ sigint: true });

const imovelTipo = prompt("Seu imóvel é uma casa ou apartamento ? ");

const imovelArea = Number(prompt("Informe a área do imóvel em metros quadrados: "));

const imovelValorMetroQuadrado = Number(prompt("Informe o valor do metro quadrado: "));

const valorAluguel = imovelArea * imovelValorMetroQuadrado;

console.log(`Dados do imóvel
${imovelTipo} - Área: ${imovelArea} m² - Valor do aluguel: ${valorAluguel}`);
