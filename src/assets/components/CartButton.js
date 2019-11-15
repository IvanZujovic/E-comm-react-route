import React, { Component } from 'react';

export default class CartButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: ''
		};
	}

	render() {
		return (
			<section id="cart-popup" className="">
				<div className="cart-title">
					<div className="titles">My Cart</div>
				</div>
				<div className="cart-items">
					<div className="item-container">
						<div className="items">
							<img src="https://cdn.shopify.com/s/files/1/1131/1046/products/820515-100-PHSFH001-2000_05825695-dcf4-467c-9cd1-e1ef2f8dd315_1024x1024.png?v=1494379429" alt=""/>
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="items">
							<img src="https://cdn.shopify.com/s/files/1/1131/1046/products/820515-100-PHSFH001-2000_05825695-dcf4-467c-9cd1-e1ef2f8dd315_1024x1024.png?v=1494379429" alt=""/>
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="items">
							<img src="https://cdn.shopify.com/s/files/1/1131/1046/products/820515-100-PHSFH001-2000_05825695-dcf4-467c-9cd1-e1ef2f8dd315_1024x1024.png?v=1494379429" alt="" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="items">
							<img src="https://cdn.shopify.com/s/files/1/1131/1046/products/820515-100-PHSFH001-2000_05825695-dcf4-467c-9cd1-e1ef2f8dd315_1024x1024.png?v=1494379429" alt=""/>
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="items">
							<img src="https://cdn.shopify.com/s/files/1/1131/1046/products/820515-100-PHSFH001-2000_05825695-dcf4-467c-9cd1-e1ef2f8dd315_1024x1024.png?v=1494379429" alt=""/>
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="items">
							<img src="https://cdn.shopify.com/s/files/1/1131/1046/products/820515-100-PHSFH001-2000_05825695-dcf4-467c-9cd1-e1ef2f8dd315_1024x1024.png?v=1494379429"alt="" />
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="items">
							<img src="https://cdn.shopify.com/s/files/1/1131/1046/products/820515-100-PHSFH001-2000_05825695-dcf4-467c-9cd1-e1ef2f8dd315_1024x1024.png?v=1494379429" alt=""/>
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
					<div className="item-container">
						<div className="items">
							<img src="https://cdn.shopify.com/s/files/1/1131/1046/products/820515-100-PHSFH001-2000_05825695-dcf4-467c-9cd1-e1ef2f8dd315_1024x1024.png?v=1494379429" alt=""/>
							<div className="delete-btn">
								<div className="circle">X</div>
							</div>
						</div>
					</div>
				</div>
				<div className="product-total">
					<div className="inside-container">
						<div className="title">Antal produkter:</div>
						<div className="number">x 4</div>
					</div>
				</div>
				<div className="price-total">
					<div className="inside-container">
						<div className="title">Total:</div>
						<div className="number">2500 kr</div>
					</div>
				</div>
				<div className="checkout">
					<div className="title">Till Kassan</div>
					<i className="fas fa-shopping-cart" />
				</div>
			</section>
		);
	}
}
