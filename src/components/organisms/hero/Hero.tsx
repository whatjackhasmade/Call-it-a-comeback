import React from "react"
import ParseHTML from "../../particles/ParseHTML"

import Duotone from "./Duotone"
import HeroComponent from "./HeroStyles"
import HeroMediaComponent from "./HeroMediaStyles"

type HeroProps = {
  background_colour?: string
  children?: any
  content?: string
  duotone?: boolean
  media?: {
    altText: string
    mediaItemUrl: string
  }
  overlay?: boolean
}

const Hero = ({
  background_colour,
  children,
  content,
  duotone = false,
  media,
  overlay = true,
}: HeroProps) => {
  if (!content) {
    return (
      <HeroComponent>
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

function HeroMedia({ alt, background, duotone, media, overlay }) {
  if (duotone) {
    return (
      <HeroMediaComponent background={background} overlay={overlay}>
        <Duotone className="hero__media">
          <img src={media} alt={alt} />
        </Duotone>
      </HeroMediaComponent>
    )
  }

  return (
    <HeroMediaComponent background={background} overlay={overlay}>
      <img src={media} alt={alt} />
    </HeroMediaComponent>
  )
}

export default Hero
