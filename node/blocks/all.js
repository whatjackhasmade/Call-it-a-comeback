const coreHeading = require(`./core/heading`)

const embedTwitter = require(`./core/embedTwitter`)
const embedYouTube = require(`./core/embedYouTube`)

const code = require(`./acf/code`)
const dribbble = require(`./acf/dribbble`)
const github = require(`./acf/github`)
const hero = require(`./acf/hero`)
const intro = require(`./acf/intro`)
const link = require(`./acf/link`)
const presentations = require(`./acf/presentations`)
const row = require(`./acf/row`)
const testimonials = require(`./acf/testimonials`)
const youtube = require(`./acf/youtube`)
const youtubeChannel = require(`./acf/youtubeChannel`)

module.exports = {
  /* Core Blocks */
  coreHeading,
  embedTwitter,
  embedYouTube,

  /* ACF Blocks */
  code,
  dribbble,
  github,
  hero,
  intro,
  link,
  presentations,
  row,
  testimonials,
  youtube,
  youtubeChannel,
}
