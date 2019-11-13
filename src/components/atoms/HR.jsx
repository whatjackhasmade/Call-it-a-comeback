import React from "react";
import styled from "styled-components";
import { device } from "../particles/MediaQueries";

const HRComponent = styled.hr`
	height: 0;
	margin: 24px auto;
	width: 100%;

	background: none;
	border: none;
	border-top: 1px solid ${props => props.theme.grey200};

	@media ${device.sm} {
		margin: 36px auto;
	}

	@media ${device.xl} {
		margin: 48px auto;
	}
`;

function HR() {
	return <HRComponent />;
}

export default HR;
