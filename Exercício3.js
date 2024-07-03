var numero1
var numero2

numero1 = Number(prompt("Digite um número!"))
numero2 = Number(prompt("Digite um número!"))

if (numero1 == numero2) {
    alert("Eles são iguais!")
}

else if (numero1 > numero2) {
    alert(numero1 + " é maior que " + numero2)
}

else {
    alert (numero2 + " é maior que " + numero1)
}