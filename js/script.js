const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');
var nome = document.querySelector('#name');
const texto = document.querySelector('#texto_modal');
const texto_modal_body = document.querySelector("#texto_modal_body");

function modal_open(){

    console.log(nome);
    if(nome.value == ""){
        modal.style.display = "block";
        fade.style.display = "block";  
        texto.innerHTML = "Digite seus dados no formulário";
        texto_modal_body.style.display = "none" 
    }else{
        modal.style.display = "block";
        fade.style.display = "block";
        texto.innerHTML = "Olá " + nome.value;
        texto_modal_body.style.display = "block" 

    }
}

function close_modal(){
    modal.style.display = "none";
    fade.style.display = "none";
}