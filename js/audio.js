export class AudioEtiqueta{
    constructor(titulo, imagen, cancion){
        this.titulo  = titulo;
        this.imagen = imagen;
        this.cancion = cancion;
    }
    getTitulo(){
        return this.titulo;
    }
    getImagen(){
        return this.imagen;
    }
    getCancion(){
        return this.cancion;
    }
}