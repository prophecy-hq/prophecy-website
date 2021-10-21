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
                <div sx = {{variant: 'text.customHeading', mr: [40,24], mb: 24, fontSize: [32,40] }}>{props.number}</div>
                <Flex sx = {{flexDirection: 'column', mb: [48,40]}}>
                    <h3 sx={{ variant: 'text.customHeading', mb: 16, fontSize: [32,40] }}>{props.title}</h3>
                    <div className = "low-opacity" sx = {{variant: 'text.bodySmall'}}>{props.subtitle}</div>
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
