
/** @jsx jsx */
import { jsx, Styled, Box, Flex, Grid, Image} from 'theme-ui';
import {useRef, useEffect} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AwardImage from '../images/award.png';

export default function AwardSection()  {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);


    // ========== Grid animation ==========

    useEffect(() => {
      
        var awardsGrid = document.querySelector('#awardsGrid');
        var awardsArr = awardsGrid.querySelectorAll('div');
        
        
        const timelineSettings = {
            awardsDuration: 1.2,
            awardsStaggerValue: 0.1
        };


        gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector("#awardsGrid"),
                start: "top 30%",
      
            }
        })

        .set(awardsArr,
            {
            opacity: 0,
            y: '20%'
             }
        )

        .staggerTo(awardsArr, timelineSettings.awardsDuration, 
            {
                opacity: 1,
                y: '0%',
                ease: 'Power3.easeOut',
            },
            timelineSettings.awardsStaggerValue,'start')

    },[])


     // ========== Heading animation ==========

    useEffect(() => {

        var heading = document.querySelector('#awardSectionHeading');
        var arr =  heading.querySelectorAll('#awardSectionHeading .word > .char, .whitespace');

        const timelineSettings = {
            staggerValue: 0.014,
            charsDuration: 0.8,
        };

        
        gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector("#awardSectionHeading"),
                start: "top 80%",
            }
        })      
        .set(arr, 
            {
                y: '80%',
                opacity: 0,
            }
        )
        .staggerTo(arr, timelineSettings.charsDuration, 
            {
                ease: 'Power3.easeOut',
                y: '0%',
                opacity: 1,
            },timelineSettings.staggerValue)
        
   
            
    },[])


    return(
            
       <Flex sx ={{height: '100vh', alignItems: 'center'}}>
       <Flex ref = {ref} sx = {{alignItems: 'flex-end', height: '50%',
        '@media screen and (max-width: 1024px)': {
            flexDirection: 'column-reverse',
        },}}>

            
            <Grid id = "awardsGrid" columns={[2, '1fr 1fr']} sx = {{width: '50%', marginRight: '10%'}}>
               
                <Flex sx = {{flexDirection: 'column', alignItems: 'center'}}>
                    
                    <Image src = {AwardImage} />
                    <Styled.h3>IxDA</Styled.h3>
                    <Styled.p>Description here</Styled.p>
            
                 </Flex>

                 <Flex sx = {{flexDirection: 'column', alignItems: 'center'}}>
                    
                    <Image src = {AwardImage} />
                    <Styled.h3>IxDA</Styled.h3>
                    <Styled.p>Description here</Styled.p>
            
                 </Flex>

                 <Flex sx = {{flexDirection: 'column', alignItems: 'center'}}>
                    
                    <Image src = {AwardImage} />
                    <Styled.h3>IxDA</Styled.h3>
                    <Styled.p>Description here</Styled.p>
            
                 </Flex>

                 <Flex sx = {{flexDirection: 'column', alignItems: 'center'}}>
                    
                    <Image src = {AwardImage} />
                    <Styled.h3>IxDA</Styled.h3>
                    <Styled.p>Description here</Styled.p>
            
                 </Flex>
                
            </Grid>


            <Box>
                <Styled.h1 id = "awardSectionHeading" data-splitting = "">We’ve also been recognised for it.</Styled.h1>
            </Box>


        </Flex>
        </Flex>

        )
}


