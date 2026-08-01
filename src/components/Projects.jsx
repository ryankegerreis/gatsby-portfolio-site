import React from "react"

const Projects = () => (
  <section
    id="projects"
    className="flex-col"
    aria-labelledby="projects-heading"
  >
    <h1 id="projects-heading">Projects</h1>
    <p>
      Roost —{" "}
      <a
        href="https://www.figma.com/community/file/1665385597168149368/roost-homepage-v1?fuid=772600186485980694"
        target="_blank"
        rel="noopener noreferrer"
      >
        roost homepage v1
      </a>
      , the first version of the homepage design.
    </p>
    <a
      href="https://github.com/ryankegerreis/bettermarkdown"
      target="_blank"
      rel="noopener noreferrer"
    >
      bettermarkdown
    </a>
  </section>
)

export default Projects
