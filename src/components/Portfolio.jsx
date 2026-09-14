import React, { Component, Fragment } from "react"

import portfolioProjects from "../data/ProjectData"
import Chicken from "../imageFiles/chicken-run.svg"
import RE from "../imageFiles/reinvest.jpg"
import PromiseImage from "../imageFiles/promise.svg"

export default class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <section id="portfolio-link" aria-labelledby="portfolio-heading">
          <div id="portfolio" className="flex-row">
            <div id="portfolio-header">
              <h2 id="portfolio-heading">
                These are some <span>projects I've created.</span>
              </h2>
            </div>

            <article className="overlaythree">
              <h3>{portfolioProjects[0].name}</h3>
              <a
                href={portfolioProjects[0].live}
                aria-label={`View ${portfolioProjects[0].name} project`}
                title="View project"
                className="pseudover v2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Chicken} alt={portfolioProjects[0].alt} />
              </a>
            </article>

            <article className="overlaythree">
              <h3>{portfolioProjects[1].name}</h3>
              <a
                href={portfolioProjects[1].live}
                aria-label={`View ${portfolioProjects[1].name} project`}
                title="View project"
                className="pseudover v2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={RE} alt={portfolioProjects[1].alt} />
              </a>
            </article>

            <article className="overlaythree">
              <h3>{portfolioProjects[2].name}</h3>
              <a
                href={portfolioProjects[2].live}
                aria-label={`View ${portfolioProjects[2].name} project`}
                title="View project"
                className="pseudover v2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={PromiseImage} alt={portfolioProjects[2].alt} />
              </a>
            </article>
          </div>
        </section>
      </Fragment>
    )
  }
}
