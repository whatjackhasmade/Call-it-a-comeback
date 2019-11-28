import React from "react"
import Link from "gatsby-link"
import moment from "moment"
import { decodeHTML } from "../../helpers"
import ParseHTML from "../../particles/ParseHTML"
import ComponentParser from "../../particles/ComponentParser"

import { Article, ArticleIntro } from "./PostStyles"

import Related from "../../organisms/related/Related"

import Base from "../Base"

type PostProps = {
  pageContext: {
    blocks: []
    content: string
    date: string
    PostFields: {
      relatedPosts?: []
    }
    title: string
  }
}

const PostTemplate = ({
  pageContext,
  pageContext: {
    blocks,
    content,
    date,
    PostFields: { relatedPosts },
    title,
  },
}: PostProps) => (
  <Base context={pageContext}>
    <ArticleIntro>
      <Link to="/posts">Insights</Link>
      <h1>{decodeHTML(title)}</h1>
      <h4>{moment(new Date(date)).format("DD/MM/YYYY")} by Jack Pritchard</h4>
    </ArticleIntro>
    {blocks.length > 0 ? (
      <Article>
        <ComponentParser content={blocks} />
      </Article>
    ) : (
      <Article>{ParseHTML(content)}</Article>
    )}
    {relatedPosts && relatedPosts.length > 0 && <Related data={relatedPosts} />}
  </Base>
)

export default PostTemplate
