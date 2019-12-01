import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import ParseHTML from "../../particles/ParseHTML"
import { isFluid } from "../../helpers"

import Duotone from "./Duotone"
import HeroComponent from "./HeroStyles"
import HeroMediaComponent from "./HeroMediaStyles"

type HeroProps = {
  align?: string
  background_colour?: string
  children?: any
  content?: string
  duotone?: boolean
  maxWidth?: string
  media?: {
    altText: string
    imageFile?: {
      childImageSharp?: {
        fluid?: {
          aspectRatio: number
          base64: string
          sizes: string
          src: string
          srcSet: string
        }
      }
    }
    mediaItemUrl: string
  }
  overlay?: boolean
}

type HeroMediaProps = {
  alt: string
  background?: string
  duotone: boolean
  media?: {
    altText: string
    imageFile?: {
      childImageSharp?: {
        fluid?: {
          aspectRatio: number
          base64: string
          sizes: string
          src: string
          srcSet: string
        }
      }
    }
    mediaItemUrl: string
  }
  overlay?: boolean
}

const Hero = ({
  align = "left",
  background_colour,
  children,
  content,
  duotone = false,
  maxWidth,
  media,
  overlay = true,
}: HeroProps) => {
  if (!content) {
    return (
      <HeroComponent align={align} maxWidth={maxWidth}>
        <div className="hero__wrapper">
          <div className="hero__contents">{children}</div>
        </div>
      </HeroComponent>
    )
  }

  return (
    <HeroComponent background={background_colour} overlay={overlay}>
      <div className="hero__wrapper">
        {content ? (
          <div className="hero__contents">{ParseHTML(content)}</div>
        ) : (
          <div className="hero__contents">{children}</div>
        )}
        {media && (
          <HeroMedia
            alt={media.altText}
            background={background_colour}
            duotone={duotone}
            media={media}
            overlay={overlay}
          />
        )}
      </div>
    </HeroComponent>
  )
}

const HeroMedia = ({
  alt,
  background,
  duotone,
  media,
  overlay,
}: HeroMediaProps) => (
  <HeroMediaComponent background={background} overlay={overlay}>
    {duotone ? (
      <Duotone className="hero__media">
        <HeroImage alt={alt} src={media} />
      </Duotone>
    ) : (
      <HeroImage alt={alt} src={media} />
    )}
  </HeroMediaComponent>
)

const HeroImage = ({ alt, src }) => (
  <div className="hero__media">
    {false ? (
      <Img
        alt={alt}
        className="hero__media--gatsby"
        fluid={src.imageFile.childImageSharp.fluid}
        imgStyle={{
          objectFit: "cover",
        }}
        objectFit="cover"
      />
    ) : (
      <img src={src.mediaItemUrl} alt={alt} />
    )}
  </div>
)

export default Hero
