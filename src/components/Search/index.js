// Static Query - Funcionando
import React from "react"
// import { StyledSearchWrapper } from "../../styles/styled"
import SearchElastic from "../SearchElastic/index"
import { StaticQuery } from "gatsby"

const index = () => {
  return (
    <div>
      <h2>Digite algo para buscar:</h2>
      <StaticQuery
        query={graphql`
          query SearchIndexQuery {
            siteSearchIndex {
              index
            }
          }
        `}
        render={data => (
          // <header>
          //   ... header stuff...
          //   <SearchElastic searchIndex={data.siteSearchIndex.index} />
          // </header>
          <SearchElastic searchIndex={data.siteSearchIndex.index} />
        )}
      />
    </div>
  )
}

export default index

{
  /* <StyledSearchWrapper>
      <h2>Digite algo para buscar:</h2>
      <StaticQuery
        query={graphql`
          query SearchIndexQuery {
            siteSearchIndex {
              index
            }
          }
        `}
        render={data => (
          // <header>
          //   ... header stuff...
          //   <SearchElastic searchIndex={data.siteSearchIndex.index} />
          // </header>
          <SearchElastic searchIndex={data.siteSearchIndex.index} />
        )}
      />
    </StyledSearchWrapper> */
}

// Utilizando useStaticQuery - notOK
// import React from "react"
// import { StyledSearchWrapper } from "../../styles/styled"
// import SearchElastic from "../SearchElastic/index"
// import { graphql, useStaticQuery } from "gatsby"

// export default () => {
//   const queryData = useStaticQuery(graphql`
//     query SearchIndexQuery {
//       siteSearchIndex {
//         index
//       }
//     }
//   `)
//   console.log("Search Comp Query Data: ", queryData)
//   return (
//     <StyledSearchWrapper>
//       <h2>Digite algo para buscar:</h2>
//       <SearchElastic searchIndex={queryData.searchIndex.index} />
//     </StyledSearchWrapper>
//   )
// }
