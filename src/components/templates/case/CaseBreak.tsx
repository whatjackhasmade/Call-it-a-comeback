import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { InView } from "react-intersection-observer"
import { isFluid } from "../../helpers"

import { BreakImage } from "./CaseStyles"

import ImageLoader from "../../molecules/imageloader/ImageLoader"

type CaseBreakProps = {
  image: {
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
}

const CaseBreak = ({ image }: CaseBreakProps) => (
  <InView threshold={0} triggerOnce={true}>
    {({ inView, ref }) => (
      <BreakImage ref={ref}>
        <div className="break__image">
          {isFluid(image) ? (
            <Img
              alt={image.altText}
              fluid={image.imageFile.childImageSharp.fluid}
              imgStyle={{
                objectFit: "cover",
              }}
              key={image.mediaItemUrl}
              objectFit="cover"
            />
          ) : (
            <ImageLoader alt={image.altText} src={image.mediaItemUrl} />
          )}
        </div>
      </BreakImage>
    )}
  </InView>
)

export default CaseBreak
