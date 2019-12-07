import { useStaticQuery, graphql } from "gatsby"

export const useQueryPosts = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query WordPessPostsPage {
        wordpress {
          posts(first: 1500) {
            nodes {
              id
              date
              featuredImage {
                altText
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
                mediaItemUrl
                xs: sourceUrl(size: FEATURED_XS)
                sm: sourceUrl(size: FEATURED_SM)
                md: sourceUrl(size: FEATURED_MD)
                lg: sourceUrl(size: FEATURED_LG)
                xl: sourceUrl(size: FEATURED_XL)
                uri
              }
              seo {
                metaDesc
                title
              }
              slug
              title
              uri
            }
          }
        }
      }
    `
  )
  return wordpress.posts.nodes
}

export default useQueryPosts
