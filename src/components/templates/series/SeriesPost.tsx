import React from "react"
import he from "he"
import Link from "gatsby-link"

type SeriesPostProps = {
  featuredImage: {
    altText: string
    md: string
  }
  title: string
  seo: {
    metaDesc: string
  }
  slug: string
}

const SeriesPost = ({ featuredImage, title, seo, slug }: SeriesPostProps) => (
  <Link className="post" to={`/${slug}`}>
    {featuredImage && (
      <div className="post__image">
        <img alt={featuredImage.altText} src={featuredImage.md} />
      </div>
    )}
    {title && <h2 className="h4">{he.decode(title)}</h2>}
    {seo && <p>{seo.metaDesc}</p>}
  </Link>
)

export default SeriesPost
