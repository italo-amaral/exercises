const teste0 = "OvO";
const teste1 = "A base DO teto desaba";
const teste2 = "dois tigres tristes";

function convertArray(arr){
    arr = Array.from(arr.toLowerCase().replace(/ /g,"")); // elimina espaços em branco e letras maiusculas
    return arr
}

function isPalindromo(text){
    text = convertArray(text)
    let arrayReverso = [];
    for (let i = text.length - 1; i >= 0; i--){ //cria uma arrayReverso com os itens da array original de trás pra frente
        arrayReverso.push(text[i]); 
    }
    let count = 0;
    for (let x = 0; x < text.length; x++){ //testa se os itens das duas arrays são iguais, através de um contador
        if (text[x] === arrayReverso[x]) { //se count += 1 -> não é palindromo
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
console.log(isPalindromo(teste0))
console.log(isPalindromo(teste1))
console.log(isPalindromo(teste2))
