import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ParseHTML from "../../particles/ParseHTML"

import PresentationsComponent from "./PresentationsStyles"

import Intro from "../intro/Intro"

export default props => (
  <StaticQuery
    query={graphql`
      query {
        wordpress {
          events {
            nodes {
              id
              acf: PostTypeEventFields {
                date
                url
                venue
              }
              featuredImage {
                altText
                mediaItemUrl
                xs: sourceUrl(size: FEATURED_XS)
                sm: sourceUrl(size: FEATURED_SM)
                md: sourceUrl(size: FEATURED_MD)
                lg: sourceUrl(size: FEATURED_LG)
                xl: sourceUrl(size: FEATURED_XL)
                uri
              }
              title
            }
          }
        }
      }
    `}
    render={query => <Presentations query={query} {...props} />}
  />
)

const settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  infinite: true,
  nextArrow: false,
  prevArrow: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

function Presentations({ content, query }) {
  return (
    <PresentationsComponent>
      <Intro
        heading={`Event Presentations`}
        subheading={`Touring the south coast`}
        marginReduced
      >
        <div>{ParseHTML(content)}</div>
      </Intro>
      <Slider {...settings}>
        {query.wordpress.events.nodes.length > 0 &&
          query.wordpress.events.nodes.map((event, index) => (
            <Event
              index={index}
              key={`event-${index}`}
              event={event}
              venue={event.venue}
            />
          ))}
      </Slider>
    </PresentationsComponent>
  )
}

function Event({ index, event, venue }) {
  return (
    <div
      className="presentations__event"
      data-index={index}
      index={index}
      key={`${event.title}-${index}`}
    >
      <img
        alt={event.title}
        className="presentations__event__thumbnail"
        src={event.featuredImage.sm}
      />
      <div className="presentations__event__meta">
        <h5 className="subheading">{venue}</h5>
        <h3>{event.title}</h3>
      </div>
    </div>
  )
}
