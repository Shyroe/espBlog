import React from "react"

import { ThemeProvider } from "styled-components"
import defaultTheme from "../src/styles/themes/defaultTheme"

export function wrapRootElement({ element }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>
    </React.Fragment>
  )
}
