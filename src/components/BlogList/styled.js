import styled from "styled-components"

export const Container = styled.div`
  width: auto;
  height: auto;
  margin-bottom: 40px;
  padding: 30px;
  cursor: pointer;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.5);

  &:hover {
    border: 5px solid #222;
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
  justify-content: flex-start;
  /* border: 2px solid blue; */
`
