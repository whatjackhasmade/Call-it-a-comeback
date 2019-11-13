import React from "react"
import Parser from "html-react-parser"
import { Link } from "gatsby"
import { isInternal } from "../helpers"
import useRelative from "./hooks/useRelative"

const config = {
  replace: ({ attribs, children }) => {
    if (attribs && attribs.href) {
      let { href } = attribs

      if (href) return <ReactAnchor attribs={attribs} children={children} />
    }
  },
}

const ReactAnchor = ({ attribs, children }) => {
  let { href } = attribs
  href = useRelative(href)
  if (isInternal(href)) return <Link to={`${href}`}>{children[0].data}</Link>
  if (!isInternal(href)) return <a href={`${href}`}>{children[0].data}</a>
}

const ParseHTML = html => {
  const clean = Parser(html, config)
  return clean
}

export { ParseHTML }
export default ParseHTML
