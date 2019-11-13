import React from "react"
import { randomID } from "../helpers"

import Dribbble from "../organisms/dribbble/Dribbble"
import Github from "../organisms/github/Github"
import Hero from "../organisms/hero/Hero"
import Intro from "../organisms/intro/Intro"
import Presentations from "../organisms/presentations/Presentations"
import Row from "../organisms/row/Row"
import Testimonials from "../organisms/testimonials/Testimonials"
import YouTube from "../molecules/embed/youtube/YouTube"
import YouTubeChannel from "../organisms/youtube/YouTube"

const components = {
  dribbble: Dribbble,
  github: Github,
  hero: Hero,
  intro: Intro,
  presentations: Presentations,
  row: Row,
  testimonials: Testimonials,
  youtube: YouTube,
  youtubechannel: YouTubeChannel,
}

const isEmpty = obj => {
  return Object.entries(obj).length === 0 && obj.constructor === Object
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
  newName = newName.replace("core/", "")
  newName = newName.replace("acf/", "")
  return newName
}

const ComponentParser = props => {
  let { content } = props

  if (!content) return null
  content = content.filter(component => component.name !== null)

  if (content && content.length > 0) {
    const pageComponents = content.map((component, index) => {
      if (isEmpty(component)) return null
      if (!component) return null

      const componentName = sanatizeName(component.name)
      const Component = components[componentName]

      component = convertACFProps(component)

      if (!Component) return null

      return (
        <Component
          index={index}
          key={`component-${randomID()}`}
          {...component.data}
          theme={props.theme}
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
