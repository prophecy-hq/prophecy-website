/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';
import Attribution from './attribution.jsx';
import Recognition from './recognition.jsx';
import ExternalLinks from './externalLinks.jsx';

export default function MetadataLayout(props) {
	return (
		<Flex
			sx={{
				flexFlow: 'column nowrap',
				gap: '48px',
				gridColumnStart: '1',
				gridColumnEnd: '5',
			}}
		>
			<Attribution>{props.attribution}</Attribution>
			<hr sx={{ width: '100%', borderColor: 'white_a30' }} />
			<Recognition items={props.recognition} />
			<hr sx={{ width: '100%', borderColor: 'white_a30' }} />
			<ExternalLinks items={props.externalLinks} />
		</Flex>
	);
}
