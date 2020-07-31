import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import TagList from "../components/TagList/index"
// import { TagItem, NavTags, TagContainer } from "../components/TagList/styled"

import { StyledLink } from "../styles/styled"
import styled from "styled-components"

import { graphql, Link } from "gatsby"

const blogTagTemplate = ({ location, data, pageContext }) => {
  const { tag } = pageContext
  // console.log("Data blog-tag: ", data)
  // const siteTitle = data.site.siteMetadata.title
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } encontrados com a tag "${tag}"`
  return (
    <div>
      <Layout
        location={location}
        // title={siteTitle}
      >
        <SEO
        // title={siteTitle}
        />
        {/* <TagList tagList={tagList} /> */}
        <TagContainer>
          <h2>{tagHeader}</h2>
          <ul>
            {edges.map(({ node }) => {
              const { title, date } = node.frontmatter
              const { slug } = node.fields
              return (
                <TagItem key={slug}>
                  <StyledLink to={slug}>{title}</StyledLink>
                </TagItem>
              )
            })}
          </ul>
        </TagContainer>
      </Layout>
    </div>
  )
}

export default blogTagTemplate

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
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
export const TagContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  height: auto;

  & ul {
    height: auto;
  }

  & h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    text-align: center;
    text-transform: capitalize;
    color: #333;
  }
`
export const TagItem = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  border: 2px solid rgb(200, 214, 229);
  padding: 0.5rem 0rem 0.5rem 1.5rem;
  border-radius: 1rem;
  margin-bottom: 2.5rem;
`

export const NavTags = styled.nav`
  width: 100%;
  & ul {
    list-style: none;
  }
`
