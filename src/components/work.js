/** @jsx jsx */
import { jsx, Styled, Box } from 'theme-ui';
import {useRef, useEffect} from 'react';
import TeamMember from '../components/teamMember.js'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Work(){

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);


    // =========== BACKGROUND ANIMATION ===========
    
    useEffect(() => {
        var item = document.querySelectorAll('.bgchange');

        const colors = {
            transparent: 'rgba(0,0,0,0)',
            white: '#F6F7EB',
            darkGrey: '#131112'
        }

        gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector("#team"),
                start: "top 50%",
                toggleActions: "play none none reverse",
                onEnter: () => gsap.to(item, {backgroundColor: colors.white}),
                onLeaveBack: () => gsap.to(item, {backgroundColor: colors.transparent}), 
            }
        })
        

    },[])


    // ============ TITLE ANIMATION ===========

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
            opacity: 0,
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
    

<Box ref={ref} sx  ={{mb: '50vh'}}>
<Styled.h1  sx = {{variant: 'layouts.rightContent', marginBottom: '200px'}} className = 'staggerAnimation2' data-splitting = "">
    Prophecy is new, but our team isn’t. Here’s some of our past work.
</Styled.h1>

<TeamMember 
    name = "Akshay Verma"
    bio = " lead design at Obvious and was instrumental in building and training the team, setting up processes, and leading projects. He is an alumnus of the National Institute of Design and Copenhagen Institute of Interaction Design." 
    caseStudyName1 = "Simple"
    caseStudyDescription1 = "A sentence about what we did: challenge and outcomes."
    caseStudyName2 = "Gradeup"
    caseStudyDescription2 = "A sentence about what we did: challenge and outcomes."
    caseStudyName3 = "Orderhive"
    caseStudyDescription3 = "A sentence about what we did: challenge and outcomes."
    lineId = "line1"
    leftId = "workFoldLeft1"
    rightId = "workFoldRight1"

/>

<TeamMember 
    name = "Sneha Sankar"
    bio = " was the Head of Design of Graphy. Previously Creative Lead at Unacademy, St+art India, Ola, Struckby and Leo Burnett. She is an alumnus of the National Institute of Design." 
    caseStudyName1 = "Unacademy"
    caseStudyDescription1 = "A sentence about what we did: challenge and outcomes."
    caseStudyName2 = "Graphy"
    caseStudyDescription2 = "A sentence about what we did: challenge and outcomes."
    caseStudyName3 = ""
    caseStudyDescription3 = ""
    lineId = "line2"
    leftId = "workFoldLeft2"
    rightId = "workFoldRight2"

/>


<TeamMember 
    name = "Siddharth Ahuja"
    bio = " is a product designer with a Computer Science background. He helped grow the design team at smallcase and scale the product’s user base up to 200k+ users. He studied at the Copenhagen Institute of Interaction Design." 
    caseStudyName1 = "smallcase"
    caseStudyDescription1 = "A sentence about what we did: challenge and outcomes."
    caseStudyName2 = "LEGO Ventures"
    caseStudyDescription2 = "A sentence about what we did: challenge and outcomes."
    caseStudyName3 = ""
    caseStudyDescription3 = ""
    lineId = "line3"
    leftId = "workFoldLeft3"
    rightId = "workFoldRight3"

/>
</Box>
        )
}