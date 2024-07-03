var idade = Number(prompt("Qual é a sua idade?"))
var tempoServiço = Number(prompt("Quantos anos de servíco?"))

if (idade >= 65 && tempoServiço >= 25) {
    alert("Pode se aposentar") }

else if (idade >= 60 && tempoServiço >= 30) {
    alert("Pode se aposentar") }

else {
    alert("Não pode se aposentar")
}
