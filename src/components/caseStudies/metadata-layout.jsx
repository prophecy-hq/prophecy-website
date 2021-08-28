/** @jsx jsx */
import PropTypes from 'prop-types';
import { Flex, jsx } from 'theme-ui';
import Attribution from './attribution';
import Recognition from './recognition';
import ExternalLinks from './externalLinks';

export default function MetadataLayout({
	attribution,
	recognition,
	externalLinks,
}) {
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
			{attribution && <hr sx={{ width: '100%', borderColor: 'white_a50' }} />}
			{externalLinks && <ExternalLinks items={externalLinks} />}
		</Flex>
	);
}

MetadataLayout.defaultProps = {
	attribution: null,
	recognition: null,
	externalLinks: null,
};

MetadataLayout.propTypes = {
	attribution: PropTypes.string,
	recognition: PropTypes.string,
	externalLinks: PropTypes.string,
};
