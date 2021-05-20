import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function workFoldHeaderAnimation(){
    

    var text = document.querySelector('.staggerAnimation2');
    var arr =  text.querySelectorAll('.staggerAnimation2 .word > .char, .whitespace');


    const timeline = gsap.timeline();

    const timelineSettings = {
        staggerValue: 0.014,
        charsDuration: 1
    };

    timeline.set(arr, 
        {
            y: '80%',
            opacity: 0 ,
            overflow: 'hidden'
        })

    timeline.staggerTo(arr, timelineSettings.charsDuration, 
        {
            ease: 'Power3.easeOut',
            y: '0%',
            opacity: 1,
            overflow: 'visible',
            scrollTrigger: {
                trigger: document.querySelector(".staggerAnimation2"),
                start: "top center",
                end: "bottom center",
              }
        },
        timelineSettings.staggerValue, 'start')



    timeline.play();

}