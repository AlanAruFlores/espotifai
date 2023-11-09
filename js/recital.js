let botonCierrePoPup = document.querySelector("#boton_popup");

botonCierrePoPup.addEventListener("click", ()=>{
    let popup = document.querySelector("#popup");
    popup.style.display="none";

    let todosElementos = document.querySelectorAll('*');

    for (var i = 0; i < todosElementos.length; i++) {
        var element = todosElementos[i];        
        element.style.filter="brightness(100%)";
    }
});