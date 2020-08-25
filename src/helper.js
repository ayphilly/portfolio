import { TimelineMax, Power2, TweenMax } from "gsap";
import $ from "jquery";

export const barCont = () => {
    const hamburger = document.querySelector('.hamburger');        
    const lineOne = hamburger.querySelector('.l-one');
    const lineTwo = hamburger.querySelector('.l-two');
    const lineThree = hamburger.querySelector('.l-three');

    const tlm = new TimelineMax({paused:true, reversed:true});

    tlm
        .to(lineTwo,.125, {scaleX:0, ease: Power2.easeInOut})
        .to(lineOne, .5, {y:8, transformOrigin: "50% 50%", ease: Power2.easeInOut}, "slide")
        .to(lineThree, .5, {y:-6, transformOrigin: "50% 50%", ease: Power2.easeInOut}, "slide")        
        .to(hamburger,.25, {rotation:360, ease:Power2.easeInOut} )
        .to(lineOne, .25, {rotation:45, transformOrigin: "50% 50%", ease: Power2.easeInOut}, "cross")
        .to(lineThree, .25, {rotation:-45, transformOrigin: "50% 50%", ease: Power2.easeInOut}, "cross")

    hamburger.addEventListener('click', _=>{
        tlm.reversed()? tlm.play() : tlm.reverse();
    })
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
        }, 500, function () {
            window.location.hash = href;
        });

        return false;
    });

}


    