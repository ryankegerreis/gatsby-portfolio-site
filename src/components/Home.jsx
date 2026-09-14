import React, { Component, Fragment } from "react"

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <section id="home-link" aria-labelledby="home-heading">
          <div id="home" className="flex-col">
            <h1 id="home-heading">Hi, I'm Ryan</h1>
            <p>I'm a web developer.</p>
          </div>
        </section>
      </Fragment>
    )
  }
}
