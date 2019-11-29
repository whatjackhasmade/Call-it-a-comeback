import React, { useState } from "react"

import GridComponent from "./GridStyles"

import Button from "../../atoms/button/Button"

type GridProps = {
  filter?: boolean
  items?: []
  rows: [
    {
      altText: string
      ext: string
      filter?: boolean
      key: string
      mediaItemUrl: string
      md?: string
      tag: string
      title: string
    }
  ]
}

const Grid = ({ filter, items, rows = [] }: GridProps) => {
  const [count, updateCount] = useState(100)

  if (!items) return null

  const addItems = () => {
    updateCount(count + 9)
  }

  for (var i = 0; i < count; i++) {
    const item = items[i]
    if (typeof item === "undefined") break

    const {
      id,
      media: { altText, md, mediaItemUrl },
      tags,
      title,
    } = item

    const ext = mediaItemUrl.substr(mediaItemUrl.lastIndexOf(".") + 1)

    rows.push({
      altText,
      ext,
      filter,
      key: `grid-item-${id}`,
      md,
      mediaItemUrl,
      tag: tags.nodes[0].slug,
      title,
    })
  }

  return (
    <>
      <GridComponent>
        {rows.map(
          ({ altText, ext, filter, key, mediaItemUrl, md, tag, title }) => (
            <GridItem
              altText={altText}
              ext={ext}
              filter={filter}
              key={key}
              md={md}
              mediaItemUrl={mediaItemUrl}
              tag={tag}
              title={title}
            />
          )
        )}
      </GridComponent>
      <Button disabled={count > items.length} onClick={addItems}>
        Load More
      </Button>
    </>
  )
}

function GridItem({ altText, ext, filter, key, mediaItemUrl, md, tag, title }) {
  const [fullScreen, changeFullScreen] = useState(false)

  const toggleFullscreen = e => {
    changeFullScreen(!fullScreen)
  }

  let classList = `grid__item`
  if (fullScreen) classList += ` grid__item--fullscreen`

  if (filter) {
    if (tag === filter) classList += ` grid__item--active`
    if (tag !== filter) classList += ` grid__item--inactive`
  }

  return (
    <div className={classList} key={key} onClick={toggleFullscreen}>
      {ext === `mp4` ? (
        <video src={mediaItemUrl} autoPlay={true} loop={true} muted={true} />
      ) : (
        <img alt={altText} src={md} />
      )}
      <span className="grid__item__title">{title}</span>
    </div>
  )
}

export default Grid
