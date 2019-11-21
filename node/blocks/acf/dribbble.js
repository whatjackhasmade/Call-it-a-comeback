const mediaFields = require(`../../fragments/media`)
const seoFields = require(`../../fragments/seo`)

const dribbbleBlock = `
  ... on WORDPRESS_AcfDribbbleBlock {
    name
    dribbbleFields: acf {
			content
			count
    }
  }
`

module.exports = dribbbleBlock
