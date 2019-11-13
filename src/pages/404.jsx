import React, { Component } from "react";
import { Link } from "gatsby";

import Base from "../components/templates/Base";

import Hero from "../components/organisms/hero/Hero";

export default class Four0Four extends Component {
	render() {
		return (
			<Base>
				<Hero>
					<h1>404</h1>
					<p>Sorry about that, we couldn't find what you were looking for :(</p>
					<Link to="/">Return to the homepage</Link>
				</Hero>
			</Base>
		);
	}
}
