import React, { Component } from 'react'

export default class ProjectCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      opened: false,
    }

    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    console.log("Clicked!")
    window.open(this.props.item.live);
  }

  render() {
    const { item, photo } = this.props;

    return (
      <div onClick={this.onClick} className='Card'>
        <img src={photo} className='CardImage' />
        <p>{item.name}</p>
      </div>
    )
  }
}
