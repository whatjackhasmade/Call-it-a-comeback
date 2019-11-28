import styled from "styled-components";

const TweetsContainer = styled.section`
	display: flex;
	flex-wrap: wrap;

	margin: 48px 0;

	.tweet {
		margin-bottom: 40px;
		margin-right: 40px;
		max-width: 300px;
		padding: 32px;

		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);

		.tweet__favourites {
			margin-top: 16px;

			color: red;
		}
	}
`;

export default TweetsContainer;
