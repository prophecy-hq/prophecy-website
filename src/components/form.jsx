/** @jsx jsx */
import {jsx, Box, Styled, Flex, Button, Input } from 'theme-ui';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import React from 'react';
import  './form.module.css';



export default class Form extends React.Component {

    constructor() {
        super()
        this.state = { email: "", result: null }
      }
      _handleSubmit = async e => {
        e.preventDefault()
        const result = await addToMailchimp(this.state.email)
        this.setState({result: result})
        console.log(result)
      }
    handleChange = event => {
        this.setState({ email: event.target.value })
      }

    render () {
        return  ( 
            <Box sx={{variant: 'layouts.statbox', height: '112px', mb: '12px'}}>
                <Styled.h2>Sign up for updates</Styled.h2>   
                
                <form onSubmit={this._handleSubmit} sx= {{variant: 'forms.mainForm'}}>    
                   
                    <Flex>
                       
                        <Input sx = {{variant: 'text.bodySmall'}}
                            placeholder="Email address"
                            name="email"
                            type="text"
                            onChange={this.handleChange}
                        />

                        <Button type="submit">.</Button>

                    </Flex>
                </form>

                <p sx = {{variant: 'text.caption'}}>
                            {this.state.result != null 
                            ? this.state.result === "success"
                                ? 'Signed up successfully' 
                                :  this.state.result.msg 
                            : '' }
                        
                </p>
            </Box>
        )
    }
}

