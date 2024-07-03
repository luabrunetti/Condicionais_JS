var danoSofrido = Number(prompt("Digite o valor do dano sofrido: "))
var danoTotal = danoSofrido - 100

if (danoTotal <= 0) {
    alert("Game Over");
}

else if (danoTotal >= 1 && danoTotal <= 20) {
    alert("Dano Crítico, quase sem vida");
}

else if (danoTotal >= 21 && danoTotal <= 50) {
    alert("Dano Moderado, vida estável");
}

else if (danoTotal >= 51 && danoTotal <= 100) {
    alert("Dano Leve, vida boa");
}
