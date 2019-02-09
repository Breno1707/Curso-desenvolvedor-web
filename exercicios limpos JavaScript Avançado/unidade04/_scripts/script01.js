function atribuirTexto(){
    nome.value = "Breno";
}

function iniciar(){
    botao.addEventListener("click",atribuirTexto);
}

window.onload = iniciar;