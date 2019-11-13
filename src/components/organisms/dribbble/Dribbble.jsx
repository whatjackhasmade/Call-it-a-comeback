import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LogoDribbble from "../../../assets/images/icons/brands/dribbble.svg";

import Intro from "../intro/Intro";

import DribbbleComponent from "./DribbbleStyles";

export default props => (
	<StaticQuery
		query={graphql`
			query {
				allDribbble {
					edges {
						node {
							id
							description
							html_url
							images {
								two_x
							}
							title
						}
					}
				}
			}
		`}
		render={query => <Dribbble query={query} {...props} />}
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

function Dribbble(props) {
	const { data, query } = props;

	return (
		<DribbbleComponent>
			<Intro
				heading={`Interface Designs`}
				subheading={`My Dribbble Shots`}
				marginReduced
			>
				<div dangerouslySetInnerHTML={{ __html: data.content }} />
			</Intro>
			<Slider {...settings}>
				{query.allDribbble.edges !== [] &&
					query.allDribbble.edges.map((shot, index) => (
						<Shot index={index} key={shot.node.id} shot={shot} />
					))}
			</Slider>
		</DribbbleComponent>
	);
}

function Shot({ index, key, shot }) {
	shot = { ...shot.node };

	const [mouseOver, setMouseOver] = useState(false);

	const handleHover = e => {
		setMouseOver(!mouseOver);
	};

	return (
		<div
			className={
				mouseOver ? `dribbble__shot dribbble__shot--animate` : `dribbble__shot`
			}
			index={index}
			data-index={index}
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
		>
			<a
				className="dribbble__shot__thumbnail"
				href={shot.html_url}
				rel="noopener noreferrer"
				target="_blank"
			>
				<LogoDribbble className="dribbble__shot__logo" />
				<img
					alt={shot.title}
					className="presentations__event__thumbnail"
					src={shot.images.two_x}
				/>
			</a>
			<div className="dribbble__shot__meta">
				<a href={shot.html_url} rel="noopener noreferrer" target="_blank">
					<h3>{shot.title}</h3>
				</a>
				<div
					className="shot__description"
					dangerouslySetInnerHTML={{ __html: shot.description }}
				/>
			</div>
		</div>
	);
}
