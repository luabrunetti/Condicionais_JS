var nome = string (prompt("Qual é o seu nome?"))
var idade = Number (prompt("Qual é a sua idade?"))
var comorbidade = string (prompt("Possui alguma comorbidade?"))

if (idade >= 60 && comorbidade == "sim") {
    alert("Pode se vacinar")
}

else {
    alert("Não pode se vacinar")
}