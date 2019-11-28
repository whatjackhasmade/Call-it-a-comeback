import { useStaticQuery, graphql } from "gatsby"

export const useQueryDribbble = () => {
  const { allDribbble } = useStaticQuery(
    graphql`
      query AllDribbbleShots {
        allDribbble {
          edges {
            node {
              id
              description
              html_url
              images {
                two_x
              }
              title
            }
          }
        }
      }
    `
  )
  return allDribbble.edges
}

export default useQueryDribbble
