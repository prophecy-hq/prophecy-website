
/** @jsx jsx */
import { jsx, Styled, Box, Flex, Grid} from 'theme-ui';
import React from 'react';

export default class ClientSection extends React.Component {

    render(){
        return(
            
        <Flex sx = {{ height: '100vh', color: 'lightRed'}}>

            <Box sx = {{width: '40%'}}>
                <Styled.h1>We bring in experience from startups and established companies.</Styled.h1>
                <div sx = {{variant: 'text.bodyLarge'}}>Working in healthcare, finance, education and enterprise applications.</div>
            </Box>
            
            <Grid columns={[3, '1fr 1fr 1fr']} sx = {{width: '50%', marginLeft: '10%'} }>
                <Box>Client</Box>
                <Box>Client</Box>
                <Box>Client</Box>
                <Box>Client</Box>
                <Box>Client</Box>
                <Box>Client</Box>
                <Box>Client</Box>
                <Box>Client</Box>
                <Box>Client</Box>
            </Grid>


        </Flex>

        )
    }
}


