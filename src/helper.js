import { TimelineMax, Power2 } from "gsap";
// import $ from "jquery";
import TypeIt from "typeit";
const { JSDOM } = require("jsdom");
const myJSDom = new JSDOM (html);
const $ = require('jquery')(myJSDom.window);


export const barCont = () => {
    const hamburger = document.querySelector('.hamburger');        
    const lineOne = hamburger.querySelector('.l-one');
    const lineTwo = hamburger.querySelector('.l-two');
    const lineThree = hamburger.querySelector('.l-three');
    const overlay = document.querySelector('.overlay');
    const tlm = new TimelineMax({paused:true, reversed:true});

    tlm
        .to(lineTwo,.125, {scaleX:0, ease: Power2.easeInOut})
        .to(lineOne, .5, {y:8, transformOrigin: "50% 50%", ease: Power2.easeInOut}, "slide")
        .to(lineThree, .5, {y:-6, transformOrigin: "50% 50%", ease: Power2.easeInOut}, "slide")        
        .to(hamburger,.25, {rotation:360, ease:Power2.easeInOut} )
        .to(lineOne, .25, {rotation:45, transformOrigin: "50% 50%", ease: Power2.easeInOut}, "cross")
        .to(lineThree, .25, {rotation:-45, transformOrigin: "50% 50%", ease: Power2.easeInOut}, "cross")
        .fromTo(overlay, .5, {opacity:0, ease: Power2.easeInOut}, {opacity:1, transformOrigin: "50% 50%", ease: Power2.easeInOut}, "cross");
    overlay.style.display="block";
    var linking = document.getElementsByClassName("linking");

    for (var i =0; i< linking.length; i++) {
        linking[i].addEventListener("click", function () {
            const overlay = document.querySelector('.overlay');
            overlay.style.opacity=0;
            tlm.reversed()? tlm.play() : tlm.reverse();
        });
    }
    hamburger.addEventListener('click', _=>{
        tlm.reversed()? tlm.play() : tlm.reverse();
    })
}


export const closeLink = () => {
    var linking = document.getElementsByClassName("linking");

    for (var i =0; i< linking.length; i++) {
        linking[i].addEventListener("click", function () {
            const overlay = document.querySelector('.overlay');
            overlay.style.display="none";
        });
    }
}

// export const clickNav = ()=> {
//     $('a[href^="#"]').click(function(){
//         var href = $.attr(this, 'href');
//         $('html, body').animate({
//             scrollTop: $(href).offset().top
//         }, 500, function () {
//             window.location.hash = href;
//         });

//         return false;
//     })
// }

var $root = $('html, body');
export const clicky = () => {

    $('a[href^="#lt-"]').click(function() {
        
        var href = $.attr(this, 'href');

        $root.animate({
            scrollTop: $(href).offset().top + 100
        }, 500);

        return false;
    });

}

export const typing = () => {
    new TypeIt(".element", {
        speed: 50,
        startDelay: 900
      })
      
        .type(" Looks like Yo just hit,", {delay: 100})
        .move(-10, {speed: 50, delay: 100})            
        .type('u')
        .move('END')
        .delete(24, {delay: 600})
        .type("s route that doesn`t exist", {delay: 100})
        .move(-25, {speed: 50, delay: 100})
        .delete(1)
        .type('a')        
        .move('END')
        .delete(27, {delay: 600})
        .type('<em><strong>Error 404</strong></em>')
        .go();
}

// Looks like You just hit a route that doesn`t exist... the sadness.


    