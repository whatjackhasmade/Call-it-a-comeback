import styled from "styled-components"
import { device } from "../../particles/MediaQueries"

export const BreakImage = styled.section`
  align-items: center;
  display: flex;
  height: 200px;
  justify-content: center;
  min-height: ${props => (props.height ? props.height : `200px`)};
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 9;

  @supports (margin-left: -50vw) {
    height: auto;
    left: 50%;
    margin-left: -50vw;
    min-height: ${props => (props.height ? props.height : `400px`)};
    width: 100vw;
  }

  @media ${device.xs} {
    height: 500px;
    min-height: 50vh;
  }

  img,
  picture {
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .break__image {
    width: 100%;
  }

  .gatsby-image-wrapper > div {
    padding-bottom: 500px !important; /* your aspect ratio */
  }
`

export const BlockContainer = styled.section`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 48px auto;

  opacity: 0;
  transform: translateY(100px);
  transition: 1s all ease;

  @media ${device.sm} {
    margin: 64px auto;
  }

  @media ${device.lg} {
    margin: 96px auto;
    max-width: 90%;
  }

  &.block--show {
    opacity: 1;
    transform: translateY(0px);
  }

  .block__column {
    width: 100%;

    @media ${device.lg} {
      max-width: calc(50% - 32px);
    }
  }

  .block__column--full {
    max-width: 100%;
  }
`

export const Devices = styled.section`
  display: block;
  margin: 96px 0;

  opacity: 0;
  transform: translateY(100px);
  transition: 1s all ease;

  a {
    align-items: center;
    display: flex;
  }

  &.devices--show {
    opacity: 1;
    transform: translateY(0px);
  }

  > * {
    width: 100%;
  }

  .macbook {
    max-width: 74%;

    .screen {
      transform: scale(1.01);
    }

    .screen > div {
      position: relative;
      padding-bottom: 63.25%;
      height: 0;
      overflow: hidden;
      max-width: 100%;
    }
    .screen > div iframe,
    .screen > div object,
    .screen > div embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .iphone {
    margin-left: 5%;
    max-width: 21%;

    .screen > div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .screen > div iframe,
    .screen > div object,
    .screen > div embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .screen {
    overflow: hidden;
  }
`

export const GalleryContainer = styled.section`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 32px 0;

  opacity: 0;
  transform: translateY(100px);
  transition: 1s all ease;

  @media ${device.sm} {
    margin: 64px 0;
  }

  &.gallery--show {
    opacity: 1;
    transform: translateY(0px);
  }

  &.gallery--small {
    justify-content: flex-start;

    > * {
      height: 200px;
      overflow: hidden;

      @media ${device.md} {
        max-width: calc(25% - 16px);

        + * {
          margin-left: 21.333px;
        }

        &:nth-child(5n) {
          margin-left: 0;
        }

        &:nth-child(1n + 5) {
          margin-top: 26px;
        }
      }
    }
  }

  .gallery__image {
    height: 0;
    padding-top: 56.25%;
    position: relative;
    width: 100%;

    * {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;

      object-fit: cover;
    }
  }

  .gatsby-image-wrapper > div {
    padding-bottom: 56.25% !important; /* your aspect ratio */
  }

  > * {
    width: 100%;
    @media ${device.md} {
      max-width: calc(50% - 16px);
    }

    + * {
      margin-top: 32px;

      @media ${device.md} {
        margin-top: 0;
      }
    }
  }
`
