import React from "react"
import * as S from "./styled"
import _ from "lodash"
import {
  StyledLink,
  TagItem,
  TagNav,
  Container,
  Date,
} from "../../styles/styled"
const PostSuggestion = ({ post }) => {
  return (
    <>
      <Container>
        <Date> {post.frontmatter.date} </Date>
        <h2> {post.frontmatter.title} </h2>
        <p> {post.frontmatter.description} </p>
        <TagNav mini>
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
      </Container>
    </>
  )
}

export default PostSuggestion
