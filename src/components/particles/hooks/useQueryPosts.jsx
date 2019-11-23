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
              seo {
                metaDesc
                title
              }
              slug
              title
            }
          }
        }
      }
    `
  )
  return wordpress.posts.nodes
}

export default useQueryPosts
