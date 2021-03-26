/** @jsx jsx */
import { jsx, Styled, Box, IconButton,} from 'theme-ui';
import React from 'react';
import CopyLottie from './copyLottie.jsx'

export default class ContactUs extends React.Component {
    state = {copied: false}

    showCopiedText = () => {
       
        navigator.clipboard.writeText('hello@prophecy.one')
        
        this.setState({copied: true});

        setTimeout(() => {
            this.setState({copied: false})
          }, 2000)
    }

    render(){
        return(
            <Box sx={{variant: 'layouts.statbox', height: '72px'}}>
                <Styled.h2>Write to us</Styled.h2>
                <span sx ={{variant: 'text.bodySmall'}}>hello@prophecy.one</span>
                <span onClick={() => { this.showCopiedText()}}>
                    <CopyLottie />
                </span>

                <p sx = {{variant: 'text.caption', visibility: this.state.copied ? 'visible' : 'hidden'}}>
                    Copied succesfully
                </p>
            </Box>
        )
    }
}