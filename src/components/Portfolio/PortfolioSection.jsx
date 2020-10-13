import React, { Component } from 'react'

import Waves from '../../imageFiles/videos/Waves.mp4'

export default class PortfolioSection extends Component {
  render() {
    return (
      <div className='Container'>
        <div className='Nav'>
          <span>
            <a className='Link' href='https://ryankegerreis.com/'>Portfolio</a>
          </span>
          <span>
            <a className='Link' href='https://ryankegerreis.blog/'>Blog</a>
          </span>
        </div>
        <video autoPlay muted loop src={Waves} className='BackgroundVid' />
        <div className='GreetingContainer'>
          <span className='Greeting'>Hi I'm Ryan, I build things on the internet.</span>
        </div>
      </div>
    )
  }
}
