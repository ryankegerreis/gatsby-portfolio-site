import React, { Component, Fragment } from 'react'

import portfolioProjects from '../data/ProjectData'
import Chicken from '../imageFiles/chicken-run.svg'
import RE from '../imageFiles/reinvest.jpg'
import Promise from '../imageFiles/promise.svg'


export default class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <section id='portfolio-link'>
          <div id='portfolio' className='flex-row'>
            <div id='portfolio-header'>
              <h1>These are some <span>projects I've created.</span></h1>
            </div>

            <div className='overlaythree'>
              <table align="center">
                <tr><h3>{portfolioProjects[0].name}</h3></tr>
                <tr> <a href={portfolioProjects[0].live} title='View Site' className='pseudover v2' target="_blank" rel="noopener noreferrer">
                  <img src={Chicken} alt={portfolioProjects[0].alt} />
                </a> </tr>
              </table>

            </div>

            <div className='overlaythree'>
              <table align="center">
                <tr><h3>{portfolioProjects[1].name}</h3></tr>
                <tr> <a href={portfolioProjects[1].live} title='View Site' className='pseudover v2' target="_blank" rel="noopener noreferrer">
                  <img src={RE} alt={portfolioProjects[1].alt} />
                </a> </tr>
              </table>
            </div>

            <div className='overlaythree'>
              <table align="center">
                <tr><h3>{portfolioProjects[2].name}</h3></tr>
                <tr> <a href={portfolioProjects[2].live} title='View Site' className='pseudover v2' target="_blank" rel="noopener noreferrer">
                  <img src={Promise} alt={portfolioProjects[2].alt} />
                </a> </tr>
              </table>
            </div>

          </div>
        </section>
      </Fragment>
    )
  }

}