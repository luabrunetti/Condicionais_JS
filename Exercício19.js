var nomePaciente = prompt("Digite o nome do paciente:").toUpperCase();

if (nomePaciente === null || nomePaciente === "") {
    alert("Nome inválido");
}

var celico = confirm("O paciente é celíaco?");

var lactose = confirm("O paciente é intolerante à lactose?");

var alimentos = [];

for (var i = 0; i < 3; i++) {
    var alimento = {};

    alimento.nome = prompt("Digite o nome do alimento:").toUpperCase();

    if (alimento.nome === null || alimento.nome === "") {
        alert("Nome inválido");
        i--;
        continue;
    }

    alimento.temGluten = confirm("O alimento contém glúten?");

    alimento.temLactose = confirm("O alimento contém lactose?");

    alimentos.push(alimento);
}

var podeComer = true;

for (var i = 0; i < alimentos.length; i++) {
    var alimento = alimentos[i];

    if ((celico && alimento.temGluten) || (lactose && alimento.temLactose)) {
        podeComer = false;
        break;
    }
}

if (podeComer) {
    alert("Dieta adequada!");
} else {
    alert("Dieta inadequada, contém alimentos aos quais o paciente é intolerante!");
}
