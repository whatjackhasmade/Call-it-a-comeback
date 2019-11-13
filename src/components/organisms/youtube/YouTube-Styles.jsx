import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const YouTubeComponent = styled.section`
	align-items: center;
	display: flex;
	justify-content: center;
	padding: 64px 0;
	position: relative;

	@supports (margin-left: -50vw) {
		left: 50%;
		margin-left: -50vw;
		width: 100vw;
	}

	@media ${device.lg} {
		padding: 0;
		min-height: 1080px;
	}

	.button {
		display: inline-flex;
		padding: 16px 24px;

		background-color: ${props => props.theme.primary};
		border: none;
		box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
		color: ${props => props.theme.white};
		cursor: pointer;
		font-weight: 700;
		line-height: 1;
		outline: none;
		text-decoration: none;
		transition: all 0.15s ease;
		white-space: nowrap;

		&:hover {
			transform: translateY(-1px);
		}

		&:focus,
		&:hover {
			box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
				0 3px 6px rgba(0, 0, 0, 0.08);
			text-decoration: none;
		}
	}

	.youtube__background {
		display: none;
		width: 189px;
		height: 100%;
		position: absolute;
		top: 0;

		object-fit: contain;
		opacity: 0;
		transition: 0.5s opacity ease;

		@media ${device.xl} {
			display: block;

			opacity: 1;
		}
	}

	.youtube__background--left {
		left: -80px;

		@media ${device.xxl} {
			left: 0;
		}
	}

	.youtube__background--right {
		right: -80px;

		@media ${device.xxl} {
			right: 0;
		}
	}

	.youtube__content {
		align-items: flex-end;
		justify-content: center;
		margin: 0 auto;
		max-width: 1506px;
		padding: 0 20px;
		position: relative;
		width: 100%;
		z-index: 3;

		@media ${device.xs} {
			padding: 0 30px;
		}

		@media ${device.md} {
			display: flex;
			margin: 96px auto;
		}

		@media ${device.xl} {
			padding: 0 130px;
		}

		@media ${device.xxl} {
			padding: 0 30px;
		}
	}

	.youtube__intro {
		@media ${device.md} {
			margin-right: 48px;
		}

		@media ${device.xxl} {
			margin-right: 160px;
		}

		h2,
		h3,
		h4,
		h5,
		h6 {
			margin-top: 0;
		}

		.youtube__video {
			height: 0;
			margin-top: 32px;
			position: relative;
			padding-bottom: 56.25%; /* 16:9 */

			iframe {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		}
	}

	.youtube__videos {
		align-items: center;
		display: none;
		flex-direction: row;
		flex-grow: 1;
		flex-wrap: wrap;
		justify-content: space-between;

		@media ${device.md} {
			display: flex;
			min-width: calc(450px + 64px);
			width: calc(450px + 64px);
		}

		.youtube__video__thumbnail {
			height: 0;
			padding-bottom: 56.25%; /* 16:9 */
			position: relative;
			width: 150px;
		}

		.youtube__video {
			margin-top: 32px;

			box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
				0 1px 3px rgba(0, 0, 0, 0.08);
			transform: scale(1);
			transition: all 0.15s ease;

			&:nth-of-type(-1n + 3) {
				margin-top: 0;
			}

			img {
				height: 100%;
				left: 0;
				position: absolute;
				top: 0;
				width: 100%;
			}

			&:active,
			&:focus,
			&:hover {
				box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
					0 3px 6px rgba(0, 0, 0, 0.08);
				transform: scale(1.1);
			}
		}
	}

	.youtube__video {
		img {
			object-fit: cover;
		}
	}
`;

export default YouTubeComponent;
