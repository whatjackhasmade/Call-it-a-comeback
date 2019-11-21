const mediaFields = require(`../../fragments/media`)
const seoFields = require(`../../fragments/seo`)

const heroBlock = `
  ... on WORDPRESS_AcfHeroBlock {
    name
    heroFields: acf {
			background_colour
			content
			duotone
			overlay
			media {
				${mediaFields}
			}
    }
  }
`

module.exports = heroBlock
