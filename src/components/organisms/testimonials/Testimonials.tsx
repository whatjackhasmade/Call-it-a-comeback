import React, { useRef } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import IconAngleRight from "../../../assets/images/icons/solid/angle-right.svg"

import TestimonialsComponent from "./TestimonialsStyles"

const settings = {
  draggable: false,
  infinite: true,
  lazyLoad: false,
  nextArrow: false,
  prevArrow: false,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 1000,
  swipe: false,
  swipeToSlide: false,
}

type TestimonialsProps = {
  testimonials: object[]
}

type TestimonialProps = {
  author: string
  logo: string
  media: {
    mediaItemUrl: string
  }
  role: string
  testimonial: string
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const sliderImages = useRef(null)
  const sliderTestimonials = useRef(null)

  const nextTestimonial = e => {
    e.preventDefault()
    sliderImages.current.slickNext()
    sliderTestimonials.current.slickNext()
  }

  return (
    <TestimonialsComponent>
      <div className="testimonial__media">
        <Slider ref={sliderImages} {...settings}>
          {testimonials.map(
            ({ author, media }): TestimonialProps => (
              <img src={media.mediaItemUrl} alt={author} key={author} />
            )
          )}
        </Slider>
      </div>
      {testimonials && testimonials.length > 1 && (
        <button className="testimonial__next" onClick={nextTestimonial}>
          Next <IconAngleRight />
        </button>
      )}
      <div className="testimonials">
        <Slider ref={sliderTestimonials} {...settings}>
          {testimonials.map(
            ({ author, logo, role, testimonial }): TestimonialProps => (
              <div className="testimonial" key={`testimonial-${author}`}>
                <header className="testimonial__header">
                  <div>
                    <h3 className="testimonial__author">{author}</h3>
                    <h4 className="testimonial__role">{role}</h4>
                  </div>
                  <img className="testimonial__logo" src={logo} alt="" />
                </header>
                <p className="testimonial__quote">"{testimonial}"</p>
              </div>
            )
          )}
        </Slider>
      </div>
    </TestimonialsComponent>
  )
}

export default Testimonials
