var showUsers = "<hr/>";
function cadastroUsuario(){
    var user = [];
        user.nome = document.getElementById("nome").value;
        user.idade = document.getElementById("idade").value;
        user.email = document.getElementById("endEmail").value;
        user.cpf = document.getElementById("CPF").value;
            document.getElementById("nome").value = ""; //limpam a tela após clicar no botão "Cadastrar usuário"
            document.getElementById("idade").value = "";
            document.getElementById("endEmail").value = "";
            document.getElementById("CPF").value = "";
        showUsers += "Nome: " + user.nome + " / Idade: " + user.idade + " / Email: " + user.email + " / CPF: " + user.cpf + "<br/>";
}

function mostrarLista(){
    document.getElementById("result").innerHTML = showUsers
}
