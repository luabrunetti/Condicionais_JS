var fruta1 = String(prompt("Digite a primeira fruta: "));
var fruta2 = String(prompt("Digite a segunda fruta: "));
var fruta3 = String(prompt("Digite a terceira fruta: "));

var valor = 0;

switch(fruta1 + " - " + fruta2 + " - " + fruta3) {
    case "CEREJA - CEREJA - CEREJA":
        valor = 100;
        break;
    case "LARANJA - LARANJA - LARANJA":
        valor = 80;
        break;
    case "CEREJA - LARANJA - CEREJA":
        valor = 50;
        break;
    case "LARANJA - CEREJA - LARANJA":
        valor = 25;
        break;
    default:
        valor = 0;
        break;
}

alert("O valor ganho é de R$" + valor);