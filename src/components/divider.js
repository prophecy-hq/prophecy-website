/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui';
import { useRef, useEffect } from 'react';


export default function Divider(props) {

    return(
	<Box sx={{ variant: 'layouts.divider' }}>
        <svg style={{ width: '100%', height: '1px' }}>
            <line
                id={props.id}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
                style={{ fill: 'none', stroke: '#f6f7eb', strokeWidth: '1px' }}
            />
        </svg>
    </Box>
    )
}
