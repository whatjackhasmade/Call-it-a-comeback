import React, { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import IconAngleRight from "../../../assets/images/icons/solid/angle-right.svg"

import TestimonialsComponent from "./TestimonialsStyles"

const settings = {
  draggable: false,
  infinite: true,
  lazyLoad: false,
  nextArrow: false,
  prevArrow: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  swipe: false,
  swipeToSlide: false,
}

const Testimonials = ({ testimonials }) => {
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
          {testimonials.map((testimonial, index) => (
            <img
              src={testimonial.media.mediaItemUrl}
              alt={testimonial.author}
              key={testimonial.author}
            />
          ))}
        </Slider>
      </div>
      {testimonials && testimonials.length > 1 && (
        <button className="testimonial__next" onClick={nextTestimonial}>
          Next <IconAngleRight />
        </button>
      )}
      <div className="testimonials">
        <Slider ref={sliderTestimonials} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              className="testimonial"
              key={`testimonial-${testimonial.author}`}
            >
              <header className="testimonial__header">
                <div>
                  <h3 className="testimonial__author">{testimonial.author}</h3>
                  <h4 className="testimonial__role">{testimonial.role}</h4>
                </div>
                <img
                  className="testimonial__logo"
                  src={testimonial.logo}
                  alt=""
                />
              </header>
              <p className="testimonial__quote">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </Slider>
      </div>
    </TestimonialsComponent>
  )
}

export default Testimonials
