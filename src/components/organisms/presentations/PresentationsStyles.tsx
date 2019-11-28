import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const PresentationsComponent = styled.section`
	margin: 32px 0;

	@media ${device.xs} {
		margin: 64px 0;
	}

	@media ${device.lg} {
		margin: 96px 0;
	}

	a {
		color: inherit;
	}

	h3 {
		margin-top: 0;

		font-weight: bold;
		font-size: 24px;
	}

	img {
		display: block;
		max-height: 175px;
		width: 100%;

		object-fit: cover;
	}

	.presentations__events {
		align-items: flex-start;
		display: flex;
		flex: 1;
		height: 100%;
		position: relative;
		left: 0;
		top: 0;

		a {
			display: block;
			text-decoration: none;
		}

		p {
			margin: 0;
		}
	}

	.presentations__event__meta {
		padding: 16px;
	}

	.presentations__event__thumbnail {
		border-radius: 3px 3px 0 0;
		position: relative;
	}

	.presentations__event__logo {
		height: 32px;
		position: absolute;
		right: -16px;
		top: -16px;
		width: 32px;

		background: #ea4c89;
		border-radius: 50%;
		fill: #c32361;
	}

	.presentations__event {
		border-radius: 0 0 3px 3px;

		background: ${props => props.white};
		box-shadow: 0px 2px 6px rgba(20, 18, 19, 0.1);
		transition: 0.2s all ease;

		&:active,
		&:focus,
		&:hover {
			box-shadow: 0px 2px 10px rgba(20, 18, 19, 0.3);
		}
	}

	.subheading {
		margin: 0 0 8px;

		color: ${props => props.theme.primary};
		font-size: 10px;
		font-weight: 500;
		letter-spacing: 0.1em;
		line-height: 1.2;
		text-transform: uppercase;
	}

	.slick-slider {
		padding: 0 0 8px;
		width: 100%;

		cursor: grab;
	}

	.slick-list {
		margin: 0 -16px;
	}

	.slick-slide {
		padding: 0 16px;

		@media ${device.md} {
			padding: 16px;
		}
	}
`;

export default PresentationsComponent;
