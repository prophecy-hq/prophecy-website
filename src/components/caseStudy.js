/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { Link } from 'gatsby';

export default function CaseStudy(props) {
	return (
		<Box sx={{ mt: 64, maxWidth: '640px' }}>
			<Link to={props.url} sx={{ variant: 'text.link' }}>
				<h1 sx={{ variant: 'text.h1', mb: '0.25em' }}>{props.title}</h1>
				<p sx={{ variant: 'text.bodyLarge' }}>{props.description}</p>
			</Link>
		</Box>
	);
}
