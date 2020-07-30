import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Wrapper } from "../styles/styled"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Wrapper>
      <Title>
        <LinkTitle to="/">{siteTitle}</LinkTitle>
      </Title>
    </Wrapper>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

export const StyledHeader = styled.header`
  margin-bottom: 1.45rem;
  margin-top: 1.45rem;
`

export const WrapperTitle = styled.div`
  margin: 0 auto;
  width: 60%;
  max-width: 96rem;
  padding: 1.45rem 1.0875rem;
`

export const Title = styled.h2`
  margin: 0;
`

export const LinkTitle = styled(Link)`
  text-decoration: none;
  color: #333;
`
