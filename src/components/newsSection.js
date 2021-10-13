/** @jsx jsx */
import { jsx, Box, Flex, Grid } from 'theme-ui';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function NewsSection() {
	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);

	//Background and cursor change

	useEffect(() => {
		var item = document.querySelectorAll('.bgchange');
		var cursor = document.querySelector('.cursor');
		var navbar = document.querySelectorAll('.navbar-link')

		const colors = {
			transparent: 'rgba(0,0,0,0)',
			white: '#F6F7EB',
			darkGrey: '#131112',
		};

		gsap.timeline({
			scrollTrigger: {
				trigger: document.querySelector('#news'),
				start: 'top 70%',
				toggleActions: 'play none none reverse',
				onEnter: () => {
					gsap.to(item, { backgroundColor: colors.white });
					gsap.to(cursor, { borderColor: colors.darkGrey });
					gsap.to(navbar, {color: colors.darkGrey});
				},

				onLeaveBack: () => {
					gsap.to(item, { backgroundColor: colors.darkGrey });
					gsap.to(cursor, { borderColor: colors.white });
					gsap.to(navbar, {color: colors.white});
				},
			},
		});
	}, []);

	//Fade in

	useEffect(() => {
		const element = ref.current;
		var heading = element.querySelector('#newsSectionHeading');
		var arr = heading.querySelectorAll(
			'#newsSectionHeading .word > .char, .whitespace',
		);
		var newsGrid = element.querySelector('#newsSectionGrid');
		var newsArr = newsGrid.querySelectorAll('div');

		const timelineSettings = {
			staggerValue: 0.014,
			charsDuration: 0.8,
			newsDuration: 1,
			newsStaggerValue: 0.05,
		};

		gsap
			.timeline({
				scrollTrigger: {
					trigger: document.querySelector('#newsSectionHeading'),
					start: 'top 50%',
				},
			})
			.set(arr, {
				y: '80%',
				opacity: 0,
			})
			.set(newsArr, {
				opacity: 0,
				y: '10%',
			})
			.to(
				arr,
				{
					duration: timelineSettings.charsDuration,
					ease: 'Power3.easeOut',
					y: '0%',
					opacity: 1,
					stagger: timelineSettings.staggerValue,
				},
				'start',
			)
			.to(
				newsArr,
				{
					duration: timelineSettings.newsDuration,
					ease: 'Power3.easeOut',
					opacity: 1,
					y: '0%',
					stagger: timelineSettings.newsStaggerValue,
				},
				'>-0.5',
			);
	}, []);

	return (
		<Flex sx={{ margin: '20vh 0' }}>
			<Flex ref={ref} sx={{ variant: 'layouts.responsiveFlex', width: '100%' }}>
				<Box
					id="newsSectionHeading"
					sx={{
						width: '30%',
						mr: '10%',

						'@media screen and (max-width: 1024px)': {
							width: '100%',
							margin: '0 auto',
							mb: 80,
						},
					}}
				>
					<h1 sx={{ variant: 'text.h1' }} data-splitting="">
						What we’ve been up to.
					</h1>
				</Box>

				<Grid id="newsSectionGrid" sx={{ variant: 'layouts.newsGrid' }}>
					<Box sx={{ variant: 'layouts.newsGridItem' }}>
						<h4 sx={{ mb: '0.5em', variant: 'text.customHeading' }}>
							Antler India Founders Program
						</h4>
						<div sx={{ variant: 'text.bodyLarge' }}>
							Advising early-stage founders through design-thinking workshops
							and office hours.
							<br />
						</div>
						<a
							sx={{
								variant: 'text.bodyLarge',
								display: 'block',
								padding: '0.5em 0 0 0',
								color: 'orange',
							}}
							href="/downloads/Prophecy-Product-Design-Cheatsheet.pdf"
							target="_blank"
						>
							View product design cheatsheet
						</a>
					</Box>

					<Box sx={{ variant: 'layouts.newsGridItem' }}>
						<h4 sx={{ mb: '0.5em', variant: 'text.customHeading' }}>
							Ownpath Masterclass
						</h4>
						<div sx={{ variant: 'text.bodyLarge' }}>
							Taught design thinking and interaction design as part of the
							Ownpath Product Design fellowship.
						</div>
					</Box>

					<Box sx={{ variant: 'layouts.newsGridItem' }}>
						<h4 sx={{ mb: '0.5em', variant: 'text.customHeading' }}>
							BX Design Program
						</h4>
						<div sx={{ variant: 'text.bodyLarge' }}>
							Teaching the Brand Experience Design program. Cohort 1 of the
							program is currently underway.
						</div>
					</Box>
				</Grid>
			</Flex>
		</Flex>
	);
}
