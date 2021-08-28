/** @jsx jsx */
import { jsx, Styled, Box } from 'theme-ui';
import { Link } from 'gatsby';

export default function CaseStudy(props) {
	return (
		<Box sx={{ marginBottom: 48 }}>
			<Link sx={{ variant: 'text.link' }}>
				<h1 sx={{ variant: 'text.h1' }}>{props.title}</h1>
				<p sx={{ variant: 'text.bodySmall' }}>{props.description}</p>
			</Link>
		</Box>
	);
}
