function calculoArea() {
    let raio = document.getElementById("raio").value;
    let area = (Math.PI * raio**2);
    let comprimento = (Math.PI * 2 * raio);
    let arame = comprimento * 5;
    let roloArame = Math.ceil(arame / 20);
        document.getElementById("demo").innerHTML = ("A área é de " +
            area.toFixed(2) + "m² e o comprimento é de " + comprimento.toFixed(2) +
            "m. <br> Para cercar está area serão necessários " + arame.toFixed(2) +
            "m de arame totalizando " + roloArame.toFixed(0) + " rolos de 20m cada.")
}
