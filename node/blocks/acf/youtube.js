const mediaFields = require(`../../fragments/media`)
const seoFields = require(`../../fragments/seo`)

const youtubeBlock = `
   ... on WORDPRESS_AcfYoutubeBlock {
    name
		youtubeFields: acf {
			media
		}
	}
`

module.exports = youtubeBlock
