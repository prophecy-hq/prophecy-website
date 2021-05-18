
/** @jsx jsx */
import { jsx, Styled, Box, Flex} from 'theme-ui';
import React from 'react';
import CaseStudy from './caseStudy'

export default class TeamMember extends React.Component {

    render(){
        return(
            
        <Box>
            
            <Box sx = {{variant: 'layouts.teamBio'}}>
                <div sx = {{variant: 'texts.bodySmall'}}>{this.props.bio}</div>
            </Box>

            <Box sx = {{variant: 'layouts.line'}}> </Box>

            <Box sx = {{variant: 'layouts.caseStudyBlock'}}>
                <CaseStudy title = {this.props.caseStudyName1} description = {this.props.caseStudyDescription1}></CaseStudy>
                <CaseStudy title = {this.props.caseStudyName2} description = {this.props.caseStudyDescription2}></CaseStudy>
                <CaseStudy title = {this.props.caseStudyName3} description = {this.props.caseStudyDescription3}></CaseStudy>
            </Box>

        </Box>

        )
    }
}


