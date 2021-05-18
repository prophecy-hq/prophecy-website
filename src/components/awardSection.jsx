
/** @jsx jsx */
import { jsx, Styled, Box, Flex, Grid} from 'theme-ui';
import React from 'react';

export default class AwardSection extends React.Component {

    render(){
        return(
            
        <Flex sx = {{height: '100vh'}}>

            
            <Grid columns={[2, '1fr 1fr']} sx = {{width: '50%', marginRight: '10%'}}>
                <Box>Award</Box>
                <Box>Award</Box>
                <Box>Award</Box>
                <Box>Award</Box>
            </Grid>

            <Box>
                <Styled.h1>We’ve also been recognised for it.</Styled.h1>
            </Box>


        </Flex>

        )
    }
}


