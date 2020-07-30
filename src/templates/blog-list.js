import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import BlogList from "../components/BlogList/index"
import Pagination from "../components/Pagination/index"
import { StyledContainer } from "../styles/styled"

import { graphql } from "gatsby"

const BlogListTemplate = ({ location, data, pageContext }) => {
  console.log("BlogListTemplate")
  console.log("data blogList: ", data)

  const blogList = data.allMarkdownRemark.edges
  const siteTitle = data.site.siteMetadata.title

  const { numPages, currentPage, limit, skip } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`
  //parte useStaticQuery
  // const blogList = allMarkdownRemark.edges
  // const siteTitle = site.siteMetadata.title
  // console.log("subiu o template blogList")
  // console.log("data blogList: ", blogList)

  return (
    <>
      <Layout location={location} title={siteTitle}>
        <SEO title={siteTitle} />
        <BlogList blogList={blogList} />
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
          numPages={numPages}
          currentPage={currentPage}
        />
      </Layout>
    </>
  )
}

export const blogListQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            tags
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default BlogListTemplate
