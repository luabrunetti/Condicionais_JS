var Cotação = Number(prompt("Digite a cotação do dólar: "))
var ValorReais = Valordolares * Cotação

if (Cotação > 5) {
    alert("O dólar está caro. A conversão para reais é: " + ValorReais + " reais")
}

else {
    alert("O dólar está barato. A conversão para reais é: " + ValorReais + " reais")
}
