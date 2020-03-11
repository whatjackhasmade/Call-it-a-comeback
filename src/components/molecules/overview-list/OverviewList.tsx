import React from "react"
import StyledOverviewList from "./OverviewListStyles"

type OverviewListProps = {
  items: [
    {
      id?: string
      value: string
    }
  ]
  title?: string
}

const OverviewList = ({
  items,
  title = "What you will learn",
}: OverviewListProps) => {
  if (!items) return null
  items = items.filter(({ id, value }) => {
    if (value) return true
  })
  if (!items.length) return null

  return (
    <StyledOverviewList className="overview-list">
      <div className="overview-list__title">
        <h2 className="h3">{title}</h2>
      </div>
      <ul className="overview-list__list">
        {items.map(({ id, value }) => {
          if (!value) return null
          if (!id) return <li>{value}</li>
          return (
            <li>
              <a href={`#${id}`}>{value}</a>
            </li>
          )
        })}
      </ul>
    </StyledOverviewList>
  )
}

export default OverviewList
