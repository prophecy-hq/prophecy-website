import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { gsap } from 'gsap';

export default function firstFoldAnimation(){
    
    Splitting();


    var text = document.querySelector('.staggerAnimation');
    var arr =  text.querySelectorAll('.staggerAnimation .word > .char, .whitespace');

    const timeline = gsap.timeline();

    const timelineSettings = {
        staggerValue: 0.014,
        charsDuration: 0.8
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
            overflow: 'visible'
        },
        timelineSettings.staggerValue, 'start')



    timeline.play();

}