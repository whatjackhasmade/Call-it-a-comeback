const mediaFields = require(`../../fragments/media`)
const seoFields = require(`../../fragments/seo`)

const rowBlock = `
   ... on WORDPRESS_AcfRowBlock {
    name
		rowFields: acf {
			media {
				${mediaFields}
			}
			content
			link
		}
	}
`

module.exports = rowBlock
