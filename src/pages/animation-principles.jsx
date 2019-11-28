import React from "react"
import styled from "styled-components"
import { device } from "../components/particles/MediaQueries"

import Base from "../components/templates/Base"

import Button from "../components/atoms/button/Button"

import Hero from "../components/organisms/hero/Hero.tsx"

import UXVideo1 from "../assets/videos/ux-motion/1.mp4"
import UXVideo2 from "../assets/videos/ux-motion/2.mp4"
import UXVideo3 from "../assets/videos/ux-motion/3.mp4"
import UXVideo4 from "../assets/videos/ux-motion/4.mp4"
import UXVideo5 from "../assets/videos/ux-motion/5.mp4"
import UXVideo6 from "../assets/videos/ux-motion/6.mp4"
import UXVideo7 from "../assets/videos/ux-motion/7.mp4"
import UXVideo8 from "../assets/videos/ux-motion/8.mp4"
import UXVideo9 from "../assets/videos/ux-motion/9.mp4"
import UXVideo10 from "../assets/videos/ux-motion/10.mp4"
import UXVideo11 from "../assets/videos/ux-motion/11.mp4"
import UXVideo12 from "../assets/videos/ux-motion/12.mp4"

const VideosArray = [
  UXVideo1,
  UXVideo2,
  UXVideo3,
  UXVideo4,
  UXVideo5,
  UXVideo6,
  UXVideo7,
  UXVideo8,
  UXVideo9,
  UXVideo10,
  UXVideo11,
  UXVideo12,
]

const VideoGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 0 -30px -32px;

  background-color: #744ba8;

  @media ${device.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.lg} {
    grid-template-columns: repeat(4, 1fr);
  }

  video {
    display: block;
  }
`

const AnimationPrinciples = () => {
  return (
    <Base>
      <Hero>
        <h1>The 12 Principles of UX in Motion</h1>
        <p>
          As part of my undergraduate degree in Website design and Development,
          we looked at the 12 Principles of UX in Motion.
        </p>
        <p>
          After researching each principle, I recreated the examples in HTML,
          CSS and JS using Codepen.
        </p>
        <ul>
          <li>Easing and Offset &amp; Delay relate to timing.</li>
          <li>Parenting relates to object relationship.</li>
          <li>
            Transformation, Value Change, Masking, Overlay, and Cloning all
            relate to object continuity.
          </li>
          <li>Parallax relate to temporal hierarchy.</li>
          <li>
            Obscuration, Dimensionality and Dolly &amp; Zoom both relate to
            spatial continuity.
          </li>
        </ul>
        <Button
          href="https://codepen.io/collection/nVPpNK?grid_type=list"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Collection of Code Examples
        </Button>
      </Hero>
      <VideoGrid>
        {VideosArray.map(video => (
          <a
            href="https://codepen.io/collection/nVPpNK?grid_type=list"
            target="_blank"
            rel="noopener noreferrer"
          >
            <video src={video} autoPlay loop muted />
          </a>
        ))}
      </VideoGrid>
    </Base>
  )
}

export default AnimationPrinciples
