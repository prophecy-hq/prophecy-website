/** @jsx jsx */
import { jsx, Box, Grid, Flex, Image } from 'theme-ui';
import { useRef, useEffect } from 'react';
import '../../splitting/dist/splitting.css';
import '../../splitting/dist/splitting-cells.css';
import Splitting from '../../splitting/dist/splitting';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


//Icons
import Target from '../../images/icons/target.svg';
import Search from '../../images/icons/search.svg';
import Compass from '../../images/icons/compass.svg';
import Users from '../../images/icons/users.svg';


export default function ServicesFirstFold() {

    gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);

	useEffect(() => {
		if (ref) {
			let splitRes = Splitting();
		}

		const element = ref.current;
		var text = element.querySelector('.staggerAnimation');
		var arr = text.querySelectorAll(
			'.staggerAnimation .word > .char, .whitespace',
		);

        var subheading = element.querySelector('#subheading');

		var servicesGrid = element.querySelector('#servicesGrid');
		var servicesArr = servicesGrid.querySelectorAll('div');
        var servicesBody = element.querySelectorAll('.low-opacity');

		var navbar = document.querySelectorAll('.navbar-link')


		const timeline = gsap.timeline();

		const timelineSettings = {
			staggerValue: 0.014,
			charsDuration: 0.8,
            servicesDuration: 1.2,
			servicesStaggerValue: 0.1,
			opacity: 0.8
		};

		timeline.set(arr, {
			y: '80%',
			opacity: 0,
		});

		timeline.set(
			navbar,
			{
				color: '#F6F7EB',
			},
		);

        timeline.set(subheading, {
            y: '40%',
            opacity: 0
        });

		timeline.to(
			arr,
			{
				duration: timelineSettings.charsDuration,
				ease: 'Power3.easeOut',
				y: '0%',
				opacity: 1,
				stagger: timelineSettings.staggerValue,
			},
			'start',
		);

		timeline.to(
			navbar,
			{
				color: '#F6F7EB',
			},
			'<',
		)

        timeline.to(
			subheading,
			{
				duration: 0.4,
				y: '0%',
				opacity: 1,
			},
			'+0.6',
		);

		timeline.play();


        
        gsap
			.timeline({
				scrollTrigger: {
					trigger: document.querySelector('#servicesGrid'),
					start: 'top 50%',
				},
			})

			.set(servicesArr, {
				opacity: 0,
				y: '20%',
			})

    
			.to(
				servicesArr,
				{
					duration: timelineSettings.servicesDuration,
					opacity: 1,
					y: '0%',
					ease: 'Power3.easeOut',
					stagger: timelineSettings.servicesStaggerValue,
				},
				'start',
			)
            .to(
                servicesBody,
                {                   
                    opacity: timelineSettings.opacity,
                    
                },
                '>'
            );
      






	}, []);


	return (
		
    <Box ref={ref} > 
       
        <Box
			
			sx={{  color: 'white', variant: 'layouts.rightContent'}}
		>
			<h1
				sx={{ variant: 'text.h1', marginTop: '20vh', color: 'lightRed' }}
				data-splitting=""
				className="staggerAnimation"
			>
				We plan, build, and test together with you.
			</h1>

            <Box id = "subheading" sx={{ variant: 'text.bodyLarge', mt: '40px' }}>
                We work collaboratively as part of your team to help realise your vision through a tried-and-tested design process. 
            </Box>
		</Box>

        <Grid
            id="servicesGrid"
            columns={[2, '1fr 1fr']}
            sx={{ variant: 'layouts.servicesGrid' }}
        >
            <Flex sx={{ variant: 'layouts.servicesGridItem' }}>
                <Image src={Target} sx={{ mb: 24, height: '40px', width: '40px' }} />
                <h4 sx={{ mb: '8px',  variant: 'text.h4' }}>
                    From strategy to shipping
                </h4>
                <div className = "low-opacity" sx={{ variant: 'text.bodySmall' }}>
                Through continuous testing and research, we find what can differentiate and elevate your product. <div sx = {{mb: '24px'}} />

                Then we build out the product, from the brand experience to the tiniest interaction details in the UI. We never end a project without shipping.

                </div>
            </Flex>

            <Flex sx={{ variant: 'layouts.servicesGridItem' }}>
                <Image src={Search} sx={{ mb: 24, height: '40px', width: '40px' }} />
                <h4 sx={{ mb: '8px', variant: 'text.h4' }}>
                    Research-driven
                </h4>
                <div className = "low-opacity" sx={{ variant: 'text.bodySmall' }}>
                    User behaviour dictates what we build and how it works. UX research is embedded into all parts of our work. <div sx = {{mb: '24px'}} />

                    Stories from the lives of our users help us gain insight into their values, behaviours and unmet needs.
                </div>
            </Flex>

            <Flex sx={{ variant: 'layouts.servicesGridItem' }}>
                <Image src={Compass} sx={{ mb: 24, height: '40px', width: '40px' }} />
                <h4 sx={{ mb: '8px',  variant: 'text.h4' }}>
                    Continuous validation
                </h4>
                <div className = "low-opacity" sx={{ variant: 'text.bodySmall' }}>
                     Testing fast, early and cheaply takes place in every phase of our process.
                    <div sx = {{mb: '24px'}} />
                    Prototypes of multiple ideas are tested frequently to make sure the product is always moving in the right direction.
                </div>
            </Flex>

            <Flex sx={{ variant: 'layouts.servicesGridItem' }}>
                <Image src={Users} sx={{ mb: 24, height: '40px', width: '40px' }} />
                <h3 sx={{ mb: '8px',  variant: 'text.h4' }}>
                    The same team, throughout
                </h3>
                <div className = "low-opacity" sx={{ variant: 'text.bodySmall' }}>
                     We never work on on multiple projects at once. This ensures that clients have complete attention of our team for the project.
                    <div sx = {{mb: '24px'}} />
                    Our team is deliberately small and agile to move quickly through this process and work on the product end-to-end.
                </div>
            </Flex>

        </Grid>

    </Box>   


	);
}
