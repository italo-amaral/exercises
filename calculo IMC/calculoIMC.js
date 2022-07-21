function IMC() {
    const peso = document.getElementById("dataVal").value;
    let genderS = Array.from(document.getElementsByName("genderS")).find(
      (r) => r.checked
    ).value;
    const altura = document.getElementById("alturaS").value;
    const imc = (peso / altura ** 2).toFixed(2);
    let result = ""
      if (genderS === "Feminino") {
        if (imc < 19.1) {
          result=" Abaixo do peso";
        } else if (imc >= 19.1 && imc < 25.8) {
          result=" Peso normal";
        } else if (imc >= 25.8 && imc < 27.3) {
          result=" Pouco acima do peso";
        } else if (imc >= 27.3 && imc < 32.3) {
          result=" Acima do peso ideal";
        } else {
          result="Obeso"
        }
      }
      if (genderS === "Masculino") {      
        if (imc < 20.7) {
            result=" Abaixo do peso";
          } else if (imc >= 20.7 && imc < 26.4) {
            result=" Peso normal";
          } else if (imc >= 26.4 && imc < 27.8) {
            result=" Pouco acima do peso";
          } else if (imc >= 27.8 && imc < 31.1) {
            result=" Acima do peso ideal";
          } else {
            result=" Obeso"
          }
        }    
        document.getElementById("resultado").innerHTML = result 
      }
  
