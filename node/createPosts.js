const path = require(`path`)
const mediaFields = require(`./fragments/media`)
const seoFields = require(`./fragments/seo`)
const blocks = require(`./blocks/all`)

module.exports = async ({ actions, graphql }) => {
  const GET_POSTS = `
  query GET_POSTS($first:Int){
    wordpress {
      posts( first: $first ) {
				nodes {
					blocks {
          	isValid
						name
						originalContent
						${blocks.code}
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
					acf: PostFields {
						learn {
							items {
								id
								value
							}
							title
						}
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
        component: path.resolve(`./src/components/templates/post/Post.tsx`),
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
