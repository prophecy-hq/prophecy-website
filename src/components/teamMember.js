
/** @jsx jsx */
import { jsx, Styled, Box, Flex} from 'theme-ui';
import {useRef, useEffect} from 'react';
import CaseStudy from './caseStudy.js';
import { gsap } from "gsap";
import {TweenLite} from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {isMobile, isTablet} from "react-device-detect";

export default function TeamMember(props) {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    function createLineTween(svg){
        var len = dist(svg.x1.baseVal.value, svg.x2.baseVal.value,
            svg.y1.baseVal.value, svg.y2.baseVal.value);
        var pathObject = {length:0, pathLength:len}; 
        var tween = TweenLite.to(pathObject, 0.5, {length:pathObject.pathLength, onUpdate:drawLine, onUpdateParams:[pathObject, svg], immediateRender:true});
        return tween;
    };

    function dist(x1, x2, y1, y2){
        return Math.sqrt( (x2-=x1)*x2 + (y2-=y1)*y2 );
    }


    function drawLine(obj, svg) {
        svg.style.strokeDasharray = [obj.length, obj.pathLength].join(' ');
       };





   
    
    

    /* ======= MOBILE ANIMATION =======*/



if(isMobile || isTablet){

        useEffect(() => {


            const element = ref.current;

            var left1 = document.querySelector('#workFoldLeft1');
            var left2 = document.querySelector('#workFoldLeft2');
            var left3 = document.querySelector('#workFoldLeft3');
            var line1 = document.querySelector('#line1');
            var line2 = document.querySelector('#line2');
            var line3 = document.querySelector('#line3');

            var right1 = document.querySelector('#workFoldRight1');
            var rightarr1 =  right1.querySelectorAll('#workFoldRight1 > div');
            var right2 = document.querySelector('#workFoldRight2');
            var rightarr2 =  right2.querySelectorAll('#workFoldRight2 > div');
            var right3 = document.querySelector('#workFoldRight3');
            var rightarr3 =  right3.querySelectorAll('#workFoldRight3 > div');

            const timelineSettings = {
                staggerValue: 0.2,
                duration: 1
            };

            
            gsap.timeline({
                scrollTrigger: {
                    trigger: document.querySelector("#workFoldLeft2"),
                    start: "top 60%",
                }
            })
            .set(rightarr2, 
                {
                    y: '80%',
                    opacity: 0 ,
                })
            .fromTo( left2,{
                y: '100%',
                opacity: 0,
                
            },{
                ease: 'Power3.easeOut',
                y: '0%',
                opacity: 1,
                duration: 1
            })
            .add(createLineTween(line2),  ">-0.5")
            .to(rightarr2, timelineSettings.duration, 
                {
                    ease: 'Power3.easeOut',
                    y: '0%',
                    opacity: 1,
                    stagger: timelineSettings.staggerValue
                },'>-0.5')
        
        
        
        
        
        
                gsap.timeline({
                        scrollTrigger: {
                            trigger: document.querySelector("#workFoldLeft1"),
                            start: "top 60%",
                        }
                })
                .set(rightarr1, 
                    {
                        y: '80%',
                        opacity: 0 ,
                    })
                .fromTo( left1,{
                    y: '100%',
                    opacity: 0,
                    
                },{
                    ease: 'Power3.easeOut',
                    y: '0%',
                    opacity: 1,
                    duration: 1
                })
                .add(createLineTween(line1),  ">-0.5")
                .to(rightarr1, timelineSettings.duration, 
                    {
                        ease: 'Power3.easeOut',
                        y: '0%',
                        opacity: 1,
                        stagger: timelineSettings.staggerValue
                    },'>-0.5')


                gsap.timeline({
                    scrollTrigger: {
                        trigger: document.querySelector("#workFoldLeft3"),
                        start: "top 60%",
                    }
            })
            .set(rightarr3, 
                {
                    y: '80%',
                    opacity: 0 ,
                })
            .fromTo( left3,{
                y: '100%',
                opacity: 0,
                
            },{
                ease: 'Power3.easeOut',
                y: '0%',
                opacity: 1,
                duration: 1
            })
            .add(createLineTween(line3),  ">-0.5")
            .to(rightarr3, timelineSettings.duration, 
                {
                    ease: 'Power3.easeOut',
                    y: '0%',
                    opacity: 1,
                    stagger: timelineSettings.staggerValue
                },'>-0.2')

},[])
   
}
 

    else{

      /* ======= DESKTOP ANIMATION =======*/

     /*====== LINE ANIMATION =======*/

    useEffect(() => {
        var line = document.querySelector('#line1');

        
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector("#line1"),
                start: "top 60%",
                end: "bottom 90%",
                scrub: true
            }
        });
   
        timeline.add(createLineTween(line),  "-=1");

    },[])



    
 

    useEffect(() => {

        const element = ref.current;
        var line = document.querySelector('#line2');
        
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector("#line2"),
                start: "top 60%",
                end: "bottom 90%",
                scrub: true
            }
        });

        timeline.add(createLineTween(line),  "-=1");

    },[])

    useEffect(() => {

        const element = ref.current;
        var line = document.querySelector('#line3');
        
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector("#line3"),
                start: "top 60%",
                end: "bottom 90%",
                scrub: true
            }
        });

        timeline.add(createLineTween(line),  "-=1");

    },[])



    // =========== LEFT CONTENT ANIMATION =================

    useEffect(() => {
        const element = ref.current;
        var text1 = document.querySelector('#workFoldLeft1');
        var text2 = document.querySelector('#workFoldLeft2');
        var text3 = document.querySelector('#workFoldLeft3');
    
    
        //First para
        gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector("#workFoldLeft1"),
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
                trigger: document.querySelector("#workFoldLeft2"),
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
            trigger: document.querySelector("#workFoldLeft3"),
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
    },[])


    // ================== RIGHT SIDE ANIMATION =======================

    useEffect(() => {
        const element = ref.current;
        var text = document.querySelector('#workFoldRight1');
        var arr =  text.querySelectorAll('#workFoldRight1 > div');

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector("#workFoldRight1"),
                start: "top 70%"
            }
        });

        const timelineSettings = {
            staggerValue: 0.2,
            duration: 1
        };

        timeline.set(arr, 
            {
                y: '80%',
                opacity: 0 ,
            })

        timeline.staggerTo(arr, timelineSettings.duration, 
            {
                ease: 'Power3.easeOut',
                y: '0%',
                opacity: 1,
            },
        timelineSettings.staggerValue, 'start')

   

    },[])



    useEffect(() => {
        const element = ref.current;
        var text = document.querySelector('#workFoldRight2');
        var arr =  text.querySelectorAll('#workFoldRight2 > div');

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector("#workFoldRight2"),
                start: "top 70%"
            }
        });

        const timelineSettings = {
            staggerValue: 0.2,
            duration: 1
        };

        timeline.set(arr, 
            {
                y: '80%',
                opacity: 0 ,
            })

        timeline.staggerTo(arr, timelineSettings.duration, 
            {
                ease: 'Power3.easeOut',
                y: '0%',
                opacity: 1,
            },
        timelineSettings.staggerValue, 'start')

   

    },[])



    useEffect(() => {
        const element = ref.current;
        var text = document.querySelector('#workFoldRight3');
        var arr =  text.querySelectorAll('#workFoldRight3 > div');

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector("#workFoldRight3"),
                start: "top 70%"
            }
        });

        const timelineSettings = {
            staggerValue: 0.2,
            duration: 1
        };

        timeline.set(arr, 
            {
                y: '80%',
                opacity: 0 ,
            })

        timeline.staggerTo(arr, timelineSettings.duration, 
            {
                ease: 'Power3.easeOut',
                y: '0%',
                opacity: 1,
            },
        timelineSettings.staggerValue, 'start')

   

    },[])
}
    

    // ======== CONTENT ===============

    return(
            
        <Flex sx = {{ variant: 'layouts.responsiveFlex', marginTop: 200, width: '100%'}}>
            
            <Box sx = {{variant: 'layouts.flexLeft'}}>
                <Styled.p id = {props.leftId}>
                    <span sx = {{variant: 'text.bold'}}>{props.name}</span>
                    {props.bio}
                </Styled.p>
            </Box>

            <Box sx = {{variant: 'layouts.line'}}> 
                <svg  style={{width: '100%', height: '100%'}}>
                    <line id = {props.lineId} x1="0%" y1="0%" x2="100%" y2="100%"
                    style={{fill:'none', stroke:'#F54936', strokeWidth:'1px'}} />
                </svg>
            </Box>  

            <Box id = {props.rightId} sx = {{variant: 'layouts.flexRight'}}>
                <CaseStudy title = {props.caseStudyName1} description = {props.caseStudyDescription1}></CaseStudy>
                <CaseStudy title = {props.caseStudyName2} description = {props.caseStudyDescription2} ></CaseStudy>
                <CaseStudy title = {props.caseStudyName3} description = {props.caseStudyDescription3} ></CaseStudy>
            </Box>

        </Flex>

        )
    
}


