const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');
var nome = document.querySelector('#name');
var email = document.querySelector('#email');
var fone = document.querySelector('#numero');
var senha = document.querySelector('#senha');
var area = document.querySelector('#area');
const texto = document.querySelector('#texto_modal');
const texto_modal_body = document.querySelector("#texto_modal_body");

function modal_open(){
  let nome_obrig = document.querySelector('#obri-nome');
  let email_obrig = document.querySelector('#obri-email');
  let fone_obrig = document.querySelector('#obri-fone');
  let senha_obrig = document.querySelector('#obri-senha');

  nome_obrig.style.display = "none";
  email_obrig.style.display = "none";
  fone_obrig.style.display = "none";
  senha_obrig.style.display = "none";

    console.log(nome);
    if(nome.value == "" || email.value == "" || fone.value == "" || senha.value == "" || area.value == ""){
        if(nome.value == ""){
          nome_obrig.style.display = "block";
        }
        if(email.value == ""){
          email_obrig.style.display = "block";
        }
        if(fone.value == ""){
          fone_obrig.style.display = "block";
        }
        if(senha.value == ""){
          senha_obrig.style.display = "block";
        }
    }else{
        modal.style.display = "block";
        fade.style.display = "block";
        texto.innerHTML = "Olá, " + nome.value + "!";
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

  //apoiador

  function expandir(){
    modal.style.display = "block";
    fade.style.display = "block";
  }

  //carrossel

  let contador = 1;

  setInterval(function () {
    console.log( document.getElementById("slide" + contador));
    document.getElementById("slide" + contador).checked = true;
    contador++;
  
    if (contador > 2) {
      contador = 1;
    }
  }, 4000);
