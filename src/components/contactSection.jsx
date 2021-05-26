
/** @jsx jsx */
import { jsx, Styled, Box, Flex, Input} from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';
import Form from './form'

export default class ContactSection extends React.Component {

    render(){
        return(
            <Flex sx = {{height: '100vh',color: 'darkGrey', alignItems: 'center'}}>
                <Flex sx = {{variant: 'layouts.responsiveFlex', width: '100%'}}>

                

                <Box sx = {{variant: 'layouts.flexLeft'}}>
                    <Box sx = {{variant: 'text.contactHeading'}}>
                        Reach out
                    </Box>
                 </Box>

                <Box sx = {{variant: 'layouts.contactLine'}}> 
                    <svg  style={{width: '100%', height: '100%'}}>
                        <line x1="0%" y1="0%" x2="100%" y2="100%"
                        style={{fill:'none', stroke:'#131112', strokeWidth:'1px'}} />
                    </svg>
                 </Box>  

                <Flex sx = {{flexDirection: 'column', variant: 'layouts.flexRight'}}>

                    <Styled.h1 sx = {{mb: 24}}>hello@prophecy.one</Styled.h1>
                            {/* <div 
                                sx = {{variant: 'layouts.link'}}  
                                onClick = {() => {navigator.clipboard.writeText('hello@prophecy.one')}}>
                                    Copy
                            </div> */}
                   

                    <Box sx = {{variant: 'text.bodyLarge', mb: 96}}>
                        Tell us about your product, goals, challenges, timeline, and budget.
                    </Box>

                        <Flex sx = {{variant: 'layouts.responsiveFlex'}}>

                            <Box sx = {{mr: 80}}>
                                <Styled.h3>Sign up to our newsletter</Styled.h3>
                                <Form />
                            </Box>

                            <Flex sx = {{flexDirection: 'column'}}>
                                <Styled.h3>Follow us</Styled.h3>
                                <Link sx ={{variant: 'text.bodyLarge'}} href = "https://twitter.com/prophecy_hq" target="_blank">Twitter</Link>
                                <Link sx ={{variant: 'text.bodyLarge'}} href = "https://www.linkedin.com/company/69346346/" target="_blank">LinkedIn</Link>    
                            </Flex>
                        </Flex>

                    </Flex>
                </Flex>
                    
            </Flex>

        )
    }
}


