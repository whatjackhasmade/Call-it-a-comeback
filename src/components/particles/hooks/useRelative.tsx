import { useStaticQuery, graphql } from "gatsby"

const WPURLData = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query WPURL {
        wordpress {
          generalSettings {
            url
          }
        }
      }
    `
  )
  return wordpress.generalSettings.url
}

export const useRelative = url => {
  if (!url) return undefined

  let WPURL = WPURLData()
  WPURL = WPURL.slice(0, -3)
  let string = url

  if (url.startsWith(`/`)) return url
  string = string.replace(WPURL, "")
  return string
}

export default useRelative
