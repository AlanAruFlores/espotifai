import { AudioEtiqueta } from "./audio.js";

let audios = [];

audios.push(
    new AudioEtiqueta("Cant Help Falling in Love - Elvis",
    "../img/Cant-help-falling-in-love-Elvis-Presley.jpg",
    new Audio("../music/cant-help-falling-in-love-official-audio.mp3"))
);
audios.push(
    new AudioEtiqueta("Have You Ever Seen The Rain - Creedence",
    "../img/Have-you-ever-seen-the-rain-creedence.jpg",
    new Audio("../music/have-you-ever-seen-the-rain.mp3"))
);
audios.push(
    new AudioEtiqueta("Maldito Duende - Heroes del Silencio",
    "../img/Maldito-Duende-Single.jpg",
    new Audio("../music/maldito-duende-remaster-2018.mp3"))
);
audios.push(
    new AudioEtiqueta("Mama - Genesis",
    "../img/Mama-Genesis.jpg",
    new Audio("../music/genesis-mama-lyrics.mp3"))
);
audios.push(
    new AudioEtiqueta("November Rain - Guns n Roses",
    "../img/November-rain-Guns-n-Roses.jpg",
    new Audio("../music/guns-n-roses-lyric-top-song.mp3"))
);
audios.push(
    new AudioEtiqueta("Tears of the Dragon - Bruce Dickinso",
    "../img/Tears-of-the-dragon-Bruce-Dickinson.jpg",
    new Audio("../music/tears-of-the-dragon-lyrics-for-desktop.mp3"))
);


//Cargo todos los audios
let audiosElements = document.querySelectorAll("#play");
console.log(audiosElements);

let audioRecomendado = document.querySelector("#cancion-recomendada");
console.log(audioRecomendado.children);
console.log(audioRecomendado);

let indexActual =  -1;

/*Añadimos funcionalidad a las playlist*/
for(let i=0; i < audiosElements.length; i++){
    audiosElements[i].addEventListener("click", ()=>{
        if(audiosElements[i].textContent == "pause_circle"){
            audios[i].getCancion().pause();
            audiosElements[i].textContent="play_circle";
            audioRecomendado.children[1].textContent="play_circle";

            return "";
        }
        if(indexActual!==-1){
            audios[indexActual].getCancion().pause();
            audiosElements[indexActual].textContent="play_circle";
        }
        indexActual=i;
        console.log(indexActual);
        audios[i].getCancion().play();
        audioRecomendado.style.backgroundImage=`url("${audios[i].getImagen()}")`;
        audioRecomendado.children[2].innerHTML= audios[i].getTitulo();
        audioRecomendado.children[1].textContent="pause_circle";          
        audiosElements[i].textContent="pause_circle";
        return "";
    })
}

/*Añadimos funcionalidad a la musica recomendada */
audioRecomendado.children[1].addEventListener("click", function(){
    if(audioRecomendado.children[1].textContent=="pause_circle"){
        audiosElements[indexActual].textContent="play_circle";
        audioRecomendado.children[1].textContent = "play_circle";
        audios[indexActual].getCancion().pause();  
        return "";      
    }
    audiosElements[indexActual].textContent="pause_circle";
    audioRecomendado.children[1].textContent = "pause_circle";
    audios[indexActual].getCancion().play();
    return "";
});



