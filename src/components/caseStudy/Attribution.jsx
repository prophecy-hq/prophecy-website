/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

export default function Attribution(props) {
	return (
		<p sx={{ variant: 'text.bodySmall', color: 'white_a70' }}>
			{props.children}
		</p>
	);
}

Attribution.propTypes = {
	children: PropTypes.string.isRequired,
};
