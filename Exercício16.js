var lado1 = Number(prompt("Digite o primeiro lado do triângulo: "))
var lado2 = Number(prompt("Digite o segundo lado do triângulo: "))
var lado3 = Number(prompt("Digite o terceiro lado do triângulo: "))

if (lado1 == lado2 && lado2 == lado3) {
    alert("Triângulo equilátero")
}

else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    alert("Triângulo isósceles")
}

else {
    alert("Triângulo escaleno")
}
