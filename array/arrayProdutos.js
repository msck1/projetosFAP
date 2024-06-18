const prompt = require('prompt-sync')({ sigint: true });

const produtos = []

produtos.push(prompt("Digite um produto: "))

produtos.push(prompt("Digite mais um produto: "))

produtos.push(prompt("Digite mais um produto: "))

produtos.push(prompt("Digite mais um produto: "))

produtos.push(prompt("Digite um ultimo produto: "))

console.log(produtos)

// const prompt = require('prompt-sync')({ sigint: true });

// const input = prompt("Digite um produto separado por virgula: ")

// const array = input.split(",");

// console.log(array);
