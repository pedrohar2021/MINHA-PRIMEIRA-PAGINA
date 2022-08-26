// troca

const elementoCamisa = document.querySelector("#camisa");
const elementoImg = document.querySelector("#imagem");
let elementoBtn = document.querySelector("#proximo");

elementoBtn.addEventListener("click", () => {
    if (elementoBtn.value == "primeiro") {
      elementoImg.src ="./assets/img/camisa2.jpg";
      elementoCamisa.innerText = "2- Branca";
      elementoBtn.value = "segundo";
    } else if (elementoBtn.value == "segundo") {
      elementoImg.src ="./assets/img/camisa3.jpg";
      elementoCamisa.innerText = "3- Preta";
      elementoBtn.value = "terceiro";
    } else {
      elementoImg.src ="./assets/img/camisa1.jpg";
      elementoCamisa.innerText = "1- Preta e Branca";
      elementoBtn.value = "primeiro";
    }
  });



// Validação do form

const inputNome = document.querySelector('#nome')
const inputEmail = document.querySelector('#email')
const labelNome = document.querySelector('#labelNome')
const labelEmail = document.querySelector('#labelEmail')
let camposOk = false
const buttonEnviar = document.querySelector('#buttonEnviar')

inputNome.addEventListener('keyup', ()=>{
    if (inputNome.value.length < 3) {
    labelNome.innerText = 'Nome (Digite um nome válido.)'
    labelNome.style.color = 'red'
    camposOk = false
    }else{
    labelNome.innerText = 'Nome'
    labelNome.style.color = 'black'
    camposOk = true
    }
    
    validaButton()
})

inputEmail.addEventListener('keyup', ()=>{ 
    if (inputEmail.value.length == 0 || inputEmail.value.length < 5){
    labelEmail.innerText = 'Email (Digite um e-mail válido.)'
    labelEmail.style.color = 'red'
    camposOk = false 
    }else{
    labelEmail.innerText = 'Email'
    labelEmail.style.color = 'black'
    camposOk = true
    }
    
    validaButton()  
})

const validaButton = () => {
if (camposOk == false){
buttonEnviar.setAttribute('disabled', 'disabled')
buttonEnviar.classList.add('buttonDisable')
}else{
buttonEnviar.removeAttribute('disable', 'disabled')
buttonEnviar.classList.remove('buttonDisable')
}
}
validaButton()

enviarForm = () => {
alert("Formulário Enviado")
}