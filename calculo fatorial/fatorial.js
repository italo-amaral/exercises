function calcFatorial() {
    let N = document.getElementById("numberF").valueAsNumber;
    let X = 1;
    if (N>=0 && N<=12) {
        for (let i = 1; i <= N; i++) {
            X *= i
        }
        result = "The factorial of " + N + " is " + X
    }
    else{
        result = "The number entered is out of range";
    }
    document.getElementById("factorial").innerHTML = result
}

