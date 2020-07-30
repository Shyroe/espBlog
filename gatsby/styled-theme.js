import React from "react"

import { ThemeProvider } from "styled-components"
import lightTheme from "../src/styles/themes/lightTheme"

export function wrapRootElement({ element }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={lightTheme}>{element}</ThemeProvider>
    </React.Fragment>
  )
}
