
let wsp = document.querySelector(".wsp");
let nombre = document.querySelector(".nombre");
let dia = document.querySelector(".dia");
let hora = document.querySelector(".hora");
let guardar = document.querySelector(".guardar");

let form = document.querySelector(".login-box");

let carrusel = document.querySelector(".carousel-inner");

let mapa = document.querySelector(".mapa");

guardar.addEventListener("click",reservarEvento);

function reservarEvento(){

    wsp.outerHTML = `<a target=\"_blank\" class=\"wsp\" href=\"https://api.whatsapp.com/send?phone=3413157248&amp;text=Hola,quiero hacer una reserva a nombre de `+ nombre.value +` el dia `+ dia.value +` a las `+ hora.value +` \">Reserva</a>`

    wsp.classList.remove("ocultar");
    guardar.classList.add("ocultar");
}

window.addEventListener("scroll", detectarPosibleCambio);

function detectarPosibleCambio(){
    mapa.classList.remove("antiwidth");
    form.classList.remove("opacity0");
}

window.addEventListener("load", gatos);

function gatos(){
    carrusel.classList.remove("carousel-inner-mil")
}



