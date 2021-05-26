/** @jsx jsx */
import {jsx, Box, Styled, Flex, Button, Spinner, Input } from 'theme-ui';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import React from 'react';



export default class Form extends React.Component {

    constructor() {
        super()
        this.state = { email: "", result: null, spin: false, fade: false }
      }

      _handleSubmit = async e => {
        e.preventDefault() 
        const result = await addToMailchimp(this.state.email)
        console.log(result);

      }
    handleChange = event => {
        this.setState({ email: event.target.value })
      }

    render () {
        return  ( 
            <Box> 
                
                <form onSubmit={this._handleSubmit} sx= {{variant: 'forms.contactForm'}}>    
                   
                    <Flex>  
                        <Input sx = {{variant: 'text.bodyLarge'}}
                            placeholder="name@email.com"
                            name="email"
                            type="text"
                            onChange={this.handleChange}
                        />

                        <Button type="submit" />
                    </Flex>
                </form>

                {/* <p sx = {{variant: 'text.caption'}} className = {this.state.fade ? styles.fadein : styles.fadeout}>
                            {this.state.result != null 
                            ? this.state.result === "success"
                                ? 'Signed up successfully' 
                                :  this.state.result.msg 
                            : '' }
                        
                </p> */}
            </Box>
        )
    }
}