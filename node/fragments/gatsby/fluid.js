const fluidImageFields = `
	imageFile {
		childImageSharp {
			fluid {
				aspectRatio
				base64
				sizes
				src
				srcSet
			}
		}
	}
`

module.exports = fluidImageFields
