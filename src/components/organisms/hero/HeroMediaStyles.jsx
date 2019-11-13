import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const HeroMediaComponent = styled.div`
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 1;

	@media ${device.md} {
		&:before {
			content: "";
			display: block;
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			width: 100%;
			z-index: 2;

			background: ${props =>
				props.background ? props.background : props.theme.primary};
			opacity: ${props => (props.overlay ? `0.7` : `0`)};
		}
	}

	img,
	.duotone,
	.duotone img,
	.hero__media,
	.hero__media img {
		display: none;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 1;

		object-fit: cover;

		@supports (object-fit: cover) {
			@media ${device.md} {
				display: block;
			}
		}
	}
`;

export default HeroMediaComponent;
