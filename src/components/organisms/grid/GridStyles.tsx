import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const GridComponent = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin: 64px 0;

	.grid__item {
		max-width: 100%;
		overflow: hidden;
		position: relative;
		width: 100%;

		cursor: pointer;
		transition: 0.2s all ease;

		@media ${device.xs} {
			max-width: 48%;
		}

		@media ${device.lg} {
			max-width: 33%;
		}

		img,
		video {
			height: 200px;
			object-fit: cover;
			width: 100%;
		}

		&:active,
		&:focus,
		&:hover {
			.grid__item__title {
				opacity: 0.8;
			}
		}
	}

	.grid__item--inactive {
		width: 0px;

		img,
		video {
			min-height: 0px;
		}
	}

	.grid__item--fullscreen {
		max-width: 100%;

		img,
		video {
			height: auto;
		}
	}

	.grid__item__title {
		height: 100%;
		left: 0;
		padding: 8px;
		position: absolute;
		top: 0;
		width: 100%;

		background: ${props => props.theme.black};
		color: white;
		opacity: 0;
		transition: 0.2s all ease;
	}
`;

export default GridComponent;
