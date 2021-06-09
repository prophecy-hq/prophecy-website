
/** @jsx jsx */
import { jsx, Styled, Box, Flex, Grid, Image} from 'theme-ui';
import {useRef, useEffect} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


//=== Client logos =======
import Ajio from '../images/clientLogos/AjioLogo.svg'
import Barclays from '../images/clientLogos/BarclaysLogo.svg'
import Cookpad from '../images/clientLogos/CookpadLogo.svg'
import Gradeup from '../images/clientLogos/GradeupLogo.svg'
import Graphy from '../images/clientLogos/GraphyLogo.svg'
import Ikea from '../images/clientLogos/IkeaLogo.svg'
import Kalaari from '../images/clientLogos/KalaariLogo.svg'
import Kotak from '../images/clientLogos/KotakLogo.svg'
import Luminovo from '../images/clientLogos/LuminovoLogo.svg'
import Ola from '../images/clientLogos/OlaLogo.svg'
import Orderhive from '../images/clientLogos/OrderhiveLogo.svg'
import RTSL from '../images/clientLogos/RTSLLogo.svg'
import Siemens from '../images/clientLogos/SiemensLogo.svg'
import Simple from '../images/clientLogos/SimpleLogo.svg'
import Smallcase from '../images/clientLogos/smallcaseLogo.svg'
import Start from '../images/clientLogos/STARTLogo.svg'
import Unacademy from '../images/clientLogos/UnacademyLogo.svg'
import Zeffo from '../images/clientLogos/ZeffoLogo.svg'





export default function ClientSection() {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    //======== Background and cursor change ==========

    useEffect(() => {
        var item = document.querySelector('.bgchange');
        var cursor = document.querySelector('.cursor');

        const colors = {
            transparent: 'rgba(0,0,0,0)',
            white: '#F6F7EB',
            darkGrey: '#131112'
        }
        
        gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector("#recognition"),
                start: "top 85%",
                toggleActions: "play none none reverse",

                onEnter: () => {gsap.to(item, {backgroundColor: colors.darkGrey})
                                gsap.to(cursor, {borderColor: colors.white})},

                onLeaveBack: () => {gsap.to(item, {backgroundColor: colors.white})
                                    gsap.to(cursor, {borderColor: colors.darkGrey})}, 
            }
        })

    },[])


    // ========= Main animation ==========

    useEffect(() => {
        const element = ref.current;
        var heading = element.querySelector('#clientSectionHeading');
        var subheading = element.querySelector('#clientSectionSubheading');
        var arr =  heading.querySelectorAll('#clientSectionHeading .word > .char, .whitespace');
        var clientsGrid = element.querySelector('#clientsGrid');
        var clientsArr = clientsGrid.querySelectorAll('img');

        
        
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

        .to(arr, timelineSettings.charsDuration, 
            {
                ease: 'Power3.easeOut',
                y: '0%',
                opacity: 1,
                stagger: timelineSettings.staggerValue,
            },
             'start')


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

        .to(clientsArr,timelineSettings.clientsDuration,
             {
                ease: 'Power3.easeOut',
                opacity: 1,
                stagger: timelineSettings.clientsStaggerValue
            },'<+0.4')


    },[])




    return(
            
        <Flex ref = {ref} sx = {{ variant: 'layouts.fullHeightFlex', color: 'lightRed'}}>
            <Flex sx ={{alignItems: 'top', variant: 'layouts.responsiveFlex'
        }}>

            <Box sx = {{width: '40%',   
                '@media screen and (max-width: 1024px)': {
                    width: '100%'
                },
            
        }}>
                <h1 sx = {{variant: 'text.h1'}} id = "clientSectionHeading" data-splitting = "">We bring in experience from startups and established companies.</h1>
                <div id = "clientSectionSubheading" sx = {{color: 'white', variant: 'text.bodyLarge', mt: 32}}>Working in healthcare, finance, education and enterprise applications.</div>
            </Box>
            
            <Grid id = "clientsGrid" sx = {{variant: 'layouts.responsiveGrid'}} >
                <Image sx = {{variant: 'images.clientLogo'}} src = {Ikea} />
                <Image sx = {{variant: 'images.clientLogo'}} src = {Smallcase} />
                <Image sx = {{variant: 'images.clientLogo'}} src = {Unacademy} />
                <Image sx = {{variant: 'images.clientLogo'}} src = {Graphy} />
                <Image sx = {{variant: 'images.clientLogo'}} src = {Simple} />
                <Image sx = {{variant: 'images.clientLogo'}} src = {Gradeup} />
                <Image sx = {{variant: 'images.clientLogo'}} src = {RTSL} />
                <Image sx = {{variant: 'images.clientLogo'}} src = {Luminovo} />
                <Image sx = {{variant: 'images.clientLogo'}} src = {Orderhive} />
                <Image sx = {{variant: 'images.clientLogo'}} src = {Kalaari} />
                <Image sx = {{variant: 'images.clientLogo'}} src = {Zeffo} />
                <Image sx = {{variant: 'images.clientLogo'}} src = {Cookpad} />
                <Image sx = {{variant: 'images.clientLogo'}} src = {Siemens} />
                <Image sx = {{variant: 'images.clientLogo'}} src = {Ajio} />
                <Image sx = {{variant: 'images.clientLogo'}} src = {Start} />
                <Image sx = {{variant: 'images.clientLogo'}} src = {Barclays} />
                <Image sx = {{variant: 'images.clientLogo'}} src = {Kotak} />
                <Image sx = {{variant: 'images.clientLogo'}} src = {Ola} />
            </Grid>

            </Flex>

        </Flex>

        )
}


