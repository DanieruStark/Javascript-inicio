let tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(e){
    if(e.target.tagName == 'TD'){
        e.target.parentNode.classList.add("fadeOut");

        setTimeout(function(){
            e.target.parentNode.remove();
        }, 500);

    }
});

