import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Connect from '../components/Connect'

import PortfolioSection from '../components/Portfolio/PortfolioSection'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PortfolioSection />
    {/* <Home />
    <About />
    <Skills />
    <Portfolio />
    <Connect /> */}
  </Layout>
)

export default IndexPage
