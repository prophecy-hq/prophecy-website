/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';

export default function ExternalLinks({ items }) {
	const listItems = items.map((item) => (
		<li
			sx={{
				marginBottom: '12px',
				':last-child': { marginBottom: '0px' },
			}}
		>
			<a
				sx={{
					variant: 'text.bodySmall',
					color: 'white',
					textDecoration: 'none',
					borderBottom: '1px',
					border: 'white_a72',
				}}
				href={item[0]}
				target="_blank"
				rel="noopener noreferrer"
			>
				{item[1]}
			</a>
		</li>
	));

	return <ul>{listItems}</ul>;
}

ExternalLinks.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
