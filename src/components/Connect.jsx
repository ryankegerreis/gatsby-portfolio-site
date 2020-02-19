import React, { Component, Fragment } from 'react'


export default class Connect extends Component {
  render() {
    return (
      <Fragment>
        <section id='connect-link'>
          <div id='connect' className='flex-row'>

            <div className='connect-header'>
              <h1>Thanks for stopping by. <span>Let's connect.</span></h1>
            </div>

            <div className='columns overlaythree'>
              <a href="https://www.linkedin.com/in/ryankegerreis/" className='pseudover v2' target="_blank" rel="noopener noreferrer">
                <img src={"../images/connect/linkedin2.svg"} alt="Linkedin" className="logo-image" />
              </a>
            </div>

            <div className='columns'>
              <a href="https://github.com/ryankegerreis" className='pseudover v2' target="_blank" rel="noopener noreferrer">
                <img src={"../images/connect/github2.svg"} alt="Github" className="logo-image" />
              </a>
            </div>

            <div className='columns'>
              <a href="mailto:ryankegerreis@icloud.com" className='pseudover v2' target="_blank" rel="noopener noreferrer">
                <img src={"../images/connect/email2.svg"} alt="Email" className="logo-image" />
              </a>
            </div>
          </div>
        </section>
      </Fragment >
    )
  }

}