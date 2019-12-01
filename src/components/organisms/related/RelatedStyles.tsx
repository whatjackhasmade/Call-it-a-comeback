import styled from "styled-components"
import { device } from "../../particles/MediaQueries"

export const RelatedWrapper = styled.section`
  margin: 96px auto;

  h2 {
    text-align: center;
  }

  .related__items {
    margin-top: 32px;

    @media ${device.md} {
      display: flex;
      margin-top: 48px;
    }
  }
`

export const RelatedItem = styled.div`
  display: block;

  + * {
    margin-top: 48px;
  }

  @media ${device.md} {
    width: calc(33.33% - 32px);

    + * {
      margin-left: 48px;
      margin-top: 0;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .related__media {
    overflow: hidden;

    img {
      transform: scale(1);
      transition: 0.4s transform ease;
    }
  }

  &:hover {
    .related__media {
      img {
        transform: scale(1.05);
      }
    }
  }

  .related__media--gatsby > div {
    padding-bottom: 56.25% !important; /* your aspect ratio */
  }

  .related__media--fallback {
    & > div {
      height: 0;
      overflow: hidden;
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
  }
`
