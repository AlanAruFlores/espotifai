
import { Usuario } from "./usuario.js"
let usuario = document.getElementById ("usuario");
let mail = document.getElementById("mail");
let contrasenia  =document.getElementById("contrasenia");
let contrasenia2 = document.getElementById("contrasenia2");
let fecha = document.getElementById("fecha");



let regMail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

let enviar = document.getElementById("enviar");
enviar.addEventListener("click",EnviarForm);

function EnviarForm () {
	var validar = true;
	if (!usuario.value || (usuario.value.length <4 || usuario.value.length>8)) {
        let label = document.getElementById("label_usuario");
        label.textContent="Debe contener entre 4-8 caracteres";
		validar = false;
	}

    if(regMail.test(mail.value) == false){
        let label = document.getElementById("label_mail");
        label.textContent="No es un correo";
		validar = false;
    }
    if (!contrasenia.value) {
        let label = document.getElementById("label_contrasenia");
        label.textContent="No puede estar vacio";
		validar = false;
	}

    if (!contrasenia2.value || contrasenia2.value !== contrasenia.value) {
        let label = document.getElementById("label_contrasenia2");
        label.textContent="Debe coincidir";
		validar = false;
	}

    if(fecha.value==""){
        let label = document.getElementById("label_fecha");
        label.textContent="Debe estar completa este campo";
		validar = false;
    }	

    let nombreUsuario = usuario.value;
    let mailUsuario = mail.value;
    let contraseniaUsuario = contrasenia.value;
    let fechaUsuario = fecha.value;

	if (validar) {
        let arrUsuarios = JSON.parse(localStorage.getItem("usuarios"));

        if(arrUsuarios == null)
            arrUsuarios = [];
    
        arrUsuarios.push(new Usuario(nombreUsuario, contraseniaUsuario, mailUsuario, fechaUsuario));          
        localStorage.setItem("usuarios", JSON.stringify(arrUsuarios));
        enviar.setAttribute("href", "iniciar_sesion.html");
	}
	
}
