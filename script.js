function Mostrarinfo(){
    const info = document.querySelectorAll(".Informação");
    info.forEach(function(info){
        info.classList.toggle("ativa")
    });
}

let currentSlide = 1;

startslider();

function startslider(){
    setInterval(function(){
        nextslide();
    }, 5000)
}

function nextslide(){
    currentSlide++;

    if (currentSlide > 4){
        currentSlide = 1;
    }

    showslide(currentSlide);
}

function showslide(index){
    for (let i = 1; i <= 4; i++){
        document.getElementById("r" + i).checked = false
    }
    document.getElementById("r" + index).checked = true
}

