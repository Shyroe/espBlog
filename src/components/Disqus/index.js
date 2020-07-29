import React from "react"
import ReactDisqusComments from "react-disqus-comments"
import * as S from "../../styles/styled"

const DisqusWrapper = ({ title, slug, post }) => {
  // const url = `http://localhost:8000/blog${slug}`
  const url = `perspectivaproibida.com/blog${slug}`

  return (
    <S.DisqusWrapper>
      {/* <ReactDisqusComments
        shortname="disqus_Tr67cv2ihl"
        identifier={post.id}
        title={title}
        url="http://disqus.com/by/disqus_Tr67cv2ihl"
      /> */}
      <ReactDisqusComments shortname="perspectivaespiritual" />
    </S.DisqusWrapper>
  )
}

export default DisqusWrapper
