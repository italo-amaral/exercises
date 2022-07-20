function fahrenheitCelsius() {
    var temp = document.getElementById("temp").value;
    document.getElementById("calculo").innerHTML = (temp + "°F equivalem a " + (5 * (temp - 32) / 9).toFixed(0) + "°C")
}    
function celsiusFahrenheit() {
    var temp = document.getElementById("temp").value;
    document.getElementById("calculo2").innerHTML = (temp + "°C equivalem a " +((temp * 9 / 5) + 32).toFixed(0) + "°F")
    }   


