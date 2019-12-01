import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { InView } from "react-intersection-observer"
import { isFluid } from "../../helpers"

import { GalleryContainer } from "./CaseStyles"

import ImageLoader from "../../molecules/imageloader/ImageLoader"

type CaseGalleryProps = {
  images: [
    {
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
      md: string
      mediaItemUrl: string
    }
  ]
  small: boolean
}

const CaseGallery = ({ images, small }: CaseGalleryProps) => {
  if (!images[0]) return null

  let classList = `gallery`
  small ? (classList = `gallery gallery--small`) : ` gallery`

  return (
    <InView threshold={0} triggerOnce={true}>
      {({ inView, ref }) => (
        <GalleryContainer
          className={inView ? `${classList} gallery--show` : `${classList}`}
          ref={ref}
        >
          {images.map(image => (
            <div className="gallery__image__wrapper">
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
                <div className="gallery__image">
                  <ImageLoader
                    alt={image.altText}
                    key={image.mediaItemUrl}
                    src={image.md}
                  />
                </div>
              )}
            </div>
          ))}
        </GalleryContainer>
      )}
    </InView>
  )
}

export default CaseGallery
