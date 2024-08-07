//uma empresa varios funcionarios, funcionarios so trabalham para uma empresa
// funcionario tera empresa, cargo, nome, idade
// empresa tera nome da empresa, presidente

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

    console.log("Deseja atribuir um nome ou presidente a uma empresa existente ou adicionar uma empresa nova ?") 
    let opcaoAdicionar = readlineSync.questionInt("Digite 1 para nome, 2 para presidente, 3 para criar uma empresa nova")

    if (opcaoAdicionar == 1) {

        listarEmpresas()
        let index = readlineSync.questionInt("Escolha a posição da empresa à qual deseja adicionar o nome: ") - 1;
        let nomeNovo = readlineSync.question("Digite o novo nome da empresa: ");
        if (empresa.nome[index]) {
            empresa.nome.splice(index, 0, nomeNovo);
        } else {
            empresa.nome[index] = nomeNovo;
        }
        console.log("Nome adicionado com sucesso!")
        
    } else if (opcaoAdicionar == 2) {

        listarEmpresas();
        let index = readlineSync.questionInt("Escolha a posição da empresa à qual deseja adicionar o presidente: ") - 1;
        let presidenteNovo = readlineSync.question("Digite o nome do novo presidente: ");
        if (empresa.presidente[index]) {
            empresa.presidente.splice(index, 0, presidenteNovo);
        } else {
            empresa.presidente[index] = presidenteNovo;
        }
        console.log("Presidente adicionado com sucesso!")

    } else if (opcaoAdicionar == 3) {
 
        empresa.nome.push(readlineSync.question("Digite o nome da empresa:"))

        empresa.presidente.push(readlineSync.question("Digite o nome do presidente:"))

        console.log("Empresa adicionada com sucesso!")
    
    }
  
}

function alterarEmpresa() {

    listarEmpresas()
    console.log("Deseja alterar o nome da empresa ou o presidente ?")
    let opcaoAlterar = readlineSync.questionInt("Digite 1 para nome, 2 para presidente, 3 para alterar os dois")
    if (opcaoAlterar == 1) {

        let indexNome = readlineSync.questionInt("Escolha a posição do nome que deseja alterar: ") - 1;
        let valorNome = readlineSync.question("Digite o novo nome: ");
        empresa.nome.splice(indexNome, 1, valorNome)
        console.log("Nome alterado com sucesso")

    } else if (opcaoAlterar == 2) {

        let indexPresidente = readlineSync.questionInt("Escolha a posição do presidente que deseja alterar: ") - 1;
        let valorPresidente = readlineSync.question("Digite o novo presidente: ");
        empresa.presidente.splice(indexPresidente, 1, valorPresidente)
        console.log("Presidente alterado com sucesso")

    } else if (opcaoAlterar == 3) {

        let indexNomeNovo = readlineSync.questionInt("Digite a posicao do nome que deseja alterar: ") - 1;
        let valorNomeNovo = readlineSync.question("Digite o novo nome: ");
        empresa.nome.splice(indexNomeNovo, 1, valorNomeNovo)

        let indexPresidenteNovo = readlineSync.questionInt("Digite a posicao do presidente que deseja alterar: ") - 1;
        let valorPresidenteNovo = readlineSync.question("Digite o novo nome do presidente: ")
        empresa.presidente.splice(indexPresidenteNovo, 1, valorPresidenteNovo)

        console.log("Empresas alterado com sucesso!")

    }
}


function excluirEmpresa() {

    listarEmpresas()

        console.log("Deseja excluir o nome da empresa, o presidente ou excluir tudo ?")
        let opcaoExcluirEmpresa = readlineSync.questionInt("Digite 1 para nome, 2 para presidente, 3 para excluir tudo")

        if (opcaoExcluirEmpresa == 1) {

            let index = readlineSync.questionInt("Escolha a posicao do nome que deseja excluir: ") - 1;
            empresa.nome[index] = undefined;
            console.log("Nome excluida com sucesso")

        } else if (opcaoExcluirEmpresa == 2){
    
            let index = readlineSync.questionInt("Escolha a posição do presidente que deseja excluir: ") - 1;
            empresa.presidente[index] = undefined;
            console.log("Presidente excluido com sucesso")

        } else if (opcaoExcluirEmpresa == 3) {

            empresa.nome.splice(0,empresa.nome.length)
            empresa.presidente.splice(0,empresa.presidente.length)
            console.log("Tudo foi excluido com sucesso")

        }
        
     else {

        console.log("Empresa nao encontrada")

    }
}

function listarEmpresas() {

    if (empresa.nome.length <= 0) {

        console.log("Nenhum empresa cadastrada")

    } else {

        console.log("Lista de Empresas:");
        empresa.nome.forEach((nome , index) => {
            console.log(`\nEmpresa ${index + 1}:`);
            console.log(`Nome da empresa: ${nome !== undefined ? nome : "Indefinido"}`);
            console.log(`Presidente da empresa: ${empresa.presidente[index] !== undefined ? empresa.presidente[index] : "Indefinido"}`);
        });
    }
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

function alterarFuncionario() {


    console.log("Deseja alterar o nome, cargo, empresa ou idade do funcionario ?")
    let opcaoAlterarFuncionario = readlineSync.questionInt("Digite 1 para nome, 2 para cargo, 3 para empresa, 4 para idade, 5 para alterar tudo")
    switch (opcaoAlterarFuncionario) {
        case 1:

            listarFuncionario()
            let indexNome = readlineSync.questionInt("Escolha a posição do nome que deseja alterar: ") - 1;
            let valorNome = readlineSync.question("Digite o novo nome: ");
            funcionario.nome.splice(indexNome, 1, valorNome);
            console.log("Nome alterado com sucesso");
            
            break;
        case 2:

            listarFuncionario()
            let indexCargo = readlineSync.questionInt("Escolha a posição do cargo que deseja alterar: ") - 1;
            let valorCargo = readlineSync.question("Digite o novo cargo: ");
            funcionario.cargo.splice(indexCargo, 1, valorCargo);
            console.log("Cargo alterado com sucesso");

            break;
        case 3:

            listarFuncionario()
            let indexEmpresa = readlineSync.questionInt("Escolha a posição da empresa que deseja alterar: ") - 1;
            let valorEmpresa = readlineSync.question("Digite o nova empresa: ");
            funcionario.empresa.splice(indexEmpresa, 1, valorEmpresa);
            console.log("Empresa alterada com sucesso");

            break;
        case 4:

            listarFuncionario()
            let indexIdade = readlineSync.questionInt("Escolha a posição da idade que deseja alterar: ") - 1;
            let valorIdade = readlineSync.questionInt("Digite a nova idade : ");
            funcionario.idade.splice(indexIdade, 1, valorIdade);
            console.log("Idade alterada com sucesso");

            break;
        case 5:

            listarFuncionario()
            let indexNomeNovo = readlineSync.questionInt("Digite a posicao do nome novo: ") - 1;
            let valorNomeNovo = readlineSync.question("Digite o nome novo: ");
            funcionario.nome.splice(indexNomeNovo, 1, valorNomeNovo);

            let indexCargoNovo = readlineSync.questionInt("Digite a posicao do cargo novo") - 1;
            let valorCargoNovo = readlineSync.question("Digite o cargo novo: ");
            funcionario.cargo.splice(indexCargoNovo, 1, valorCargoNovo);

            let indexEmpresaNova = readlineSync.questionInt("Digite a posicao da empresa nova: ") - 1;
            let valorEmpresaNova = readlineSync.question("Digite a empresa nova: ");
            funcionario.empresa.splice(indexEmpresaNova, 1, valorEmpresaNova);

            let indexIdadeNova = readlineSync.questionInt("Digite a posicao da idade nova: ") - 1;
            let valorIdadeNova = readlineSync.questionInt("Digite a idade nova: ");
            funcionario.idade.splice(indexIdadeNova, 1, valorIdadeNova);

            console.log("Funcionario alterado com sucesso")

            break;
        default:

        console.log("Digite um valor valido");

            break;
    }
}

function excluirFuncionario() {

    console.log("Deseja excluir o nome, cargo, empresa ou idade do funcionario ?")
    let opcaoExcluirFuncionario = readlineSync.questionInt("Digite 1 para nome, 2 para cargo, 3 para empresa, 4 para idade, 5 para excluir tudo")
    switch (opcaoExcluirFuncionario) {
        case 1:

            listarFuncionario()
            let indexNome = readlineSync.questionInt("Escolha a posição do nome que deseja excluir: ") - 1;
            funcionario.nome[indexNome] = undefined;
            console.log("Nome excluido com sucesso")
            
            break;
        case 2:

            listarFuncionario()
            let indexCargo = readlineSync.questionInt("Escolha a posição do cargo que deseja excluir: ") - 1;
            funcionario.cargo[indexCargo] = undefined;
            console.log("Cargo excluido com sucesso")

            break;
        case 3:

            listarFuncionario()
            let indexEmpresa = readlineSync.questionInt("Escolha a posição da empresa que deseja excluir: ") - 1;
            funcionario.empresa[indexEmpresa] = undefined
            console.log("Empresa excluida com sucesso")

            break;
        case 4:

            listarFuncionario()
            let indexIdade = readlineSync.questionInt("Escolha a posição da idade que deseja excluir: ") - 1;
            funcionario.idade[indexIdade] = undefined;
            console.log("Idade excluida com sucesso")

            break;
        case 5:

            funcionario.nome.splice(0,funcionario.nome.length)
            funcionario.cargo.splice(0,funcionario.cargo.length)
            funcionario.empresa.splice(0,funcionario.empresa.length)
            funcionario.idade.splice(0,funcionario.idade.length)
            console.log("Tudo foi excluido com sucesso")

            break;
        default:

        console.log("Digite um valor valido")

            break;
    }
}

function listarFuncionario() {

    if (funcionario.nome.length <= 0) {

        console.log("Nenhum funcionario cadastrado")

    } else {

            console.log("Lista de Funcionários:");
            funcionario.nome.forEach((nome, index) => {
            console.log(`\nFuncionário ${index + 1}:`);
            console.log(`Nome: ${nome !== undefined ? nome : "Indefinido"}`);
            console.log(`Cargo: ${funcionario.cargo[index] !== undefined ? funcionario.cargo[index] : "Indefinido"}`);
            console.log(`Empresa: ${funcionario.empresa[index] !== undefined ? funcionario.empresa[index] : "Indefinido"}`);
            console.log(`Idade: ${funcionario.idade[index] !== undefined ? funcionario.idade[index] : "Indefinido"}`);

        });
    }
}


function listarFuncionarioPorEmpresa() {
    let empresaQuero = readlineSync.question("Digite a empresa que deseja achar todos os funcionarios: ");
    let achaNomeEmpresa = empresa.nome.find(element => element === empresaQuero);

    if (achaNomeEmpresa) {
        console.log(`Funcionários da ${achaNomeEmpresa}:`);

        if (funcionario.empresa === empresaQuero || funcionario.empresa.length <= 0) {
            console.log("Nenhum funcionario cadastrado nessa empresa")
        }
    
        for (let i = 0; i < funcionario.empresa.length; i++) {

            if (funcionario.empresa[i] === empresaQuero) {
                console.log(`Nome: ${funcionario.nome[i]}, Cargo: ${funcionario.cargo[i]}, Idade: ${funcionario.idade[i]}`);
            }  
        }
    } else {
        console.log("Empresa não encontrada.");
    }
}
