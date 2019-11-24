import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { InView } from "react-intersection-observer"
import moment from "moment"
import { decodeHTML } from "../../helpers"
import ParseHTML from "../../particles/ParseHTML"

import { Article, ArticleIntro, ArticleProgress } from "./PostStyles"
import { RelatedContainer, RelatedItem } from "./RelatedStyles"

import Base from "../Base"

import ImageLoader from "../../molecules/imageloader/ImageLoader"

const WORDS_PER_MINUTE = 250

const ReadTime = ({ checkpoint, inViewRelated, totalWords }) => {
  const time = Math.ceil(totalWords / WORDS_PER_MINUTE)
  let left = time - checkpoint
  if (inViewRelated) left = 0
  let percentage = (time / 100) * checkpoint
  if (percentage > 1) percentage = 1

  return (
    <ArticleProgress left={left}>
      <p>{left} Minutes left</p>
    </ArticleProgress>
  )
}

const PostTemplate = props => {
  const { pageContext } = props
  const { content, date, PostFields, title } = pageContext

  const related =
    PostFields &&
    PostFields.relatedPosts &&
    PostFields.relatedPosts.length &&
    PostFields.relatedPosts

  const postDate = new Date(date)

  const [checkpoint, setCheckpoint] = useState(0)
  const [parsed, setParsed] = useState(undefined)
  const [totalWords, setTotalWords] = useState(0)

  useEffect(() => {
    const allText = content
    const words = allText.split(" ")
    setTotalWords(words.length)
    const wordCheckpoints = words.map((word, index) =>
      index > 0 && index % WORDS_PER_MINUTE === 0
        ? `<span class="checkpoint" data-checkpoint="${index /
            WORDS_PER_MINUTE}">${word}</span>`
        : word
    )
    const squashed = wordCheckpoints.join(` `)
    setParsed(squashed)
  }, [content])

  useEffect(() => {
    const checkpoints = document.querySelectorAll(".checkpoint")
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          const checkpointHTMLElement = entry.target
          setCheckpoint(checkpointHTMLElement.getAttribute("data-checkpoint"))
        }
      })
    })

    checkpoints.forEach(checkpoint => {
      observer.observe(checkpoint)
    })
  }, [parsed])

  return (
    <Base context={pageContext}>
      <InView threshold={0} triggerOnce={false}>
        {({ inView, ref }) => (
          <>
            {/* <ReadTime
              checkpoint={checkpoint}
              inViewRelated={inView}
              totalWords={totalWords}
            /> */}
            <ArticleIntro>
              <Link to="/posts">Insights</Link>
              <h1>{decodeHTML(title)}</h1>
              <h4>{moment(postDate).format("DD/MM/YYYY")} by Jack Pritchard</h4>
            </ArticleIntro>
            <Article>{parsed ? ParseHTML(parsed) : undefined}</Article>
            {related && related.length > 0 && (
              <Related data={related} relatedRef={ref} />
            )}
          </>
        )}
      </InView>
    </Base>
  )
}

function Related({ data, relatedRef }) {
  return (
    <RelatedContainer ref={relatedRef}>
      <h2>
        Continue Reading{" "}
        <span aria-label="book pile emoji" role="img">
          📚
        </span>
      </h2>
      <div className="related__items">
        {data.map(
          item =>
            item.featuredImage && (
              <InView key={item.uri} threshold={0} triggerOnce={true}>
                {({ inView, ref }) => (
                  <RelatedItem ref={ref}>
                    <Link to={`/${item.uri}`}>
                      <ImageLoader
                        src={item.featuredImage.md}
                        alt={
                          item.featuredImage.altText
                            ? item.featuredImage.altText
                            : item.title
                        }
                        className="related__media"
                      />
                      {item.title && <h3>{decodeHTML(item.title)}</h3>}
                      {item.seo.metaDesc && <p>{item.seo.metaDesc}</p>}
                    </Link>
                  </RelatedItem>
                )}
              </InView>
            )
        )}
      </div>
    </RelatedContainer>
  )
}

export default PostTemplate
