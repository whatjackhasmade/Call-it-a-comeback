import styled from "styled-components"

const StyledOverviewList = styled.nav`
  display: block;
  margin: 32px 0 48px;

  color: ${props => props.theme.black};

  a {
    color: inherit;
    transition: 0.2s all ease;

    &:active,
    &:focus,
    &:hover {
      color: ${props => props.theme.primary};
      text-decoration: underline;
    }
  }

  h2 {
    margin: 0;
    margin-bottom: 24px;
  }

  li {
    margin: 0;
    padding-left: 4px;

    & + li {
      margin-top: 12px;
    }
  }

  ul {
    margin: 0;
    padding: 24px 48px;
    padding-right: 24px;

    background-color: ${props => props.theme.blue000};
    border-left: 8px solid ${props => props.theme.primary};
    line-height: 1.5;
  }

  svg {
    max-width: 32px;
    width: 100%;
  }

  .overview-list__title {
    display: flex;
  }
`

export default StyledOverviewList
