/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui';
import { useRef, useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../splitting/dist/splitting.css';
import '../../splitting/dist/splitting-cells.css';
import Splitting from '../../splitting/dist/splitting';

import ProjectTimelineBlock from './projectTimelineBlock';
import Divider from '../divider';

export default function ProjectTimeline() {
	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);

    useEffect(() => {


		const element = ref.current;
		var text = element.querySelector('.staggerAnimation');
		var arr = text.querySelectorAll(
			'.staggerAnimation .word > .char, .whitespace',
		);

        var divider1 = element.querySelector('#divider-1');
        var divider2 = element.querySelector('#divider-2');
        var divider3 = element.querySelector('#divider-3');


        var leftArr1  = element.querySelector('#leftId-1');
        var leftArr2  = element.querySelector('#leftId-2');
        var leftArr3  = element.querySelector('#leftId-3');

        var rightArr1  = element.querySelector('#rightId-1').querySelectorAll('#rightId-1 > div');
        var rightArr2  = element.querySelector('#rightId-2').querySelectorAll('#rightId-2 > div');
        var rightArr3  = element.querySelector('#rightId-3').querySelectorAll('#rightId-3 > div');

        var lowOpacity = element.querySelectorAll('.low-opacity');

        const timelineSettings = {
			charsStaggerValue: 0.014,
			charsDuration: 0.8,
            staggerValue: 0.2,
            duration: 1,
            opacity: 0.8
		};

  
        // Line animation

        function createLineTween(svg) {
        var len = dist(
            svg.x1.baseVal.value,
            svg.x2.baseVal.value,
            svg.y1.baseVal.value,
            svg.y2.baseVal.value,
        );
        var pathObject = { length: 0, pathLength: len };
        var tween = gsap.to(pathObject, {
            duration: 0.5,
            length: pathObject.pathLength,
            onUpdate: drawLine,
            onUpdateParams: [pathObject, svg],
            immediateRender: true,
        });
        return tween;
    }

    function dist(x1, x2, y1, y2) {
        return Math.sqrt((x2 -= x1) * x2 + (y2 -= y1) * y2);
    }

    function drawLine(obj, svg) {
        svg.style.strokeDasharray = [obj.length, obj.pathLength].join(' ');
    }




    //Block 1

	gsap.timeline({
            scrollTrigger: {
                trigger: element.querySelector('#services-section'),
                start: 'top 50%',
            }
        })
		.set(arr, {
			y: '80%',
			opacity: 0,
		})
        .set(leftArr1, {
            y: '20%',
            opacity: 0,
        })
        .set(rightArr1, {
            y: '20%',
            opacity: 0,
        })

		.to(
			arr,
			{
				duration: timelineSettings.charsDuration,
				ease: 'Power3.easeOut',
				y: '0%',
				opacity: 1,
				stagger: timelineSettings.charsStaggerValue,
			},
			'start',
		)
        
        .add(createLineTween(divider1), '>-1')
        .to(
			leftArr1,
			{
				duration: timelineSettings.duration,
				ease: 'Power3.easeOut',
				y: '0%',
				opacity: 1,
				stagger: timelineSettings.staggerValue,
			},
			'<',
		)
        .to(
			rightArr1,
			{
				duration: timelineSettings.duration,
				ease: 'Power3.easeOut',
				y: '0%',
				opacity: 1,
				stagger: timelineSettings.staggerValue,
			},
			'>-0.8',
		)
        .to(
            lowOpacity,
            {                   
                opacity: timelineSettings.opacity,
                
            },
            '>'
        )
        ;





    //Block 2

	gsap.timeline({
        scrollTrigger: {
            trigger: element.querySelector('#leftId-2'),
            start: 'top 50%',
        }
    })
    .set(leftArr2, {
        y: '20%',
        opacity: 0,
    })
    .set(rightArr2, {
        y: '20%',
        opacity: 0,
    }) 
    .add(createLineTween(divider2), 'start')
    .to(
        leftArr2,
        {
            duration: timelineSettings.duration,
            ease: 'Power3.easeOut',
            y: '0%',
            opacity: 1,
            stagger: timelineSettings.staggerValue,
        },
        '<+0.1',
    )
    .to(
        rightArr2,
        {
            duration: timelineSettings.duration,
            ease: 'Power3.easeOut',
            y: '0%',
            opacity: 1,
            stagger: timelineSettings.staggerValue,
        },
        '>-0.8',
    )
    .to(
        lowOpacity,
        {                   
            opacity: timelineSettings.opacity,
            
        },
        '>'
    )

    ;


    //Block 3

	gsap.timeline({
        scrollTrigger: {
            trigger: element.querySelector('#leftId-3'),
            start: 'top 50%',
        }
    })
    .set(leftArr3, {
        y: '20%',
        opacity: 0,
    })
    .set(rightArr3, {
        y: '20%',
        opacity: 0,
    }) 
    .add(createLineTween(divider3), 'start')
    .to(
        leftArr3,
        {
            duration: timelineSettings.duration,
            ease: 'Power3.easeOut',
            y: '0%',
            opacity: 1,
            stagger: timelineSettings.staggerValue,
        },
        '<0.1',
    )
    .to(
        rightArr3,
        {
            duration: timelineSettings.duration,
            ease: 'Power3.easeOut',
            y: '0%',
            opacity: 1,
            stagger: timelineSettings.staggerValue,
        },
        '>-0.8',
    )
    .to(
        lowOpacity,
        {                   
            opacity: timelineSettings.opacity,
            
        },
        '>'
    )

    ;

      

    }, []);



	return (
        <Flex ref = {ref} sx = {{width :'100%', flexDirection: 'column',mt: ['30vh','50vh'], mb: ['20vh','20vh']}}>

            <Box id = "services-section"
                ref={ref}
                sx={{  color: 'white', variant: 'layouts.rightContent', textAlign: 'right', mb: [64,80] }}
            >
                <h1
                    sx={{ variant: 'text.h1', marginTop: '80px', mb: [40,32], color: 'lightRed',
                
                    '@media screen and (max-width: 1024px)': {
                        textAlign: 'left',
                    },}}
                    data-splitting=""
                    className="staggerAnimation"
                >
                    What a project with us might look like.
                </h1>

            </Box>

            <Divider id = "divider-1" />
        
            <ProjectTimelineBlock 
                number = "01"
                title = "Discover & Strategise"
                leftId = "leftId-1"
                rightId = "rightId-1"
                subtitle = "A product strategy is put in place through aligning clients’ visions with our findings through continuous research and testing."
                heading1 = "5 days to user feedback"
                description1 = "Through design sprints, we have a testable prototype for clients’ riskiest hypothesis within the first week of the project, enabling clients to validate critical assumptions. "
                heading2 = "Iterative research & testing"
                description2 = "In order to identify true differentiators for the product, we understand what people’s unmet needs are through weekly research and testing."
                heading3 = "Product strategy"
                description3 = "There is a clear picture of the core feature set and positioning of the product by the end of this phase."
            />

            <Divider id = "divider-2" />


            <ProjectTimelineBlock 
                number = "02"
                title = "Build the experience"
                leftId = "leftId-2"
                rightId = "rightId-2"
                subtitle = "Once the strategy is in place, we start working with engineers and go deep into traditional product design to build flows and screens that inspire."
                heading1 = "Product design"
                description1 = "We obsess over each pixel and each user to create intuitive UX coupled with beautiful UI to create a product that has delight packed in every corner."
                heading2 = "Brand experience"
                description2 = "In addition to the product, the brand experience around it is also built. The communication, language and visuals and the ecosystem around the product."
                heading3 = "Launch early"
                description3 = "We work with engineers to release an alpha version early to learn the shortcomings and strengths of the product. We keep refining the product based on incoming data from the launch."
            />    


            <Divider id = "divider-3" />


            <ProjectTimelineBlock 
                number = "03"
                title = "Refine & Ship"
                leftId = "leftId-3"
                rightId = "rightId-3"
                subtitle = "With real-world feedback coming in from the alpha, we refine the product to make it the best version possible. We leave it with documentation and systems in place so your team can carry it forward."
                heading1 = "Learn & improve"
                description1 = "Usage analytics from the alpha helps us figure out what to improve in the product before the final launch. We iron out any emerging edge and error cases."
                heading2 = "Design system"
                description2 = "A completely customisable, well documented, and scalable design system is delivered for the internal team to take forward."
                heading3 = "Documentation"
                description3 = "Our work, process, recommendations, guidelines and decisions are documented in an easy-to-browse format."
            />     

        </Flex>
	);
}
