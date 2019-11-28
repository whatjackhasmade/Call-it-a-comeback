import styled from "styled-components"

const YouTubeComponent = styled.div`
  position: relative;
  z-index: 10;

  background: ${props => props.theme.offWhite};
  color: ${props => props.theme.black};

  .youtube__wrapper {
		margin-bottom: 32px;
		height: 0;
		padding-top: 56.25%;
		width: 100%:
		position: relative;

		iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
`

export default YouTubeComponent
