var Populacao = Number(prompt("Digite a população da região: "))
var Area = Number(prompt("Digite a área da região em quilômetros quadrados: "))

var Densidade = Populacao / Area

if (Densidade >= 100) {
    alert("Densidade alta!")
}

else if (Densidade >= 25 && Densidade < 100) {
    alert("Densidade média!")
}

else {
    alert("Densidade baixa!")
}
