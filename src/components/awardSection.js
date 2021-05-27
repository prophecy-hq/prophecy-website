
/** @jsx jsx */
import { jsx, Styled, Box, Flex, Grid, Image} from 'theme-ui';
import {useRef, useEffect} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Award logos
import Core77 from '../images/awardLogos/Core77Logo.svg';
import FastCompany from '../images/awardLogos/FastCompanyLogo.svg';
import IxDA from '../images/awardLogos/IxDAAwardsLogo.svg';
import UXDA from '../images/awardLogos/UXDesignAwardsLogo.svg';


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
       
        <Flex sx = {{alignItems: 'flex-end', justifyContent: 'space-between', width: '100%',
            '@media screen and (max-width: 1024px)': {
                flexDirection: 'column-reverse',
            },}}>

                
                <Grid ref = {ref} id = "awardsGrid" columns={[2, '1fr 1fr']} sx = {{variant: 'layouts.awardsGrid'}}>
                
                    <Flex sx = {{variant: 'layouts.awardsGridItem'}} >
                        
                        <Image src = {IxDA} sx = {{mb: 24}}/>
                        <Styled.h3 sx = {{mb: '8px', maxWidth: '200px'}}>IxDA Interaction Awards 2020</Styled.h3>
                        <div sx = {{variant: 'text.awardDescription'}}>Best in Show</div>
                
                    </Flex>

                    <Flex sx = {{variant: 'layouts.awardsGridItem'}}>
                        
                        <Image src = {FastCompany} sx = {{mb: 24}} />
                        <Styled.h3 sx = {{mb: '8px', maxWidth: '200px'}}>Innovation by Design Awards</Styled.h3>
                        <div sx = {{variant: 'text.awardDescription'}}>Honourable Mention</div>
                
                    </Flex>



                    <Flex sx = {{variant: 'layouts.awardsGridItem'}}>
                        
                        <Image src = {UXDA} sx = {{mb: 24}} />
                        <Styled.h3 sx = {{mb: '8px', maxWidth: '200px'}}>UX Design Awards 2020</Styled.h3>
                        <div sx = {{variant: 'text.awardDescription'}}>New Talent</div>
                
                    </Flex>


                    <Flex sx = {{variant: 'layouts.awardsGridItem'}}>
                        
                        <Image src = {Core77} sx = {{mb: 24}} />
                        <Styled.h3 sx = {{mb: '8px', maxWidth: '200px'}}>Core77 Design Awards 2020</Styled.h3>
                        <div sx = {{variant: 'text.awardDescription'}}>Runner Up</div>

                    </Flex>

                    
                </Grid>


                <Box sx = {{flex: '1'}}>
                    <Styled.h1  
                        sx = {{color: 'lightRed',  marginLeft: 'auto', textAlign: 'right', width: '80%',
                        '@media screen and (max-width: 1024px)': {
                            width: '100%',
                            textAlign: 'left',
                        },   }} 
                        id = "awardSectionHeading" 
                        data-splitting = "">
                    We’ve also been recognised for it.</Styled.h1>
                </Box>


            </Flex>
        </Flex>

        )
}


