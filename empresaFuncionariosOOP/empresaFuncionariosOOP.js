var readlineSync = require('readline-sync');
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
        this.nome = [];
        this.idade = [];
        this.cargo = [];
        this.empresa = [];
        this.nome = nome;
        this.idade = idade;
        this.empresa = empresa;
        this.cargo = cargo;
    }
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
                        break;
                    case 3:
                        break;
                    case 4:
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
main();
