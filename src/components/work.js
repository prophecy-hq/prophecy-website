/** @jsx jsx */
import { jsx, Styled, Box } from 'theme-ui';
import {useRef, useEffect} from 'react';
import TeamMember from '../components/teamMember.js'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Work(){

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
    const element = ref.current;
    var text = element.querySelector('.staggerAnimation2');
    var arr =  text.querySelectorAll('.staggerAnimation2 .word > .char, .whitespace');

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: document.querySelector(".staggerAnimation2"),
            start: "top center",
            end: "bottom center",
        }
    });

    const timelineSettings = {
        staggerValue: 0.014,
        charsDuration: 0.8
    };

    timeline.set(arr, 
        {
            y: '80%',
            opacity: 0 ,
        })

    timeline.staggerTo(arr, timelineSettings.charsDuration, 
        {
            ease: 'Power3.easeOut',
            y: '0%',
            opacity: 1,
        },
        timelineSettings.staggerValue, 'start')

   
   
    },[])



return(
    

<Box ref={ref}>
<Styled.h1  sx = {{variant: 'layouts.rightContent'}} className = 'staggerAnimation2' data-splitting = "">
    Prophecy is new, but our team isn’t. Here’s some of our past work.
</Styled.h1>

<TeamMember 
    bio = "Akshay Verma lead design at Obvious and was instrumental in building and training the team, setting up processes, and leading projects. He is an alumnus of the National Institute of Design and Copenhagen Institute of Interaction Design." 
    caseStudyName1 = "Simple"
    caseStudyDescription1 = "A sentence about what we did: challenge and outcomes."
    caseStudyName2 = "Gradeup"
    caseStudyDescription2 = "A sentence about what we did: challenge and outcomes."
    caseStudyName3 = "Orderhive"
    caseStudyDescription3 = "A sentence about what we did: challenge and outcomes."
    id = "line1"

/>

<TeamMember 
    bio = "Sneha Sankar was the Head of Design of Graphy. Previously Creative Lead at Unacademy, St+art India, Ola, Struckby and Leo Burnett. She is an alumnus of the National Institute of Design." 
    caseStudyName1 = "Unacademy"
    caseStudyDescription1 = "A sentence about what we did: challenge and outcomes."
    caseStudyName2 = "Graphy"
    caseStudyDescription2 = "A sentence about what we did: challenge and outcomes."
    caseStudyName3 = ""
    caseStudyDescription3 = ""
    id = "line2"

/>


<TeamMember 
    bio = "Siddharth Ahuja is a product designer with a Computer Science background. He helped grow the design team at smallcase and scale the product’s user base up to 200k+ users. He studied at the Copenhagen Institute of Interaction Design." 
    caseStudyName1 = "smallcase"
    caseStudyDescription1 = "A sentence about what we did: challenge and outcomes."
    caseStudyName2 = "LEGO Ventures"
    caseStudyDescription2 = "A sentence about what we did: challenge and outcomes."
    caseStudyName3 = ""
    caseStudyDescription3 = ""
    id = "line3"

/>
</Box>
        )
}