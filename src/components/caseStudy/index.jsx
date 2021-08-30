/** @jsx jsx */
import { Box, Flex, jsx } from 'theme-ui';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import Title from './Title';
import Metadata from './Metadata';

const shortcodes = {
	Link,
	Title,
	Metadata,
};

export default ({ children, pageContext }) => (
	<MDXProvider components={shortcodes}>
		<div
			sx={{
				width: '80vw',
				maxWidth: '1280px',
				margin: '0 auto',
			}}
		>
			<Title>{pageContext.frontmatter.title}</Title>

			<Flex
				sx={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					flexWrap: 'wrap',
					gap: '12.5%',
				}}
			>
				<Box
					sx={{
						width: '25%',
						// minWidth: '240px',
						flexBasis: '200px',
						flexGrow: '1',
						flexShrink: '2',
					}}
				>
					<Metadata
						attribution={pageContext.frontmatter.attribution}
						recognition={pageContext.frontmatter.recognition}
						externalLinks={pageContext.frontmatter.externalLinks}
					/>
				</Box>

				<Box
					sx={{
						width: '50%',
						flexBasis: '480px',
						flexGrow: '2',
						flexShrink: '1',
						// width: '50vw',
						// maxWidth: '640px',
					}}
				>
					{children}
				</Box>
			</Flex>
		</div>
	</MDXProvider>
);
