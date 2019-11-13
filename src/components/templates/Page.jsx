import React from "react"

import Base from "./Base"

import ComponentParser from "../particles/ComponentParser"

const PageTemplate = ({ pageContext }) => (
  <Base context={pageContext}>
    <ComponentParser content={pageContext.blocks} />
  </Base>
)

export default PageTemplate
