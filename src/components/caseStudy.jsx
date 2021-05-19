
/** @jsx jsx */
import { jsx, Styled, Box} from 'theme-ui';
import React from 'react';

export default class CaseStudy extends React.Component {

    render(){
        return(
        <Box sx = {{marginTop: 48}}>
            <Styled.h1>{this.props.title}</Styled.h1>
            <Styled.p>{this.props.description}</Styled.p>
           
        </Box>



        )
    }
}


