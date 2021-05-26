
/** @jsx jsx */
import { jsx, Styled, Box, Flex, Grid} from 'theme-ui';
import {useRef, useEffect} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NewsSection () {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
        var heading = document.querySelector('#newsSectionHeading');
        var arr =  heading.querySelectorAll('#newsSectionHeading .word > .char, .whitespace');
        var newsGrid = document.querySelector('#newsSectionGrid');
        var newsArr = newsGrid.querySelectorAll('div');

        
        

        const timelineSettings = {
            staggerValue: 0.014,
            charsDuration: 0.8,
            newsDuration: 1,
            newsStaggerValue: 0.05
        };


        gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector("#newsSectionHeading"),
                start: "top 50%",
            }
        })
        .set(arr, 
            {
                y: '80%',
                opacity: 0,
            })
        .set(newsArr,
            {
                opacity: 0,
                y: '10%'
            })
        .staggerTo(arr, timelineSettings.charsDuration, 
            {
                ease: 'Power3.easeOut',
                y: '0%',
                opacity: 1,
            }, timelineSettings.staggerValue, 'start')
        .staggerTo(newsArr,timelineSettings.newsDuration,
            {
                ease: 'Power3.easeOut',
                opacity: 1,
                y: '0%'
            }, timelineSettings.newsStaggerValue,'>-0.5')


    },[])

    
    
    
    
    
    return(
            
    <Flex sx = {{ height: '100vh', alignItems: 'center' }}>
        
        <Flex ref = {ref} sx = {{variant: 'layouts.responsiveFlex', width: '100%'}}>

                <Box id = "newsSectionHeading" sx = {{width: '30%', mr: '10%'}}>
                    <Styled.h1 data-splitting = "">What we’ve been up to.</Styled.h1>
                </Box>

                <Grid id = "newsSectionGrid" sx = {{variant: 'layouts.newsGrid'}}>

                    <Box sx = {{variant: 'layouts.newsGridItem'}}>
                        <Styled.h3  sx = {{mb: '16px'}}>Antler Workshop</Styled.h3>
                        <div sx = {{variant: 'text.bodyLarge'}}>Held a workshop and created a design cheatsheet for early stage founders</div>
                    </Box>

                    <Box sx = {{variant: 'layouts.newsGridItem'}}>
                        <Styled.h3 sx = {{mb: '16px'}}>Ownpath Masterclass</Styled.h3>
                        <div sx = {{variant: 'text.bodyLarge'}}>Taught design thinking at the Ownpath product design fellowship.</div>
                    </Box>

                    <Box sx = {{variant: 'layouts.newsGridItem'}}>
                        <Styled.h3 sx = {{mb: '16px'}}>10kdesigners masterclass</Styled.h3>
                        <div sx = {{variant: 'text.bodyLarge'}}>Taught visual design at the 10kdesigners UI/UX design masterclass.</div>
                    </Box>

                </Grid>


            </Flex>

    </Flex>

    )
}

