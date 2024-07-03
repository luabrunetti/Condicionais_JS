var salario = Number(prompt("Digite o seu salário: "))
var anosServico = Number(prompt("Digite a quantidade de anos de serviço: "))

if (anosServico > 5) {
    var novoSalario = salario * 1.05
    alert("Seu novo salário com bônus é: " + novoSalario)
}

else {
    alert("Seu salário é o mesmo: " + salario)
}
