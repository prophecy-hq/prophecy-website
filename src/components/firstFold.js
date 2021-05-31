
/** @jsx jsx */
import { jsx, Styled, Box} from 'theme-ui';
import {useRef, useEffect} from 'react';
import "../splitting/dist/splitting.css";
import "../splitting/dist/splitting-cells.css";
import Splitting from "../splitting/dist/splitting";
import { gsap } from 'gsap';



export default function FirstFold() {
 
    const ref = useRef(null);

    useEffect (() => {

        if(ref){
         let splitRes = Splitting(ref);
        }

        // const element = ref.current;
        // var text = element.querySelector('.staggerAnimation');
        // var arr =  text.querySelectorAll('.staggerAnimation .word > .char, .whitespace');
    
        // const timeline = gsap.timeline();
    
        // const timelineSettings = {
        //     staggerValue: 0.014,
        //     charsDuration: 0.8
        // };
    
        // timeline.set(arr, 
        //     {
        //         y: '80%',
        //         opacity: 0,
        //     })
    
        // timeline.to(arr, timelineSettings.charsDuration, 
        //     {
        //         ease: 'Power3.easeOut',
        //         y: '0%',
        //         opacity: 1,
        //         stagger: timelineSettings.staggerValue
        //     },
        //     'start')
    
        // timeline.play();


    },[])
    //   firstFoldAnimation();


return(
        <Box ref = {ref} sx = {{height: '100vh', color: 'white'}}>
         
            
            <Styled.h1  data-splitting = ""
            
                className = "staggerAnimation"
                sx = {{variant: 'layouts.rightContent', marginTop: '80px', color: 'lightRed'}}>
                
                We help achieve&nbsp;
                <span className = "whitespace">&nbsp;</span>
                <span  sx = {{variant: 'text.italic', color: 'white'}}>
                     &nbsp;big goals
                </span> 
                &nbsp;through digital products that are people-centric, rigorously tested, and expertly crafted.</Styled.h1>
        </Box>

        )
}


