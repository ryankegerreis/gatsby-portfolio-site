import React, { Component, Fragment } from 'react'

import HTML from '../imageFiles/logos/html-5.svg';
import CSS from '../imageFiles/logos/css-3.svg';
import Bootstrap from '../imageFiles/logos/bootstrap.svg';
import SASS from '../imageFiles/logos/sass.svg';
import ReactLogo from '../imageFiles/logos/react.svg';
import JS from '../imageFiles/logos/javascript.svg';
import jQuery from '../imageFiles/logos/jquery.svg'
import NodeJS from '../imageFiles/logos/nodejs.svg';
import Express from '../imageFiles/logos/express.svg'
import Mongo from '../imageFiles/logos/mongodb.svg'
import Mongoose from '../imageFiles/logos/mongoose.svg'
import AJAX from '../imageFiles/logos/ajax.svg'

export default class Skills extends Component {
  render() {
    return (
      <Fragment >
        <section id='skill-link'>
          <div id='skills' className='parent'>
            <section></section>
            <div id='skills-header'>
              <h1>These are <span>some skills</span> I've collected.</h1>
            </div>
            <div className='child1'>
              <table align="center">
                <tbody>
                  <img src={HTML} alt="HTML 5" />
                  <p>HTML5</p>
                  <img src={CSS} alt="CSS 3" />
                  <p>CSS3</p>
                  <img src={SASS} alt="SASS" />
                  <p>SASS</p>
                </tbody>
              </table>
            </div>
            <div className='child2'>
              <table align="center">
                <tbody>
                  <img src={jQuery} alt="jquery" />
                  <p>HTML5</p>
                  <img src={Bootstrap} alt="Bootstrap" />
                  <p>CSS3</p>
                  <img src={ReactLogo} alt="React" />
                  <p>React.js</p>
                </tbody>
              </table>
            </div>
            <div className='child3'>
              <table align="center">
                <img src={JS} alt="Javascript" />
                <p>Javascript</p>
                <img src={NodeJS} alt="Nodejs" />
                <p>Node.js</p>
                <img src={Express} alt="express" />
                <p>Express.js</p>
              </table>
            </div>
            <div className='child4'>
              <table align="center">
                <img src={Mongo} alt="mongodb" />
                <p>MongoDB</p>
                <img src={Mongoose} alt="mongoose" />
                <p>Mongoose</p>
                <img src={AJAX} alt="ajax" />
                <p>AJAX</p>
              </table>
            </div>

          </div>
        </section>
      </Fragment >
    )
  }
}