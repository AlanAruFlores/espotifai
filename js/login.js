import { Usuario } from "./usuario.js"

let usuario = document.getElementById("usuario");
let contrasenia = document.getElementById("contrasenia");


let enviar  = document.getElementById("enviar");
enviar.addEventListener("click",EnviarLogin);

let labelUsuario = document.getElementById("label_usuario");
let labelContrasenia = document.getElementById("label_contrasenia");

console.log(usuario);
console.log(contrasenia);
console.log("INNER USUARIO");
console.log(labelUsuario.innerHTML);
console.log("INNER CONTRAASENIA");

console.log(labelContrasenia.innerHTML);
function EnviarLogin () {
	let validar = true;
	if (!usuario.value) {
        labelUsuario.textContent="No puede estar vacio";
		validar = false;
	}

    if (!contrasenia.value) {
        labelContrasenia.textContent="No puede estar vacio";
		validar = false;
	}
  
	if (validar) {
        let arrUsuarios = JSON.parse(localStorage.getItem("usuarios"));
        if(arrUsuarios == null  || arrUsuarios == undefined){
            labelUsuario.textContent="Usuario Incorrecto";
            labelContrasenia.textContent="Contrasenia Incorrecto";
            return "";
        }

        let encontrado = false;

        for(let usuarioRegistrado of arrUsuarios){
            if(usuarioRegistrado.nombre == usuario.value && usuarioRegistrado.contrasenia == contrasenia.value){

                sessionStorage.setItem("usuarioActual", JSON.stringify(usuarioRegistrado));
                encontrado = true;
                break;
            }
        }
        if(encontrado==false){
            labelUsuario.textContent="Usuario Incorrecto";
            labelContrasenia.textContent="Contrasenia Incorrecto";
            return "";
        }

        enviar.setAttribute("href", "espotifai.html");

	}
	
}
