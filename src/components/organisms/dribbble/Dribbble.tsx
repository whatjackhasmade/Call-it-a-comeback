import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ParseHTML from "../../particles/ParseHTML"
import useQueryDribbble from "../../particles/hooks/useQueryDribbble"

import LogoDribbble from "../../../assets/images/icons/brands/dribbble.svg"

import Intro from "../intro/Intro"

import DribbbleComponent from "./DribbbleStyles"

import settings from "./DribbbleSettings.json"

type DribbbleProps = {
  content: string
}

const Dribbble = ({ content }: DribbbleProps) => {
  const shots = useQueryDribbble()

  return (
    <DribbbleComponent>
      <Intro
        heading={`Interface Designs`}
        subheading={`My Dribbble Shots`}
        marginReduced
      >
        {ParseHTML(content)}
      </Intro>
      <Slider {...settings}>
        {shots.length > 0 &&
          shots.map(shot => <Shot key={shot.node.id} shot={shot} />)}
      </Slider>
    </DribbbleComponent>
  )
}

const Shot = ({ shot }) => {
  shot = { ...shot.node }

  const [mouseOver, setMouseOver] = useState(false)

  const handleHover = e => {
    setMouseOver(!mouseOver)
  }

  return (
    <div
      className={
        mouseOver ? `dribbble__shot dribbble__shot--animate` : `dribbble__shot`
      }
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <a
        className="dribbble__shot__thumbnail"
        href={shot.html_url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <LogoDribbble className="dribbble__shot__logo" />
        <img
          alt={shot.title}
          className="presentations__event__thumbnail"
          src={shot.images.two_x}
        />
      </a>
      <div className="dribbble__shot__meta">
        <a href={shot.html_url} rel="noopener noreferrer" target="_blank">
          <h3>{shot.title}</h3>
        </a>
        {/* <div className="shot__description">{ParseHTML(shot.description)}</div> */}
      </div>
    </div>
  )
}

export default Dribbble
