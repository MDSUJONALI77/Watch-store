import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
	const { handleAddToCart, product } = props;
	const { img, name, price, seller } = props.product;
	return (
		<div className='products'>
			<img src={img} alt="" />
			<div className='watch-info'>
				<p className='product-name'>Name: {name}</p>
				<p><small>Price: ${price}</small></p>
				<p>Brand: {seller}</p>
			</div>
			<div>
				<button className='btn-cart' onClick={() => handleAddToCart(product)}>
					<p>ADD TO CART</p>
					<FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
				</button>

			</div>
			
		</div>
	);
};

export default Product;