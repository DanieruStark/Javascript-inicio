let botaoAdd = document.querySelector("#buscar-pacientes");

botaoAdd.addEventListener("click", function () {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        let resposta = xhr.responseText;
        let pacientes = JSON.parse(resposta);
        let erroAjax = document.querySelector("#erro-ajax");

        if(this.status == 200){
            erroAjax.classList.add("invisivel");
            pacientes.forEach(function (paciente) {
                addPacientesNaTable(paciente);
            });
        }else{
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
})