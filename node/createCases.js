const path = require(`path`)
const mediaFields = require(`./fragments/media`)
const seoFields = require(`./fragments/seo`)

module.exports = async ({ actions, graphql }) => {
  const GET_CASES = `
  query GET_CASES($first:Int){
    wordpress {
      caseStudies( first: $first ) {
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
  const { createPage } = actions

  const fetchCases = async variables =>
    await graphql(GET_CASES, variables).then(({ data }) => {
      return data.wordpress.caseStudies.nodes
    })

  await fetchCases({ first: 500 }).then(allCases => {
    allCases.map(caseStudy => {
      console.log(`create case: ${caseStudy.uri}`)

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
  })
}
