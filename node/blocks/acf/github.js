const mediaFields = require(`../../fragments/media`)
const seoFields = require(`../../fragments/seo`)

const githubBlock = `
  ... on WORDPRESS_AcfGithubBlock {
    githubFields: acf {
			content
    }
  }
`

module.exports = githubBlock
