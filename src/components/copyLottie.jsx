/** @jsx jsx */
import { jsx, IconButton } from 'theme-ui';

import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../animations/data.json'

class CopyLottie extends Component {
  state = {isStopped: true, isPaused: true}

  playLottie = () => {
    
    this.setState({isStopped: false, isPaused: false }, console.log('false: ', this.state.isStopped))

    setTimeout(() => {
      this.setState({isStopped: true}, console.log('true: ', this.state.isStopped))
    }, 4000)
  }

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
      <IconButton onClick={() => this.playLottie()}>
        <Lottie options={defaultOptions}
              height={24}
              width={24}
          />
      </IconButton>
    )
  }
}

export default CopyLottie