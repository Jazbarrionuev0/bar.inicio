//$('input').on('change', function() {
//    $('body').toggleClass('blue');
//  });
  

let wsp = document.querySelector(".wsp");
let nombre = document.querySelector(".nombre");
let dia = document.querySelector(".dia");
let hora = document.querySelector(".hora");
let guardar = document.querySelector(".guardar");

let refrescar = 0;


guardar.addEventListener("click",reservarEvento);

function reservarEvento(){

    if(refrescar == 0){
        refrescar = 1;
        wsp.outerHTML = `<a target=\"_blank\" class=\"wsp\" href=\"https://api.whatsapp.com/send?phone=3413157248&amp;text=Hola,quiero hacer una reserva a nombre de `+ nombre.value +` el dia `+ dia.value +` a las `+ hora.value +` \">Reserva</a>`

        wsp.classList.remove("ocultar");
    
        console.log(wsp.outerHTML);
    }else{
        location. reload()
    }

}


