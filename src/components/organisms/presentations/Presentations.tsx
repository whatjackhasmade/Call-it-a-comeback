import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ParseHTML from "../../particles/ParseHTML"
import useQueryPresentations from "../../particles/hooks/useQueryPresentations"
import { isFluid } from "../../helpers"

import PresentationsComponent from "./PresentationsStyles"

import Intro from "../intro/Intro"

import settings from "./PresentationsSettings.json"

type PresentationsProps = {
  content: string
}

type PresentationProps = {
  date: string
  featuredImage: {
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
    altText: string
    xs: string
    sm: string
    md: string
    mediaItemUrl: string
    lg: string
    xl: string
    uri: string
  }
  id: string
  title: string
  url: string
  venue: string
}

const Presentations = ({ content }: PresentationsProps) => {
  const presentations = useQueryPresentations()

  return (
    <PresentationsComponent>
      <Intro
        heading="Event Presentations"
        marginReduced={true}
        subheading="Touring the south coast"
      >
        <div>{ParseHTML(content)}</div>
      </Intro>
      <Slider {...settings}>
        {presentations.length > 0 &&
          presentations.map(event => <Presentation {...event} />)}
      </Slider>
    </PresentationsComponent>
  )
}

const Presentation = ({ featuredImage, title, venue }: PresentationProps) => (
  <div className="presentations__event" key={`${title}-${venue}`}>
    {isFluid(featuredImage) ? (
      <div>
        <Img
          alt={title}
          className="presentations__event__thumbnail"
          fluid={featuredImage.imageFile.childImageSharp.fluid}
          imgStyle={{
            objectFit: "cover",
          }}
          objectFit="cover"
        />
      </div>
    ) : (
      <img
        alt={title}
        className="presentations__event__thumbnail"
        src={featuredImage.sm}
      />
    )}
    <div className="presentations__event__meta">
      <h5 className="subheading">{venue}</h5>
      <h3>{title}</h3>
    </div>
  </div>
)

export default Presentations
