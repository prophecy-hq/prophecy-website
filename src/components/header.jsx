/** @jsx jsx */
import { jsx, Image } from 'theme-ui';

import { Link } from 'gatsby';
import React from 'react';
import ProphecyLogo from '../images/prophecy-logo.png'

const Header = ({ siteTitle }) => (
	<header>
		<div>
			<Link
				to="/"
				style={{
					textDecoration: 'none',
				}}
			>
				<Image src = {ProphecyLogo} variant = 'logo' />
			</Link>
		</div>
	</header>
);


export default Header;
