
/** @jsx jsx */
import { jsx, Styled, Box, Flex} from 'theme-ui';
import React from 'react';
import CaseStudy from './caseStudy'

export default class TeamMember extends React.Component {

    render(){
        return(
            
        <Flex sx = {{marginTop: '120px', width: '100%'}}>
            
            <Box sx = {{variant: 'layouts.teamBio'}}>
                <div sx = {{variant: 'texts.bodySmall'}}>{this.props.bio}</div>
            </Box>

            <Box sx = {{variant: 'layouts.line'}}> 
                <svg style={{width: '100%', height: '100%'}}>
                    <line x1="0" y1="0%" x2="100%" y2="100%"
                    style={{stroke:'darkGrey', strokeWidth:'1'}} />
                </svg>
            </Box>  

            <Box sx = {{variant: 'layouts.caseStudyBlock'}}>
                <CaseStudy title = {this.props.caseStudyName1} description = {this.props.caseStudyDescription1}></CaseStudy>
                <CaseStudy title = {this.props.caseStudyName2} description = {this.props.caseStudyDescription2}></CaseStudy>
                <CaseStudy title = {this.props.caseStudyName3} description = {this.props.caseStudyDescription3}></CaseStudy>
            </Box>

        </Flex>

        )
    }
}


