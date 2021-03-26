/** @jsx jsx */
import {jsx, Box, Styled, Flex, Button, Spinner, Input } from 'theme-ui';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import React from 'react';
import  './form.module.css';



export default class Form extends React.Component {

    constructor() {
        super()
        this.state = { email: "", result: null, spin: false }
      }
      _handleSubmit = async e => {
        e.preventDefault()
        this.setState({spin: true}) 
        const result = await addToMailchimp(this.state.email)
        this.setState({result: result})
        this.setState({spin: false}) 
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

                        <Button type="submit">
                            <Spinner sx = {{display: this.state.spin ? 'inline-block' : 'none'}}></Spinner>
                        </Button>

                    </Flex>
                </form>

                <p sx = {{variant: 'text.caption'}} className = {this.state.result?'fadeIn':'fadeOut'}>
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

