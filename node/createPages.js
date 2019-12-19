const path = require(`path`)
const mediaFields = require(`./fragments/media`)
const seoFields = require(`./fragments/seo`)
const blocks = require(`./blocks/all`)

module.exports = async ({ actions, graphql }) => {
  const GET_PAGES = `
  query GET_PAGES($first:Int){
    wordpress {
      pages( first: $first ) {
				nodes {
          blocks {
            isValid
						name
						originalContent
            ${blocks.code}
						${blocks.coreHeading}
            ${blocks.embedTwitter}
						${blocks.embedYouTube}
						${blocks.dribbble}
						${blocks.github}
						${blocks.hero}
            ${blocks.intro}
						${blocks.link}
						${blocks.presentations}
						${blocks.row}
						${blocks.testimonials}
						${blocks.youtube}
						${blocks.youtubeChannel}
					}
					isFrontPage
					${seoFields}
					title
					uri
				}
      }
    }
  }
  `
  const { createPage } = actions

  const fetchPages = async variables =>
    await graphql(GET_PAGES, variables).then(({ data }) => {
      return data.wordpress.pages.nodes
    })

  await fetchPages({ first: 500 }).then(allPages => {
    allPages.map(page => {
      console.log(`create page: ${page.uri}`)

      const { isFrontPage } = page
      const uri = isFrontPage ? `/` : `/${page.uri}`

      actions.createPage({
        path: uri,
        component: path.resolve(`./src/components/templates/Page.tsx`),
        context: {
          ...page,
          title: page.title,
        },
      })
    })
  })
}
