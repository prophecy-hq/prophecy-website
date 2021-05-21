
/** @jsx jsx */
import { jsx, Styled, Box} from 'theme-ui';
import {useRef, useEffect} from 'react';
import { Fade } from "react-awesome-reveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function SecondFold() {


    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
    const element = ref.current;
    var text1 = document.querySelector('#secondFold1');
    var text2 = document.querySelector('#secondFold2');
    var text3 = document.querySelector('#secondFold3');
    var text4 = document.querySelector('#secondFold4');
    var text5 = document.querySelector('#secondFold5');


    //First para
    gsap.timeline({
        scrollTrigger: {
            trigger: document.querySelector("#secondFold1"),
            start: "bottom 80%",
        }
    })
    .fromTo( text1,{
        y: '100%',
        opacity: 0,
        
    },{
        ease: 'Power3.easeOut',
        y: '0%',
        opacity: 1,
        duration: 1
    })

    //Second para
    gsap.timeline({
        scrollTrigger: {
            trigger: document.querySelector("#secondFold2"),
            start: "bottom 80%",

        }
    })
    .fromTo( text2,{
        y: '100%',
        opacity: 0,
        
    },{
        ease: 'Power3.easeOut',
        y: '0%',
        opacity: 1,
        duration: 1
    })

    //Third para
    gsap.timeline({
        scrollTrigger: {
            trigger: document.querySelector("#secondFold3"),
            start: "bottom 80%",
        }
    })
    .fromTo( text3,{
        y: '100%',
        opacity: 0,
        
    },{
        ease: 'Power3.easeOut',
        y: '0%',
        opacity: 1,
        duration: 1
    })

    //Fourth para
    gsap.timeline({
        scrollTrigger: {
            trigger: document.querySelector("#secondFold4"),
            start: "bottom 80%",
        }
    })
    .fromTo( text4,{
        y: '100%',
        opacity: 0,
        
    },{
        ease: 'Power3.easeOut',
        y: '0%',
        opacity: 1,
        duration: 1
    })


    //Fifth para
    gsap.timeline({
        scrollTrigger: {
            trigger: document.querySelector("#secondFold5"),
            start: "bottom 80%",
        }
    })
    .fromTo( text5,{
        y: '100%',
        opacity: 0,
        
    },{
        ease: 'Power3.easeOut',
        y: '0%',
        opacity: 1,
        duration: 1
    })



    },[])


    return(
    <Box ref = {ref} sx = {{variant: 'layouts.leftContent', color: 'white'}}>


            <Styled.h2  id = "secondFold1" sx = {{marginBottom: '70vh'}}>
                Design means more to us than aesthetics, wireframes, AB tests, lowering CAC or increasing MAU.
            </Styled.h2>
    
            <Styled.h2   id = "secondFold2" >
                We design for people — their values, fears and dreams — their stories, not just numbers on an engagement chart.
            </Styled.h2>

    
                <Styled.h2  id = "secondFold3" >
                    To help people save time, find joy, overcome fears, achieve dreams, and sometimes even save lives.
            </Styled.h2>
    

    
                <Styled.h2  id = "secondFold4" >
                We hypothesise, experiment and test. We question every assumption. We diagnose before we prescribe.
            </Styled.h2>

  
            <Styled.h2  id = "secondFold5" >
                To find simple solutions for complex problems, that realise the future you envision.
            </Styled.h2>

    </Box>

    )
}


