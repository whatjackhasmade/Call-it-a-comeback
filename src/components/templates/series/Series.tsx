import React from "react"
import he from "he"
import { autoParagraph } from "../../helpers"

import Base from "../Base"

import ParseHTML from "../../particles/ParseHTML"

import Button from "../../atoms/button/Button"
import HR from "../../atoms/hr/HR"

import { SeriesIntro, SeriesWrapper } from "./SeriesStyles"
import SeriesPost from "./SeriesPost"

type SeriesProps = {
  pageContext: {
    description: string
    name: string
    posts: {
      nodes: []
    }
    SeriesFields: {
      seriesImage: {
        altText: string
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        xxl: string
      }
      youtubePlaylist?: string
    }
  }
}

const SeriesTemplate = ({
  pageContext,
  pageContext: { description, name, posts, SeriesFields },
  pageContext: {
    SeriesFields: { seriesImage, youtubePlaylist },
  },
}: SeriesProps) => (
  <Base context={pageContext}>
    <SeriesWrapper>
      {SeriesFields && (
        <SeriesIntro>
          <div>
            <a href={youtubePlaylist} rel="noopener noreferrer" target="_blank">
              <h1>{he.decode(name)}</h1>
            </a>
            {ParseHTML(autoParagraph(description))}
            {youtubePlaylist && (
              <Button
                href={youtubePlaylist}
                rel="noopener noreferrer"
                target="_blank"
              >
                View YouTube Playlist
              </Button>
            )}
          </div>
          <a
            className="intro__image"
            href={youtubePlaylist}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt={seriesImage.altText} src={seriesImage.xl} />
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

export default SeriesTemplate
