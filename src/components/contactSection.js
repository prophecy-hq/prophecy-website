/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui';
import { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import Form from './form';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { _colorStringFilter } from 'gsap/gsap-core';

export default function ContactSection() {
	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);

	useEffect(() => {
		const element = ref.current;
		var line = document.querySelector('#contactLine');
		var heading = document.querySelector('#contactSectionHeading');
		var arr = heading.querySelectorAll(
			'#contactSectionHeading .word > .char, .whitespace',
		);

		var navbar = document.querySelectorAll('.navbar-link');

		var arr1 = document.querySelectorAll('.staggerContact');

		const timeline = gsap.timeline();

		timeline.play();

		const timelineSettings = {
			staggerValue: 0.034,
			charsDuration: 1,
			rightDuration: 1,
			rightStaggerValue: 0.2,
		};

		gsap
			.timeline({
				scrollTrigger: {
					trigger: document.querySelector('#contactSectionHeading'),
					start: 'top 60%',
				},
			})

			//Setting initial values
			.set(arr, {
				y: '80%',
				opacity: 0,
			})
			.set(arr1, {
				y: '10%',
				opacity: 0,
			})

			//Heading
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

			//Line
			.add(createLineTween(line), '>-0.5')

			//Right side
			.to(
				arr1,
				{
					duration: timelineSettings.rightDuration,
					ease: 'Power3.easeOut',
					y: '0%',
					opacity: 1,
					stagger: timelineSettings.rightStaggerValue,
				},
				'>-0.2',
			);
	}, []);

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

	return (
		<Flex sx={{ variant: 'layouts.fullHeightFlex', color: 'darkGrey' }}>
			<Flex ref={ref} sx={{ variant: 'layouts.responsiveFlex', width: '100%' }}>
				<Box sx={{ variant: 'layouts.flexLeft' }}>
					<Box
						id="contactSectionHeading"
						sx={{ variant: 'text.contactHeading' }}
						data-splitting=""
					>
						Say hello
					</Box>
				</Box>

				<Box sx={{ variant: 'layouts.contactLine' }}>
					<svg style={{ width: '100%', height: '100%' }}>
						<line
							id="contactLine"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="100%"
							style={{ fill: 'none', stroke: '#131112', strokeWidth: '1px' }}
						/>
					</svg>
				</Box>

				<Flex sx={{ flexDirection: 'column', variant: 'layouts.flexRight' }}>
					<Box className="staggerContact">
						<Box>
							<h1 sx={{ mb: 24, variant: 'text.h1' }}>hello@prophecy.one</h1>
						</Box>
						{/* <span 
                                sx = {{variant: 'text.link'}}  
                                onClick = {() => {navigator.clipboard.writeText('hello@prophecy.one')}}>
                                    Copy
                            </span> */}

						<Box sx={{ variant: 'text.bodyLarge', mb: 96 }}>
							Tell us about your product, goals, challenges, timeline, and
							budget.
						</Box>
					</Box>

					<Flex sx={{ variant: 'layouts.responsiveFlex' }}>
						<Box
							className="staggerContact"
							sx={{
								mr: 80,
								'@media screen and (max-width: 1024px)': {
									pb: 80,
								},
							}}
						>
							<h4 sx={{ mb: 16, variant: 'text.customHeading' }}>
								Sign up to our newsletter
							</h4>
							<Form />
						</Box>

						<Flex className="staggerContact" sx={{ flexDirection: 'column' }}>
							<h4 sx={{ mb: 16, variant: 'text.customHeading' }}>Follow us</h4>
							<Link
								sx={{
									variant: 'text.bodyLarge',
									mb: '16px',
									fontStyle: 'italic',
									fontSize: [21, 24],
									color: 'darkGrey',
								}}
								href="https://twitter.com/prophecy_hq"
								target="_blank"
							>
								Twitter
							</Link>
							<Link
								sx={{
									variant: 'text.bodyLarge',
									fontStyle: 'italic',
									fontSize: [21, 24],
									color: 'darkGrey',
								}}
								href="https://www.linkedin.com/company/69346346/"
								target="_blank"
							>
								LinkedIn
							</Link>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
