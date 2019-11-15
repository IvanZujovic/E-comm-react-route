import React, { Component } from 'react';
import Slider from 'react-slick';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				display: 'block'
			}}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				display: 'block'
			}}
			onClick={onClick}
		/>
	);
}

export default class CustomArrows extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />
		};
		return (
			<div className="container">
				<Slider {...settings}>
					<div>
						<img src="https://www.modells.com/dw/image/v2/BBXB_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2c11e3ff/images/large/0000002018/AJ6352_100.jpg?sw=500&sh=500&sm=fit" alt=""/>
					</div>
					<div>
						<img src="https://cdn.shopify.com/s/files/1/1131/1046/products/820515-100-PHSFH001-2000_05825695-dcf4-467c-9cd1-e1ef2f8dd315_1024x1024.png?v=1494379429" alt="" />
					</div>
					<div>
						<img src="https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw9756cf3d/images/52798001/Rebel_52798001_grey_hi-res.jpg?sw=1000&sh=1000&sm=fit" alt=""/>
					</div>
					<div>
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfz2lii-r9lWafYUDiikyfdznK22zCfXrqBJWVdB102GoBzTK-" alt=""/>
					</div>
					<div>
						<img src="https://cdn.shopify.com/s/files/1/1131/1046/products/820515-100-PHSFH001-2000_05825695-dcf4-467c-9cd1-e1ef2f8dd315_1024x1024.png?v=1494379429" alt="" />
					</div>
				</Slider>
			</div>
		);
	}
}
