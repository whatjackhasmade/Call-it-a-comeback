import React, { Component } from "react"
import styled from "styled-components"

const DuotoneElement = styled.picture`
  --highlight: ${props =>
    props.highlight ? props.highlight : props.theme.primary};
  --shadow: ${props => (props.shadow ? props.shadow : `#000`)};

  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;

  &::before,
  &::after {
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;

    opacity: 1;
  }

  &::before {
    background-color: var(--highlight);
    mix-blend-mode: darken;
  }

  &::after {
    background-color: var(--shadow);
    mix-blend-mode: lighten;
  }
`

type DuotoneProps = {
  children: any
  className?: string
  highlight?: string
  shadow?: string
}

const Duotone = ({
  children,
  className = "duotone",
  highlight,
  shadow,
}: DuotoneProps) => (
  <DuotoneElement className={className} highlight={highlight} shadow={shadow}>
    {children}
  </DuotoneElement>
)

export default Duotone
