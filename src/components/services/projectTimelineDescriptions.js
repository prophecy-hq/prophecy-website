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
                <h5 sx = {{variant: 'text.h5', mb: 16, fontSize: [18,21]}}>{props.heading}</h5>
                <div className = "low-opacity" sx={{ variant: 'text.bodySmall'}}>{props.description}</div>
		</Flex>
	);
}
