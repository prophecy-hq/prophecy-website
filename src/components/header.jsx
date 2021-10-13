/** @jsx jsx */
import { jsx, Image, Box } from 'theme-ui';
import PropTypes from 'prop-types';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Link } from 'gatsby';

import ProphecyLogo from '../images/prophecyLogo.png';

const Header = ({ siteTitle }) => (
	<Box sx={{ variant: 'layouts.header' }}>
		
		<Image src={ProphecyLogo} variant="logo" sx = {{ml: '5vw'}}/>

		{
		/* <ul sx={{ variant: 'layouts.navbar' }}>
			<AnchorLink
				sx={{ variant: 'text.link', fontStyle: 'italic', fontSize: [16, 18] }}
				to="/#team"
			>
				Team
			</AnchorLink>
			<AnchorLink
				sx={{ variant: 'text.link', fontStyle: 'italic', fontSize: [16, 18] }}
				to="/#recognition"
			>
				Recognition
			</AnchorLink>
			<AnchorLink
				sx={{ variant: 'text.link', fontStyle: 'italic', fontSize: [16, 18] }}
				to="/#contact"
			>
				Contact
			</AnchorLink>

		</ul> */

		<ul sx = {{variant: 'layouts.navbar', mr: ['5vw','48px']}} className = "navbar">
			<Link 
			className = "navbar-link" 
			sx = {{variant: 'text.link', fontStyle: 'italic', color: 'white', fontSize: [16,18], mb: '8px',
			'@media screen and (max-width: 1024px)': {
				mb: '0',
				mr: '16px',
				
			},
			}} 
			activeStyle = {{ fontWeight: '500'}} to = "/" 
			>
				Home
			</Link>
			<Link 
			className = "navbar-link" 
			sx = {{variant: 'text.link', fontStyle: 'italic', color: 'white', fontSize: [16,18], mb: '8px',
			'@media screen and (max-width: 1024px)': {
				mb: '0',
				mr: '16px',
				
			}
			,}} 
			activeStyle = {{ fontWeight: '500'}} to = "/services"
			>
				Services
			</Link>

			<a className = "navbar-link"
			href = "#contact"
			sx = {{variant: 'text.link', fontStyle: 'italic', color: 'white', fontSize: [16,18], textDecoration: 'none',
			'@media screen and (max-width: 1024px)': {
				mb: '0',
				mr: '0vw',
				
			},  
		}}
			>
				Contact
			</a>
		</ul>
		}
	</Box>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: '',
};

export default Header;
