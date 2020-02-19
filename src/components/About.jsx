import React, { Component, Fragment } from 'react'

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <section id='about-link'>
          <div id='about' className='flex-col'>
            <h1>A little <span>about me.</span></h1>
            <p>My background is in startups and venture capital. I was the first employee at Global Accelerated Ventures, a small VC firm in South Florida. But after working closely with developers for several years, I realized I wanted to be one. Now I have a firm foundation in designing and building web based applications and websites.</p>
          </div>
        </section>
      </Fragment>
    )
  }
}