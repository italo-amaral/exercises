var x = 0;
var array = Array();

function add_element_to_array(){
    array[x] = document.getElementById("text1").value;
    x++;
    document.getElementById("text1").value = "";
    console.log(array)
}

function display_array(){
    var e = "<hr/>";   
    for (var y=0; y<array.length; y++){
        e += (y+1) + "- " + array[y] + "<br/>";
    }
    document.getElementById("Result").innerHTML = e;
}

function testarOrdenada(wordUser){ //Testa se uma palavra é ordenada e retorna "O" ou "N"
    var teste1 = Array.from(wordUser.toUpperCase())
    var teste3 = teste1.map(x => x).sort()
    let cont = 0
    for (var i = 0; i < teste1.length; i++){
        if (teste1[i] === teste3[i]){
            cont += 0
        } else {
            cont += 1
        }
    }
    if (cont === 0){
        return wordUser + ": O"
    } else {
        return wordUser + ": N"
    }
}

function testarArray(array){ //testa todos os itens da array fornecida pelo usuario na função testarOrdenada
    let text = ""
    for (let i=0;i < array.length; i++) {
        text += (i + 1) + "- " + testarOrdenada(array[i]) + "<br>"
    }
    document.getElementById("result").innerHTML = text
}

