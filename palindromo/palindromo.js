const testCase = ['ovo', 'A base do teto desaba', 'dois tigress tristes']
const test0 = "OvO";
const test1 = "A base DO teto desaba";
const test2 = "dois tigres tristes";

function convertArray(str){ // transforma string em array (caso entrada for string) e elimina espaços em branco e letras maiusculas
    let arr = typeof(str) === 'string' ? [str] : str
    console.log(arr)
    for (let i = 0; i < arr.length; i++){
        arr[i] = Array.from(arr[i].toLowerCase().replace(/ /g,""));
    }
    return arr
}
function isPalindromo(text){ // testa se a string é um palindromo
    text = convertArray(text)
    let result = []
    for (let i = 0; i < text.length; i++){
        for (let x = 0; x < text[i].length; x++){ 
            result[i] = 'É um palindromo'
            if (text[i][text[i].length-1-x] !== text[i][x]){ 
                result[i] = 'Não é um palindromo'
            }
        }
    }
    return result
}

console.log(isPalindromo(testCase))
