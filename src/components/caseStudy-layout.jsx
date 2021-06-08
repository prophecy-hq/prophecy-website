/** @jsx jsx */
import { Box, Grid, jsx } from 'theme-ui';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import Title from './caseStudies/title.jsx';
import MetadataLayout from './caseStudies/metadata-layout';

const shortcodes = {
	Link,
	Title,
	MetadataLayout,
};

export default (props) => (
	<MDXProvider components={shortcodes}>
		<Grid
			columns={16}
			gap={24}
			sx={{ margin: '0 auto', width: '100vw', maxWidth: '1280px' }}
		>
			<Title>{props.pageContext.frontmatter.title}</Title>

			<MetadataLayout
				attribution={props.pageContext.frontmatter.attribution}
				recognition={props.pageContext.frontmatter.recognition}
				externalLinks={props.pageContext.frontmatter.externalLinks}
			/>

			<Box
				sx={{
					gridColumnStart: '9',
					gridColumnEnd: '17',
				}}
			>
				{props.children}
			</Box>
		</Grid>
	</MDXProvider>
);
