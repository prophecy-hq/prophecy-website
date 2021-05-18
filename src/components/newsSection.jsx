
/** @jsx jsx */
import { jsx, Styled, Box, Flex} from 'theme-ui';
import React from 'react';

export default class NewsSection extends React.Component {

    render(){
        return(
            
        <Flex>

            <Box>
                <Styled.h1>What we’ve been up to.</Styled.h1>
            </Box>

            <Box>
                <Styled.h3>Antler Workshop</Styled.h3>
                <div sx = {{variant: 'text.bodyLarge'}}>Held a workshop and also created a design cheatsheet for early stage founders</div>
            </Box>

            <Box>
                <Styled.h3>Ownpath Masterclass</Styled.h3>
                <div sx = {{variant: 'text.bodyLarge'}}>Taught design thinking at Ownpath fellowship</div>
            </Box>


        </Flex>

        )
    }
}

