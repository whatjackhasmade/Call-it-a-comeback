import { useStaticQuery, graphql } from "gatsby"

export const useQueryYouTube = () => {
  const { allYoutube } = useStaticQuery(
    graphql`
      query AllYouTubeVideos {
        allYoutube {
          edges {
            node {
              id
              snippet {
                description
                resourceId {
                  videoId
                }
                title
                thumbnails {
                  medium {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return allYoutube.edges
}

export default useQueryYouTube
