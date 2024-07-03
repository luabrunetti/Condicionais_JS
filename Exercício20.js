var nomeEquipe = String(prompt("Digite o nome da equipe:"))

var nomeIntegrante1 = String(prompt("Digite o nome do primeiro integrante:"))
var tempo1 = Number(prompt("Digite o tempo gasto pelo primeiro integrante:"))

var nomeIntegrante2 = String(prompt("Digite o nome do segundo integrante:"))
var tempo2 = Number(prompt("Digite o tempo gasto pelo segundo integrante:"))

var nomeIntegrante3 = String(prompt("Digite o nome do terceiro integrante:"))
var tempo3 = Number(prompt("Digite o tempo gasto pelo terceiro integrante:"))

var nomeIntegrante4 = String(prompt("Digite o nome do quarto integrante:"))
var tempo4 = Number(prompt("Digite o tempo gasto pelo quarto integrante:"))

var velocidadeMediaTrecho1 = (30 / tempo1).toFixed(2)
var velocidadeMediaTrecho2 = (45 / tempo2).toFixed(2)
var velocidadeMediaTrecho3 = (30 / tempo3).toFixed(2)
var velocidadeMediaTrecho4 = (35 / tempo4).toFixed(2)

var velocidadeMediaTotal = ((30 + 45 + 30 + 35) / (tempo1 + tempo2 + tempo3 + tempo4)).toFixed(2)

if (velocidadeMediaTotal < 15) {
    alert("Desempenho pode melhorar bastante!")
}

else if (velocidadeMediaTotal >= 15 && velocidadeMediaTotal <= 18) {
    alert("Desempenho bom, mas ainda pode melhorar!")
}

else {
    alert("Desempenho excelente. Parabéns!")
}

console.log(nomeEquipe + " - Trecho 1: " + velocidadeMediaTrecho1 + " km/h - Trecho 2: " + velocidadeMediaTrecho2 + " km/h - Trecho 3: " + velocidadeMediaTrecho3 + " km/h - Trecho 4: " + velocidadeMediaTrecho4 + " km/h - Velocidade média geral: " + velocidadeMediaTotal + " km/h")
