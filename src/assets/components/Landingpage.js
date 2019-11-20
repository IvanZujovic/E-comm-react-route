import React, { Component } from 'react';
import SlideView from './SlideView.js';
export default class Landingpage extends Component {
	constructor() {
		super();
		this.state = {
			
		};
	}

	render() {
		return (
			<div id="landing-page">
				<div className="container">
					<h3> NEW ARRIVALS </h3>
					<hr />
					<SlideView />
				</div>
			</div>
		);
	}
}
