import React, { Component } from 'react'

import ProjectCard from './components/ProjectCard'

export default class ProjectSection extends Component {
  constructor(props) {
    super(props)

    this.projects = [1, 2, 3]
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
            this.projects.map((item) => {
              return <ProjectCard item={item} />
            })
          }
        </div>
      </div>
    )
  }
}
