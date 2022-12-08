const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');
var nome = document.querySelector('#name');
var email = document.querySelector('#email');
var fone = document.querySelector('#numero');
var senha = document.querySelector('#senha');
var area = document.querySelector('#area');
const texto = document.querySelector('#texto_modal');
const texto_modal_body = document.querySelector("#texto_modal_body");

function modal_open(e){


    console.log(nome);
    if(nome.value == "" || email.value == "" || fone.value == "" || senha.value == "" || area.value == ""){
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

//expandir

    var secao = document.querySelector('.cursos-op2') 
    var button = document.querySelector('.button-form') 
    
    button.addEventListener("click", expand);
    
    function expand() {
        console.log(secao, button);
        secao.style.display = "flex";
        button.style.display = "none"
    }


//mascara de fone

function mascara_fone() {
    let nfone = fone.value.length;
    console.log(nfone);
  
    if(nfone == 1){
      fone.value = `(${fone.value}`
    }else if(nfone == 3){
      fone.value += ") "
    }else if(nfone == 6){
      fone.value += " "
    }else if(nfone == 11){
      fone.value += "-"
    }
    
  }