import React from "react";

function Heading({ children, level, style }) {
	const HeadingComponent = `h${level}`;
	return (
		<HeadingComponent className={style && `h${style}`}>
			{children}
		</HeadingComponent>
	);
}

export default Heading;
