import React from "react"
import { Link, graphql } from "gatsby"
import _ from "lodash"
import styled from "styled-components"
import {
  StyledLink,
  TextLink,
  TagItem,
  TagNav,
  Container,
  Date,
  // Navigation,
} from "../styles/styled"

import V from "../styles/variables"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostSuggestion from "../components/PostSuggestion"
import MailchimpForm from "../components/MailchimpForm.js"
import Disqus from "../components/Disqus"
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
      <PostArticle>
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
      </PostArticle>
      <MailchimpForm />

      <Navigation>
        <ul>
          <li>
            {previous && (
              <StyledLink to={previous.fields.slug} rel="prev">
                <PostSuggestion post={previous} />
              </StyledLink>
            )}
          </li>
          <li>
            {next && (
              <StyledLink to={next.fields.slug} rel="next">
                <PostSuggestion post={next} />
              </StyledLink>
            )}
          </li>
        </ul>
      </Navigation>
      <Disqus
        post={post}
        title={post.frontmatter.title}
        slug={post.fields.slug}
      />
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

export const PostArticle = styled.article`
  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; */
  font-family: Roboto, sans-serif;
  font-size: 1.6rem;
  line-height: 1.4;
`
export const PostDate = styled.p`
  margin-top: 10px;
`
export const PostTitle = styled.h1``

export const Navigation = styled.nav`
  & > ul {
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;

    @media only screen and (max-width: ${V.breakpoints.medium}) {
      flex-direction: column;
    }

    @media only screen and (max-width: ${V.breakpoints.small}) {
      flex-direction: column;
    }

    & > li {
      width: 45%;

      @media only screen and (max-width: ${V.breakpoints.medium}) {
        width: 90%;
      }

      @media only screen and (max-width: ${V.breakpoints.small}) {
        width: 90%;
      }
    }
  }
`
