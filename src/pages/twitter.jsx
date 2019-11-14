import React, { Component } from "react";

import Base from "../components/templates/Base";

import Hero from "../components/organisms/hero/Hero";

import TweetsContainer from "./twitterStyles";

export default class Twitter extends Component {
	state = {
		tweets: []
	};

	componentDidMount() {
		fetch("https://wjhm-node-twitter-feed.herokuapp.com/")
			.then(res => {
				return res.json();
			})
			.then(json => {
				this.setState({ tweets: json });
			});
	}

	heartGenerator(count) {
		let hearts = [];
		for (var i = 0; i < count; i++) {
			hearts.push("❤");
		}
		return hearts;
	}

	render() {
		return (
			<Base cta={false}>
				<Hero>
					<h1>Tweets</h1>
					<h3>Some of my social media ramblings</h3>
				</Hero>
				<TweetsContainer>
					{this.state.tweets.map(tweet => (
						<div className="tweet" key={tweet.id}>
							{tweet.text}
							<div className="tweet__favourites">
								{this.heartGenerator(tweet.favorite_count)}
							</div>
						</div>
					))}
				</TweetsContainer>
			</Base>
		);
	}
}
