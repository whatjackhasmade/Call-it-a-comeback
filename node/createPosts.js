const path = require(`path`)
const mediaFields = require(`./fragments/media`)
const seoFields = require(`./fragments/seo`)

module.exports = async ({ actions, graphql }) => {
  const GET_POSTS = `
  query GET_POSTS($first:Int){
    wordpress {
      posts( first: $first ) {
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
					PostFields {
						relatedPosts {
							... on WORDPRESS_Post {
								id
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
      }
    }
  }
  `
  const { createPage } = actions

  const fetchPosts = async variables =>
    await graphql(GET_POSTS, variables).then(({ data }) => {
      return data.wordpress.posts.nodes
    })

  await fetchPosts({ first: 500 }).then(allPosts => {
    allPosts.map(post => {
      console.log(`create post: ${post.uri}`)

      actions.createPage({
        path: `/${post.uri}`,
        component: path.resolve(`./src/components/templates/post/Post.jsx`),
        context: {
          ...post,
          id: post.id,
          slug: post.uri,
          title: post.title,
        },
      })
    })
  })
}
