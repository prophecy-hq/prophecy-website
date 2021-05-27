/** @jsx jsx */
import { jsx, Styled, Image, Box } from 'theme-ui';
import PropTypes from 'prop-types';
import { AnchorLink } from "gatsby-plugin-anchor-links";


import ProphecyLogo from '../images/prophecyLogo.png';

const Header = ({ siteTitle }) => (
		
		<Box sx = {{variant: 'layouts.mainContainer'}}>
			
			<Image src = {ProphecyLogo} variant = 'logo' />

		
			<ul sx = {{variant: 'layouts.navbar'}}>
				<AnchorLink sx = {{variant: 'layouts.link', fontSize: [16,18]}} to = "/#team">Team</AnchorLink>
				<AnchorLink sx = {{variant: 'layouts.link', fontSize: [16,18]}} to = "/#recognition">Recognition</AnchorLink>
				<AnchorLink sx = {{variant: 'layouts.link', fontSize: [16,18]}} to = "/#contact">Contact</AnchorLink>

				{/* <Styled.a href = "/#team">Team</Styled.a>
				<Styled.a href = "/#recognition">Recognition</Styled.a>
				<Styled.a href = "/#contact">Contact</Styled.a> */}

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
