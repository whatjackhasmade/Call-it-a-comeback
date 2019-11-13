import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PresentationsComponent from "./PresentationsStyles";

import Intro from "../intro/Intro";

export default props => (
	<StaticQuery
		query={graphql`
			query {
				allEvent {
					edges {
						node {
							id
							imageSM
							title
							venue
						}
					}
				}
			}
		`}
		render={query => <Presentations query={query} {...props} />}
	/>
);

const settings = {
	autoplay: true,
	autoplaySpeed: 5000,
	dots: true,
	infinite: true,
	nextArrow: false,
	prevArrow: false,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1440,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 750,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
};

function Presentations({ data, query }) {
	return (
		<PresentationsComponent>
			<Intro
				heading={`Event Presentations`}
				subheading={`Touring the south coast`}
				marginReduced
			>
				<div dangerouslySetInnerHTML={{ __html: data.content }} />
			</Intro>
			<Slider {...settings}>
				{query.allEvent.edges !== [] &&
					query.allEvent.edges.map((event, index) => (
						<Event
							index={index}
							key={`event-${index}`}
							event={event}
							venue={event.node.venue}
						/>
					))}
			</Slider>
		</PresentationsComponent>
	);
}

function Event({ index, event, venue }) {
	return (
		<div
			className="presentations__event"
			data-index={index}
			index={index}
			key={`${event.node.title}-${index}`}
		>
			<img
				alt={event.node.title}
				className="presentations__event__thumbnail"
				src={event.node.imageSM}
			/>
			<div className="presentations__event__meta">
				<h5 className="subheading">{venue}</h5>
				<h3>{event.node.title}</h3>
			</div>
		</div>
	);
}
