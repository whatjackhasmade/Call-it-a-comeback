import React, { useState } from "react"

import GridComponent from "./GridStyles"

function Grid({ filter, items }) {
  const [count, updateCount] = useState(100)

  const addItems = () => {
    updateCount(count + 9)
  }

  var rows = []
  for (var i = 0; i < count; i++) {
    const item = items[i]

    if (typeof item === "undefined") break

    const { id, media } = item
    const { altText, md, mediaItemUrl } = media
    const ext = mediaItemUrl.substr(mediaItemUrl.lastIndexOf(".") + 1)

    if (ext === `mp4`) {
      rows.push(
        <GridItem
          key={`grid-item-${id}`}
          tag={item.tags.nodes[0].slug}
          filter={filter}
        >
          <video src={mediaItemUrl} alt={altText} autoPlay muted loop />
          <span className="grid__item__title">{item.title}</span>
        </GridItem>
      )
    } else {
      rows.push(
        <GridItem
          key={`grid-item-${id}`}
          tag={item.tags.nodes[0].slug}
          filter={filter}
        >
          <img src={md} alt={altText} />
          <span className="grid__item__title">{item.title}</span>
        </GridItem>
      )
    }
  }

  return (
    <>
      <GridComponent>{rows}</GridComponent>
      <button disabled={count > items.length} onClick={addItems}>
        Load More
      </button>
    </>
  )
}

function GridItem({ tag, children, filter }) {
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
    <div className={classList} onClick={toggleFullscreen}>
      {children}
    </div>
  )
}

export default Grid
