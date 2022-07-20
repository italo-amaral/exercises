function game(){
    let firstPlayer = [];
        firstPlayer.push(document.getElementById("P1-0").valueAsNumber)
        firstPlayer.push(document.getElementById("P1-1").valueAsNumber)
        firstPlayer.push(document.getElementById("P1-2").valueAsNumber)
        firstPlayer.push(document.getElementById("P1-3").valueAsNumber)
        firstPlayer.push(document.getElementById("P1-4").valueAsNumber)
        firstPlayer.push(document.getElementById("P1-5").valueAsNumber)
    let secondPlayer = [];
        secondPlayer.push(document.getElementById("P2-0").valueAsNumber)
        secondPlayer.push(document.getElementById("P2-1").valueAsNumber)
        secondPlayer.push(document.getElementById("P2-2").valueAsNumber)
        secondPlayer.push(document.getElementById("P2-3").valueAsNumber)
        secondPlayer.push(document.getElementById("P2-4").valueAsNumber)
        secondPlayer.push(document.getElementById("P2-5").valueAsNumber)
    let P1 = 0
    let P2 = 0
    for (let i = 0; i < firstPlayer.length; i++){
        if ((firstPlayer[i] + secondPlayer[i]) % 2 == 0){
            P1 += 1;
        }
        else{
            P2 += 1;
        }
    }
    if (P1 > P2){
        result = "First Player WIN"
    }
    else if (P1 < P2){
        result = "Second Player WIN"
    }
    else{
        result = "Matched Game"
    }
    document.getElementById("gameResult").innerHTML = result
}


