import React, { Component } from 'react';
import {list} from './Data.js';


export default class Products extends Component {
	constructor() {
		super();
		this.state = {
			list
		};
		this.loopProducts = this.loopProducts.bind(this)
	}
loopProducts(){

var	{list} =this.props
	return list.map((list) =>{
		return (<div className="product-wrap">
			<div className="product">
				<div className="circle">
				<img src="https://www.modells.com/dw/image/v2/BBXB_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2c11e3ff/images/large/0000002018/AJ6352_100.jpg?sw=500&sh=500&sm=fit" alt=""/>

				</div>
			</div>
			<div className="title">LDWAFFLE</div>
			<div className="price">2500kr</div>
		</div>)
	})
}
	render() {
		return (
//sub menu for clothes-type ex Sweater Thshirt Jeans Sweatpants etc


			<section className="content-area products-all-page">
				<div className="filter-section">
					<div className="filter">
						<input
							type="checkbox"
							name=""
							value=""
							id="gender-options"
							className="toggle"
						/>
						<label htmlFor="gender-options" className="title">
							gender
						</label>
						<div className="content">
							<div className="gender">
								<div className="option">Male</div>
								<div className="option">female</div>
							</div>
						</div>
					</div>
					<div className="filter">
						<input
							type="checkbox"
							name=""
							value=""
							id="product-options"
							className="toggle"
						/>
						<label htmlFor="product-options" className="title">
							Kläder
						</label>
						<div className="content">
							<div className="product">
								<div className="option">Tröjor</div>
								<div className="option">Hoodies</div>
								<div className="option">Byxor</div>
								<div className="option">Jeans</div>
								<div className="option">Mössor</div>
								<div className="option">Övrigt</div>
							</div>
						</div>
					</div>
					<div className="filter">
						<input
							type="checkbox"
							name=""
							value=""
							id="brand-options"
							className="toggle"
						/>
						<label htmlFor="brand-options" className="title">
							Märke
						</label>
						<div className="content">
							<div className="brand">
								<div className="option">Nike</div>
								<div className="option">Adidas</div>
								<div className="option">Puma</div>
								<div className="option">Fila</div>
								<div className="option">Levis</div>
								<div className="option">Lee</div>
							</div>
						</div>
					</div>
					<button type="button" name="button">
						Apply Filter
					</button>
				</div>

				<div className="all-products-grid">
					{this.loopProducts()}
				</div>
			</section>
		);
	}
}
