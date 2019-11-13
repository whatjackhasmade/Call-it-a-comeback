require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const fetch = require(`node-fetch`)
const queryString = require(`query-string`)
const crypto = require(`crypto`)
const path = require(`path`)

exports.sourceNodes = async (
  { actions: { createNode }, createNodeId },
  { plugins, ...options }
) => {
  const accessToken = `9422ed733294915d402ad516d509f33f618c1ddde539c9fddd94415530e127e3`
  const dribbbleURL = `https://api.dribbble.com/v2/user/shots?access_token=${accessToken}`
  const dribbbleResponse = await fetch(dribbbleURL)
  const dribbbleData = await dribbbleResponse.json()

  dribbbleData.forEach(shot => {
    createNode({
      ...shot,
      id: createNodeId(`dribbble-${shot.id}`),
      parent: null,
      children: [],
      internal: {
        type: "Dribbble",
        content: JSON.stringify(shot),
        contentDigest: crypto
          .createHash("md5")
          .update(JSON.stringify(shot))
          .digest("hex"),
      },
    })
  })

  const GAPI = process.env.GOOGLE_API
  const PlayListID = `UUIOm-HME4V_STS9yWM5aXIg`
  const NumberResults = 12
  const youtubeURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${PlayListID}&key=${GAPI}&maxResults=${NumberResults}`
  const youtubeResponse = await fetch(youtubeURL)
  const youtubeData = await youtubeResponse.json()

  if (youtubeData && youtubeData.items) {
    youtubeData.items.forEach(video => {
      createNode({
        ...video,
        id: createNodeId(`youtube-${video.id}`),
        parent: null,
        children: [],
        internal: {
          type: "Youtube",
          content: JSON.stringify(video),
          contentDigest: crypto
            .createHash("md5")
            .update(JSON.stringify(video))
            .digest("hex"),
        },
      })
    })
  }
}
