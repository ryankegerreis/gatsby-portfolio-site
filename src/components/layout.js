import React from "react"
import PropTypes from "prop-types"

import '../styles/index.css'
import '../styles/Portfolio.css'

const Layout = ({ children }) => {

  return (
    <>
      <div>
        <main>{children}</main>
        <footer>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
