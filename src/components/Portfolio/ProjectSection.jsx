import React, { Component } from 'react'

import projects from '../../data/ProjectData'
import ProjectCard from './components/ProjectCard'
import Chicken from '../../imageFiles/ChickenRun.png'
import RE from '../../imageFiles/Reinvest.png'
import PromiseApp from '../../imageFiles/Promise.png'

export default class ProjectSection extends Component {
  constructor(props) {
    super(props)

    console.log(projects)
    this.images = [Chicken, RE, PromiseApp]
  }

  render() {
    return (
      <div className='ProjectSection'>
        <div className='ProjectTitle'>
          Work_
        </div>
        <div className='ProjectContent'>
          These are some projects I've created.
        </div>
        <div className='ProjectContainer'>
          {projects.map((item, index) => {
            return <ProjectCard key={index} item={item} photo={this.images[index]} />
          })}
        </div>
      </div>
    )
  }
}
