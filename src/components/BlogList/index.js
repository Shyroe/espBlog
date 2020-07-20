import React from "react"
import * as S from "./styled"
import { StyledLink, TagItem } from "../../styles/styled"
const BlogList = ({ blogList }) => {
  console.log("blogList component data: ", blogList)
  return (
    <>
      {blogList.map(({ node }) => (
        <StyledLink to={`${node.fields.slug}`}>
          <S.Container key={node.fields.slug}>
            <S.Date>
              {node.frontmatter.date} - {node.timeToRead} min
            </S.Date>
            <h2> {node.frontmatter.title} </h2>
            <p> {node.frontmatter.description} </p>
            <S.Navigation>
              <>
                {node.frontmatter.tags.map((tag, index) => (
                  <ul key={index}>
                    <TagItem>{tag} </TagItem>
                  </ul>
                ))}
              </>
            </S.Navigation>
          </S.Container>
        </StyledLink>
      ))}
    </>
  )
}

export default BlogList
