/** @jsx jsx */
import { Themed, jsx } from 'theme-ui';
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
			<i sx={{ variant: 'text.bodySmall.italic' }}>{item[1]}</i>
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
			<Themed.h5 sx={{ marginBottom: '24px' }}>Recognition</Themed.h5>
			<ul sx={{ listStyleType: 'circle' }}>{listItems}</ul>
		</div>
	);
}

Recognition.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
