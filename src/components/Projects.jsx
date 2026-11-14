import React from "react"

const Projects = () => (
  <section
    id="projects"
    className="flex-col"
    aria-labelledby="projects-heading"
  >
    <h2 id="projects-heading">Projects</h2>
    <p>
      <a href="https://roostapp.co/" target="_blank" rel="noopener noreferrer">
        Roost
      </a>{" "}
      —{" "}
      <a
        href="https://www.figma.com/community/file/1665385597168149368/roost-homepage-v1?fuid=772600186485980694"
        target="_blank"
        rel="noopener noreferrer"
      >
        roost homepage v1
      </a>
      , the first version of the homepage design. Book time with me about Roost
      on{" "}
      <a
        href="https://topmate.io/ryan_kegerreis"
        target="_blank"
        rel="noopener noreferrer"
      >
        Topmate
      </a>
      .
    </p>
    <a
      href="https://github.com/ryankegerreis/bettermarkdown/discussions"
      target="_blank"
      rel="noopener noreferrer"
    >
      bettermarkdown
    </a>
  </section>
)

export default Projects
