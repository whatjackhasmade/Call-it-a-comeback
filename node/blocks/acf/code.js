const mediaFields = require(`../../fragments/media`)
const seoFields = require(`../../fragments/seo`)

const codeBlock = `
  ... on WORDPRESS_AcfCodeBlock {
    codeFields: acf {
			code
			language
    }
  }
`

module.exports = codeBlock
