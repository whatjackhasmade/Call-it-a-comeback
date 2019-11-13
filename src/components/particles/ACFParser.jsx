import React, { Component } from "react";

import Dribbble from "../organisms/dribbble/Dribbble";
import Github from "../organisms/github/Github";
import Hero from "../organisms/hero/Hero";
import Intro from "../organisms/intro/Intro";
import Presentations from "../organisms/presentations/Presentations";
import Row from "../organisms/row/Row";
import Testimonials from "../organisms/testimonials/Testimonials";
import YouTube from "../molecules/embed/youtube/YouTube";
import YouTubeChannel from "../organisms/youtube/YouTube";

const components = {
	dribbble: Dribbble,
	github: Github,
	hero: Hero,
	intro: Intro,
	presentations: Presentations,
	row: Row,
	testimonials: Testimonials,
	youtube: YouTube,
	youtubechannel: YouTubeChannel
};

export default class CreateMarkup extends Component {
	render() {
		let content = this.props.content;

		if (content && content[0]) {
			content = content.filter(block => block.blockName !== null);
			const pageComponents = content.map((component, index) => {
				const Component = components[component.blockName.substr(4)];
				return (
					<Component
						index={index}
						key={`component-${index}`}
						data={component.attrs.data}
					/>
				);
			});
			if (pageComponents) {
				return pageComponents;
			}
		} else {
			return null;
		}
	}
}
