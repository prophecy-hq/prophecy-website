
/** @jsx jsx */
import { jsx, Styled, Box, Flex, Grid} from 'theme-ui';
import React from 'react';
import Award from './award'

export default class AwardSection extends React.Component {

    render(){
        return(
            
       <Flex sx ={{height: '100vh', alignItems: 'center'}}>
       <Flex sx = {{alignItems: 'flex-end', height: '50%'}}>

            
            <Grid columns={[2, '1fr 1fr']} sx = {{width: '50%', marginRight: '10%'}}>
                <Award title = 'Core77' description = 'Best in Show'/>
                <Award title = 'IxDa' description = 'Best in Show'/>
                <Award title = 'UXDA' description = 'Best in Show'/>
                <Award title = 'Fast Co' description = 'Best in Show'/>
            </Grid>

            <Box>
                <Styled.h1>We’ve also been recognised for it.</Styled.h1>
            </Box>


        </Flex>
        </Flex>

        )
    }
}


