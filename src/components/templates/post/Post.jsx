import React from "react"
import { Link } from "gatsby"
import ParseHTML from "../../particles/ParseHTML"

import Base from "../Base"
import { Article, ArticleIntro } from "./PostStyles"

const PostTemplate = ({ pageContext }) => {
  const { content, title } = pageContext

  return (
    <Base context={pageContext}>
      <ArticleIntro>
        <Link to="/posts">Insights</Link>
        <h1>{title}</h1>
      </ArticleIntro>
      <Article>{ParseHTML(content)}</Article>
    </Base>
  )
}

export default PostTemplate
