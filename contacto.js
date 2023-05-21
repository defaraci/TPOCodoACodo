const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("formulario")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", funcion=>{
    funcion.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <3){
        warnings += "El nombre no es valido <br>"
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += "El email no es valido debe ser de la forma @*****.com<br>"
        entrar = true
    }
    if(mensaje.value.length < 16){
        warnings += "El mensaje debe contener minimo 16 caracteres.<br>"
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Perfecto. Tu mensaje fue enviado. Pronto nos contactaremos con Vos"
    }
})