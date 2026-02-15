function Mostrarinfo(){
    const info = document.querySelectorAll(".Informação");
    info.forEach(function(info){
        info.classList.toggle("ativa")
    });
}