
/** @jsx jsx */
import { jsx, Styled, Box, Flex} from 'theme-ui';
import {useRef, useEffect} from 'react';
import CaseStudy from './caseStudy';
import { gsap } from "gsap";
import {TweenLite} from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TeamMember(props) {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {

        const element = ref.current;
        var line = document.querySelector('#line1');
        console.log(line);
        
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector("#line1"),
                start: "top center",
                end: "bottom center",
                scrub: true
            }
        });

        timeline.add(createLineTween(line),  "-=1");

    },[])


    useEffect(() => {

        const element = ref.current;
        var line = document.querySelector('#line2');
        console.log(line);
        
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector("#line2"),
                start: "top center",
                end: "bottom center",
                scrub: true
            }
        });

        timeline.add(createLineTween(line),  "-=1");

    },[])

    useEffect(() => {

        const element = ref.current;
        var line = document.querySelector('#line3');
        console.log(line);
        
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector("#line3"),
                start: "top center",
                end: "bottom center",
                scrub: true
            }
        });

        timeline.add(createLineTween(line),  "-=1");

    },[])

    function createLineTween(svg){
        var len = dist(svg.x1.baseVal.value, svg.x2.baseVal.value,
            svg.y1.baseVal.value, svg.y2.baseVal.value);
        var pathObject = {length:0, pathLength:len}; 
        var tween = TweenLite.to(pathObject, 2, {length:pathObject.pathLength, onUpdate:drawLine, onUpdateParams:[pathObject, svg], immediateRender:true});
        return tween;
    };

    function dist(x1, x2, y1, y2){
        return Math.sqrt( (x2-=x1)*x2 + (y2-=y1)*y2 );
    }


    function drawLine(obj, svg) {
        svg.style.strokeDasharray = [obj.length, obj.pathLength].join(' ');
       };

    



    return(
            
        <Flex sx = {{ variant: 'layouts.responsiveFlex', marginTop: 200, width: '100%'}}>
            
            <Box sx = {{variant: 'layouts.teamBio'}}>
                <div sx = {{variant: 'texts.bodySmall'}}>{props.bio}</div>
            </Box>

            <Box sx = {{variant: 'layouts.line'}}> 
                <svg  style={{width: '100%', height: '100%'}}>
                    <line id = {props.id} x1="0%" y1="0%" x2="100%" y2="100%"
                    style={{fill:'none', stroke:'red', strokeWidth:'1px'}} />
                </svg>
            </Box>  

            <Box sx = {{variant: 'layouts.caseStudyBlock'}}>
                <CaseStudy title = {props.caseStudyName1} description = {props.caseStudyDescription1}></CaseStudy>
                <CaseStudy title = {props.caseStudyName2} description = {props.caseStudyDescription2}></CaseStudy>
                <CaseStudy title = {props.caseStudyName3} description = {props.caseStudyDescription3}></CaseStudy>
            </Box>

        </Flex>

        )
    
}


