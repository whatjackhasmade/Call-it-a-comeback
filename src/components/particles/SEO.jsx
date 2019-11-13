import React from "react"
import Helmet from "react-helmet"

const SEO = props => {
  const {
    artist_info,
    isBlog,
    metaDesc,
    opengraphImage,
    opengraphTitle,
    slug,
    title,
    twitterDescription,
    twitterImage,
    twitterTitle,
  } = props

  const postURL = `/`

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: process.env.GATSBY_DOMAIN,
      name: opengraphTitle ? opengraphTitle : title,
      alternateName: "Squawk Voices",
    },
    {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": postURL,
            name: opengraphTitle ? opengraphTitle : title,
            image: opengraphImage
              ? opengraphImage
              : artist_info
              ? artist_info.avatar.sourceUrl
              : null,
          },
        },
      ],
    },
    {
      "@context": "http://schema.org",
      "@type": "BlogPosting",
      url: process.env.GATSBY_DOMAIN,
      name: opengraphTitle ? opengraphTitle : title,
      alternateName: "Squawk Voices",
      headline: opengraphTitle ? opengraphTitle : title,
      image: {
        "@type": "ImageObject",
        url: opengraphImage
          ? opengraphImage
          : artist_info
          ? artist_info.avatar.sourceUrl
          : null,
      },
      description: metaDesc,
    },
  ]

  return (
    <Helmet>
      {/* General tags */}
      <title>{opengraphTitle ? opengraphTitle : title}</title>
      <meta name="description" content={metaDesc} />
      <meta
        name="image"
        content={
          opengraphImage
            ? opengraphImage
            : artist_info
            ? artist_info.avatar.sourceUrl
            : null
        }
      />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta
        property="og:url"
        content={`${process.env.GATSBY_DOMAIN}/${slug}`}
      />
      {isBlog ? <meta property="og:type" content="article" /> : null}
      <meta
        property="og:title"
        content={opengraphTitle ? opengraphTitle : title}
      />
      <meta property="og:description" content={metaDesc ? metaDesc : ""} />
      <meta
        property="og:image"
        content={
          opengraphImage
            ? opengraphImage
            : artist_info
            ? artist_info.avatar.sourceUrl
            : null
        }
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`${process.env.GATSBY_DOMAIN}/${slug}`}
      />
      <meta name="twitter:creator" content={"squawkvoices"} />
      <meta
        name="twitter:title"
        content={
          twitterTitle ? twitterTitle : opengraphTitle ? opengraphTitle : title
        }
      />
      <meta
        name="twitter:description"
        content={
          twitterDescription ? twitterDescription : metaDesc ? metaDesc : ""
        }
      />
      <meta
        name="twitter:image"
        content={
          twitterImage
            ? twitterImage
            : opengraphImage
            ? opengraphImage
            : artist_info
            ? artist_info.avatar.sourceUrl
            : null
        }
      />
    </Helmet>
  )
}

export default SEO
