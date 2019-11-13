import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const HeaderComponent = styled.header`
	position: relative;
	z-index: 11;

	background: white;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

	a {
		font-size: 20px;

		@media ${device.sm} {
			font-size: 16px;
		}
	}

	button {
		span {
			@media ${device.MXsm} {
				font-weight: 700;
			}
		}

		box-shadow: none;
	}

	a,
	button {
		padding: 8px;
		position: relative;

		color: ${props => props.theme.grey600};
		font-weight: 500;
		letter-spacing: 1px;
		text-decoration: none;
		text-transform: uppercase;
		transition: 0.2s alle ease;

		& + a[aria-current="page"],
		&:active,
		&:focus,
		&:hover {
			box-shadow: none;
			color: ${props => props.theme.black};
			text-decoration: none;

			&:after {
				transform: scaleX(1);
			}
		}

		@media ${device.sm} {
			&:after {
				bottom: -4px;
				content: "";
				display: block;
				height: 1px;
				left: 0;
				position: absolute;
				width: 100%;

				background: ${props => props.theme.grey600};
				transform: scaleX(0);
				transition: 0.2s all ease;
			}
		}

		+ a {
			margin-left: 0;

			@media ${device.sm} {
				margin-left: 16px;
			}
		}
	}

	button {
		align-items: center;
		display: flex;
		justify-content: center;

		background: none;
		border: none;
		color: inherit;
		cursor: pointer;
		outline: none;
		transform: translateX(8px);

		&:active,
		&:focus,
		&:hover {
			transform: translateX(8px);
		}

		span + span {
			display: none;
			margin-left: 4px;

			@media ${device.xs} {
				display: inline-block;
			}
		}

		svg {
			margin-left: 8px;
			height: 20px;
		}

		@media ${device.sm} {
			display: none;
		}
	}

	nav + a {
		display: none;

		color: ${props => props.theme.black};
		font-weight: 900;

		@media ${device.sm} {
			display: block;
		}
	}

	.header__contents {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 1506px;
		padding: 7px 30px;

		@media ${device.sm} {
			padding: 15px 30px;
		}
	}

	.header__logo {
		&:after {
			display: none;
		}

		svg {
			display: block;
			max-height: 50px;
			width: 32px;

			@media ${device.sm} {
				width: 48px;
			}
		}
	}

	@media ${device.MXsm} {
		nav {
			display: flex;
			flex-direction: column;
			height: 100%;
			justify-content: center;
			left: 100%;
			padding: 32px;
			position: fixed;
			top: 0;
			width: 100%;

			background: white;
			box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
			transition: 0.4s left ease;

			@media ${device.sm} {
				flex-direction: row;
				position: relative;
			}
		}

		.header__menu--show {
			left: 0;
		}
	}
`;

export default HeaderComponent;
