import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CartButton from './CartButton.js';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}
	handleClick = () => {
		var el = document.getElementById('cart-popup');
		el.classList.toggle('active');
		console.log('clicked');
	};

	render() {
		return (
			<header>
      <Router>
				<div className="title">
					<a href="/" >
						<h1 >Newgear</h1>
					</a>
				</div>

				<div className="menu">

					<a href="/about">About</a>
					<a href="/newArrivals">New Arrivals</a>
					<a href="/products">Kläder</a>
					<a href="/login">Logga in</a>

					<div id="cart">
						<i className="fas fa-shopping-cart" onClick={this.handleClick} />
					</div>
				</div>
        </Router>
				<CartButton />
			</header>
		);
	}
}
