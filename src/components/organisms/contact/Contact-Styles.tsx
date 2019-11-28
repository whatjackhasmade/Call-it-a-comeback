import styled from "styled-components";
import { device } from "../../particles/MediaQueries";

const ContactComponent = styled.section`
	margin-top: 32px;
	left: 50%;
	margin-left: -50vw;
	position: relative;
	width: 100vw;
	z-index: 9;

	background-color: ${props => props.theme.primary};
	color: ${props => props.theme.white};

	button {
		@media ${device.MXxs} {
			justify-content: center;
		}
	}

	h2,
	p {
		text-align: center;
	}

	.contact__wrapper {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin: 0 auto;
		max-width: 806px;
		padding: 45px 20px;
		position: relative;

		@media ${device.xs} {
			padding: 45px 30px;
		}
	}
`;

export default ContactComponent;
