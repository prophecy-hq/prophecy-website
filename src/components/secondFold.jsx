
/** @jsx jsx */
import { jsx, Styled, Box} from 'theme-ui';
import React from 'react';

export default class SecondFold extends React.Component {

    render(){
        return(
        <Box sx = {{variant: 'layouts.leftContent', color: 'white'}}>
            <Styled.h2 >Design means more to us than aesthetics, wireframes, AB tests, lowering CAC or increasing MAU.</Styled.h2>
            <Styled.h2 >We design for people — their values, fears and dreams — their stories, not just numbers on an engagement chart.</Styled.h2>
            <Styled.h2>To help people save time, find joy, overcome fears, achieve dreams, and sometimes even save lives.</Styled.h2>
            <Styled.h2>We hypothesise, experiment and test. We question every assumption. We diagnose before we prescribe.</Styled.h2>
            <Styled.h2>To find simple solutions for complex problems, that realise the future you envision.</Styled.h2>
        </Box>

        )
    }
}


