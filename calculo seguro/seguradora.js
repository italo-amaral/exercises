
function calculoCobertura(){
    const idade = document.getElementById("age").value;
    const sexo = Array.from(document.getElementsByName("sex")).find(
        (r) => r.checked
    ).value;
    const tpCobertura = Array.from(document.getElementsByName("cobertura")).find(
        (r) => r.checked
    ).value;
    valorCobertura = (tpCobertura == "Parcial") ? 500 : 800;
        if (sexo == "Feminino" && idade <= 54){
            result = (valorCobertura * 0.95);
        }
        else if (sexo == "Masculino" && idade <= 24){
            result = (valorCobertura * 1.07);
        }
        else if (idade >= 56){
            result = (valorCobertura * 1.09);
        }
        else {
            result = valorCobertura;
        }
    document.getElementById("resultado").innerHTML = result
}
console.log(calculoCobertura())
