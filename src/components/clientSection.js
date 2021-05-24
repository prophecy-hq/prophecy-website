
/** @jsx jsx */
import { jsx, Styled, Box, Flex, Grid} from 'theme-ui';
import {useRef, useEffect} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ClientSection() {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);



    useEffect(() => {
        var heading = document.querySelector('#clientSectionHeading');
        var subheading = document.querySelector('#clientSectionSubheading');
        var arr =  heading.querySelectorAll('#clientSectionHeading .word > .char, .whitespace');
        var clientsGrid = document.querySelector('#clientsGrid');
        var clientsArr = clientsGrid.querySelectorAll('div');
        
        
        const timelineSettings = {
            staggerValue: 0.014,
            charsDuration: 0.8,
            clientsDuration: 1,
            clientsStaggerValue: 0.034
        };


        gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector("#clientSectionHeading"),
                start: "top 50%",
            }
        })

    // ========== Initial states ==========
        
        .set(arr, 
            {
                y: '80%',
                opacity: 0,
            })
        .set(clientsArr,
                {
                    opacity: 0,
        })


    // ========== Heading animation ==========

        .staggerTo(arr, timelineSettings.charsDuration, 
            {
                ease: 'Power3.easeOut',
                y: '0%',
                opacity: 1,
            },
            timelineSettings.staggerValue, 'start')


    // ========== Subheading animation ==========

        .fromTo(subheading,
            {
                y: '60%',
                opacity: 0,
            },
            {
                ease: 'Power3.easeOut',
                y: '0%',
                opacity: 1,
                duration: 1
            }, '>-0.5'
        )

        // ========== Clients animation ==========

        .staggerTo(clientsArr,timelineSettings.clientsDuration,
             {
                ease: 'Power3.easeOut',
                opacity: 1,
            }, timelineSettings.clientsStaggerValue,'<+0.4')


    },[])




    return(
            
        <Flex ref = {ref} sx = {{ height: '100vh', color: 'lightRed', alignItems: 'center' }}>
            <Flex sx ={{alignItems: 'top', height: '50%', variant: 'layouts.responsiveFlex'
        }}>

            <Box sx = {{width: '40%',   
                '@media screen and (max-width: 1024px)': {
                    width: '100%'
                },
            
        }}>
                <Styled.h1 id = "clientSectionHeading" data-splitting = "">We bring in experience from startups and established companies.</Styled.h1>
                <div id = "clientSectionSubheading" sx = {{variant: 'text.bodyLarge', mt: 32}}>Working in healthcare, finance, education and enterprise applications.</div>
            </Box>
            
            <Grid id = "clientsGrid" sx = {{variant: 'layouts.responsiveGrid', marginLeft: '10%'}} >
                <Box>Client</Box>
                <Box>Client</Box>
                <Box>Client</Box>
                <Box>Client</Box>
                <Box>Client</Box>
                <Box>Client</Box>
                <Box>Client</Box>
                <Box>Client</Box>
                <Box>Client</Box>
            </Grid>

            </Flex>

        </Flex>

        )
}


