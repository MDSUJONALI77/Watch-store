import React from 'react';
import logo from '../../image/logo.png';
import './Header.css'

const Header = () => {
	return (
		<nav className='navbar'>
			<img className='logo' src={logo} alt="" />
			<div>
				<a href="/order">Order</a>
				<a href="/review">Review</a>
				<a href="/inventory">Inventory</a>
				<a href="/login">Login</a>
			</div>
		</nav>
	);
};

export default Header;