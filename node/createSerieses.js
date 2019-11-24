const path = require(`path`)
const mediaFields = require(`./fragments/media`)
const seoFields = require(`./fragments/seo`)

module.exports = async ({ actions, graphql }) => {
  const GET_SERIESES = `
  query GET_SERIESES($first:Int){
		wordpress {
			serieses(first: $first) {
				nodes {
					count
		      description
					name
					SeriesFields {
						seriesImage {
							${mediaFields}
						}
        		youtubePlaylist
					}
					slug
					posts(first: $first) {
						nodes {
							featuredImage {
              	${mediaFields}
							}
							${seoFields}
							slug
							title
						}
					}
				}
			}
		}
  }
  `
  const { createPage } = actions

  const fetchSerieses = async variables =>
    await graphql(GET_SERIESES, variables).then(({ data }) => {
      return data.wordpress.serieses.nodes
    })

  await fetchSerieses({ first: 500 }).then(allSerieses => {
    allSerieses.map(series => {
      console.log(`create series: ${series.slug}`)

      actions.createPage({
        path: `/${series.slug}`,
        component: path.resolve(`./src/components/templates/series/Series.jsx`),
        context: {
          ...series,
          slug: series.slug,
        },
      })
    })
  })
}
