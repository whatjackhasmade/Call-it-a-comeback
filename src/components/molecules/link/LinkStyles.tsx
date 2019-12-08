import styled from "styled-components"

const StyledLink = styled.a`
  display: flex;
  margin: 32px 0;

  border: 1px solid ${props => props.theme.grey200};
  color: ${props => props.theme.black};
  text-decoration: none;
  transition: 0.2s border ease;

  &:active,
  &:focus,
  &:hover {
    border: 1px solid ${props => props.theme.grey400};
    text-decoration: none;

    .link__description {
      color: ${props => props.theme.black};
    }
  }

  * {
    margin: 0;
  }

  .link__content {
    padding: 16px;
  }

  .link__description {
    margin-top: 8px;

    color: ${props => props.theme.grey600};
    font-size: 14px;
    transition: 0.2s color ease;
  }

  .link__image {
    min-width: 100px;
    position: relative;
    width: 100px;

    img {
      height: 100% !important;
      left: 0;
      margin: 0;
      position: absolute;
      top: 0;
      width: 100% !important;

      object-fit: cover;
    }
  }

  .link__title {
    font-size: 20px;
  }
`

export default StyledLink
