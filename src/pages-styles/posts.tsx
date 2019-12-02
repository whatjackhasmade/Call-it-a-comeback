import styled from "styled-components"
import device from "../components/particles/MediaQueries"

export const CollectionMenu = styled.nav`
  display: none;
  flex-direction: column;
  position: fixed;
  left: 0;
  padding: 8px;
  top: 50%;
  z-index: 2;

  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  transform: translateY(-50%);

  @media ${device.xxl} {
    display: flex;
  }

  a {
    color: ${props => props.theme.grey100};
    text-decoration: none;
    transition: 0.2s color ease;

    &:active,
    &:focus,
    &:hover {
      color: ${props => props.theme.black};
    }

    + a {
      margin-top: 4px;
    }

    &[data-current="true"] {
      color: ${props => props.theme.black};
    }
  }
`

export const CollectionWrapper = styled.section`
  margin-bottom: 96px;
  position: relative;
  z-index: 1;

  a {
    color: inherit;
    text-decoration: none;
  }

  h2 {
    padding-top: 64px;
    margin-top: 64px;

    border-top: 1px solid ${props => props.theme.grey600};
    color: ${props => props.theme.black};
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`
