import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.0875rem 1.45rem;
  /* border: 2px solid green; */
  /* font-family: Roboto sans-serif; */
  font-family: Roboto, sans-serif;
  font-size: 24px;

  & > main {
    font-family: Roboto, sans-serif;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  margin-top: auto;
`

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

export const WrapperLink = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 0 30px;
  /* margin-bottom: 10px; */
`

export const TextLink = styled.p`
  color: #333;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 600;
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 0.2rem;
    position: absolute;
    bottom: -0.3rem;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.5s;
    background-color: #333;
  }
  &:hover::before {
    transform: scaleX(1);
  }
  /* &:hover {
    text-decoration: underline;
  } */
`
export const TagItem = styled.div`
  /* background-color: rgba(0, 0, 0, 0.8);
  color: #eee; */
  /* background-color: rgba(255, 255, 255, 0.1); */
  margin: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.2);
  color: #333;
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
  /* margin-right: 0.1rem; */
  font-weight: bold;

  &:hover {
    color: #eee;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const TagNav = styled.nav`
  /* margin: 20px 0; */
  margin: ${props => (props.mini == true ? "20px 0" : "0px 0px")};
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

export const Container = styled.div`
  width: auto;
  height: auto;
  margin-bottom: 40px;
  padding: 30px;
  cursor: pointer;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.5);

  &:hover {
    border: 3px solid #222;
  }

  & > h2 {
    margin-top: 10px;
  }
`

export const Date = styled.small`
  font-weight: bold;
  color: #999;
`

export const Navigation = styled.nav`
  list-style: none;
  margin: 0;
  padding: 0;
  /* margin: 20px 0; */
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* border: 2px solid blue; */
`
export const DisqusWrapper = styled.footer`
  margin-top: 3rem;
`
