import React, { Component } from "react";
import styled from "styled-components";

const DuotoneElement = styled.picture`
	--highlight: ${props => (props.highlight ? props.highlight : `#ff3ebf`)};
	--shadow: ${props => (props.shadow ? props.shadow : `#4000ff`)};

	width: 100%;
	height: 100%;
	position: relative;
	z-index: 2;

	&::before,
	&::after {
		content: "";
		display: block;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 1;

		opacity: 1;
	}

	&::before {
		background-color: var(--highlight);
		mix-blend-mode: darken;
	}

	&::after {
		background-color: var(--shadow);
		mix-blend-mode: lighten;
	}
`;

export default class Duotone extends Component {
	render() {
		const { highlight, shadow } = this.props;

		return (
			<DuotoneElement className="duotone" highlight={highlight} shadow={shadow}>
				{this.props.children}
			</DuotoneElement>
		);
	}
}
