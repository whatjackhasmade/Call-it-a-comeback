import React from "react"
import { InView } from "react-intersection-observer"
import ParseHTML from "../../particles/ParseHTML"

import { BlockContainer } from "./CaseStyles"

type CaseRowProps = {
  data: {
    columnOne
    columnTwo
    title
  }
}

const CaseRow = ({
  data,
  data: { title, columnOne, columnTwo },
}: CaseRowProps) => (
  <InView threshold={0} triggerOnce={true}>
    {({ inView, ref }) => (
      <BlockContainer
        className={inView ? `block block--show` : `block`}
        ref={ref}
      >
        <div className="block__column block__column--full">
          <h2>{title}</h2>
        </div>
        {columnOne && (
          <div className="block__column">{ParseHTML(columnOne)}</div>
        )}
        {columnTwo && (
          <div className="block__column">{ParseHTML(columnTwo)}</div>
        )}
      </BlockContainer>
    )}
  </InView>
)

export default CaseRow
