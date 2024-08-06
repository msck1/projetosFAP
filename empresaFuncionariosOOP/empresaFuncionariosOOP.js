"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// trocar por import * as readlineSync from 'readline-sync'
// classe empresa
var Empresa = /** @class */ (function () {
    function Empresa(nome, presidente) {
        this._nome = [];
        this._presidente = [];
        this._nome = nome;
        this._presidente = presidente;
    }
    Object.defineProperty(Empresa.prototype, "nomes", {
        get: function () {
            return this._nome;
        },
        set: function (nomes) {
            this._nome = nomes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "presidentes", {
        get: function () {
            return this._presidente;
        },
        set: function (presidentes) {
            this._presidente = presidentes;
        },
        enumerable: false,
        configurable: true
    });
    return Empresa;
}());
// classe funcionario
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, idade, empresa, cargo) {
        this._nome = [];
        this._idade = [];
        this._cargo = [];
        this._empresa = [];
        this._nome = nome;
        this._idade = idade;
        this._empresa = empresa;
        this._cargo = cargo;
    }
    Object.defineProperty(Funcionario.prototype, "nomes", {
        get: function () {
            return this._nome;
        },
        set: function (nomesFuncionario) {
            this._nome = nomesFuncionario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (idade) {
            this._idade = idade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "empresa", {
        get: function () {
            return this._empresa;
        },
        set: function (empresa) {
            this._empresa = empresa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "cargo", {
        get: function () {
            return this._cargo;
        },
        set: function (cargo) {
            this._cargo = cargo;
        },
        enumerable: false,
        configurable: true
    });
    return Funcionario;
}());
function main() {
    var empresas = [];
    var programa = true;
    while (programa == true) {
        console.log("\n======================\n         MENU\n1. CRUD de empresa\n2. CRUD de funcionario\n3. Sair do programa\n======================\n");
        var opcao = readlineSync.questionInt("Escolha sua opcao:");
        switch (opcao) {
            case 1:
                console.log("\n======================\n         MENU\n1. Cadastrar uma empresa\n2. Alterar uma empresa\n3. Excluir uma empresa\n4. Listar todas as empresas\n5. Voltar\n======================\n");
                var opcaoempresa = readlineSync.questionInt("Escolha sua opcao:");
                switch (opcaoempresa) {
                    case 1:
                        var novaEmpresa = adicionarEmpresa();
                        empresas.push(novaEmpresa);
                        break;
                    case 2:
                        if (empresas.length > 0) {
                            empresas.forEach(function (empresa, index) {
                                console.log("\nEmpresa ".concat(index + 1, ":"));
                                listarEmpresa(empresa);
                            });
                        }
                        else {
                            console.log('Nenhuma empresa adicionada ainda.');
                        }
                        var indexAlterar = readlineSync.questionInt("Digite a posicao do que deseja alterar: ") - 1;
                        alterarEmpresa(empresas[indexAlterar]);
                        break;
                    case 3:
                        if (empresas.length > 0) {
                            empresas.forEach(function (empresa, index) {
                                console.log("\nEmpresa ".concat(index + 1, ":"));
                                listarEmpresa(empresa);
                            });
                        }
                        else {
                            console.log('Nenhuma empresa adicionada ainda.');
                        }
                        var indexExcluir = readlineSync.questionInt("Digite a posicao do que deseja excluir: ") - 1;
                        excluirEmpresa(empresas[indexExcluir]);
                        break;
                    case 4:
                        if (empresas.length > 0) {
                            empresas.forEach(function (empresa, index) {
                                console.log("\nEmpresa ".concat(index + 1, ":"));
                                listarEmpresa(empresa);
                            });
                        }
                        else {
                            console.log('Nenhuma empresa adicionada ainda.');
                        }
                        break;
                    case 5:
                        break;
                    default:
                        console.log("Insira um valor valido");
                        break;
                }
                //break do switch 1
                break;
            case 2:
                console.log("\n======================\n         MENU\n1. Cadastrar um funcionario\n2. Alterar um funcionario\n3. Excluir um funcionario\n4. Listar todos os funcionarios\n5. Listar funcionarios de determinada empresa\n6. Voltar\n======================\n");
                var opcaofuncionario = readlineSync.questionInt("Escolha sua opcao:");
                switch (opcaofuncionario) {
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                    default:
                        console.log("Insira um valor valido");
                        break;
                }
                // break do switch 2
                break;
            case 3:
                programa = false;
                console.log("Programa finalizado");
                break;
            default:
                console.log("Insira um valor valido");
                break;
        }
    }
}
// functions empresa
function adicionarEmpresa() {
    var empresaNome = readlineSync.question("Digite o nome da empresa: ");
    var presidenteNome = readlineSync.question("Digite o nome do presidente: ");
    console.log("Empresa adicionada com sucesso!");
    return new Empresa([empresaNome], [presidenteNome]);
}
function listarEmpresa(empresa) {
    console.log("Nome da empresa: ".concat(empresa.nomes));
    console.log("Presidente da empresa: ".concat(empresa.presidentes));
}
function alterarEmpresa(empresa) {
    console.log("\n======================\n    ALTERAR EMPRESA\n1. Alterar nome\n2. Alterar presidente\n3. Alterar ambos\n======================\n");
    var opcaoAlteracao = readlineSync.questionInt("Escolha sua opcao:");
    switch (opcaoAlteracao) {
        case 1:
            var nomeNovo = readlineSync.question("Digite o novo nome da empresa: ");
            empresa.nomes = [nomeNovo];
            break;
        case 2:
            var presidenteNovo = readlineSync.question("Digite o novo nome do presidente: ");
            empresa.presidentes = [presidenteNovo];
            break;
        case 3:
            var novoNome = readlineSync.question("Digite o novo nome da empresa: ");
            var novoPresidente = readlineSync.question("Digite o novo nome do presidente: ");
            empresa.nomes = [novoNome];
            empresa.presidentes = [novoPresidente];
            break;
        default:
            console.log("Opcao invalida.");
            break;
    }
    console.log("Empresa alterada com sucesso!");
}
function excluirEmpresa(empresa) {
    console.log("\n======================\n    EXCLUIR EMPRESA\n1. Excluir nome\n2. Excluir presidente\n3. Excluir ambos\n======================\n");
    var opcaoExcluir = readlineSync.questionInt("Escolha sua opcao:");
    switch (opcaoExcluir) {
        case 1:
            var undefinedNome = "Indefinido";
            empresa.nomes = [undefinedNome];
            break;
        case 2:
            var undefinedPresidente = "Indefinido";
            empresa.presidentes = [undefinedPresidente];
            break;
        case 3:
            empresa.nomes.splice(0, empresa.nomes.length);
            empresa.presidentes.splice(0, empresa.presidentes.length);
            break;
        default:
            console.log("Opcao invalida.");
            break;
    }
    console.log("Empresa excluida com sucesso!");
}
main();
