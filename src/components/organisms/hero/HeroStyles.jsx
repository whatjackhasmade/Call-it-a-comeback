import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const HeroComponent = styled.section`
	align-items: center;
	display: flex;
	height: 500px;
	justify-content: center;
	min-height: ${props => props.height};
	overflow: hidden;
	position: relative;
	z-index: 9;

	background: ${props =>
		props.background ? props.background : props.theme.primary};
	color: ${props => props.theme.white};
	text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

	@supports (margin-left: -50vw) {
		height: auto;
		left: 50%;
		margin-left: -50vw;
		min-height: 80vh;
		width: 100vw;
	}

	@media ${device.xs} {
		min-height: 50vh;
	}

	a {
		display: inline-flex;
		margin: 16px 0 0;
		padding: 16px 24px;

		background-color: ${props => props.theme.white};
		border: none;
		box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
		color: ${props => props.theme.primary};
		cursor: pointer;
		font-weight: 700;
		line-height: 1;
		outline: none;
		text-decoration: none;
		text-shadow: none;
		transition: all 0.15s ease;
		white-space: nowrap;

		&:active,
		&:focus,
		&:hover {
			box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
				0 3px 6px rgba(0, 0, 0, 0.08);
		}

		&:hover {
			transform: translateY(-1px);
		}

		+ a {
			@media ${device.xs} {
				margin-left: 8px;
			}
		}

		@media ${device.MXxs} {
			justify-content: center;
			width: 100%;
		}
	}

	h4 {
		font-size: 18px;
		font-weight: 500;
		line-height: 28px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.hero__contents {
		margin: 0 auto 0 0;
		max-width: 686px;
		position: relative;
		width: 100%;
		z-index: 3;
	}

	.hero__wrapper {
		margin: 0 auto;
		max-width: 1506px;
		padding: 0 20px;
		width: 100%;

		@media ${device.xs} {
			padding: 45px;
		}
	}
`;

export default HeroComponent;
