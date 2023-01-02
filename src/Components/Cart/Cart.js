import React from 'react';
import './Cart.css';

const Cart = (props) => {
	const { name } = props.cart
	return (
		<div className='cart'>
			<div>
				<p>{name}</p>
			</div>

		</div>
	);
};

export default Cart;