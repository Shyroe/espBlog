import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from "../components/BlogList"
import Search from "../components/Search"

const Blog = ({ data, location }) => {
  const blogList = data.allMarkdownRemark.edges
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Page blog list" />
      <Search />
      {/* <BlogList blogList={blogList} /> */}
    </Layout>
  )
}

export default Blog
{
  /* <BlogList blogList={blogList} /> */
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            title
            description
            tags
          }
          timeToRead
        }
      }
    }
  }
`
