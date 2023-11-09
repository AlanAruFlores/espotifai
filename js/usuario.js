export class Usuario {
    constructor(nombre, contrasenia, mail, fecha){
        this.nombre = nombre;
        this.contrasenia = contrasenia;
        this.mail = mail;
        this.fecha  = fecha;
    }
    get Nombre(){
        return this.nombre;
    }

    get Contrasenia(){
        return this.contrasenia;
    }

    get Mail(){
        return this.mail;

    }
    get Fecha(){
        return this.fecha;
    }
}