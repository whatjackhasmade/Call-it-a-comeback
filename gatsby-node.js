const path = require(`path`)

const mediaFields = `
  altText
  uri
`

const seoFields = `
	seo {
		title
		focuskw
		metaDesc
		metaKeywords
		opengraphDescription
		opengraphImage
		opengraphTitle
		twitterDescription
		twitterImage
		twitterTitle
	}
`

const query = `
	query {
		wordpress {
			pages(first: 5000, where: { status: PUBLISH }) {
				nodes {
					title
					uri
				}
			}
			posts(first: 5000, where: { status: PUBLISH }) {
				nodes {
					categories {
						nodes {
							name
							slug
							termTaxonomyId
						}
					}
					content
					date
					featuredImage {
						${mediaFields}
					}
					${seoFields}
					status
					uri
					title
				}
			}
		}
	}
`

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    ${query}
  `)

  if (!data.wordpress) return null

  data.wordpress.pages.nodes.forEach(page => {
    actions.createPage({
      path: `/${page.uri}`,
      component: path.resolve(`./src/components/templates/post.jsx`),
      context: {
        ...page,
        title: page.title,
      },
    })
  })

  data.wordpress.posts.nodes.forEach(post => {
    actions.createPage({
      path: `/post/${post.uri}`,
      component: path.resolve(`./src/components/templates/post.jsx`),
      context: {
        ...post,
        id: post.id,
        slug: post.uri,
        title: post.title,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /mailtoui/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
