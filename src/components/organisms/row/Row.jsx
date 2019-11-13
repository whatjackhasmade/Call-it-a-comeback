import React from "react";
import { InView } from "react-intersection-observer";

import RowComponent from "./RowStyles";

import ImageLoader from "../../molecules/imageloader/ImageLoader";

function Row({ data, index }) {
	const { content, link, media } = data;

	const alignment = index % 2 === 0 ? `left` : `right`;

	let mediaURL = ``;

	if (media.medium_large) {
		mediaURL = media.medium_large;
	} else if (media.large) {
		mediaURL = media.large;
	} else {
		mediaURL = media.full;
	}

	const ext = mediaURL.substr(mediaURL.lastIndexOf(".") + 1);

	const prepareContent = content => {
		let newContent = content.replace(
			`/wp-content/uploads/`,
			`https://wjhm.noface.app/wp-content/uploads/`
		);
		return newContent;
	};

	return (
		<InView threshold={0.25} triggerOnce={true}>
			{({ inView, ref }) => (
				<RowComponent
					className={
						inView ? `row row--${alignment} row--show` : `row row--${alignment}`
					}
					ref={ref}
				>
					<div className="row__column">
						{link !== "" ? (
							<a href={`${link}`}>
								<RowMedia media={mediaURL} ext={ext} />
							</a>
						) : (
							<RowMedia media={mediaURL} ext={ext} />
						)}
					</div>
					<div
						className="row__column row__content"
						dangerouslySetInnerHTML={{ __html: prepareContent(content) }}
					></div>
				</RowComponent>
			)}
		</InView>
	);
}

function RowMedia({ media, ext }) {
	return (
		<div className="row__media">
			{ext !== `mp4` ? (
				<ImageLoader src={media} alt="" />
			) : (
				<video src={media} muted autoPlay loop />
			)}
		</div>
	);
}

export default Row;
