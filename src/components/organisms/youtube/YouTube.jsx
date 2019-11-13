import React from "react";
import { StaticQuery, graphql } from "gatsby";
import YouTube from "react-youtube";

import backgroundLeft from "./youtube-left.png";
import backgroundRight from "./youtube-right.png";
import YouTubeComponent from "./YouTube-Styles";

import ImageLoader from "../../molecules/imageloader/ImageLoader";

const opts = {
	playerVars: {
		// https://developers.google.com/youtube/player_parameters
		autoplay: 0
	}
};

export default props => (
	<StaticQuery
		query={graphql`
			query {
				allYoutube {
					edges {
						node {
							id
							snippet {
								description
								resourceId {
									videoId
								}
								title
								thumbnails {
									medium {
										url
									}
								}
							}
						}
					}
				}
			}
		`}
		render={query => <YouTubeChannel query={query} {...props} />}
	/>
);

function YouTubeChannel({ data, query }) {
	const _onReady = event => {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	};

	const channelVideos = query.allYoutube.edges;

	return (
		<YouTubeComponent>
			<img
				alt=""
				className="youtube__background youtube__background--left"
				src={backgroundLeft}
			/>
			<img
				alt=""
				className="youtube__background youtube__background--right"
				src={backgroundRight}
			/>
			<div className="youtube__content">
				<div className="youtube__intro">
					<h2>My YouTube Channel</h2>
					<p>
						Early on in my career I knew it was important to document what I was
						learning, so I started a blog. The next step on from that was to
						start my own YouTube channel. I did this not only for myself, but to
						also share my understanding of topics with others looking to develop
						their skills.
					</p>
					<p>
						Starting my own YouTube channel encouraged me to understand a topic
						deeply as to teach a topic, you must have a strong grasp on the
						concepts involved. I don't claim to be an expert on every subject I
						cover, but if I find it of interest, I will cover it and share my
						experience with others.
					</p>
					<a
						className="button"
						href="https://youtube.com/whatjackhasmade"
						rel="noopener noreferrer"
						target="_blank"
					>
						View My YouTube Channel
					</a>
					{channelVideos &&
						channelVideos !== [] &&
						channelVideos[0] &&
						channelVideos[0].node.snippet && (
							<div
								className="youtube__video"
								title={channelVideos[0].node.snippet.title}
							>
								<YouTube
									videoId={channelVideos[0].node.snippet.resourceId.videoId}
									opts={opts}
									onReady={_onReady}
								/>
							</div>
						)}
				</div>
				<div className="youtube__videos">
					{channelVideos &&
						channelVideos !== [] &&
						channelVideos.map((video, index) => {
							if (index > 0 && index < 19) {
								const data = video.node;
								return (
									<Video
										index={index}
										key={data.snippet.resourceId.videoId}
										video={data}
									/>
								);
							}
							return null;
						})}
				</div>
			</div>
		</YouTubeComponent>
	);
}

function Video({ index, video }) {
	return (
		<div index={index} className="youtube__video" title={video.snippet.title}>
			<a
				href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
				rel="noopener noreferrer"
				target="_blank"
			>
				<div className="youtube__video__thumbnail">
					<ImageLoader
						src={video.snippet.thumbnails.medium.url}
						alt={video.snippet.title}
					/>
				</div>
			</a>
		</div>
	);
}
