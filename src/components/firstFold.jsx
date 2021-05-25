
/** @jsx jsx */
import { jsx, Styled, Box} from 'theme-ui';
import React from 'react';
import firstFoldAnimation from '../scripts/firstFoldAnimation'



export default class FirstFold extends React.Component {
  componentDidMount(){
      firstFoldAnimation();
  }

    render(){
        return(
        <Box sx = {{height: '100vh', color: 'white'}}>
         
            
            <Styled.h1 data-splitting = ""
            
                className = "staggerAnimation"
                sx = {{variant: 'layouts.rightContent', marginTop: '80px', color: 'lightRed'}}>
                
                We help achieve&nbsp;
                <span className = "whitespace">&nbsp;</span>
                <span  sx = {{variant: 'text.italic', color: 'white'}}>
                     &nbsp;big goals
                </span> 
                &nbsp;through digital products that are people-centric, rigorously tested, and expertly crafted.</Styled.h1>
        </Box>

        )
    }
}


