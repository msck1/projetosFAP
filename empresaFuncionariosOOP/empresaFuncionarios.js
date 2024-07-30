var readlineSync = require('readline-sync');
// classe empresa
var empresa = /** @class */ (function () {
    function empresa(nome, presidente) {
        this.nome = nome;
        this.presidente = presidente;
    }
    return empresa;
}());
// classe funcionario
var funcionario = /** @class */ (function () {
    function funcionario(nome, idade, empresa) {
        this.nome = nome;
        this.idade = idade;
        this.empresa = empresa;
    }
    return funcionario;
}());
function adicionarEmpresa() {
    var empresaNome = readlineSync.question("Digite o nome da empresa: ");
    var presidenteNome = readlineSync.question("Digite o nome do presidente: ");
    new empresa([empresaNome], [presidenteNome]);
}
adicionarEmpresa();
console.log(empresa);
