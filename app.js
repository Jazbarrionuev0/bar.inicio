const myCarouselElement = document.querySelector('.carousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 5000,
  wrap: false
})

let wsp = document.querySelector(".wsp");
let nombre = document.querySelector(".nombre");
let dia = document.querySelector(".dia");
let hora = document.querySelector(".hora");
let guardar = document.querySelector(".guardar");

guardar.addEventListener("click",reservarEvento);

function reservarEvento(){

    wsp.outerHTML = `<a target=\"_blank\" class=\"wsp\" href=\"https://api.whatsapp.com/send?phone=3413157248&amp;text=Hola,quiero hacer una reserva a nombre de `+ nombre.value +` el dia `+ dia.value +` a las `+ hora.value +` \">Reserva</a>`

    wsp.classList.remove("ocultar");
    guardar.classList.add("ocultar");
}


