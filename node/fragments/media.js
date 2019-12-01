const fluidImageFields = require(`./gatsby/fluid`)

const mediaFields = `
	altText
	${fluidImageFields}
	mediaItemUrl
	xs: sourceUrl(size: FEATURED_XS)
	sm: sourceUrl(size: FEATURED_SM)
	md: sourceUrl(size: FEATURED_MD)
	lg: sourceUrl(size: FEATURED_LG)
	xl: sourceUrl(size: FEATURED_XL)
  uri
`

module.exports = mediaFields
