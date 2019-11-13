import React from "react"
import { InView } from "react-intersection-observer"
import ParseHTML from "../../particles/ParseHTML"

import RowComponent from "./RowStyles"

import ImageLoader from "../../molecules/imageloader/ImageLoader"

function Row(props) {
  const { content, index, link, media } = props

  const alignment = index % 2 === 0 ? `left` : `right`

  const ext = media.mediaItemUrl.substr(media.mediaItemUrl.lastIndexOf(".") + 1)

  return (
    <InView threshold={0.25} triggerOnce={true}>
      {({ inView, ref }) => (
        <RowComponent
          className={
            inView ? `row row--${alignment} row--show` : `row row--${alignment}`
          }
          ref={ref}
        >
          <div className="row__column">
            {link !== "" ? (
              <a href={`${link}`}>
                <RowMedia media={media} ext={ext} />
              </a>
            ) : (
              <RowMedia media={media} ext={ext} />
            )}
          </div>
          <div className="row__column row__content">{ParseHTML(content)}</div>
        </RowComponent>
      )}
    </InView>
  )
}

function RowMedia({ media, ext }) {
  return (
    <div className="row__media">
      {ext !== `mp4` ? (
        <ImageLoader src={media.mediaItemUrl} alt={media.altText} />
      ) : (
        <video src={media.mediaItemUrl} muted autoPlay loop />
      )}
    </div>
  )
}

export default Row
