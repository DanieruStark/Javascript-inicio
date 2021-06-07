let paciente = document.querySelector("#primeiro-paciente");
let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");

let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso / (altura * altura);
let tdImc = paciente.querySelector(".info-imc");

let pesoReal = true;
let alturaReal = true;
if(peso <= 0 || peso >= 1000){
    pesoReal = false;
    tdImc.textContent = "Peso Inválido!";
}

if(altura <=0 || altura >= 3){
    alturaReal = false;
    tdImc.textContent = "Altura Inválida!";
}

if(pesoReal == true && alturaReal == true){
    tdImc.textContent = imc;
}