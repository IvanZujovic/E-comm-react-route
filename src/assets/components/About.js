import React, { Component } from 'react';


import CartButton from './CartButton.js';

export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<section className="content-area about-page">
				<div className="container">
					<div className="box-container">
						<h1>About</h1>
						<p>
							Direct trade tilde franzen, intelligentsia semiotics aesthetic
							occupy migas sustainable taiyaki bicycle rights mixtape street art
							squid. Banh mi offal taiyaki twee, pop-up keffiyeh tousled copper
							mug poke lumbersexual tilde cloud bread letterpress. Umami deep v
							pabst post-ironic. Kinfolk unicorn celiac, sustainable XOXO
							polaroid direct trade williamsburg trust fund adaptogen normcore.
							Semiotics ethical brooklyn tofu franzen portland, schlitz mixtape.
						</p>
					</div>
				</div>
			</section>
		);
	}
}
