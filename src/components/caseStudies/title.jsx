/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import PropTypes from 'prop-types';

export default function Title({ children }) {
	return (
		<Box>
			<h1 sx={{ variant: 'text.caseStudyTitle', color: 'orange' }}>
				{children}
			</h1>
		</Box>
	);
}

Title.propTypes = {
	children: PropTypes.string.isRequired,
};
