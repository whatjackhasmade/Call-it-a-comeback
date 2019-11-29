import React from "react"
import ParseHTML from "../../particles/ParseHTML"

import Duotone from "./Duotone"
import HeroComponent from "./HeroStyles"
import HeroMediaComponent from "./HeroMediaStyles"
import { string } from "prop-types"

type HeroProps = {
  align?: string
  background_colour?: string
  children?: any
  content?: string
  duotone?: boolean
  maxWidth?: string
  media?: {
    altText: string
    mediaItemUrl: string
  }
  overlay?: boolean
}

type HeroMediaProps = {
  alt: string
  background?: string
  duotone: boolean
  media: string
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
            media={media.mediaItemUrl}
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
        <img src={media} alt={alt} />
      </Duotone>
    ) : (
      <img src={media} alt={alt} />
    )}
  </HeroMediaComponent>
)

export default Hero
