/** @jsx jsx */
import { jsx, Styled, Box, IconButton,} from 'theme-ui';
import React from 'react';

export default class ContactUs extends React.Component {

    render(){
        return(
            <Box sx={{variant: 'layouts.statbox'}}>
                <Styled.h2>Write to us</Styled.h2>
                <span sx ={{variant: 'text.bodySmall'}}>hello@prophecy.one</span>
                <span>
                    <IconButton>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9 3C8.44772 3 8 3.44772 8 4V6H17C17.5523 6 18 6.44772 18 7V19H19C19.5523 19 20 18.5523 20 18V4C20 3.44772 19.5523 3 19 3H9Z" fill="#141414"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 9C4 8.44772 4.44772 8 5 8H15C15.5523 8 16 8.44772 16 9V23C16 23.5523 15.5523 24 15 24H5C4.44771 24 4 23.5523 4 23V9ZM6 13.5C6 13.2239 6.22386 13 6.5 13H13.5C13.7761 13 14 13.2239 14 13.5V14.5C14 14.7761 13.7761 15 13.5 15H6.5C6.22386 15 6 14.7761 6 14.5V13.5ZM6.5 17C6.22386 17 6 17.2239 6 17.5V18.5C6 18.7761 6.22386 19 6.5 19H13.5C13.7761 19 14 18.7761 14 18.5V17.5C14 17.2239 13.7761 17 13.5 17H6.5Z" fill="#141414"/>
                        </svg>
                    </IconButton>
                </span>
            </Box>
        )
    }
}