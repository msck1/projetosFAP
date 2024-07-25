//uma empresa varios funcionarios, funcionarios so trabalham para uma empresa
// funcionario tera empresa, cargo, nome, idade

const readlineSync = require ('readline-sync')

// objetos empresa e funcionario

const empresa = {

    nome: [],
    presidente: [],

}

const funcionario = {

    
    empresa: [],
    nome: [],
    cargo: [],
    idade:[]

}


let programa = true 

while (programa == true) {

console.log(`
======================
         MENU
1. CRUD de empresa
2. CRUD de funcionario
3. Sair do programa
======================
`)
    opcao = readlineSync.questionInt("Escolha sua opcao:")

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
opcaoempresa = readlineSync.questionInt("Escolha sua opcao:")
switch (opcaoempresa) {
    case 1:
    adicionarEmpresa();
        break;

    case 2:
    alterarEmpresa();
        break;

    case 3:
    excluirEmpresa();
        break;

    case 4:
    listarEmpresas();

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
opcaofuncionario = readlineSync.questionInt("Escolha sua opcao:")
switch (opcaofuncionario) {
    case 1:
        adicionarFuncionario();
        break;

    case 2:
        alterarFuncionario();
        break;

    case 3:
        excluirFuncionario();
        break;

    case 4:
        listarFuncionario();
        break;

    case 5:
        listarFuncionarioPorEmpresa();
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
};
// while termina aqui


// function empresas

function adicionarEmpresa() {
  
empresa.nome.push(readlineSync.question("Digite o nome da empresa:"))

empresa.presidente.push(readlineSync.question("Digite o nome do presidente:"))
    
}

function alterarEmpresa() {

    listarEmpresas()
    let empresaNomeTeste = readlineSync.question("Digite o nome da empresa que deseja alterar: ")
    let achaNomeEmpresa = empresa.nome.find(element => element === empresaNomeTeste)
    if (empresaNomeTeste === achaNomeEmpresa) {

        console.log("Deseja alterar o nome da empresa ou o presidente ?")
        let umDois = readlineSync.questionInt("Digite 1 para nome 2 para presidente")
            if (umDois == 1) {

                let empresaNomeNovo = readlineSync.question("Digite o novo nome da empresa: ")
                empresa.nome = empresaNomeNovo;
                console.log("Nome da empresa alterado com sucesso")

            } else if (umDois == 2) {
    
                let presidenteNomeNovo = readlineSync.question("Digite o novo nome do presidente: ")
                empresa.presidente = presidenteNomeNovo
                console.log("Presidente alterado com sucesso")
            }
        
    } else {

        console.log("Empresa nao encontrada")
        
    }   
}

function excluirEmpresa() {

    listarEmpresas()
    let empresaNomeTeste = readlineSync.question("Digite o nome da empresa que deseja alterar: ")
    let achaNomeEmpresa = empresa.nome.find(element => element === empresaNomeTeste)
    if (empresaNomeTeste === achaNomeEmpresa) {

        console.log("Deseja excluir o nome da empresa ou o presidente ?")
        let umDois = readlineSync.questionInt("Digite 1 para nome 2 para presidente")

        if (umDois == 1) {

            let index = readlineSync.question("Escolha o nome que deseja excluir: ");
            empresa.nome.splice(index, 1,)
            console.log("Nome excluida com sucesso")

        } else {
    
            let index = readlineSync.questionInt("Escolha a posição do presidente que deseja excluir: ");
            empresa.presidente.splice(index, 1,)
            console.log("Presidente excluido com sucesso")

        }
        
    } else {

        console.log("Empresa nao encontrada")
        
    }

    
}

function listarEmpresas() {

console.log(`As suas empresas sao:
${empresa.nome}
Os presidentes sao:
${empresa.presidente}
`)    
}

// function funcionarios

function adicionarFuncionario() {

    let empresaNome = readlineSync.question("Digite o nome da empresa para a qual o funcionário vai trabalhar: ");

    let achaNomeEmpresa = empresa.nome.find(element => element === empresaNome)

    if (empresaNome === achaNomeEmpresa) {

        funcionario.nome.push(readlineSync.question("Digite o nome do funcionário: "));

        funcionario.cargo.push(readlineSync.question("Digite o cargo do funcionário: "));

        funcionario.idade.push(readlineSync.questionInt("Digite a idade do funcionário: "));

        funcionario.empresa.push(achaNomeEmpresa)

    } else {
        
        console.log("Empresa nao existe")

    }
}

function listarFuncionario() {

    console.log(`Os funcionarios sao: 
    ${funcionario.nome} 
    Os seus cargos sao:
    ${funcionario.cargo}
    Trabalham nessa empresa:
    ${funcionario.empresa} 
    Tem
    ${funcionario.idade}
    Anos`)       
}
