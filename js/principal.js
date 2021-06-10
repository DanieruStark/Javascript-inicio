let pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let tdAltura = paciente.querySelector(".info-altura");
    let tdImc = paciente.querySelector(".info-imc");

    let peso = tdPeso.textContent;
    let altura = tdAltura.textContent;

    let pesoReal = true;
    let alturaReal = true;

    if (peso <= 0 || peso >= 1000) {
        pesoReal = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3) {
        alturaReal = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoReal && alturaReal) {
        let imc = peso / (altura * altura)
        tdImc.textContent = imc.toFixed(2);
    }
}

let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(e){
    e.preventDefault();
    let form = document.querySelector("#form-adiciona");

    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;

    let pacienteTr = document.createElement("tr");

    let nomeTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let gorduraTd = document.createElement("td");
    let imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

})
