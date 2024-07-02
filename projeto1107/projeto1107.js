// Mudar mensagem de erro do readline-sync questionint para portugues
const readlineSync = require('readline-sync');

const array = []

function adicionartarefa() {

    array.push(readlineSync.question("Adicione uma tarefa: "));
    console.log("Tarefa adicionada com sucesso!" )

}

function alterartarefa() {

    listartarefas();
    let index = readlineSync.questionInt("Escolha a posição do valor que deseja alterar: ");
    let valor = readlineSync.question("Digite a nova tarefa: ");
    array.splice(index, 1,valor);
    console.log("Tarefa alterada com sucesso!")
    
}

function listartarefas() {

    console.log("As suas tarefas sao: ")
    console.log(array);
    
}

function excluirtarefa() {
    
    listartarefas();
    let index = readlineSync.questionInt("Escolha a posiçao do valor que deseja excluir: ");
    array.splice(index,1);
    console.log("Tarefa excluida com sucesso!")

}

let programa = true 

while (programa == true) {

console.log(`
======================
         MENU
1. Cadastras uma tarefa
2. Alterar uma tarefa
3. Excluir uma tarefa
4. Listar todas as tarefas
5. Sair do programa
======================
`)
    opcao = readlineSync.questionInt("Escolha sua opcao:")

        switch (opcao) {
            case 1:
                adicionartarefa();
                break;
            case 2:
                alterartarefa();
                break;
            case 3:
                excluirtarefa();
                break;
            case 4:
                listartarefas();
                break;
            case 5:
                programa = false;
                console.log("Programa finalizado")
                break;
            default:
                console.log("Insira um valor valido")
                break;
        }
}

    




