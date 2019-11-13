import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const IntroComponent = styled.section`
	align-items: flex-start;
	display: flex;
	justify-content: space-between;
	margin: ${props =>
		props.marginReduced === true ? `64px 0 32px 0` : `32px 0 16px`};

	color: ${props => props.theme.black};

	@media ${device.xs} {
		margin: ${props => (props.marginReduced === true ? `64px 0` : `32px 0`)};
	}

	@media ${device.lg} {
		margin: ${props => (props.marginReduced === true ? `96px 0` : `48px 0`)};
	}

	h1,
	.intro__subheading {
		margin: 0 0 24px;
		position: relative;

		color: ${props => props.theme.primary};
		font-size: 16px;
		font-weight: 500;
		letter-spacing: 0.1em;
		line-height: 24px;
		text-transform: uppercase;

		&:before {
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 2px;
			background: ${props => props.theme.primary};

			@media ${device.xs} {
				content: "";
			}
		}

		@media ${device.xs} {
			padding-left: 8px;
		}

		@media ${device.sm} {
			padding-left: 12px;
		}
	}

	.intro__heading {
		margin: 0 0 24px;

		font-size: 36px;
		line-height: 1.1;

		@media ${device.xs} {
			font-size: 48px;
		}

		@media ${device.lg} {
			font-size: 64px;
		}
	}

	.intro__contents {
		margin: 0 auto 0 0;
		max-width: 624px;
		width: 100%;
	}

	.intro__wrapper {
		margin: 0 auto 0 0;
		max-width: ${props => (props.maxWidth ? props.maxWidth : `706px`)};
		width: 100%;
	}

	.intro__illustration {
		display: none;
		height: auto;
		max-width: 260px;

		@media ${device.lg} {
			display: block;
		}
	}
`;

export default IntroComponent;
