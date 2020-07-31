// Class Component Funcionando
import React, { Component, useContext } from "react"

import { Index } from "elasticlunr"
import { Link } from "gatsby"
import BlogList from "../BlogList"
import styled from "styled-components"
import {
  StyledLink,
  TagItem,
  TagNav,
  Container,
  Date,
} from "../../styles/styled"
import { SearchQueryContext } from "../../contexts/SearchQuery"
import { format, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale"
export default class Search extends Component {
  // const {  } = useContext(SearchQueryContext)
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
      emptyQuery: true,
    }
  }

  formatDate(date) {
    console.log("format date: ", date)
    let onlyDate = date.substring(0, 10)
    // console.log("onlyDate: ", onlyDate)
    // console.log("onlyDate parseISO: ", parseISO(onlyDate))

    let dateFormated = format(parseISO(onlyDate), "dd 'de' MMMM 'de' yyyy", {
      locale: ptBR,
    })

    console.log("dateFormated: ", dateFormated)
    return dateFormated

    //Not Working
    // const dateFormat = new Date("2020-03-15T00:00:01.000Z")
    // const options = { year: "numeric", month: "long", day: "numeric" }
    // let dateFormated = new Intl.DateTimeFormat("pt-BR", options).format(
    //   dateFormat
    // )
    // console.log("dateFormated: ", dateFormated)
    // return dateFormated
  }

  renderPosts(page) {
    return (
      <StyledLink key={page.id} to={page.path}>
        <Container>
          <Date>{this.formatDate(page.date)}</Date>
          <h2>{page.title}</h2>
          <p>{page.description}</p>
          <TagNav>
            <>
              {page.tags.map((tag, index) => (
                <ul key={index}>
                  <TagItem>{tag} </TagItem>
                </ul>
              ))}
            </>
          </TagNav>
        </Container>
      </StyledLink>
    )
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    console.log("Input search: ", query)
    //Reload
    if (query == "") {
      window.location.reload()
    }

    //Change Empty query
    if (query == "") {
      this.setState({
        emptyQuery: true,
      })
    } else {
      this.setState({
        emptyQuery: false,
      })
    }
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }

  loadAllPosts() {
    this.index = Index.load(this.props.searchIndex)
    console.log("Index: ", this.index)

    // console.log("Index search: ", this.index.search("", { expand: true }))
    console.log("docs: ", this.index.documentStore.docs)
    let docs = this.index.documentStore.docs
    docs = Object.entries(docs).map(([key, value]) => ({
      [key]: value,
    }))
    console.log("Docs convertido: ", docs)
    this.setState({
      results: [...docs],
    })
  }

  componentDidMount() {
    this.loadAllPosts()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps: ", prevProps)
    console.log("prevState: ", prevState)
    console.log("state query: ", this.state.query)
    if (
      prevProps.emptyQuery !== this.props.emptyQuery &&
      this.props.emptyQuery == true
    ) {
      this.loadAllPosts()
    }
    // if (prevProps.query !== this.props.query && this.props.query == "") {
    //   this.loadAllPosts()
    // }
  }

  render() {
    const { results, query, emptyQuery } = this.state
    console.log("State query: ", query)
    console.log("State emptyQuery: ", emptyQuery)
    return (
      <>
        <Form>
          <InputSearch
            type="text"
            value={this.state.query}
            onChange={this.search}
            placeholder="Ex: React, blog, Gatsby..."
          />
        </Form>
        <div>
          {emptyQuery == true
            ? results.map(item => {
                console.log("item: ", item)
                let page = Object.values(item)[0]
                console.log("Page: ", page)
                return this.renderPosts(page)
              })
            : results.map(page => {
                return this.renderPosts(page)
              })}
        </div>
        {/* <div>
          {results.map(item => {
            console.log("item: ", item)
            let page = Object.values(item)[0]
            console.log("Page: ", page)
            return this.renderPosts(page)
          })}
        </div> */}
        {/* <TagNav>
          <ul>
            {this.state.results.map(page => (
              <TagItem key={page.id}>
                <StyledLink to={"/" + page.path}>{page.title}</StyledLink>
              </TagItem>
            ))}
          </ul>
        </TagNav> */}
      </>
    )
  }
}

export const Form = styled.form`
  width: 100%;
`
export const InputSearch = styled.input`
  width: inherit;
  border-radius: 0.5rem;
  /* border: 2px solid #333; */
  border: 2px solid rgba(0, 0, 0, 0.2);
  padding: 0.3rem 0.6rem;
  color: #666;
  font-size: 1.2rem;
  &:focus {
    outline: none;
    border: 2px solid rgba(0, 0, 0, 0.5);
  }
`

{
  /* <div>
{this.state.results.map(page => (
  <StyledLink key={page.id} to={page.path}>
    <Container>
      <Date>{page.date}</Date>
      <h2>{page.title}</h2>
      <p>{page.description}</p>
      <Navigation>
        <>
          {page.tags.map((tag, index) => (
            <ul key={index}>
              <TagItem>{tag} </TagItem>
            </ul>
          ))}
        </>
      </Navigation>
    </Container>
  </StyledLink>
))}
</div> */
}

// this.state.results.map(item => {
//   console.log("item: ", item)
//   let page = Object.values(item)[0]
//   console.log("Page: ", page)
//   return (
//     <StyledLink key={page.id} to={page.path}>
//       <Container>
//         <Date>{page.date}</Date>
//         <h2>{page.title}</h2>
//         <p>{page.description}</p>
//         <Navigation>
//           <>
//             {page.tags.map((tag, index) => (
//               <ul key={index}>
//                 <TagItem>{tag} </TagItem>
//               </ul>
//             ))}
//           </>
//         </Navigation>
//       </Container>
//     </StyledLink>
//   )
// })}
