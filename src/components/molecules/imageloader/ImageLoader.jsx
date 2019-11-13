import React, { useState } from "react";
import LazyLoad from "react-lazy-load";

function ImageLoader(props) {
	const [loaded, setLoaded] = useState(false);

	const _loaded = {};

	let { className, loadedClassName, loadingClassName } = props;
	const { alt, height, offset, width } = props;

	className = `${className} ${loaded ? loadedClassName : loadingClassName}`;

	//image onLoad handler to update state to loaded
	const onLoad = () => {
		_loaded[props.src] = true;
		setLoaded(true);
	};

	return (
		<LazyLoad
			debounce={false}
			height={height ? height : undefined}
			offsetVertical={offset ? offset : 500}
			width={width ? width : undefined}
		>
			<img
				alt={alt ? alt : ``}
				className={className}
				onClick={props.onClick}
				onLoad={onLoad}
				src={props.src}
			/>
		</LazyLoad>
	);
}

export default ImageLoader;
