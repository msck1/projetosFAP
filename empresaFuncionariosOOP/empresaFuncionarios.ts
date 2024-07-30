const readlineSync = require ('readline-sync')

// classe empresa
class empresa {

    nome:string[];
    presidente:string[];

    constructor(nome:string[],presidente:string[]) {

        this.nome = nome;
        this.presidente = presidente;
        
    }
}

// classe funcionario
class funcionario {

    nome:string[];
    idade:number[];
    empresa:string[];

    constructor(nome:string[],idade:number[],empresa:string[]) {

        this.nome = nome;
        this.idade = idade;
        this.empresa = empresa;
        
    }
}

function adicionarEmpresa() {
    
    let empresaNome = readlineSync.question("Digite o nome da empresa: ")

    let presidenteNome = readlineSync.question("Digite o nome do presidente: ")

    new empresa([empresaNome],[presidenteNome])

}



let funcionarioNome = readlineSync.question("Digite o nome do funcionario: ")

let funcionarioIdade = readlineSync.questionInt("Digite a idade do funcionario: ")

let funcionarioEmpresa = readlineSync.question("Digite o nome da empresa: ")

const funcionarioClaro = new funcionario([funcionarioNome],[funcionarioIdade],[funcionarioEmpresa])



console.log(funcionarioClaro.empresa,funcionarioClaro.nome,funcionarioClaro.idade)
