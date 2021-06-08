/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import PropTypes from 'prop-types';

export default function Title(props) {
	return (
		<Box
			sx={{
				gridColumnStart: '1',
				gridColumnEnd: '17',
			}}
		>
			<h1 sx={{ variant: 'text.caseStudyTitle', color: 'orange' }}>
				{props.children}
			</h1>
		</Box>
	);
}

Title.propTypes = {
	children: PropTypes.string.isRequired,
};
