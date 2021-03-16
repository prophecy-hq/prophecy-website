/** @jsx jsx */
import {jsx, Box, Styled} from 'theme-ui';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import React from 'react';
import  './form.module.css';


export default class Form extends React.Component {

    _handleSubmit = e => {
        e.preventDefault();
        addToMailchimp(email) // listFields are optional if you are only capturing the email address.
        .then(data => {
          // I recommend setting data to React state
          // but you can do whatever you want (including ignoring this `then()` altogether)
          console.log(data)
        })
        .catch(() => {
          // unnecessary because Mailchimp only ever
          // returns a 200 status code
          // see below for how to handle errors
          console.log(e)
        })
      }
    
    render () {
        return (
            // <form onSubmit={this._handleSubmit(email)}>
            <Box sx={{variant: 'layouts.statbox'}}>
                <Styled.h2>Sign up for updates</Styled.h2>
                <input
                placeholder="Email address"
                name="email"
                type="text"
                // onChange={handleEmailChange}
                />
                <button type="submit">.</button>
                </Box>
            // </form>
        )
    }
}

