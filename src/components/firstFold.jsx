
/** @jsx jsx */
import { jsx, Styled, Box} from 'theme-ui';
import React from 'react';
import firstFoldAnimation from '../scripts/firstFoldAnimation'
import './layout.css';


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
                
                We help achieve &nbsp; 
                <span  sx = {{variant: 'text.italic', color: 'white'}}>
                    &nbsp; big goals &nbsp;
                </span> 
                through digital products that are people-centric, rigorously tested, and expertly crafted.</Styled.h1>
        </Box>

        )
    }
}


