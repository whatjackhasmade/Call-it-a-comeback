import React from "react"
import { InView } from "react-intersection-observer"

import { BreakImage } from "./CaseStyles"

import ImageLoader from "../../molecules/imageloader/ImageLoader"

type CaseBreakProps = {
  image: {
    altText: string
    mediaItemUrl: string
  }
}

const CaseBreak = ({ image }: CaseBreakProps) => (
  <InView threshold={0} triggerOnce={true}>
    {({ inView, ref }) => (
      <BreakImage ref={ref}>
        <div className="break__image">
          <ImageLoader alt={image.altText} src={image.mediaItemUrl} />
        </div>
      </BreakImage>
    )}
  </InView>
)

export default CaseBreak
