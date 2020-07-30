import React from "react"
// import * as S from "./styled"
import {
  StyledLink,
  TagItem,
  TagNav,
  Container,
  Date,
} from "../../styles/styled"
const BlogList = ({ blogList }) => {
  console.log("blogList component data: ", blogList)
  return (
    <>
      {blogList.map(({ node }) => (
        <StyledLink to={`${node.fields.slug}`}>
          <Container key={node.fields.slug}>
            <Date>
              {node.frontmatter.date} - {node.timeToRead} min
            </Date>
            <h2> {node.frontmatter.title} </h2>
            <p> {node.frontmatter.description} </p>
            <TagNav>
              <>
                {node.frontmatter.tags.map((tag, index) => (
                  <ul key={index}>
                    <TagItem>{tag} </TagItem>
                  </ul>
                ))}
              </>
            </TagNav>
          </Container>
        </StyledLink>
      ))}
    </>
  )
}

export default BlogList
