/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

export default function Attribution(props) {
	return (
		<h1 sx={{ variant: 'text.bodySmall', color: 'white_a70' }}>
			{props.children}
		</h1>
	);
}

Attribution.propTypes = {
	children: PropTypes.string.isRequired,
};
