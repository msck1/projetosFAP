//uma empresa varios funcionarios, funcionarios so trabalham para uma empresa
// funcionario tera empresa, cargo, nome, idade

const readlineSync = require ('readline-sync')

// objetos empresa e funcionario

const empresa = {

    nome: [],
    presidente: [],

}

const funcionario = {

    empresa: "",
    cargo: "",
    nome: "",
    idade:""

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
    exlcluirEmpresa();
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
1. Cadastrar uma empresa
2. Alterar uma empresa
3. Excluir uma empresa
4. Listar todas as empresas
5. Voltar
======================
`)
opcaofuncionario = readlineSync.questionInt("Escolha sua opcao:")
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


function adicionarEmpresa() {
  
empresa.nome.push(readlineSync.question("Digite o nome da empresa:"))

empresa.presidente.push(readlineSync.question("Digite o nome do presidente:"))
    
}

function alterarEmpresa() {

    listarEmpresas()
    console.log("Deseja alterar o nome da empresa ou o presidente ?")
    let umDois = readlineSync.questionInt("Digite 1 para nome 2 para presidente")
    if (umDois == 1) {
        let index = readlineSync.questionInt("Escolha a posição do nome que deseja alterar: ");
        let valor = readlineSync.question("Digite o novo nome: ");
        empresa.nome.splice(index, 1, valor)
        console.log("Nome alterado com sucesso")
    } else {

        let index = readlineSync.questionInt("Escolha a posição do presidente que deseja alterar: ");
        let valor = readlineSync.question("Digite o novo presidente: ");
        empresa.presidente.splice(index, 1, valor)
        console.log("Presidente alterado com sucesso")
    }

}

function exlcluirEmpresa() {

    listarEmpresas()
    console.log("Deseja excluir o nome da empresa ou o presidente ?")
    let umDois = readlineSync.questionInt("Digite 1 para nome 2 para presidente")
    if (umDois == 1) {
        let index = readlineSync.questionInt("Escolha a posição do nome que deseja excluir: ");
        empresa.nome.splice(index, 1,)
        console.log("Nome excluida com sucesso")
    } else {

        let index = readlineSync.questionInt("Escolha a posição do presidente que deseja excluir: ");
        empresa.presidente.splice(index, 1,)
        console.log("Presidente alterado com sucesso")
    }

    
}

function listarEmpresas() {

console.log("As suas empresas sao:")
console.log(empresa.nome)
console.log(empresa.presidente)
    
}