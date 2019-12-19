import React, { useEffect } from "react"
import Link from "gatsby-link"
import moment from "moment"
import { decodeHTML } from "../../helpers"
import ParseHTML from "../../particles/ParseHTML"
import ComponentParser from "../../particles/ComponentParser"
import Prism from "prismjs"

import { Article, ArticleIntro } from "./PostStyles"

import OverviewList from "../../molecules/overview-list/OverviewList"

import Related from "../../organisms/related/Related"

import Base from "../Base"

type PostProps = {
  pageContext: {
    blocks: []
    content: string
    date: string
    PostFields: {
      learn?: {
        items: [
          {
            id?: string
            value: string
          }
        ]
        title?: string
      }
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
    PostFields: { learn, relatedPosts },
    title,
  },
}: PostProps) => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  return (
    <Base context={pageContext}>
      <ArticleIntro>
        <nav className="article__meta">
          <Link to="/posts">Insights</Link>
          <h4 className="article__meta__date">
            {moment(new Date(date)).format("DD/MM/YYYY")} by Jack Pritchard
          </h4>
        </nav>
        <h1>{decodeHTML(title)}</h1>
      </ArticleIntro>
      {blocks.length > 0 ? (
        <Article>
          {learn && learn.items && learn.items.length && (
            <OverviewList items={learn.items} title="What you will learn" />
          )}
          <ComponentParser content={blocks} />
        </Article>
      ) : (
        <Article>
          {learn && learn.items && learn.items.length && (
            <OverviewList items={learn.items} title="What you will learn" />
          )}
          {ParseHTML(content)}
        </Article>
      )}
      {relatedPosts && relatedPosts.length > 0 && (
        <Related data={relatedPosts} />
      )}
    </Base>
  )
}

export default PostTemplate
