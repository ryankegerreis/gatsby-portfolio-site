import React, { Component, Fragment } from "react"

import HTML from "../imageFiles/logos/html-5.svg"
import CSS from "../imageFiles/logos/css-3.svg"
import Bootstrap from "../imageFiles/logos/bootstrap.svg"
import SASS from "../imageFiles/logos/sass.svg"
import ReactLogo from "../imageFiles/logos/react.svg"
import JS from "../imageFiles/logos/javascript.svg"
import jQuery from "../imageFiles/logos/jquery.svg"
import NodeJS from "../imageFiles/logos/nodejs.svg"
import Express from "../imageFiles/logos/express.svg"
import Mongo from "../imageFiles/logos/mongodb.svg"
import Mongoose from "../imageFiles/logos/mongoose.svg"
import AJAX from "../imageFiles/logos/ajax.svg"

export default class Skills extends Component {
  render() {
    return (
      <Fragment>
        <section id="skill-link" aria-labelledby="skills-heading">
          <div id="skills" className="parent">
            <div id="skills-header">
              <h2 id="skills-heading">
                These are <span>some skills</span> I've collected.
              </h2>
            </div>
            <div className="child1">
              <ul className="skills-list">
                <li>
                  <img src={HTML} alt="HTML 5" />
                  <p>HTML5</p>
                </li>
                <li>
                  <img src={CSS} alt="CSS 3" />
                  <p>CSS3</p>
                </li>
                <li>
                  <img src={SASS} alt="SASS" />
                  <p>SASS</p>
                </li>
              </ul>
            </div>
            <div className="child2">
              <ul className="skills-list">
                <li>
                  <img src={jQuery} alt="jquery" />
                  <p>jQuery</p>
                </li>
                <li>
                  <img src={Bootstrap} alt="Bootstrap" />
                  <p>Bootstrap</p>
                </li>
                <li>
                  <img src={ReactLogo} alt="React" />
                  <p>React.js</p>
                </li>
              </ul>
            </div>
            <div className="child3">
              <ul className="skills-list">
                <li>
                  <img src={JS} alt="Javascript" />
                  <p>Javascript</p>
                </li>
                <li>
                  <img src={NodeJS} alt="Nodejs" />
                  <p>Node.js</p>
                </li>
                <li>
                  <img src={Express} alt="express" />
                  <p>Express.js</p>
                </li>
              </ul>
            </div>
            <div className="child4">
              <ul className="skills-list">
                <li>
                  <img src={Mongo} alt="mongodb" />
                  <p>MongoDB</p>
                </li>
                <li>
                  <img src={Mongoose} alt="mongoose" />
                  <p>Mongoose</p>
                </li>
                <li>
                  <img src={AJAX} alt="ajax" />
                  <p>AJAX</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}
