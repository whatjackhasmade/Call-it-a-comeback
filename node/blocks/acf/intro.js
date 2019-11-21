const mediaFields = require(`../../fragments/media`)
const seoFields = require(`../../fragments/seo`)

const introBlock = `
  ... on WORDPRESS_AcfIntroBlock {
    name
    introFields: acf {
			content
			heading
			subheading
    }
  }
`

module.exports = introBlock
