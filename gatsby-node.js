const path = require(`path`)

const mediaFields = `
	altText
	mediaItemUrl
	xs: sourceUrl(size: FEATURED_XS)
	sm: sourceUrl(size: FEATURED_SM)
	md: sourceUrl(size: FEATURED_MD)
	lg: sourceUrl(size: FEATURED_LG)
	xl: sourceUrl(size: FEATURED_XL)
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

const dribbbleBlock = `
  ... on WORDPRESS_AcfDribbbleBlock {
    name
    dribbbleFields: acf {
			content
			count
    }
  }
`

const githubBlock = `
  ... on WORDPRESS_AcfGithubBlock {
    name
    githubFields: acf {
			content
    }
  }
`

const heroBlock = `
  ... on WORDPRESS_AcfHeroBlock {
    name
    heroFields: acf {
			background_colour
			content
			duotone
			overlay
			media {
				${mediaFields}
			}
    }
  }
`

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

const presentationsBlock = `
  ... on WORDPRESS_AcfPresentationsBlock {
    name
    presentationsFields: acf {
			content
			count
    }
  }
`

const rowBlock = `
   ... on WORDPRESS_AcfRowBlock {
    name
		rowFields: acf {
			media {
				${mediaFields}
			}
			content
			link
		}
	}
`

const testimonialsBlock = `
   ... on WORDPRESS_AcfTestimonialsBlock {
    name
		testimonialsFields: acf {
		  testimonials {
				author
				role
				testimonial
				logo {
					${mediaFields}
				}
				media {
					${mediaFields}
				}
			}
		}
	}
`

const youtubeBlock = `
   ... on WORDPRESS_AcfYoutubeBlock {
    name
		youtubeFields: acf {
			media
		}
	}
`

const youtubechannelBlock = `
   ... on WORDPRESS_AcfYoutubechannelBlock {
    name
	}
`

const query = `
	query {
		wordpress {
			pages(first: 5000, where: { status: PUBLISH }) {
				nodes {
					blocks {
						${dribbbleBlock}
						${githubBlock}
						${heroBlock}
						${introBlock}
						${presentationsBlock}
						${rowBlock}
						${testimonialsBlock}
						${youtubeBlock}
						${youtubechannelBlock}
					}
					isFrontPage
					${seoFields}
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
			caseStudies {
				nodes {
					id
					date
					featuredImage {
						${mediaFields}
					}
					${seoFields}
					status
					uri
					title
					CaseStudyFields {
						devicePreviews
						devices {
							desktop
							fieldGroupName
							mobile
						}
						gallery {
							${mediaFields}
						}
						intro {
							description
							illustration {
								${mediaFields}
							}
							title
							subtitle
						}
						related {
							...on WORDPRESS_CaseStudy {
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
						siteUrl
						testimonials {
							testimonial {
								author
								fieldGroupName
								logo {
									${mediaFields}
								}
								media {
									${mediaFields}
								}
								role
								testimonial
							}
						}
						blocks {
							fields {
								columnOne
								columnTwo
								title
							}
						}
					}
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
    const { isFrontPage } = page
    const uri = isFrontPage ? `/` : `/${page.uri}`

    actions.createPage({
      path: uri,
      component: path.resolve(`./src/components/templates/Page.jsx`),
      context: {
        ...page,
        title: page.title,
      },
    })
  })

  data.wordpress.posts.nodes.forEach(post => {
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

  data.wordpress.caseStudies.nodes.forEach(caseStudy => {
    actions.createPage({
      path: `/${caseStudy.uri}`,
      component: path.resolve(`./src/components/templates/case/Case.jsx`),
      context: {
        ...caseStudy,
        id: caseStudy.id,
        slug: caseStudy.uri,
        title: caseStudy.title,
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
