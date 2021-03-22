/** @jsx jsx */
import { jsx, IconButton } from 'theme-ui';

import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../animations/data.json'

class CopyLottie extends Component {
  state = {isStopped: true}

  render(){
    
    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };


    return(
 
      <IconButton onClick={() => this.setState({isStopped: false })}>
        <Lottie options={defaultOptions}
              height={24}
              width={24}
              // isStopped={true}
          />
      </IconButton>
    )
  }
}

export default CopyLottie