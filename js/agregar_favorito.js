let musicas = [];

musicas.push({
    nombre:"Cant Help Falling in Love - Elvis",
    imagen:"/img/Cant-help-falling-in-love-Elvis-Presley.jpg",
    audio: "/music/cant-help-falling-in-love-official-audio.mp3",
    reproduccion: 1000,
    duracionSegundos: 155.4,
    duracionString: "2:59"
});
musicas.push({
    nombre: "Have You Ever Seen The Rain - Creedence",
    imagen: "/img/Have-you-ever-seen-the-rain-creedence.jpg",
    audio:  "/music/have-you-ever-seen-the-rain.mp3",
    reproduccion: 80,
    duracionSegundos: 146.4,
    duracionString: "2:44"
});

musicas.push({
    nombre: "Maldito Duende - Heroes del Silencio",
    imagen: "/img/Maldito-Duende-Single.jpg",
    audio:"/music/maldito-duende-remaster-2018.mp3",
    reproduccion: 4000,
    duracionSegundos:249,
    duracionString: "4:15"

});
musicas.push({
    nombre: "Mama - Genesis",
    imagen:"/img/Mama-Genesis.jpg",
    audio: "/music/genesis-mama-lyrics.mp3",
    reproduccion: 20000,
    duracionSegundos:381.6,
    duracionString: "6:36"
});
musicas.push({
    nombre: "November Rain - Guns n Roses",
    imagen:"/img/November-rain-Guns-n-Roses.jpg",
    audio:"/music/guns-n-roses-lyric-top-song.mp3",
    reproduccion: 40200,
    duracionSegundos:382.8,
    duracionString: "6:38"

});
musicas.push({
    nombre: "Tears of the Dragon - Bruce Dickinso",
    imagen: "/img/Tears-of-the-dragon-Bruce-Dickinson.jpg",
    audio: "/music/tears-of-the-dragon-lyrics-for-desktop.mp3",
    reproduccion: 400234,
    duracionSegundos:370.8,
    duracionString: "6:18"
});


let favoritosBotonoes = document.querySelectorAll("#star");



console.log(favoritosBotonoes);
let i = 0;


for(let i=0 ; i<favoritosBotonoes.length; i++){
    favoritosBotonoes[i].addEventListener("click", function(){
        let arrFavoritos = JSON.parse(localStorage.getItem("favoritos"));
        if(arrFavoritos == null || arrFavoritos == undefined)
            arrFavoritos = [];
    
        if(verificarSiMusicaExisteEnFavoritos(arrFavoritos, musicas[i].nombre)){
            alert("Ya EXISTE añadida a favoritos")
            return "";
        }
        
        arrFavoritos.push(musicas[i]);
        localStorage.setItem("favoritos",JSON.stringify(arrFavoritos));
        alert("Agregado a Favoritos");
    });
}

function verificarSiMusicaExisteEnFavoritos(arrFavoritos, titulo){
    for(let favorito of arrFavoritos){
        if(favorito.nombre == titulo)
            return true;
    }
    return false;
}












