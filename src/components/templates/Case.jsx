import React from "react";
import { Link } from "gatsby";
import { InView } from "react-intersection-observer";
import styled from "styled-components";
import ReactBreakpoints, { Media } from "react-breakpoints";
import YouTube from "react-youtube";
import "html5-device-mockups/dist/device-mockups.min.css";

import { device } from "../particles/MediaQueries";

import { YouTubeGetID } from "../helpers";

import Base from "./Base";

import ImageLoader from "../molecules/imageloader/ImageLoader";

import Intro from "../organisms/intro/Intro";
import Testimonials from "../organisms/testimonials/Testimonials";

const BreakImage = styled.section`
	align-items: center;
	display: flex;
	height: 200px;
	justify-content: center;
	min-height: ${props => (props.height ? props.height : `200px`)};
	overflow: hidden;
	position: relative;
	z-index: 9;

	@supports (margin-left: -50vw) {
		height: auto;
		left: 50%;
		margin-left: -50vw;
		min-height: ${props => (props.height ? props.height : `400px`)};
		width: 100vw;
	}

	@media ${device.xs} {
		height: 500px;
		min-height: 50vh;
	}

	img,
	picture {
		position: absolute;
		top: 0;
		left: 0;

		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;

const BlockContainer = styled.section`
	align-items: flex-start;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 48px auto;

	opacity: 0;
	transform: translateY(100px);
	transition: 1s all ease;

	@media ${device.sm} {
		margin: 64px auto;
	}

	@media ${device.lg} {
		margin: 96px auto;
		max-width: 90%;
	}

	&.block--show {
		opacity: 1;
		transform: translateY(0px);
	}

	.block__column {
		width: 100%;

		@media ${device.lg} {
			max-width: calc(50% - 32px);
		}
	}

	.block__column--full {
		max-width: 100%;
	}
`;

const Devices = styled.section`
	display: block;
	margin: 96px 0;

	opacity: 0;
	transform: translateY(100px);
	transition: 1s all ease;

	a {
		align-items: center;
		display: flex;
	}

	&.devices--show {
		opacity: 1;
		transform: translateY(0px);
	}

	> * {
		width: 100%;
	}

	.macbook {
		max-width: 74%;

		.screen {
			transform: scale(1.01);
		}

		.screen > div {
			position: relative;
			padding-bottom: 63.25%;
			height: 0;
			overflow: hidden;
			max-width: 100%;
		}
		.screen > div iframe,
		.screen > div object,
		.screen > div embed {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}

	.iphone {
		margin-left: 5%;
		max-width: 21%;

		.screen > div {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			overflow: hidden;
		}
		.screen > div iframe,
		.screen > div object,
		.screen > div embed {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}

	.screen {
		overflow: hidden;
	}
`;

const GalleryContainer = styled.section`
	align-items: flex-start;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 32px 0;

	opacity: 0;
	transform: translateY(100px);
	transition: 1s all ease;

	@media ${device.sm} {
		margin: 64px 0;
	}

	&.gallery--show {
		opacity: 1;
		transform: translateY(0px);
	}

	&.gallery--small {
		justify-content: flex-start;

		> * {
			height: 200px;
			overflow: hidden;

			@media ${device.md} {
				max-width: calc(25% - 16px);

				+ * {
					margin-left: 21.333px;
				}

				&:nth-child(5n) {
					margin-left: 0;
				}

				&:nth-child(1n + 5) {
					margin-top: 26px;
				}
			}
		}
	}

	.gallery__image {
		height: 0;
		padding-top: 56.25%;
		position: relative;
		width: 100%;

		* {
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			width: 100%;

			object-fit: cover;
		}
	}

	> * {
		width: 100%;
		@media ${device.md} {
			max-width: calc(50% - 16px);
		}

		+ * {
			margin-top: 32px;

			@media ${device.md} {
				margin-top: 0;
			}
		}
	}
`;

const RelatedContainer = styled.section`
	margin: 96px auto;

	.related__items {
		margin-top: 32px;

		@media ${device.md} {
			display: flex;
			margin-top: 48px;
		}
	}
`;

const RelatedItem = styled.div`
	display: block;

	+ * {
		margin-top: 48px;
	}

	@media ${device.md} {
		width: calc(33.33% - 32px);

		+ * {
			margin-left: 48px;
			margin-top: 0;
		}
	}

	a {
		color: inherit;
		text-decoration: none;

		> div {
			height: 0;
			overflow: hidden;
			padding-top: 56.25%;
			position: relative;
			width: 100%;

			* {
				height: 100%;
				left: 0;
				position: absolute;
				top: 0;
				width: 100%;

				object-fit: cover;
			}
		}
	}

	.related__media {
		transform: scale(1);
		transition: 0.4s transform ease;
	}

	&:hover {
		.related__media {
			transform: scale(1.05);
		}
	}
`;

const breakpoints = {
	xs: 576,
	sm: 768,
	md: 992,
	lg: 1200,
	xl: 1440,
	xxl: 1800
};

function CaseTemplate({ pageContext }) {
	const { content } = pageContext;
	const { blocks, gallery, intro, related, siteURL, testimonials } = content;

	const introData = {};
	introData.subheading = intro.subtitle;
	introData.heading = intro.title;
	introData.content = intro.description;

	let testimonialData = {};

	testimonialData.testimonials = [];

	testimonials.map((testimonial, i) => {
		const t = testimonial.testimonial;
		testimonialData.testimonials[i] = {};
		testimonialData.testimonials[i].author = t.author;
		testimonialData.testimonials[i].role = t.role;
		testimonialData.testimonials[i].testimonial = t.testimonial;
		testimonialData.testimonials[i].media = {};
		testimonialData.testimonials[i].logo = {};
		testimonialData.testimonials[i].media.full =
			testimonial.testimonial.media.url;
		testimonialData.testimonials[i].logo = testimonial.testimonial.logo.url;
		return null;
	});

	let gallery_one = [];
	let gallery_two = [];
	let gallery_three = [];
	const gallery_four = gallery[7];
	let gallery_five = [];
	let gallery_six = [];

	for (var i = 0; i < 2; i++) {
		gallery_one.push(gallery[i]);
	}

	for (i = 2; i < 4; i++) {
		gallery_two.push(gallery[i]);
	}

	for (i = 4; i < 6; i++) {
		gallery_three.push(gallery[i]);
	}

	for (i = 8; i < 10; i++) {
		gallery_five.push(gallery[i]);
	}

	for (i = 10; i < gallery.length; i++) {
		gallery_six.push(gallery[i]);
	}

	return (
		<ReactBreakpoints breakpoints={breakpoints}>
			<Base context={pageContext}>
				<Intro
					data={introData}
					illustration={intro.illustration}
					maxWidth={`906px`}
				/>
				<Media>
					{({ breakpoints, currentBreakpoint }) =>
						breakpoints[currentBreakpoint] > breakpoints.lg ? (
							<InView threshold={0} triggerOnce={true}>
								{({ inView, ref }) => (
									<Devices
										className={inView ? `devices devices--show` : `devices`}
										ref={ref}
									>
										<a href={siteURL} rel="noopener noreferrer" target="_blank">
											<div className="device-wrapper macbook">
												<div
													className="device"
													data-color="white"
													data-device="Macbook2015"
													data-orientation="portrait"
												>
													<div className="screen">
														<YouTubeEmbed url={content.devices.desktop} />
													</div>
												</div>
											</div>
											<div className="device-wrapper iphone">
												<div
													className="device"
													data-device="iPhone7"
													data-orientation="portrait"
													data-color="white"
												>
													<div className="screen">
														<YouTubeEmbed url={content.devices.mobile} />
													</div>
												</div>
											</div>
										</a>
									</Devices>
								)}
							</InView>
						) : (
							<a
								href={siteURL}
								className="button"
								rel="noopener noreferrer"
								target="_blank"
							>
								View The {intro.subtitle} Website
							</a>
						)
					}
				</Media>

				{blocks[0] && <Block data={blocks[0].fields} />}
				{gallery_one[0] && <Gallery images={gallery_one} />}
				{blocks[1] && <Block data={blocks[1].fields} />}
				{gallery_two[0] && <Gallery images={gallery_two} />}
				{blocks[2] && <Block data={blocks[2].fields} />}
				{gallery_three[0] && <Gallery images={gallery_three} />}
				{blocks[3] && <Block data={blocks[3].fields} />}
				{gallery_four && <Break image={gallery_four} />}
				{blocks[4] && <Block data={blocks[4].fields} />}
				{gallery_five[0] && <Gallery images={gallery_five} />}
				{blocks[5] && <Block data={blocks[5].fields} />}
				{gallery_six[0] && <Gallery images={gallery_six} small={true} />}
				{blocks[6] && <Block data={blocks[6].fields} />}
				{testimonialData.testimonials[0] && (
					<Testimonials data={testimonialData} />
				)}
				{related[0] && <Related data={related} />}
			</Base>
		</ReactBreakpoints>
	);
}

export default CaseTemplate;

function Block({ data }) {
	return (
		<InView threshold={0} triggerOnce={true}>
			{({ inView, ref }) => (
				<BlockContainer
					className={inView ? `block block--show` : `block`}
					ref={ref}
				>
					<div className="block__column block__column--full">
						<h2>{data.title}</h2>
					</div>
					<div className="block__column">
						<div
							dangerouslySetInnerHTML={{
								__html: data.column_one
							}}
						/>
					</div>
					<div className="block__column">
						<div
							dangerouslySetInnerHTML={{
								__html: data.column_two
							}}
						/>
					</div>
				</BlockContainer>
			)}
		</InView>
	);
}

function Break({ image }) {
	if (image) {
		return (
			<InView threshold={0} triggerOnce={true}>
				{({ inView, ref }) => (
					<BreakImage ref={ref}>
						<div className="break__image">
							<ImageLoader
								alt=""
								className={``}
								loadedClassName={``}
								loadingClassName={``}
								src={image.url}
							/>
						</div>
					</BreakImage>
				)}
			</InView>
		);
	} else {
		return null;
	}
}

function Related({ data }) {
	return (
		<RelatedContainer>
			<h2>Continue Viewing My Case Studies</h2>
			<div className="related__items">
				{data.map(item => (
					<InView key={item.post_name} threshold={0} triggerOnce={true}>
						{({ inView, ref }) => (
							<RelatedItem ref={ref}>
								<Link to={`/${item.slug}`}>
									<ImageLoader
										src={item.imageMD}
										alt={item.title}
										className={`related__media`}
										loadedClassName={`related__media`}
										loadingClassName={`related__media`}
									/>
									<h3>{item.yoast.title}</h3>
									<p>{item.yoast.description}</p>
								</Link>
							</RelatedItem>
						)}
					</InView>
				))}
			</div>
		</RelatedContainer>
	);
}

function Gallery({ images, small }) {
	let classList = `gallery`;
	if (small) classList = classList + ` gallery--small`;

	if (images[0]) {
		return (
			<InView threshold={0} triggerOnce={true}>
				{({ inView, ref }) => (
					<GalleryContainer
						className={inView ? `${classList} gallery--show` : `${classList}`}
						ref={ref}
					>
						{images.map(image => (
							<div className="gallery__image__wrapper">
								<div className="gallery__image">
									<ImageLoader
										alt={image.alt}
										className={``}
										loadedClassName={``}
										loadingClassName={``}
										key={image.url}
										src={image.sizes.featured_md}
									/>
								</div>
							</div>
						))}
					</GalleryContainer>
				)}
			</InView>
		);
	} else {
		return null;
	}
}

function YouTubeEmbed({ url }) {
	const ID = YouTubeGetID(url);

	const opts = {
		height: "780",
		width: "1280",
		playerVars: {
			autoplay: 1,
			controls: 0,
			disablekb: 1,
			fs: 0,
			iv_load_policy: 3,
			loop: 1,
			modestbranding: 1,
			mute: 1,
			rel: 0,
			playerVars: {
				playlist: ID,
				loop: 1
			}
		}
	};

	const onReady = e => {
		e.target.mute();
		e.target.playVideo();
	};

	const onEnd = e => {
		e.target.mute();
		e.target.playVideo();
	};

	return <YouTube videoId={ID} opts={opts} onReady={onReady} onEnd={onEnd} />;
}
