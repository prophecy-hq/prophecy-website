/** @jsx jsx */
import { graphql, Link } from 'gatsby';
import { Box, Flex, jsx } from 'theme-ui';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { StaticImage } from 'gatsby-plugin-image';
import Title from './Title';
import Metadata from './Metadata';
import Carousel from './Carousel';

const shortcodes = {
	Link,
	Title,
	Metadata,
	Carousel,
	StaticImage,
};

export default function CaseStudy({ children, pageContext }) {
	return (
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
}

// export const query = graphql`
// 	query ($id: String) {
// 		mdx(id: { eq: $id }) {
// 			body
// 			frontmatter {
// 				attribution
// 				externalLinks
// 				recognition
// 				title
// 			}
// 		}
// 	}
// `;
