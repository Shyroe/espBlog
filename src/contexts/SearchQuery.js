import React, { createContext, useState } from "react"

export const SearchQueryContext = createContext()

const SearchQueryProvider = props => {
  const [query, setQuery] = useState("")
  return (
    <SearchQueryContext.Provider
      value={{
        query,
      }}
    >
      {props.children}
    </SearchQueryContext.Provider>
  )
}

export default SearchQueryProvider
