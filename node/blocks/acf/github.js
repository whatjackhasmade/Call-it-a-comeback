const mediaFields = require(`../../fragments/media`)
const seoFields = require(`../../fragments/seo`)

const githubBlock = `
  ... on WORDPRESS_AcfGithubBlock {
    name
    githubFields: acf {
			content
    }
  }
`

module.exports = githubBlock
