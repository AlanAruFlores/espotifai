
let favoritos = JSON.parse(localStorage.getItem("favoritos"));
let listaFavoritos = document.getElementById("lista_favoritas");

console.log(listaFavoritos);
console.log(favoritos);
if(favoritos !== null || favoritos !== undefined){
    mostrarTodo();
}
let todosFiltros = document.getElementById("filtros");

/*Filtro */
todosFiltros.addEventListener("change", ()=>{
    let rangoLetra=document.querySelector("#busqueda").value;
    let expReg = new RegExp(`^${rangoLetra}`,"i");
    let favoritos = JSON.parse(localStorage.getItem("favoritos"));
    favoritos= favoritos.filter(x => expReg.test(x.nombre));
    
    let rangoReproduccion =document.querySelector("#reproduccion").value;
    
    let rangoMinutos = document.querySelector("#duracion").value;

    if(rangoReproduccion.value == 0 && busqueda.value == "" && rangoMinutos==""){
        favoritos = JSON.parse(localStorage.getItem("favoritos"));   
    }


    if(rangoReproduccion == 1)  
        favoritos= favoritos.filter(x => x.reproduccion >=0 && x.reproduccion <=100);
    else if(rangoReproduccion == 2)  
        favoritos= favoritos.filter(x => x.reproduccion >100 && x.reproduccion <=1000);
    else if(rangoReproduccion == 3)  
        favoritos= favoritos.filter(x => x.reproduccion >1000 && x.reproduccion <=10000);
    else if(rangoReproduccion == 4)  
        favoritos= favoritos.filter(x => x.reproduccion >10000);

    if(rangoMinutos==1){
        favoritos = favoritos.filter(x => x.duracionSegundos >= 0 && x.duracionSegundos <= 180);
    }
    else if(rangoMinutos ==2){
        favoritos = favoritos.filter(x => x.duracionSegundos > 180 && x.duracionSegundos <= 300);

    }
    else if (rangoMinutos ==3){
        favoritos = favoritos.filter(x => x.duracionSegundos > 300 && x.duracionSegundos <= 600);
    }

    listaFavoritos .innerHTML = "";
    favoritos.forEach(x=>{
            listaFavoritos.innerHTML+=`
            <td>${x.nombre}</td>
            <td><audio controls class="canc"><source src="${x.audio}"/></audio></td>
            <td class="alb"><img src="${x.imagen}" alt=""></td>
            <td class="dur">${x.duracionString}</td>
            <td class="rep">${x.reproduccion}</td>`;
        })

})




function mostrarTodo(){
    listaFavoritos.innerHTML = "";
    favoritos.forEach(x=>{
        listaFavoritos.innerHTML+=`
        <td>${x.nombre}</td>
        <td><audio controls class="canc"><source src="${x.audio}"/></audio></td>
        <td class="alb"><img src="${x.imagen}" alt=""></td>
        <td class="dur">${x.duracionString}</td>
        <td class="rep">${x.reproduccion}</td>`;
    });
}

















/*Filtros 
let filtro=document.querySelector("#busqueda");
let lista = document.querySelector("#lista_favoritas")
filtro.addEventListener("change",()=>{
    //2. guardar en una variable el valor del combo 1
    let rangoLetra=document.querySelector("#busqueda").value;
    if(busqueda.value == ""){
        mostrarTodo();
        return "";
    }


    let expReg = new RegExp(`^${rangoLetra}`,"i");
    let favoritos = JSON.parse(localStorage.getItem("favoritos"));
    favoritos= favoritos.filter(x => expReg.test(x.nombre));
    //5. recorrer los cursos filtrados y llenar dinámicamente el section

    listaFavoritos .innerHTML = "";
    favoritos.forEach(x=>{
        listaFavoritos.innerHTML+=`
        <td>${x.nombre}</td>
        <td><audio controls class="canc"><source src="${x.audio}"/></audio></td>
        <td class="alb"><img src="${x.imagen}" alt=""></td>
        <td class="dur">4:19</td>
        <td class="rep">${x.reproduccion}</td>`;
    })
    console.log(favoritos);
});


let filtroReproduccion=document.querySelector("#reproduccion");
filtroReproduccion.addEventListener("change",()=>{
    //2. guardar en una variable el valor del combo 1
    let rangoReproduccion =document.querySelector("#reproduccion").value;
    if(rangoReproduccion.value == ""){
        mostrarTodo();
        return  "";
    }

    let favoritos = JSON.parse(localStorage.getItem("favoritos"));
    if(rangoReproduccion == 1)  
        favoritos= favoritos.filter(x => x.reproduccion >=0 && x.reproduccion <=100);
    if(rangoReproduccion == 2)  
        favoritos= favoritos.filter(x => x.reproduccion >100 && x.reproduccion <=1000);
    if(rangoReproduccion == 3)  
        favoritos= favoritos.filter(x => x.reproduccion >1000 && x.reproduccion <=10000);
    if(rangoReproduccion == 4)  
        favoritos= favoritos.filter(x => x.reproduccion >10000);
    //5. recorrer los cursos filtrados y llenar dinámicamente el section

    listaFavoritos .innerHTML = "";
    favoritos.forEach(x=>{
        listaFavoritos.innerHTML+=`
        <td>${x.nombre}</td>
        <td><audio controls class="canc"><source src="${x.audio}"/></audio></td>
        <td class="alb"><img src="${x.imagen}" alt=""></td>
        <td class="dur">4:19</td>
        <td class="rep">${x.reproduccion}</td>`;
    })
    console.log(favoritos);
});


*/
