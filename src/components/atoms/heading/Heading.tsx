import React from "react"

type HeadingProps = {
  children: any
  level: string
  style: string
}

const Heading = ({ children, level, style }: HeadingProps) => {
  const HeadingComponent = `h${level}`
  return (
    <HeadingComponent className={style && `h${style}`}>
      {children}
    </HeadingComponent>
  )
}

export default Heading
