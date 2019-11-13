import React from "react";

import Base from "./Base";

import ACFParser from "../particles/ACFParser";

const PageTemplate = ({ pageContext }) => (
	<Base context={pageContext}>
		<ACFParser content={pageContext.content} />
	</Base>
);

export default PageTemplate;
