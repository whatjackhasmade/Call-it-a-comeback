const mediaFields = require(`../../fragments/media`)
const seoFields = require(`../../fragments/seo`)

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

module.exports = testimonialsBlock
