createCollections();

//cambiar color de navBar al hacer scroll
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("header-black",window.scrollY>0);
})

//Menu active
function addMarker(){
    $(document).ready(function(){
        $('.link').on('click',function(){
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        })
    })
}

addMarker();

//Visibilidad del menu
const navBar = document.querySelector("nav");
const menuBtn = document.querySelector(".btn-toggle");
const layer = document.querySelector(".layer");
const Links = document.querySelectorAll(".link");

import {token} from "./env.js";
import {chat_id} from "./env.js";
import {parse_mode} from "./env.js";


menuBtn.addEventListener("click", ()=> {
    navBar.classList.toggle("visible");
    layer.classList.toggle("on");
})

Links.forEach((link) => {
    link.addEventListener("click", () => {
        navBar.classList.remove("visible");
        layer.classList.remove("on");
    })
})

//Scroll reveal
ScrollReveal({
    reset: false,
    distance:'500px',
    duration: 2500,
    delay: 400
 });

//Formulario con bot de telegram
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    var name = document.querySelector(".name").value;
    var subject = document.querySelector(".subject").value;
    var tel= document.querySelector(".tel").value;
    var email = document.querySelector(".email").value;
    var text= document.querySelector(".text").value;

    var header = "*Mensaje%20desde%20tu%20Web%0A%0A*";
    var message = header + "*Nombre:*%20"+ name + "%0A" + "*Asunto:*%20"+ subject + "%0A" + "*Tel:%20*"+ tel + "%0A" + "*Email:*%20" + email + "%0A"+ "*Mensaje:*%0A" + text;

    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}&parse_mode=${parse_mode}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

})

//Slider
const slider = document.getElementById("slider");
const btnBack = document.getElementById("back");
const btnForward = document.getElementById("forward");

let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionlast = sliderSection[sliderSection.length - 1];

slider.insertAdjacentElement("afterbegin", sliderSectionlast);

function Next(){
    let sliderSectionFrist = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFrist);
        slider.style.marginLeft = "-100%";
    }, 500)
}

function Back(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionlast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionlast);
        slider.style.marginLeft = "-100%";
    }, 500)
}

btnForward.addEventListener("click", Next);
btnBack.addEventListener("click", Back);



 //Inicio
ScrollReveal().reveal('.img-inicio', { delay: 300, origin:'left', distance:'50px' });
ScrollReveal().reveal('h1', { delay: 350, origin:'right', distance:'50px' });
ScrollReveal().reveal('h2', { delay: 350, origin:'left', distance:'50px' });
ScrollReveal().reveal('.start-btn', { delay: 350, origin:'bottom', distance:'50px' });

//About me
ScrollReveal().reveal('.about-title', { delay: 350, origin:'left', distance:'80px' });
ScrollReveal().reveal('.about-info', { delay: 350, origin:'bottom', distance:'50px' });
ScrollReveal().reveal('.bloque-1', { delay: 350, origin:'left', distance:'80px' });
ScrollReveal().reveal('.bloque-2', { delay: 350, origin:'right', distance:'80px' });
ScrollReveal().reveal('.download', { delay: 350, origin:'left', distance:'40px' });

//Skills
ScrollReveal().reveal('.skill-title', { delay: 350, origin:'left', distance:'80px' });
ScrollReveal().reveal('.s-1', { delay: 350, origin:'bottom', distance:'40px' });
ScrollReveal().reveal('.s-2', { delay: 750, origin:'bottom', distance:'60px' });
ScrollReveal().reveal('.s-3', { delay: 950, origin:'bottom', distance:'80px' });
ScrollReveal().reveal('.s-4', { delay: 1150, origin:'bottom', distance:'100px' });


//Collections
ScrollReveal().reveal('.collect-title', { delay: 350, origin:'left', distance:'100px' });
ScrollReveal().reveal('.nft-card', { delay: 450, origin:'bottom', distance:'100px' });

//comisiones title
ScrollReveal().reveal('.comisiones-title', { delay: 350, origin:'left', distance:'100px' })
ScrollReveal().reveal('.comisiones-card', { delay: 350, origin:'bottom', distance:'80px' })

//Slider reveal section
ScrollReveal().reveal('.works-title', { delay: 350, origin:'left', distance:'100px' })
ScrollReveal().reveal('.slider-content', { delay: 350, origin:'bottom', distance:'80px' })
ScrollReveal().reveal('.slider__btn', { delay: 350, origin:'bottom', distance:'100px' })



