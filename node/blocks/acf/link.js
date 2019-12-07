const mediaFields = require(`../../fragments/media`)
const seoFields = require(`../../fragments/seo`)

const linkBlock = `
  ... on WORDPRESS_AcfLinkBlock {
    linkFields: acf {
			url
    }
  }
`

module.exports = linkBlock
