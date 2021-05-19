
/** @jsx jsx */
import { jsx, Styled, Box, Flex, Grid} from 'theme-ui';
import React from 'react';

export default class ClientSection extends React.Component {

    render(){
        return(
            
        <Flex sx = {{ height: '100vh', color: 'lightRed', alignItems: 'center' }}>
            <Flex sx ={{alignItems: 'top', height: '50%', variant: 'layouts.responsiveFlex'
        }}>

            <Box sx = {{width: '40%',   
                '@media screen and (max-width: 1024px)': {
                    width: '100%'
                },
            
        }}>
                <Styled.h1>We bring in experience from startups and established companies.</Styled.h1>
                <div sx = {{variant: 'text.bodyLarge'}}>Working in healthcare, finance, education and enterprise applications.</div>
            </Box>
            
            <Grid sx = {{variant: 'layouts.responsiveGrid', marginLeft: '10%'}} >
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

        </Flex>

        )
    }
}


