/** @jsx jsx */
import { jsx, Styled, Box, Link } from 'theme-ui';
import React from 'react';

export default class SocialLinks extends React.Component {

    render(){
        return(
            <Box sx={{variant: 'layouts.statbox'}}>
                <Styled.h2>Follow us</Styled.h2>
                <Link href = "https://www.twitter.com" target="_blank">Twtitter</Link>
                <Link href = "https://www.twitter.com" target="_blank">LinkedIn</Link>
            </Box>
        )
    }
}