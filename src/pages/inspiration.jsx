import React, { useState } from "react"
import styled from "styled-components"
import useQueryInspiration from "../components/particles/hooks/useQueryInspiration"

import Base from "../components/templates/Base"

import Hero from "../components/organisms/hero/Hero"
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
  const inspiration = useQueryInspiration()
  const [currentCategory, setCategory] = useState(null)

  const updateCategory = (e, category) => {
    e.preventDefault()

    if (category !== currentCategory) setCategory(null)
    if (category === currentCategory) setCategory(category)
  }

  let categories = inspiration.map(node => node.category)
  categories = categories.reduce((x, y) => (x.includes(y) ? x : [...x, y]), [])
  categories = categories.sort()

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
      </Hero>
      <InspiratioNavigation>
        {categories.map(cat => (
          <button
            key={cat}
            className={
              currentCategory ? currentCategory === cat && `focused` : `focused`
            }
            onClick={e => {
              updateCategory(e, cat)
            }}
          >
            {cat}
          </button>
        ))}
      </InspiratioNavigation>

      <Grid items={inspiration} type="images" filter={currentCategory} />
    </Base>
  )
}

export default Inspiration
