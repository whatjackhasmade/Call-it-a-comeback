import React from "react"
import { InView } from "react-intersection-observer"
import ReactBreakpoints, { Media } from "react-breakpoints"

import "html5-device-mockups/dist/device-mockups.min.css"

import { Devices } from "./CaseStyles"

import CaseBreak from "./CaseBreak"
import CaseGallery from "./CaseGallery"
import CaseRow from "./CaseRow"
import CaseYouTube from "./CaseYouTube"

import Base from "../Base"

import Intro from "../../organisms/intro/Intro"
import Related from "../../organisms/related/Related"
import Testimonials from "../../organisms/testimonials/Testimonials"

const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1440,
  xxl: 1800,
}

type CaseProps = {
  pageContext: {
    CaseStudyFields: {
      blocks: []
      devices: {
        desktop: string
        mobile: string
      }
      devicePreviews: boolean
      gallery: []
      intro: {
        description: string
        title: string
        subtitle: string
        illustration: {
          altText: string
          md: string
          mediaItemUrl: string
        }
      }
      related: []
      siteUrl: string
      testimonials: [
        {
          testimonial: object
        }
      ]
    }
  }
}

const CaseTemplate = ({
  pageContext,
  pageContext: {
    CaseStudyFields: {
      blocks,
      devices,
      devicePreviews,
      gallery,
      intro,
      related,
      siteUrl,
      testimonials,
    },
  },
}: CaseProps) => {
  const processedTestimonials = testimonials.map(testimonial => {
    return { ...testimonial.testimonial }
  })

  console.log(processedTestimonials)

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
                              <CaseYouTube url={devices.desktop} />
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
                              <CaseYouTube url={devices.mobile} />
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

        {blocks && (
          <>
            {blocks.length > 0 && <CaseRow data={blocks[0].fields} />}
            {gallery_one[0] && <CaseGallery images={gallery_one} />}
            {blocks.length > 1 && <CaseRow data={blocks[1].fields} />}
            {gallery_two[0] && <CaseGallery images={gallery_two} />}
            {blocks.length > 2 && <CaseRow data={blocks[2].fields} />}
            {gallery_three[0] && <CaseGallery images={gallery_three} />}
            {blocks.length > 3 && <CaseRow data={blocks[3].fields} />}
            {gallery_four && <CaseBreak image={gallery_four} />}
            {blocks.length > 4 && <CaseRow data={blocks[4].fields} />}
            {gallery_five[0] && <CaseGallery images={gallery_five} />}
            {blocks.length > 5 && <CaseRow data={blocks[5].fields} />}
            {gallery_six[0] && (
              <CaseGallery images={gallery_six} small={true} />
            )}
            {blocks.length > 6 && <CaseRow data={blocks[6].fields} />}
          </>
        )}
        {testimonials[0] && (
          <Testimonials testimonials={processedTestimonials} />
        )}
        {related[0] && (
          <Related data={related} title="Continue Viewing My Case Studies" />
        )}
      </Base>
    </ReactBreakpoints>
  )
}

export default CaseTemplate
