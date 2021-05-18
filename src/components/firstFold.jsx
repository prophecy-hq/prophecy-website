
/** @jsx jsx */
import { jsx, Styled, Box} from 'theme-ui';
import React from 'react';

export default class FirstFold extends React.Component {

    render(){
        return(
        <Box sx = {{height: '100vh', color: 'white'}}>
            <Styled.h1 sx = {{variant: 'layouts.rightContent'}}>We help achieve big goals through digital products that are people-centric, rigorously tested, and expertly crafted.</Styled.h1>
        </Box>

        )
    }
}


