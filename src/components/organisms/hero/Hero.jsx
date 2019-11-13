import React from "react"
import ParseHTML from "../../particles/ParseHTML"

import Duotone from "./Duotone"
import HeroComponent from "./HeroStyles"
import HeroMediaComponent from "./HeroMediaStyles"

function Hero({
  background_colour,
  children,
  content,
  duotone,
  media,
  overlay,
}) {
  if (!content) {
    return (
      <HeroComponent>
        <div className="hero__wrapper">
          <div className="hero__contents">{children}</div>
        </div>
      </HeroComponent>
    )
  }

  const background = background_colour ? background_colour : `#0652DD`

  return (
    <HeroComponent background={background} overlay={overlay}>
      <div className="hero__wrapper">
        {content ? (
          <div className="hero__contents">{ParseHTML(content)}</div>
        ) : (
          <div className="hero__contents">{children}</div>
        )}
        {media && (
          <HeroMedia
            alt={media.altText}
            duotone={duotone}
            media={media.mediaItemUrl}
            overlay={overlay}
          />
        )}
      </div>
    </HeroComponent>
  )
}

function HeroMedia({ alt, duotone, media, overlay }) {
  if (duotone) {
    return (
      <HeroMediaComponent overlay={overlay}>
        <Duotone
          className="hero__media"
          highlight={props => props.theme.primary}
          shadow={`#000`}
        >
          <img src={media} alt={alt} />
        </Duotone>
      </HeroMediaComponent>
    )
  }

  return (
    <HeroMediaComponent overlay={overlay}>
      <img src={media} alt={alt} />
    </HeroMediaComponent>
  )
}

export default Hero
