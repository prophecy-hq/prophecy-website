/** @jsx jsx */
import { jsx, Flex, Image, Box } from 'theme-ui';
import PropTypes from 'prop-types';
import { AnchorLink } from "gatsby-plugin-anchor-links";


import ProphecyLogo from '../images/prophecyLogo.png';

const Header = ({ siteTitle }) => (
		
		<Box sx = {{variant: 'layouts.mainContainer'}}>
			
			<Image src = {ProphecyLogo} variant = 'logo' />

		
			<ul sx = {{variant: 'layouts.navbar'}}>
				{/* <AnchorLink to = "/#team">Team</AnchorLink>
				<AnchorLink to = "/#recognition">Recognition</AnchorLink>
				<AnchorLink to = "/#contact">Contact</AnchorLink> */}

				<a href = "/#team">Team</a>
				<a href = "/#recognition">Recognition</a>
				<a href = "/#contact">Contact</a>

			</ul>

		</Box>

);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: '',
};

export default Header;
