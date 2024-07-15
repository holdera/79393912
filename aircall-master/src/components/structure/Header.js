import React from 'react';
import Navigation from './Navigation';
import Logo from '../../images/logo.svg';

const Header = () => {
	return (
		<>
			<header>
				<img src={Logo} alt='Air Call logo' />
			</header>
			<Navigation />
		</>
	);
};

export default Header;
