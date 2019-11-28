import React from "react"
import Link from "gatsby-link"
import { InView } from "react-intersection-observer"
import { decodeHTML } from "../../helpers"

import { RelatedItem, RelatedWrapper } from "./RelatedStyles"

import ImageLoader from "../../molecules/imageloader/ImageLoader"

type RelatedProps = {
  data: any
  relatedRef?: any
}

const Related = ({ data, relatedRef }: RelatedProps) => (
  <RelatedWrapper ref={relatedRef}>
    <h2>
      Continue Reading{" "}
      <span aria-label="book pile emoji" role="img">
        📚
      </span>
    </h2>
    <div className="related__items">
      {data.map(
        item =>
          item.featuredImage && (
            <InView key={item.uri} threshold={0} triggerOnce={true}>
              {({ inView, ref }) => (
                <RelatedItem ref={ref}>
                  <Link to={`/${item.uri}`}>
                    <ImageLoader
                      src={item.featuredImage.md}
                      alt={
                        item.featuredImage.altText
                          ? item.featuredImage.altText
                          : item.title
                      }
                      className="related__media"
                    />
                    {item.title && <h3>{decodeHTML(item.title)}</h3>}
                    {item.seo.metaDesc && <p>{item.seo.metaDesc}</p>}
                  </Link>
                </RelatedItem>
              )}
            </InView>
          )
      )}
    </div>
  </RelatedWrapper>
)

export default Related
