
function wordNumbers(){
    var word = document.getElementById("palavra").value
    var alphabet = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphabetToNumbers = [];
    var N = 0
    console.log(word)
    for (var i in word){
        alphabetToNumbers.push(alphabet.indexOf(word[i]))
        N += alphabetToNumbers[i]
    }
    console.log(alphabetToNumbers)
    console.log(N)
    var cont = 1;
    var contDiv = 0;
    while (cont < N) {
        if (N % cont == 0){
            contDiv += 1
        }
        cont = cont + 1
    }
    console.log(contDiv)
    if (contDiv >= 2){
        result = "It is not a prime word."
    } 
    else{
        result = "It is a prime word."
    }
    document.getElementById("result").innerHTML = result
}

