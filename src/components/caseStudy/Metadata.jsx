/** @jsx jsx */
import PropTypes from 'prop-types';
import { Flex, jsx } from 'theme-ui';
import Attribution from './Attribution';
import Recognition from './Recognition';
import ExternalLinks from './ExternalLinks';

export default function Metadata({ attribution, recognition, externalLinks }) {
	return (
		<Flex
			sx={{
				flexFlow: 'column nowrap',
				gap: '48px',
				// gridArea: 'metadata',
			}}
		>
			{attribution && <Attribution>{attribution}</Attribution>}
			{attribution && <hr sx={{ width: '100%', borderColor: 'white_a50' }} />}
			{recognition && <Recognition items={recognition} />}
			{recognition && <hr sx={{ width: '100%', borderColor: 'white_a50' }} />}
			{externalLinks && <ExternalLinks items={externalLinks} />}
		</Flex>
	);
}

Metadata.defaultProps = {
	attribution: null,
	recognition: null,
	externalLinks: null,
};

Metadata.propTypes = {
	attribution: PropTypes.string,
	recognition: PropTypes.arrayOf(PropTypes.array),
	externalLinks: PropTypes.arrayOf(PropTypes.array),
};
