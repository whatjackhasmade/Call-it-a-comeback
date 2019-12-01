import { useStaticQuery, graphql } from "gatsby"

export const useQueryPresentations = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query AllPresentations {
        wordpress {
          events {
            nodes {
              id
              acf: PostTypeEventFields {
                date
                url
                venue
              }
              featuredImage {
                altText
                imageFile {
                  childImageSharp {
                    fluid(maxWidth: 2560) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                mediaItemUrl
                xs: sourceUrl(size: FEATURED_XS)
                sm: sourceUrl(size: FEATURED_SM)
                md: sourceUrl(size: FEATURED_MD)
                lg: sourceUrl(size: FEATURED_LG)
                xl: sourceUrl(size: FEATURED_XL)
                uri
              }
              title
            }
          }
        }
      }
    `
  )
  return wordpress.events.nodes
}

export default useQueryPresentations
