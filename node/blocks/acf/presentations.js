const mediaFields = require(`../../fragments/media`)
const seoFields = require(`../../fragments/seo`)

const presentationsBlock = `
  ... on WORDPRESS_AcfPresentationsBlock {
    presentationsFields: acf {
			content
			count
    }
  }
`

module.exports = presentationsBlock
