import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Connect from '../components/Connect'
import Projects from '../components/Projects'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <About />
    <Skills />
    <Portfolio />
    <Connect />
    <Projects />
  </Layout>
)

export default IndexPage
