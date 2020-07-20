/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Wrapper, Footer } from "../styles/styled"
import GlobalStyles from "../styles/globalStyles"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      {/* <div
        style={{
          width: "100%",
          maxWidth: "960px",
          border: "2px solid green",
          margin: "0 auto",
          padding: "0 1.0875rem 1.45rem",
          fontFamily: "Roboto sans-serif",
        }}
      > */}
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
      <Footer>
        © {new Date().getFullYear()}, Blog desenvolvido com Gatsby e ❤ !
      </Footer>
      {/* </div> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
