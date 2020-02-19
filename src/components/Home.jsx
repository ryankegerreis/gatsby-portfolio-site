import React, { Component, Fragment } from 'react';
import ReactTypingEffect from 'react-typing-effect';

export default class Home extends Component {
  render() {

    return (
      <Fragment>
        <section id='home-link'>
          <div id='home' className='flex-col'>
            <h1><ReactTypingEffect staticText="Hi," text="I'm Ryan." eraseDelay={500000000} /></h1>
            <p>I'm a web developer.</p>
          </div>
        </section>
      </Fragment>
    )
  }
}

