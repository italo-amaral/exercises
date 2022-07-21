var teste0 = "OvO";
var teste1 = "A base DO teto desaba";
var teste2 = "dois tigres tristes";
function testarPalindromo(text){
    var array = Array.from(text.toLowerCase().replace(/ /g,"")); // elimina espaços em branco e letras maiusculas
    var arrayReverso = [];
    for (let i = array.length - 1; i >= 0; i--){ //cria uma arrayReverso com os itens da array original de trás pra frente
        arrayReverso.push(array[i]); 
    }
    var count = 0;
    for (let x = 0; x < array.length; x++){ //testa se os itens das duas arrays são iguais, através de um contador
        if (array[x] === arrayReverso[x]) { //se count += 1 -> não é palindromo
            count += 0
        }
        else{
            count += 1
        }
    }
    if (count === 0){ 
        return "É um palindromo"
    }
    else{
        return "Não é um palindromo"
    }
}
console.log(testarPalindromo(teste0))
console.log(testarPalindromo(teste1))
console.log(testarPalindromo(teste2))
