import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import Link from "gatsby-link"
import { Container, Row, Col } from "react-grid-system"
import styled from "styled-components"
import device from "../components/particles/MediaQueries"
import useQueryPosts from "../components/particles/hooks/useQueryPosts"
import useQuery404Images from "../components/particles/hooks/images/useQuery404Images"

import Hero from "../components/organisms/hero/Hero"
import Intro from "../components/organisms/intro/Intro"
import Related from "../components/organisms/related/Related"

import Base from "../components/templates/Base"

type Four0FourProps = {}

const Four0Four = ({}: Four0FourProps) => {
  const image = useQuery404Images()
  const allPosts = useQueryPosts()
  const latestPosts = allPosts.filter((post, i) => i < 3)

  return (
    <Base>
      <Hero align="center" maxWidth="890px">
        <Container fluid>
          <Row>
            <Col lg={7}>
              <h1>
                <span aria-label="hushed face emoji" role="img">
                  😯
                </span>{" "}
                Sorry, we couldn't find that
              </h1>
              <p>
                Your dog is cute but honestly a menace. Where are my shoes?
                Where is my graduation certificate? Where is the chocolate cake
                I baked for my Aunt’s birthday? And why did you take your dog to
                the vet on that same Thursday?!
              </p>
              <Link to="/">Return to the homepage</Link>
            </Col>
            <Col lg={4} offset={{ lg: 1 }}>
              <Img fluid={image.childImageSharp.fluid} />
            </Col>
          </Row>
        </Container>
      </Hero>
      {latestPosts && latestPosts.length > 0 && (
        <Related data={latestPosts} title="Find something that... works!" />
      )}
    </Base>
  )
}

export default Four0Four
