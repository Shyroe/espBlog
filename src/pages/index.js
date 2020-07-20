import React from "react"
import { Link, graphql } from "gatsby"
import { StyledLink, WrapperLink, Text, TextLink } from "../styles/styled"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from "../components/BlogList"

export const WrapperTextRight = styled.div`
  margin-right: auto;
`
export const WrapperTextLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <WrapperLink>
        <WrapperTextRight>
          <TextLink>Últimos Posts</TextLink>
        </WrapperTextRight>
        <StyledLink href="/blog">
          <TextLink>Ver todos os posts</TextLink>
        </StyledLink>
      </WrapperLink>
      <BlogList blogList={posts} />
      <WrapperLink>
        <WrapperTextLeft>
          <StyledLink href="/blog">
            <TextLink>Ver todos os posts</TextLink>
          </StyledLink>
        </WrapperTextLeft>
      </WrapperLink>
    </Layout>
  )
}

export default IndexPage

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
