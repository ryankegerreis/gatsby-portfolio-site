import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PortfolioSection from '../components/Portfolio/PortfolioSection'
import ProjectSection from '../components/Portfolio/ProjectSection'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PortfolioSection />
    <ProjectSection />
  </Layout>
)

export default IndexPage
