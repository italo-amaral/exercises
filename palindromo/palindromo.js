const testeCase = ['ovo', 'A base do teto desaba', 'dois tigres tristes']
const teste0 = "OvO";
const teste1 = "A base DO teto desaba";
const teste2 = "dois tigres tristes";
const teste3 = "A base Da teto desaba";

function convertArray(arr){ // elimina espaços em branco e letras maiusculas
    if (arr instanceof Object){
        for (let i = 0; i < arr.length; i++){
            arr[i] = Array.from(arr[i].toLowerCase().replace(/ /g,""));
        }
    }else{
        arr = Array.from(arr.toLowerCase().replace(/ /g,""));
    }
    return arr
}

function isPalindromo(text){
    text = convertArray(text)
    let arrayReverso = [];
    for (let x = 0; x < text.length; x++){ 
        arrayReverso.push(text[x]); //cria uma arrayReverso com os itens da array original de trás pra frente
        if (text[text.length-1-x] !== arrayReverso[x]){ 
            return 'não é um palindromo'
        }
    }
    return "É um palindromo"
    }
    
console.log(isPalindromo(teste3))
