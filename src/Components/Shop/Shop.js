import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart';

const Shop = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('products.json')
			.then(res => res.json())
			.then(data => setProducts(data));
	}, []);

	const [carts, setCarts] = useState([]);
	const handleAddToCart = (watch) => {
		const newCarts = [...carts, watch];
		setCarts(newCarts);
	}

	//choseItem
	const ChoseRandomItem = (selectedProduct) => {


	}

	//delete
	const handlerRemoveItem = () => {
		const deleteItem = [];
		setCarts(deleteItem);
	}

	return (
		<div className="shop-container">
			<div>
				<h1 className="shop-heading">Chose Your Lucky Watch</h1>
				<div className="watch-container">
					{
						products.map(product => <Product
							key={product.id}
							product={product}
							handleAddToCart={handleAddToCart}
						></Product>)
					}
				</div>
			</div>
			<div className="review-container">
				<h3>Selected Watch</h3>
				{
					carts.map(cart => <Cart
						cart={cart}
					></Cart>)
				}
				<div className='btn'>
					<button className='buy-btn' onClick={ChoseRandomItem}>BUY ME ONE</button>
					<button className='delete-btn' onClick={handlerRemoveItem}>DELETE ALL</button>
				</div>
			</div>

		</div>
	);
};

export default Shop;