import React from "react"

import Base from "./Base"

import ComponentParser from "../particles/ComponentParser"

type PageProps = {
  pageContext: any
}

const PageTemplate = ({ pageContext }: PageProps) => (
  <Base context={pageContext}>
    <ComponentParser content={pageContext.blocks} />
  </Base>
)

export default PageTemplate
