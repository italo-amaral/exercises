
function tipoTriangulo(){
    const x = document.getElementById('side1').valueAsNumber;
    const y = document.getElementById('side2').valueAsNumber;
    const z = document.getElementById('side3').valueAsNumber;
console.log(x+y)
console.log(y+z)
console.log(z+x)
    if (x<y+z && y<x+z && z<x+y) {
        console.log("10")
        if (x==y && y==z){
            result = "Triangulo Equilatero";
        }
        else if (x==y || x==z || y==z){
            result = "Triangulo Isosceles";
        } 
        else {
            result = "Triangulo Escaleno";
        }
    }
    else {
        result = "Os comprimentos de x, y e z não podem formar um triangulo";
    }
    document.getElementById("resultado").innerHTML = result
}
