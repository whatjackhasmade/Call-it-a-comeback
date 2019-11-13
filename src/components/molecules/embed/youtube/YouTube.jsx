import React from "react";

import YouTubeComponent from "./YouTubeStyles";

function YouTube({ children }) {
	return (
		<YouTubeComponent>
			<div className="youtube__contents">{children}</div>
		</YouTubeComponent>
	);
}

export default YouTube;
