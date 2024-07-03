var salarioAnual = Number(prompt("Digite o seu salário anual: "))
var piso = Number(prompt("Digite o piso salarial mensal da sua categoria: "))

var salarioMensal = salarioAnual / 12

if (salarioMensal >= piso) {
    alert("O seu salário mensal é de: " + salarioMensal + " e você recebe acima do piso!")
}

else if (salarioMensal < piso) {
    alert("O seu salário mensal é de: " + salarioMensal + " e você recebe abaixo do piso!")
}

else {
    alert("O seu salário mensal é de: " + salarioMensal + " e você recebe exatamente igual ao piso!")
}
