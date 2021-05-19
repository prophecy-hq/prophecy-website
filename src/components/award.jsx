
/** @jsx jsx */
import { jsx, Styled, Flex, Image} from 'theme-ui';
import React from 'react';
import AwardImage from '../images/award.png'

export default class Award extends React.Component {

    render(){
        return(
        <Flex sx = {{flexDirection: 'column', alignItems: 'center'}}>
            <Image src = {AwardImage} />
            <Styled.h3>{this.props.title}</Styled.h3>
            <Styled.p>{this.props.description}</Styled.p>
           
        </Flex>



        )
    }
}


