import styled from "styled-components"
import { device } from "../../particles/MediaQueries"

export const ArticleIntro = styled.header`
  max-width: 800px;
  margin: 64px auto;

  .article__meta {
    display: flex;
    flex-direction: column;

    @media ${device.sm} {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .article__meta__date {
    margin: 16px 0;

    font-size: 16px;
    font-weight: 400;

    @media ${device.sm} {
      margin: 0;
    }
  }
`

export const ArticleProgress = styled.div(
  ({ left, percentage, theme }) => `
  bottom: 24px;
  display: none;
  left: 30px;
  position: fixed;
  z-index: 1;

  transition: 0.2s opacity ease;

  @media ${device.lg} {
    display: inline-block;
    opacity: ${left > 0 ? 1 : 0};
  }

  &::after {
    bottom: 0;
    content: "";
    display: block
    height: 2px;
    left: 0;
    position: absolute;
    width: 100%;

    background-color: ${theme.primary};
    transform: scaleX(${!percentage ? 0 : percentage.toPrecision(2)});
    transform-origin: left center;
    transition: 0.2s transform ease;
  }
`
)

export const Article = styled.article`
  /* Advanced vertical rhythym based off of https://medium.com/@sebastian.eberlein/advanced-vertical-margins-4ac69f032f79 */
  max-width: 800px;
  margin: 64px auto;

  font-size: 2rem;
  line-height: 1.5;

  blockquote {
    display: block;
    padding: 16px 0;
    position: relative;
    margin: 24px 0 36px;

    font-size: 2.25rem;
    font-style: italic;
    outline: none;
    text-align: center;

    color: ${props => props.theme.black};
    quotes: "“" "”" "‘" "’";

    p:last-of-type {
      margin: 0;
    }

    @media ${device.md} {
      margin: 8px 0 24px;

      font-size: 3rem;
    }
  }

  cite {
    position: relative;

    color: ${props => props.theme.grey600};
    font-size: 20px;
    font-style: normal;

    &:before {
      content: "- ";
    }

    @media ${device.md} {
      bottom: 4px;
      position: absolute;
      right: 0;

      color: ${props => props.theme.grey400};
      font-size: 16px;
    }
  }

  figure {
    margin-left: 0;
    margin-right: 0;

    img {
      margin-bottom: 8px;

      box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.05);
    }

    @media ${device.lg} {
      margin-left: -64px;
      margin-right: -64px;
    }
  }

  figcaption {
    padding: 8px;

    background-color: ${props => props.theme.grey100};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    text-align: center;
  }

  li + li {
    margin-top: 8px;
  }

  > * + * {
    margin-top: 16px;
  }

  > h2 + * {
    margin-top: 24px;
  }

  > img + *,
  > figure + * {
    margin-top: 32px;
  }

  > * + h2 {
    margin-top: 64px;
  }

  > * + h3 {
    margin-top: 48px;
  }

  > * + img {
    margin-top: 32px;
  }

  > * + h4 {
    margin-top: 48px;
  }

  > img + img,
  > figure + figure {
    margin-top: 32px;
  }

  > h2 + h3 {
    margin-top: 32px;
  }

  > h3 + h4 {
    margin-top: 32px;
  }

  img,
  picture {
    display: block;
    margin: 48px 0;

    > img {
      margin: 0;
    }
  }

  img {
    height: auto !important;
    width: auto !important;
  }

  pre {
    margin: 32px auto !important;
  }

  .wp-block-image {
    text-align: center;

    img,
    picture,
    video {
      margin-left: auto;
      margin-right: auto;
    }
  }
`

export const RelatedContainer = styled.section`
  margin: 96px auto;
  position: relative;
  z-index: 100;

  background-color: white;

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

    > div {
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

  .related__media {
    transform: scale(1);
    transition: 0.4s transform ease;
  }

  &:hover {
    .related__media {
      transform: scale(1.05);
    }
  }
`
