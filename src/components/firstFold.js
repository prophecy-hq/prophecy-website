/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { useRef, useEffect } from 'react';
import '../splitting/dist/splitting.css';
import '../splitting/dist/splitting-cells.css';
import Splitting from '../splitting/dist/splitting';
import { gsap } from 'gsap';

export default function FirstFold() {
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

		const timeline = gsap.timeline();

		const timelineSettings = {
			staggerValue: 0.014,
			charsDuration: 0.8,
		};

		timeline.set(arr, {
			y: '80%',
			opacity: 0,
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

		timeline.play();
	}, []);
	//   firstFoldAnimation();

	return (
		<Box
			ref={ref}
			sx={{ height: '100vh', color: 'white', variant: 'layouts.rightContent' }}
		>
			<h1
				sx={{ variant: 'text.h1', marginTop: '80px', color: 'lightRed' }}
				data-splitting=""
				className="staggerAnimation"
			>
				We help achieve&nbsp;
				<span className="whitespace">&nbsp;</span>
				<span sx={{ variant: 'text.italic', color: 'white' }}>
					&nbsp;big goals
				</span>
				&nbsp;through digital products that are people-centric, rigorously
				tested, and expertly crafted.
			</h1>
		</Box>
	);
}
