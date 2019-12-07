import React from "react"
import StyledLink from "./LinkStyles"

type LinkProps = {
  url: string
}

const Link = ({ url }: LinkProps) => {
  console.log(url)

  return <StyledLink href={url}>test</StyledLink>
}

export default Link
