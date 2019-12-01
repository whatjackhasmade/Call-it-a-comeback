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
                    fluid(maxWidth: 2560) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                md: sourceUrl(size: FEATURED_MD)
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
