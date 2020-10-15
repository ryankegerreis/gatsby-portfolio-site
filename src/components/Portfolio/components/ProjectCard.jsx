import React, { Component } from 'react'

export default class ProjectCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      opened: false
    }

  }

  /*
  Title
  Brief description
  Image
  */
  render() {
    const { item, photo } = this.props;

    return (
      <div className='Card'>
        <img src={photo} className='CardImage' />
        <p>{item.name}</p>
      </div>
    )
  }
}
