
/** @jsx jsx */
import { jsx, Styled, Box, Flex, Input} from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';

export default class ContactSection extends React.Component {

    render(){
        return(
            
            <Box sx = {{color: 'darkGrey'}}>
                <Styled.h3>Reach out</Styled.h3>

               <span><Styled.h1>hello@prophecy.one</Styled.h1>
                    <div 
                        sx = {{variant: 'layouts.link'}}  
                        onClick = {() => {navigator.clipboard.writeText('hello@prophecy.one')}}>
                            Copy
                    </div>
                </span>

               <Styled.p>
                   Tell us about your product, goals, challenges, timeline, and budget.
                </Styled.p>

                <Flex sx = {{variant: 'layouts.responsiveFlex'}}>
                    <Box>
                        <div sx = {{variant: 'text.bodyLarge'}}>Sign up to our newsletter</div>
                        <Input 
                        placeholder = "you@email.com"
                        name = "email"
                        type = "text" />
                    </Box>

                    <Box>
                        <div sx = {{variant: 'text.bodyLarge'}}>Follow us</div>
                        <Link sx ={{variant: 'text.bodySmall'}} href = "https://twitter.com/prophecy_hq" target="_blank">Twitter</Link>
                        <Link sx ={{variant: 'text.bodySmall'}} href = "https://www.linkedin.com/company/69346346/" target="_blank">LinkedIn</Link>    
                    </Box>
                </Flex>

            </Box>

        )
    }
}


