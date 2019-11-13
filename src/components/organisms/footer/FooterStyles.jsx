import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const FooterComponent = styled.footer`
	position: relative;
	z-index: 10;

	background: ${props => props.theme.offWhite};
	color: ${props => props.theme.black};

	.footer__contents {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 1506px;
		padding: 30px 15px;
		width: 100%;

		@media ${device.xs} {
			padding: 30px;
		}

		@media ${device.md} {
			flex-direction: row;
			padding: 90px 30px;
		}
	}

	a {
		align-items: center;
		display: flex;
		justify-content: center;

		color: ${props => props.theme.black};
		font-weight: 400;
		text-decoration: none;
		transition: 0.2s all ease;

		svg {
			margin-right: 8px;
		}
	}

	nav {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	svg {
		fill: ${props => props.theme.black};
		width: 24px;

		transition: 0.2s all ease;

		&:active,
		&:focus,
		&:hover {
			fill: ${props => props.theme.grey400};
		}
	}

	.footer__arrow {
		display: none;
		height: 2px;
		position: relative;
		width: 60px;

		background: ${props => props.theme.black};
		transition: 0.2s all ease;

		&:after {
			content: "";
			display: block;
			height: 16px;
			position: absolute;
			right: 0;
			top: -7px;
			width: 16px;

			border: 2px solid ${props => props.theme.black};
			border-bottom: none;
			border-left: none;
			transform: rotate(45deg);
		}

		@media ${device.lg} {
			display: block;
		}
	}

	.footer__contact {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		margin-top: 24px;
		width: 100%;

		font-size: 12px;

		@media ${device.md} {
			margin-left: 16px;
			margin-top: 0;
			width: auto;
		}

		* + * {
			margin-top: 8px;
		}

		a {
			font-size: 16px;
			font-weight: 500;
		}
	}

	.footer__cta {
		justify-content: flex-start;
		width: 100%;

		&:active,
		&:focus,
		&:hover {
			.footer__arrow {
				transform: translateX(32px);
			}
		}

		a {
			&:active,
			&:focus,
			&:hover {
				text-decoration: none;
			}
		}

		@media ${device.md} {
			justify-content: center;
			width: auto;
		}
	}

	.footer__cta__content {
		display: flex;
		flex-direction: column;

		@media ${device.lg} {
			margin-left: 64px;
		}
	}

	.footer__name {
		font-size: 24px;
		font-weight: 900;
		text-transform: uppercase;

		@media ${device.md} {
			font-size: 36px;
		}
	}

	.footer__social {
		justify-content: flex-start;
		font-size: 0px;

		margin-top: 32px;
		width: 100%;

		@media ${device.md} {
			justify-content: center;
			margin-top: 0;
			width: auto;
		}

		a {
			+ a {
				margin-left: 8px;
			}
		}
	}

	.footer__tagline {
		font-family: ${props => props.theme.fontSecondary};
		font-size: 18px;
		font-style: italic;

		@media ${device.md} {
			font-size: 24px;
		}
	}
`;

export default FooterComponent;
