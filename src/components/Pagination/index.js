import React from "react"

import * as S from "../../styles/styled"
import { Link } from "gatsby"

const index = ({
  currentPage,
  numPages,
  isLast,
  isFirst,
  nextPage,
  prevPage,
}) => {
  console.log("PrevPage: ", prevPage)
  console.log("NextPage: ", nextPage)
  return (
    <S.Pagination>
      <>
        {!isFirst && <Link to={prevPage}>Anterior</Link>}
        <span>
          {currentPage} de {numPages}
        </span>
        <p>{!isLast && <Link to={nextPage}>Próxima</Link>}</p>
      </>
    </S.Pagination>
  )
}

export default index
