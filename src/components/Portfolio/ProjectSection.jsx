import React, { Component } from 'react'

import projects from '../../data/ProjectData'
import ProjectCard from './components/ProjectCard'
import Chicken from '../../imageFiles/chicken-run.svg'
import RE from '../../imageFiles/reinvest.jpg'
import PromiseApp from '../../imageFiles/promise.svg'

export default class ProjectSection extends Component {
  constructor(props) {
    super(props)

    console.log(projects)
    this.images = [Chicken, RE, PromiseApp]
  }

  render() {
    return (
      <div className='ProjectSection'>
        <div>
          Title
        </div>
        <div>
          Content
        </div>
        <div className='ProjectContainer'>
          {
            projects.map((item, index) => {
              console.log(item)
              return <ProjectCard key={index} item={item} photo={this.images[index]} />
            })
          }
        </div>
      </div>
    )
  }
}
