import React, { useEffect, useState } from "react"
import Img from "gatsby-image/withIEPolyfill"
import useQueryBlankImage from "../../particles/hooks/images/useQueryBlankImage"
import StyledLink from "./LinkStyles"

const scraperURL =
  process.env.GATSBY_OPEN_GRAPH_SCRAPER ||
  "https://wjhm-opengraphscraper.herokuapp.com/?url="

type LinkProps = {
  url: string
}

const Link = ({ url }: LinkProps) => {
  const fallback = useQueryBlankImage()
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(scraperURL + url)
      const jsonPayload = await response.json()
      setData(jsonPayload.data)
      return jsonPayload
    }

    getData()
  }, [url])

  if (data)
    return (
      <StyledLink className="link" href={url}>
        <div className="link__image">
          {data.ogImage ||
          (Array.isArray(data.ogImage) && data.ogImage.length > 0) ? (
            <LinkImage
              alt={`Open Graph Image for ${url}`}
              image={data.ogImage}
            />
          ) : (
            <Img
              alt={`Open Graph Fallback Image for ${url}`}
              fluid={fallback.childImageSharp.fluid}
              imgStyle={{
                objectFit: "contain",
              }}
              objectFit="contain"
            />
          )}
        </div>
        <div className="link__content">
          <h3 className="link__title">{data.ogTitle}</h3>
          <p className="link__description">{data.ogDescription}</p>
        </div>
      </StyledLink>
    )
  return null
}

const LinkImage = ({ alt, image }) => {
  if (!image.length) return <img alt={alt} src={image.url} />
  return <img alt={alt} src={image[0].url} />
}

export default Link
