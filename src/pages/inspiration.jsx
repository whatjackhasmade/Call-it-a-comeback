import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Base from "../components/templates/Base";

import Hero from "../components/organisms/hero/Hero";
import Grid from "../components/organisms/grid/Grid";

export default props => (
	<StaticQuery
		query={graphql`
			query {
				allInspiration {
					edges {
						node {
							category
							media
							title
						}
					}
				}
			}
		`}
		render={query => <Inspiration query={query} {...props} />}
	/>
);

const InspiratioNavigation = styled.nav`
	margin: 56px 0 0;

	button {
		margin-right: 8px;
		margin-top: 8px;

		opacity: 0.5;
		text-transform: capitalize;

		&:active,
		&:focus,
		&:hover {
			opacity: 1;
		}
	}

	.focused {
		opacity: 1;
	}
`;

class Inspiration extends Component {
	state = {
		category: ""
	};

	setCategory = (e, category) => {
		e.preventDefault();

		if (this.state.category === category) {
			this.setState({ category: "" });
		} else {
			this.setState({ category });
		}
	};

	render() {
		const { query } = this.props;
		const nodes = query.allInspiration.edges;
		let categories = nodes.map(node => node.node.category);
		categories = categories.reduce(
			(x, y) => (x.includes(y) ? x : [...x, y]),
			[]
		);
		categories = categories.sort();

		return (
			<Base>
				<Hero>
					<h1>Get Inspired</h1>
					<p>You are only limited by your imagination.</p>
					<p>
						Let all these little things happen. Don't fight them. Learn to use
						them. You can't make a mistake.
					</p>
					<p>
						Anything that happens you can learn to use - and make something
						beautiful out of it.
					</p>
					<p>This is your world, whatever makes you happy you can put in it.</p>
					<p>Go crazy.</p>
				</Hero>
				<InspiratioNavigation>
					{categories.map(cat => (
						<button
							key={cat}
							className={
								this.state.category
									? this.state.category === cat && `focused`
									: `focused`
							}
							onClick={e => {
								this.setCategory(e, cat);
							}}
						>
							{cat}
						</button>
					))}
				</InspiratioNavigation>

				<Grid items={nodes} type="images" filter={this.state.category} />
			</Base>
		);
	}
}
