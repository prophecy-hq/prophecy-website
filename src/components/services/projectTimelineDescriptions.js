/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui';
import { useRef, useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ProjectTimelineDescription(props) {
	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);

	return (
		<Flex sx={{ flexDirection:'column', mb: [48,64] }}>
                <h3 sx = {{variant: 'text.h3', mb: [16,24]}}>{props.heading}</h3>
                <div sx={{ variant: 'text.bodySmall'}}>{props.description}</div>
		</Flex>
	);
}
