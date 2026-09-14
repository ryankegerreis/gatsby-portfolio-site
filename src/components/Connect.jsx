import React, { Component, Fragment } from "react"

import LinkedIn from "../imageFiles/connect/linkedin2.svg"
import Github from "../imageFiles/connect/github2.svg"
import Email from "../imageFiles/connect/email2.svg"

export default class Connect extends Component {
  render() {
    return (
      <Fragment>
        <section id="connect-link" aria-labelledby="connect-heading">
          <div id="connect" className="flex-row">
            <div className="connect-header">
              <h2 id="connect-heading">
                Thanks for stopping by. <span>Let's connect.</span>
              </h2>
            </div>

            <div className="columns overlaythree">
              <a
                href="https://www.linkedin.com/in/ryankegerreis/"
                aria-label="Connect with Ryan Kegerreis on LinkedIn"
                className="pseudover v2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn} alt="Linkedin" className="logo-image" />
              </a>
            </div>

            <div className="columns">
              <a
                href="https://github.com/ryankegerreis"
                aria-label="View Ryan Kegerreis on GitHub"
                className="pseudover v2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="Github" className="logo-image" />
              </a>
            </div>

            <div className="columns">
              <a
                href="mailto:ryankegerreis@icloud.com"
                aria-label="Email Ryan Kegerreis"
                className="pseudover v2"
              >
                <img src={Email} alt="Email" className="logo-image" />
              </a>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}
