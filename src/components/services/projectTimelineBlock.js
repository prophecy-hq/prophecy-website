/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui';
import { useRef, useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ProjectTimelineDescription from './projectTimelineDescriptions';

export default function ProjectTimelineBlock(props) {
	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);

	return (
		<Flex sx={{ variant: 'layouts.responsiveFlex', color: 'white', mt: '80px' }}>
           
            <Flex id = {props.leftId} sx = {{width: ['100%','40%'], variant: 'layouts.responsiveFlex'}}>
                <div sx = {{variant: 'text.h2', mr: [40,24], mb: 24}}>{props.number}</div>
                <Flex sx = {{flexDirection: 'column', mb: [48,40]}}>
                    <h4 sx={{ variant: 'text.h4', mb: 16 }}>{props.title}</h4>
                    <div sx = {{variant: 'text.bodySmall'}}>{props.subtitle}</div>
                </Flex>
            </Flex>

            <Box sx = {{variant: 'layouts.flexBlankSpace'}}>
                
            </Box>

            <Flex id = {props.rightId} sx={{ flexDirection:'column', mr: '0px', variant: 'layouts.flexRight', maxWidth: '480px'}}>
                <ProjectTimelineDescription
                    heading = {props.heading1}
                    description = {props.description1}
                />

                <ProjectTimelineDescription
                    heading = {props.heading2}
                    description = {props.description2}
                />

                <ProjectTimelineDescription
                    heading = {props.heading3}
                    description = {props.description3}
                />

            </Flex>

		</Flex>
	);
}
