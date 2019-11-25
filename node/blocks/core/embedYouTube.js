const mediaFields = require(`../../fragments/media`)
const seoFields = require(`../../fragments/seo`)

const embedYouTubeBlock = `
... on WORDPRESS_CoreEmbedYoutubeBlock {
	attributes {
		url
	}
}
`

module.exports = embedYouTubeBlock
