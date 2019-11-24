import { useStaticQuery, graphql } from "gatsby"

export const useQuerySeries = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query AllSerieses {
        wordpress {
          serieses {
            nodes {
              name
              count
              posts(first: 300) {
                nodes {
                  title
                }
              }
            }
          }
        }
      }
    `
  )
  return wordpress.serieses.nodes
}

export default useQuerySeries
