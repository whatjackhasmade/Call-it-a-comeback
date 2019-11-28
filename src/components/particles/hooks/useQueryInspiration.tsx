import { useStaticQuery, graphql } from "gatsby"

export const useQueryInspiration = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query WordPressInspirationPage {
        wordpress {
          inspirations(first: 500) {
            nodes {
              id
              acf: InspirationFields {
                media {
                  altText
                  mediaItemUrl
                  xs: sourceUrl(size: FEATURED_XS)
                  sm: sourceUrl(size: FEATURED_SM)
                  md: sourceUrl(size: FEATURED_MD)
                  lg: sourceUrl(size: FEATURED_LG)
                  xl: sourceUrl(size: FEATURED_XL)
                  uri
                }
                source
              }
              tags {
                nodes {
                  slug
                }
              }
              title
            }
          }
        }
      }
    `
  )
  return wordpress.inspirations.nodes
}

export default useQueryInspiration
