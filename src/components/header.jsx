/** @jsx jsx */
import { jsx, Image, Box } from 'theme-ui';
import PropTypes from 'prop-types';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import ProphecyLogo from '../images/prophecyLogo.png';

const Header = ({ siteTitle }) => (
	<Box sx={{ variant: 'layouts.mainContainer' }}>
		<Image src={ProphecyLogo} variant="logo" />

		{/* <ul sx={{ variant: 'layouts.navbar' }}>
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

		</ul> */}
	</Box>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: '',
};

export default Header;
