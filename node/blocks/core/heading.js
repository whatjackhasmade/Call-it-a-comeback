const mediaFields = require(`../../fragments/media`)
const seoFields = require(`../../fragments/seo`)

const coreHeadingBlock = `
   ... on WORDPRESS_CoreHeadingBlock {
		attributes {
			align
			anchor
			className
			content
			level
			placeholder
		}
		isValid
		originalContent
	}
`

module.exports = coreHeadingBlock
