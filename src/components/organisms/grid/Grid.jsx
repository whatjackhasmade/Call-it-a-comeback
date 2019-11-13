import React, { useState } from "react";

import GridComponent from "./GridStyles";

function Grid({ filter, items }) {
	const [count, updateCount] = useState(100);

	const addItems = () => {
		updateCount(count + 9);
	};

	var rows = [];
	for (var i = 0; i < count; i++) {
		const item = items[i];

		if (typeof item === "undefined") break;

		const media = item.node.media;
		const ext = media.substr(media.lastIndexOf(".") + 1);

		if (ext === `mp4`) {
			rows.push(
				<GridItem
					key={`grid-item-${i}`}
					category={item.node.category}
					filter={filter}
				>
					<video src={item.node.media} alt="" autoPlay muted loop />
					<span className="grid__item__title">{item.node.title}</span>
				</GridItem>
			);
		} else {
			rows.push(
				<GridItem
					key={`grid-item-${i}`}
					category={item.node.category}
					filter={filter}
				>
					<img src={item.node.media} alt="" />
					<span className="grid__item__title">{item.node.title}</span>
				</GridItem>
			);
		}
	}

	return (
		<>
			<GridComponent>{rows}</GridComponent>
			<button disabled={count > items.length} onClick={addItems}>
				Load More
			</button>
		</>
	);
}

function GridItem({ category, children, filter }) {
	const [fullScreen, changeFullScreen] = useState(false);

	const toggleFullscreen = e => {
		changeFullScreen(!fullScreen);
	};

	let classList = `grid__item`;
	if (fullScreen) classList += ` grid__item--fullscreen`;

	if (filter !== ``) {
		if (category === filter) classList += ` grid__item--active`;
		if (category !== filter) classList += ` grid__item--inactive`;
	}

	return (
		<div className={classList} onClick={toggleFullscreen}>
			{children}
		</div>
	);
}

export default Grid;
