const mediaFields = require(`../../fragments/media`)
const seoFields = require(`../../fragments/seo`)

const dribbbleBlock = `
  ... on WORDPRESS_AcfDribbbleBlock {
    dribbbleFields: acf {
			content
			count
    }
  }
`

module.exports = dribbbleBlock
