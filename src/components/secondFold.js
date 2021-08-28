/** @jsx jsx */
import { jsx, Styled, Box } from 'theme-ui';
import { useRef, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SecondFold() {
	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);

	useEffect(() => {
		const element = ref.current;
		var text1 = document.querySelector('#secondFold1');
		var text2 = document.querySelector('#secondFold2');
		var text3 = document.querySelector('#secondFold3');
		var text4 = document.querySelector('#secondFold4');
		var text5 = document.querySelector('#secondFold5');

		//First para
		gsap
			.timeline({
				scrollTrigger: {
					trigger: document.querySelector('#secondFold1'),
					start: 'bottom 80%',
				},
			})
			.fromTo(
				text1,
				{
					y: '60%',
					opacity: 0,
				},
				{
					ease: 'Power3.easeOut',
					y: '0%',
					opacity: 1,
					duration: 1,
				},
			);

		//Second para
		gsap
			.timeline({
				scrollTrigger: {
					trigger: document.querySelector('#secondFold2'),
					start: 'bottom 80%',
				},
			})
			.fromTo(
				text2,
				{
					y: '60%',
					opacity: 0,
				},
				{
					ease: 'Power3.easeOut',
					y: '0%',
					opacity: 1,
					duration: 1,
				},
			);

		//Third para
		gsap
			.timeline({
				scrollTrigger: {
					trigger: document.querySelector('#secondFold3'),
					start: 'bottom 80%',
				},
			})
			.fromTo(
				text3,
				{
					y: '60%',
					opacity: 0,
				},
				{
					ease: 'Power3.easeOut',
					y: '0%',
					opacity: 1,
					duration: 1,
				},
			);

		//Fourth para
		gsap
			.timeline({
				scrollTrigger: {
					trigger: document.querySelector('#secondFold4'),
					start: 'bottom 80%',
				},
			})
			.fromTo(
				text4,
				{
					y: '60%',
					opacity: 0,
				},
				{
					ease: 'Power3.easeOut',
					y: '0%',
					opacity: 1,
					duration: 1,
				},
			);

		//Fifth para
		gsap
			.timeline({
				scrollTrigger: {
					trigger: document.querySelector('#secondFold5'),
					start: 'bottom 80%',
				},
			})
			.fromTo(
				text5,
				{
					y: '60%',
					opacity: 0,
				},
				{
					ease: 'Power3.easeOut',
					y: '0%',
					opacity: 1,
					duration: 1,
				},
			);
	}, []);

	return (
		<Box ref={ref} sx={{ variant: 'layouts.leftContent', color: 'white' }}>
			<h2 sx={{ variant: 'text.h2', mb: '20vh' }} id="secondFold1">
				Design means more to us than aesthetics, wireframes, AB tests, lowering
				CAC or increasing MAU.
			</h2>

			<h2 sx={{ variant: 'text.h2', mb: '20vh' }} id="secondFold2">
				We design for people — their values, fears and dreams — their stories,
				not just numbers on an engagement chart.
			</h2>

			<h2 sx={{ variant: 'text.h2', mb: '20vh' }} id="secondFold3">
				To help people save time, find joy, overcome fears, achieve dreams, and
				sometimes even save lives.
			</h2>

			<h2 sx={{ variant: 'text.h2', mb: '20vh' }} id="secondFold4">
				We hypothesise, experiment and test. We question every assumption. We
				diagnose before we prescribe.
			</h2>

			<h2 sx={{ variant: 'text.h2', mb: '20vh' }} id="secondFold5">
				To find simple solutions for complex problems, that realise the future
				you envision.
			</h2>
		</Box>
	);
}
