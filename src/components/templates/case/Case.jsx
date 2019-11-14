import React from "react"
import { Link } from "gatsby"
import { InView } from "react-intersection-observer"
import ReactBreakpoints, { Media } from "react-breakpoints"
import YouTube from "react-youtube"
import ParseHTML from "../../particles/ParseHTML"
import { YouTubeGetID } from "../../helpers"
import "html5-device-mockups/dist/device-mockups.min.css"

import {
  BlockContainer,
  BreakImage,
  Devices,
  GalleryContainer,
  RelatedContainer,
  RelatedItem,
} from "./CaseStyles"

import Base from "../Base"

import ImageLoader from "../../molecules/imageloader/ImageLoader"

import Intro from "../../organisms/intro/Intro"
import Testimonials from "../../organisms/testimonials/Testimonials"

const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1440,
  xxl: 1800,
}

function CaseTemplate({ pageContext }) {
  const { CaseStudyFields } = pageContext
  let {
    blocks,
    devices,
    devicePreviews,
    gallery,
    intro,
    related = [],
    siteUrl,
    testimonials,
  } = CaseStudyFields

  testimonials = testimonials.map((testimonial, i) => {
    return { ...testimonial.testimonial }
  })

  let testimonialData = {}

  testimonialData.testimonials = []

  let gallery_one = []
  let gallery_two = []
  let gallery_three = []
  const gallery_four = gallery[7]
  let gallery_five = []
  let gallery_six = []

  for (var i = 0; i < 2; i++) {
    gallery_one.push(gallery[i])
  }

  for (i = 2; i < 4; i++) {
    gallery_two.push(gallery[i])
  }

  for (i = 4; i < 6; i++) {
    gallery_three.push(gallery[i])
  }

  for (i = 8; i < 10; i++) {
    gallery_five.push(gallery[i])
  }

  for (i = 10; i < gallery.length; i++) {
    gallery_six.push(gallery[i])
  }

  console.log({ ...intro })

  return (
    <ReactBreakpoints breakpoints={breakpoints}>
      <Base context={pageContext}>
        <Intro
          content={intro.description}
          heading={intro.title}
          subheading={intro.subtitle}
          illustration={intro.illustration}
          maxWidth={`906px`}
        />
        {devicePreviews && (
          <Media>
            {({ breakpoints, currentBreakpoint }) =>
              breakpoints[currentBreakpoint] > breakpoints.lg ? (
                <InView threshold={0} triggerOnce={true}>
                  {({ inView, ref }) => (
                    <Devices
                      className={inView ? `devices devices--show` : `devices`}
                      ref={ref}
                    >
                      <a
                        href={siteUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="device-wrapper macbook">
                          <div
                            className="device"
                            data-color="white"
                            data-device="Macbook2015"
                            data-orientation="portrait"
                          >
                            <div className="screen">
                              <YouTubeEmbed url={devices.desktop} />
                            </div>
                          </div>
                        </div>
                        <div className="device-wrapper iphone">
                          <div
                            className="device"
                            data-device="iPhone7"
                            data-orientation="portrait"
                            data-color="white"
                          >
                            <div className="screen">
                              <YouTubeEmbed url={devices.mobile} />
                            </div>
                          </div>
                        </div>
                      </a>
                    </Devices>
                  )}
                </InView>
              ) : (
                <a
                  href={siteUrl}
                  className="button"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View The {intro.subtitle} Website
                </a>
              )
            }
          </Media>
        )}

        {blocks[0] && <Block data={blocks[0].fields} />}
        {gallery_one[0] && <Gallery images={gallery_one} />}
        {blocks[1] && <Block data={blocks[1].fields} />}
        {gallery_two[0] && <Gallery images={gallery_two} />}
        {blocks[2] && <Block data={blocks[2].fields} />}
        {gallery_three[0] && <Gallery images={gallery_three} />}
        {blocks[3] && <Block data={blocks[3].fields} />}
        {gallery_four && <Break image={gallery_four} />}
        {blocks[4] && <Block data={blocks[4].fields} />}
        {gallery_five[0] && <Gallery images={gallery_five} />}
        {blocks[5] && <Block data={blocks[5].fields} />}
        {gallery_six[0] && <Gallery images={gallery_six} small={true} />}
        {blocks[6] && <Block data={blocks[6].fields} />}
        {testimonials[0] && <Testimonials testimonials={testimonials} />}
        {related[0] && <Related data={related} />}
      </Base>
    </ReactBreakpoints>
  )
}

export default CaseTemplate

function Block({ data }) {
  const { title, columnOne, columnTwo } = data

  return (
    <InView threshold={0} triggerOnce={true}>
      {({ inView, ref }) => (
        <BlockContainer
          className={inView ? `block block--show` : `block`}
          ref={ref}
        >
          <div className="block__column block__column--full">
            <h2>{title}</h2>
          </div>
          {columnOne && (
            <div className="block__column">{ParseHTML(columnOne)}</div>
          )}
          {columnTwo && (
            <div className="block__column">{ParseHTML(columnTwo)}</div>
          )}
        </BlockContainer>
      )}
    </InView>
  )
}

function Break({ image }) {
  if (image) {
    return (
      <InView threshold={0} triggerOnce={true}>
        {({ inView, ref }) => (
          <BreakImage ref={ref}>
            <div className="break__image">
              <ImageLoader
                alt=""
                className={``}
                loadedClassName={``}
                loadingClassName={``}
                src={image.mediaItemUrl}
              />
            </div>
          </BreakImage>
        )}
      </InView>
    )
  } else {
    return null
  }
}

function Related({ data }) {
  return (
    <RelatedContainer>
      <h2>Continue Viewing My Case Studies</h2>
      <div className="related__items">
        {data.map(item => (
          <InView key={item.id} threshold={0} triggerOnce={true}>
            {({ inView, ref }) => (
              <RelatedItem ref={ref}>
                <Link to={`/${item.uri}`}>
                  <ImageLoader
                    src={item.featuredImage.md}
                    alt={item.title}
                    className={`related__media`}
                    loadedClassName={`related__media`}
                    loadingClassName={`related__media`}
                  />
                  <h3>{item.title}</h3>
                  <p>{item.seo.metaDesc}</p>
                </Link>
              </RelatedItem>
            )}
          </InView>
        ))}
      </div>
    </RelatedContainer>
  )
}

function Gallery({ images, small }) {
  let classList = `gallery`
  if (small) classList = classList + ` gallery--small`

  if (images[0]) {
    return (
      <InView threshold={0} triggerOnce={true}>
        {({ inView, ref }) => (
          <GalleryContainer
            className={inView ? `${classList} gallery--show` : `${classList}`}
            ref={ref}
          >
            {images.map(image => (
              <div className="gallery__image__wrapper">
                <div className="gallery__image">
                  <ImageLoader
                    alt={image.altText}
                    className={``}
                    loadedClassName={``}
                    loadingClassName={``}
                    key={image.mediaItemUrl}
                    src={image.md}
                  />
                </div>
              </div>
            ))}
          </GalleryContainer>
        )}
      </InView>
    )
  } else {
    return null
  }
}

function YouTubeEmbed({ url }) {
  const ID = YouTubeGetID(url)

  const opts = {
    height: "780",
    width: "1280",
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      loop: 1,
      modestbranding: 1,
      mute: 1,
      rel: 0,
      playerVars: {
        playlist: ID,
        loop: 1,
      },
    },
  }

  const onReady = e => {
    e.target.mute()
    e.target.playVideo()
  }

  const onEnd = e => {
    e.target.mute()
    e.target.playVideo()
  }

  return <YouTube videoId={ID} opts={opts} onReady={onReady} onEnd={onEnd} />
}
