import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import ParseHTML from "../../particles/ParseHTML"
import { isFluid } from "../../helpers"

import IntroComponent from "./IntroStyles"

type IntroProps = {
  children?: any
  content?: string
  heading: string
  illustration?: {
    mediaItemUrl: string
  }
  index?: number
  maxWidth?: string
  marginReduced?: boolean
  subheading: string
}

const Intro = ({
  children,
  content,
  heading,
  illustration,
  index,
  maxWidth,
  marginReduced,
  subheading,
}: IntroProps) => {
  const Subheading = index === 0 ? `h1` : `h2`
  const Heading = index === 0 ? `h2` : `h3`

  if (content) {
    return (
      <IntroComponent
        className="intro"
        marginReduced={marginReduced ? false : true}
        maxWidth={maxWidth}
      >
        <div className="intro__wrapper">
          <Subheading className="h4 intro__subheading">{subheading}</Subheading>
          <Heading className="h1 intro__heading">{heading}</Heading>
          {content && (
            <div className="intro__contents">{ParseHTML(content)}</div>
          )}
        </div>
        {illustration && (
          <>
            {isFluid(illustration) ? (
              <Img
                alt={heading}
                className="intro__illustration"
                fluid={illustration.imageFile.childImageSharp.fluid}
                imgStyle={{
                  objectFit: "cover",
                }}
                objectFit="cover"
              />
            ) : (
              <img
                alt={heading}
                className="intro__illustration"
                src={illustration.mediaItemUrl}
              />
            )}
          </>
        )}
      </IntroComponent>
    )
  } else {
    return (
      <IntroComponent
        className="intro"
        marginReduced={marginReduced ? false : true}
        maxWidth={maxWidth}
      >
        <div className="intro__wrapper">
          <Subheading className="h4 intro__subheading">{subheading}</Subheading>
          <Heading className="h1 intro__heading">{heading}</Heading>
          <div className="intro__contents">{children}</div>
        </div>
      </IntroComponent>
    )
  }
}

export default Intro
