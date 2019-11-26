import React, { useState } from "react"
import styled from "styled-components"
import useQueryInspiration from "../components/particles/hooks/useQueryInspiration"
import { randomID } from "../components/helpers"
import he from "he"

import Base from "../components/templates/Base"

import Hero from "../components/organisms/hero/Hero.tsx"
import Grid from "../components/organisms/grid/Grid"

const InspiratioNavigation = styled.nav`
  margin: 56px 0 0;

  button {
    margin-right: 8px;
    margin-top: 8px;

    opacity: 0.5;
    text-transform: capitalize;

    &:active,
    &:focus,
    &:hover {
      opacity: 1;
    }
  }

  .focused {
    opacity: 1;
  }
`

const Inspiration = () => {
  let inspiration = useQueryInspiration()
  inspiration = inspiration.map(item => {
    return {
      ...item,
      ...item.acf,
      title: he.decode(item.title),
    }
  })
  const [currentTag, setTag] = useState(null)

  const updateTag = (e, tag) => {
    e.preventDefault()
    tag === currentTag ? setTag(null) : setTag(tag)
  }

  let tags = inspiration.map(node => node.tags.nodes[0].slug)
  tags = tags.reduce((x, y) => (x.includes(y) ? x : [...x, y]), [])
  tags = tags.sort()

  return (
    <Base>
      <Hero>
        <h1>Get Inspired</h1>
        <p>You are only limited by your imagination.</p>
        <p>
          Let all these little things happen. Don't fight them. Learn to use
          them. You can't make a mistake.
        </p>
        <p>
          Anything that happens you can learn to use - and make something
          beautiful out of it.
        </p>
        <p>This is your world, whatever makes you happy you can put in it.</p>
        <p>Go crazy.</p>
        {currentTag}
      </Hero>
      <InspiratioNavigation>
        {tags.map(tag => (
          <button
            key={`${tag}-${randomID()}`}
            className={currentTag && currentTag === tag ? `focused` : `focused`}
            onClick={e => {
              updateTag(e, tag)
            }}
          >
            {tag}
          </button>
        ))}
      </InspiratioNavigation>

      <Grid items={inspiration} type="images" filter={currentTag} />
    </Base>
  )
}

export default Inspiration
