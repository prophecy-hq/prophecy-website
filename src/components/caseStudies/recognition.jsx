/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

export default function Recognition({ items }) {
	const listItems = items.map((item) => (
		<li
			sx={{
				marginBottom: '24px',
				':last-child': { marginBottom: '0px' },
			}}
		>
			{`${item[0]} \u2014 `}
			<i sx={{ variant: 'text.italic' }}>{item[1]}</i>
		</li>
	));

	return (
		<div
			sx={{
				variant: 'text.bodySmall',
				color: 'white',
				borderBottom: '1px',
				border: 'white_a72',
			}}
		>
			<h5 sx={{ variant: 'text.bold', marginBottom: '24px' }}>Recognition</h5>
			<ul sx={{ listStyleType: 'circle' }}>{listItems}</ul>
		</div>
	);
}

Recognition.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
