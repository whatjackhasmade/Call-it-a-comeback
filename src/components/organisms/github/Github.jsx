import React from "react";

import GithubComponent from "./Github-Styles";

import Intro from "../intro/Intro";

function Github({ data }) {
	return (
		<GithubComponent>
			<Intro
				heading={`Development Activity`}
				subheading={`I love GitHub and open source projects`}
				marginReduced
			/>
			<a
				className="github__calendar"
				href="https://github.com/whatjackhasmade"
				rel="noopener noreferrer"
				target="_blank"
			>
				<img
					src="https://ghchart.rshah.org/whatjackhasmade"
					alt="2016rshah's Github chart"
				/>
			</a>
			<div
				dangerouslySetInnerHTML={{
					__html: data.content
				}}
			/>
		</GithubComponent>
	);
}

export default Github;
