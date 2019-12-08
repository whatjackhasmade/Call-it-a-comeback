import React from "react"
import { isEmptyObject, randomID } from "../helpers"

import Dribbble from "../organisms/dribbble/Dribbble"
import Github from "../organisms/github/Github"
import Hero from "../organisms/hero/Hero"
import Intro from "../organisms/intro/Intro"
import Link from "../molecules/link/Link"
import Presentations from "../organisms/presentations/Presentations"
import Row from "../organisms/row/Row"
import TestimonialsComponent from "../organisms/testimonials/Testimonials"
import YouTube from "../molecules/embed/youtube/YouTube"
import YouTubeChannel from "../organisms/youtube/YouTube"
import ParseHTML from "./ParseHTML"

const components = {
  dribbble: Dribbble,
  github: Github,
  hero: Hero,
  intro: Intro,
  link: Link,
  presentations: Presentations,
  row: Row,
  testimonials: TestimonialsComponent,
  youtube: YouTube,
  youtubechannel: YouTubeChannel,
}

const convertACFProps = component => {
  // get all object keys and iterate over them
  Object.keys(component).forEach(key => {
    if (key.includes("Fields")) {
      component.data = component[key]
      delete component[key]
    }
  })

  return component
}

const sanatizeName = name => {
  if (!name) return null
  let newName = name
  newName = newName.replace("core-embed/", "")
  newName = newName.replace("acf/", "")
  return newName
}

const ComponentParser = props => {
  let { content } = props

  if (!content) return null
  const filteredComponents = content.filter(
    component =>
      !component || !isEmptyObject(component) || component.name !== null
  )

  if (filteredComponents && filteredComponents.length > 0) {
    const pageComponents = filteredComponents.map((component, index) => {
      const componentName = sanatizeName(component.name)
      const Component = components[componentName]

      if (!Component) return ParseHTML(component.originalContent)

      component = convertACFProps(component)

      return (
        <Component
          index={index}
          key={`component-${randomID()}`}
          {...component}
          {...component.data}
          {...component.attributes}
        />
      )
    })

    if (pageComponents) {
      return pageComponents
    }
  }
  return null
}

export default ComponentParser
