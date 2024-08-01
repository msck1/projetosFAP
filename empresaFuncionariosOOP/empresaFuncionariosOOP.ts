const readlineSync = require ('readline-sync')

// classe empresa
class Empresa {

    private _nome:string[] = [];
    private _presidente:string[] = [];

    constructor(nome:string[],presidente:string[]) {

        this._nome = nome;
        this._presidente = presidente;
        
    }

    public get nomes():string[] {
        return this._nome;
    }

    public set nomes(nomes: string[]) {
        this._nome = nomes;
    }

    public get presidentes():string[] {
        return this._presidente;
    }

    public set presidentes(presidentes:string[]) {
        this._presidente = presidentes;
    }

}

// classe funcionario
class Funcionario {

    nome:string[] = [];
    idade:number[] = [];
    cargo:string[] = [];
    empresa:string[] = [];

    constructor(nome:string[],idade:number[],empresa:string[],cargo:string[]) {

        this.nome = nome;
        this.idade = idade;
        this.empresa = empresa;
        this.cargo = cargo
        
    }
}

function main(): void {

const empresas: Empresa[] = [];
let programa = true;

while (programa == true) {

console.log(`
======================
         MENU
1. CRUD de empresa
2. CRUD de funcionario
3. Sair do programa
======================
`)
let opcao = readlineSync.questionInt("Escolha sua opcao:")
    
    switch (opcao) {
        case 1:
        
    console.log(`
======================
         MENU
1. Cadastrar uma empresa
2. Alterar uma empresa
3. Excluir uma empresa
4. Listar todas as empresas
5. Voltar
======================
`)
let opcaoempresa = readlineSync.questionInt("Escolha sua opcao:")

    switch (opcaoempresa) {
        case 1:
            const novaEmpresa = adicionarEmpresa();
            empresas.push(novaEmpresa);        
            break;
        case 2:

            break;
        case 3:
        
            break;
        case 4:
            if (empresas.length > 0) {
                empresas.forEach((empresa, index) => {
                    console.log(`\nEmpresa ${index + 1}:`);
                    listarEmpresa(empresa);
                });
            } else {
                console.log('Nenhuma empresa adicionada ainda.');
            }

            break;
        case 5:

            break;
        default:
    
        console.log("Insira um valor valido")
            break;
    }
//break do switch 1
break;
        case 2:
console.log(`
======================
         MENU
1. Cadastrar um funcionario
2. Alterar um funcionario
3. Excluir um funcionario
4. Listar todos os funcionarios
5. Listar funcionarios de determinada empresa
6. Voltar
======================
`)
let opcaofuncionario = readlineSync.questionInt("Escolha sua opcao:")
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
    
            console.log("Insira um valor valido")
            break;
    }
    // break do switch 2
    break;
        case 3:
            programa = false;
            console.log("Programa finalizado")
            break;
    
            default:
                console.log("Insira um valor valido")
            break;
        }
    }
}


function adicionarEmpresa(): Empresa {
    
    const empresaNome = readlineSync.question("Digite o nome da empresa: ")

    const presidenteNome = readlineSync.question("Digite o nome do presidente: ")

    console.log("Empresa adicionada com sucesso!")

    return new Empresa([empresaNome],[presidenteNome])

}

function listarEmpresa(empresa: Empresa): void {

    console.log(`Nome da empresa: ${empresa.nomes}`)
    console.log(`Presidente da empresa: ${empresa.presidentes}`)

}

function alterarEmpresa() {

    
    
}

main();