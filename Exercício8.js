var altura = Number(prompt("Digite sua altura: "))
var peso = Number(prompt("Digite seu peso: "))

var imc = peso / (altura * altura)

alert("Seu IMC é: " + imc)

if (imc < 18.5) {
    alert("Abaixo do peso")
}

else if (imc >= 18.5 && imc <= 24.9) {
    alert("Peso normal")
}

else {
    alert ("Sobrepeso")
}