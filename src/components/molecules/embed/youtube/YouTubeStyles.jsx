import styled from "styled-components";

const YouTubeComponent = styled.div`
	position: relative;
	z-index: 10;

	background: ${props => props.theme.offWhite};
	color: ${props => props.theme.black};
`;

export default YouTubeComponent;
