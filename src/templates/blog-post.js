import React from "react"
import { Link, graphql } from "gatsby"
import _ from "lodash"
import styled from "styled-components"
import { StyledLink, TextLink, TagItem, TagNav } from "../styles/styled"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import DisqusWrapper from "../components/DisqusWrapper/index"
// import

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <h2>
          <StyledLink to={"/blog"}>
            <TextLink>Voltar ao Blog</TextLink>
          </StyledLink>
        </h2>
        <header>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <PostDate>{post.frontmatter.date}</PostDate>
          <TagNav>
            <>
              {post.frontmatter.tags.map((tag, index) => (
                <ul key={index}>
                  <TagItem>
                    <StyledLink to={`/tags/${_.kebabCase(tag)}/`}>
                      {" "}
                      {tag}{" "}
                    </StyledLink>
                  </TagItem>
                </ul>
              ))}
            </>
          </TagNav>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr style={{}} />
        <footer>{/* <Bio /> */}</footer>
      </article>

      <Navigation>
        <ul>
          <li>
            {previous && (
              <StyledLink to={previous.fields.slug} rel="prev">
                <TextLink>← {previous.frontmatter.title}</TextLink>
              </StyledLink>
            )}
          </li>
          <li>
            {next && (
              <StyledLink to={next.fields.slug} rel="next">
                <TextLink>{next.frontmatter.title} →</TextLink>
              </StyledLink>
            )}
          </li>
        </ul>
      </Navigation>
      {/* <DisqusWrapper
        post={post}
        title={post.frontmatter.title}
        slug={post.fields.slug}
      /> */}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        description
        tags
      }
    }
  }
`

export const PostDate = styled.p`
  margin-top: 10px;
`
export const PostTitle = styled.h1``

export const Navigation = styled.nav`
  & > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
`
