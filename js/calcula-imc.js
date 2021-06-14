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
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    let imc = 0;
    imc = peso / (altura * altura);
    
    return imc.toFixed(2);
}