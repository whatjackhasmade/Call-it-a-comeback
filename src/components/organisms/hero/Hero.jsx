import React from "react";

import Duotone from "./Duotone";
import HeroComponent from "./HeroStyles";
import HeroMediaComponent from "./HeroMediaStyles";

function Hero({ data, children }) {
	if (!data) {
		return (
			<HeroComponent>
				<div className="hero__wrapper">
					<div className="hero__contents">{children}</div>
				</div>
			</HeroComponent>
		);
	}

	const { background_colour, content, duotone, media, overlay } = data;

	const background = background_colour ? background_colour : `#0652DD`;

	const overlayBoolean = overlay === "1";

	return (
		<HeroComponent background={background} overlay={overlayBoolean}>
			<div className="hero__wrapper">
				{content ? (
					<div
						className="hero__contents"
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				) : (
					<div className="hero__contents">{children}</div>
				)}
				{media && (
					<HeroMedia
						duotone={duotone}
						media={media.full}
						overlay={overlayBoolean}
					/>
				)}
			</div>
		</HeroComponent>
	);
}

function HeroMedia({ duotone, media, overlay }) {
	if (duotone) {
		return (
			<HeroMediaComponent overlay={overlay}>
				<Duotone
					className="hero__media"
					highlight={props => props.theme.primary}
					shadow={`#000`}
				>
					<img src={media} alt="" />
				</Duotone>
			</HeroMediaComponent>
		);
	}

	return (
		<HeroMediaComponent overlay={overlay}>
			<img src={media} alt="" />
		</HeroMediaComponent>
	);
}

export default Hero;
