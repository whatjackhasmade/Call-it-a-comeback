import React from "react"
import slugify from "slugify"

type HeadingProps = {
  attributes?: {
    align: string
    anchor: string
    className: string
    content: string
    level: string
    placeholder: string
  }
  children?: any
  className?: string
  content?: string
  isValid?: boolean
  level: number
  originalContent?: string
  style?: string
}

const Heading = ({
  children,
  className,
  content,
  level,
  style,
}: HeadingProps) => {
  const HeadingComponent = `h${level}`

  let headingClass = ``
  headingClass = style && headingClass + ` ${style} h${styled}`
  headingClass = className && headingClass + ` ` + className
  const innerContent = content ? content : children

  return (
    <HeadingComponent
      className={headingClass}
      id={slugify(innerContent.toLowerCase())}
    >
      {innerContent}
    </HeadingComponent>
  )
}

export default Heading
