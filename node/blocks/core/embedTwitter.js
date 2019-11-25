const mediaFields = require(`../../fragments/media`)
const seoFields = require(`../../fragments/seo`)

const embedTwitterBlock = `
... on WORDPRESS_CoreEmbedTwitterBlock {
	attributes {
		url
		type
		providerNameSlug
		className
		caption
		allowResponsive
		align
	}
}
`

module.exports = embedTwitterBlock
