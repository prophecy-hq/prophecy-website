/** @jsx jsx */
import { jsx, Styled, Box, IconButton,} from 'theme-ui';
import React from 'react';
import CopyLottie from './copyLottie.jsx'

export default class ContactUs extends React.Component {

    render(){
        return(
            <Box sx={{variant: 'layouts.statbox'}}>
                <Styled.h2>Write to us</Styled.h2>
                <span sx ={{variant: 'text.bodySmall'}}>hello@prophecy.one</span>
                <span onClick={() => {navigator.clipboard.writeText('hello@prophecy.one')}}>
                    <CopyLottie />
                </span>
            </Box>
        )
    }
}