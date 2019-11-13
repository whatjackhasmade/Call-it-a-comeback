import React from "react";
import parse from "html-react-parser";
import { InView } from "react-intersection-observer";
import { Link } from "gatsby";
import styled from "styled-components";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { relativePaths } from "../helpers";

import { device } from "../particles/MediaQueries";

import ImageLoader from "../molecules/imageloader/ImageLoader";

import Base from "./Base";

const ArticleIntro = styled.header`
	max-width: 800px;
	margin: 64px auto;
`;

const Article = styled.article`
	/* Advanced vertical rhythym based off of https://medium.com/@sebastian.eberlein/advanced-vertical-margins-4ac69f032f79 */
	max-width: 800px;
	margin: 64px auto;

	font-size: 2rem;
	line-height: 1.5;

	blockquote {
		display: block;
		padding: 16px 0;
		position: relative;
		margin: 24px 0 36px;

		font-size: 2.25rem;
		font-style: italic;
		outline: none;
		text-align: center;

		color: ${props => props.theme.black};
		quotes: "“" "”" "‘" "’";

		p:last-of-type {
			margin: 0;
		}

		@media ${device.md} {
			margin: 8px 0 24px;

			font-size: 3rem;
		}
	}

	cite {
		position: relative;

		color: ${props => props.theme.grey600};
		font-size: 20px;
		font-style: normal;

		&:before {
			content: "- ";
		}

		@media ${device.md} {
			bottom: 4px;
			position: absolute;
			right: 0;

			color: ${props => props.theme.grey400};
			font-size: 16px;
		}
	}

	figure {
		margin-left: 0;
		margin-right: 0;

		img {
			margin-bottom: 8px;

			box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.05);
		}

		@media ${device.lg} {
			margin-left: -64px;
			margin-right: -64px;
		}
	}

	figcaption {
		padding: 8px;

		background-color: ${props => props.theme.grey100};
		text-transform: uppercase;
		letter-spacing: 1px;
		font-size: 12px;
		text-align: center;
	}

	li + li {
		margin-top: 8px;
	}

	> * + * {
		margin-top: 16px;
	}

	> h2 + * {
		margin-top: 24px;
	}

	> img + *,
	> figure + * {
		margin-top: 32px;
	}

	> * + h2 {
		margin-top: 64px;
	}

	> * + h3 {
		margin-top: 48px;
	}

	> * + img {
		margin-top: 32px;
	}

	> * + h4 {
		margin-top: 48px;
	}

	> img + img,
	> figure + figure {
		margin-top: 32px;
	}

	> h2 + h3 {
		margin-top: 32px;
	}

	> h3 + h4 {
		margin-top: 32px;
	}

	img,
	picture {
		display: block;
		margin: 48px 0;

		> img {
			margin: 0;
		}
	}

	img {
		height: auto !important;
		width: auto !important;
	}

	pre {
		margin: 32px auto !important;
	}
`;

const PostTemplate = ({ pageContext }) => {
	const { content, related, title } = pageContext;
	const sanitizedContent = relativePaths(content);

	const elements = parse(sanitizedContent, {
		replace: ({ attribs, children }) => {
			if (
				attribs &&
				attribs.class &&
				attribs.class.includes(`wp-block-embed-twitter`)
			) {
				const tweetURL = children[1].children[0].data;
				const lastPart = tweetURL.split("/").pop();
				const tweetID = lastPart.toString();
				return <Tweet id={tweetID} />;
			}
		}
	});

	return (
		<Base context={pageContext}>
			<ArticleIntro>
				<Link to="/posts">Insights</Link>
				<h1>{title}</h1>
			</ArticleIntro>
			<Article>{elements}</Article>
			{related.length > 0 && related[0].title !== null && (
				<Related data={related} />
			)}
		</Base>
	);
};

const RelatedContainer = styled.section`
	margin: 96px auto;

	h2 {
		text-align: center;
	}

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

function Related({ data }) {
	return (
		<RelatedContainer>
			<h2>
				Continue Reading{" "}
				<span aria-label="book pile emoji" role="img">
					📚
				</span>
			</h2>
			<div className="related__items">
				{data.map(item => (
					<InView key={item.slug} threshold={0} triggerOnce={true}>
						{({ inView, ref }) => (
							<RelatedItem ref={ref}>
								<Link to={`/${item.slug}`}>
									<ImageLoader
										src={item.imageMD}
										alt={item.title}
										className="related__media"
									/>
									{item.title && <h3>{item.title}</h3>}
									{item.excerpt && <p>{item.excerpt}</p>}
								</Link>
							</RelatedItem>
						)}
					</InView>
				))}
			</div>
		</RelatedContainer>
	);
}

function Tweet(id) {
	const tweetID = id.toString();
	return <TwitterTweetEmbed tweetId={tweetID} />;
}

export default PostTemplate;
