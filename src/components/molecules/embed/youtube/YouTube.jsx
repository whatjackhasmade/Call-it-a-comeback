import React from "react"
import YouTube from "react-youtube"
import { YouTubeGetID } from "../../../helpers"

import YouTubeComponent from "./YouTubeStyles"

const opts = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
}

const _onReady = event => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo()
}

const YouTubeBlock = props => {
  const { attributes, children } = props
  const { url } = attributes

  if (url) {
    return (
      <YouTubeComponent>
        <div className="youtube__wrapper">
          <YouTube videoId={YouTubeGetID(url)} opts={opts} onReady={_onReady} />
        </div>
      </YouTubeComponent>
    )
  }

  return (
    <YouTubeComponent>
      <div className="youtube__contents">{children}</div>
    </YouTubeComponent>
  )
}

export default YouTubeBlock
