import React from "react"
import he from "he"
import Link from "gatsby-link"
import { autoParagraph } from "../../helpers"

import Base from "../Base"

import ParseHTML from "../../particles/ParseHTML"

import Button from "../../atoms/Button"
import HR from "../../atoms/HR"

import { SeriesIntro, SeriesWrapper } from "./SeriesStyles"

const SeriesTemplate = ({ pageContext }) => (
  <Base context={pageContext}>
    <SeriesWrapper>
      {pageContext.SeriesFields && (
        <SeriesIntro>
          <div>
            <a
              href={pageContext.SeriesFields.youtubePlaylist}
              rel="noopener noreferrer"
              target="_blank"
            >
              <h1>{he.decode(pageContext.name)}</h1>
            </a>
            {ParseHTML(autoParagraph(pageContext.description))}
            <Button
              href={pageContext.SeriesFields.youtubePlaylist}
              rel="noopener noreferrer"
              target="_blank"
            >
              View YouTube Playlist
            </Button>
          </div>
          <a
            className="intro__image"
            href={pageContext.SeriesFields.youtubePlaylist}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt={pageContext.SeriesFields.seriesImage.altText}
              src={pageContext.SeriesFields.seriesImage.xl}
            />
          </a>
        </SeriesIntro>
      )}
      <HR />
      {pageContext.posts.nodes.length > 0 && (
        <section className="series__grid">
          {pageContext.posts.nodes.reverse().map(post => (
            <SeriesPost {...post} />
          ))}
        </section>
      )}
    </SeriesWrapper>
  </Base>
)

const SeriesPost = ({ featuredImage, title, seo, slug }) => (
  <Link className="post" to={`/${slug}`}>
    {featuredImage && (
      <div className="post__image">
        <img alt={featuredImage.altText} src={featuredImage.md} />
      </div>
    )}
    {title && <h2 className="h4">{he.decode(title)}</h2>}
    {seo && <p>{seo.metaDesc}</p>}
  </Link>
)

export default SeriesTemplate
