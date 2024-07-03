var moeda = String(prompt("Digite o resultado da moeda (cara ou coroa): "));
var dado = Number(prompt("Digite o número que saiu no dado: "));

if (moeda == "cara") {
    alert("Você perdeu sua vez!");
}
else {
    alert("Avance " + dado + " casas no tabuleiro!");
}
