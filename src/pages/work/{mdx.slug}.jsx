/** @jsx jsx */
import { graphql, Link } from 'gatsby';
import { Box, Flex, jsx } from 'theme-ui';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Title from '../../components/caseStudy/Title';
import Metadata from '../../components/caseStudy/Metadata';
import Carousel from '../../components/caseStudy/Carousel';

const shortcodes = {
	Link,
	Carousel,
	GatsbyImage,
	getImage,
};

export default function CaseStudy({ data }) {
	return (
		<MDXProvider components={shortcodes}>
			<div
				sx={{
					width: '80vw',
					maxWidth: '1280px',
					margin: '0 auto 256px auto',
				}}
			>
				<Link
					to="/"
					sx={{
						position: 'relative',
						top: '1.5rem',
						variant: 'text.h4',
						color: 'white',
						cursor: 'pointer',
						textDecoration: 'none',
					}}
				>
					&larr; Back
				</Link>

				<Title>{data.mdx.frontmatter.title}</Title>

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
							flexBasis: '200px',
							flexGrow: '1',
							flexShrink: '2',
						}}
					>
						<Metadata
							attribution={data.mdx.frontmatter.attribution}
							recognition={data.mdx.frontmatter.recognition}
							externalLinks={data.mdx.frontmatter.externalLinks}
						/>
					</Box>

					<Box
						sx={{
							width: '50%',
							flexBasis: '480px',
							flexGrow: '2',
							flexShrink: '1',
						}}
					>
						<MDXRenderer localImages={data.mdx.frontmatter.embeddedImagesLocal}>
							{data.mdx.body}
						</MDXRenderer>
					</Box>
				</Flex>
			</div>
		</MDXProvider>
	);
}

export const query = graphql`
	query ($id: String!) {
		mdx(id: { eq: $id }) {
			body
			frontmatter {
				attribution
				recognition
				externalLinks
				title
				embeddedImagesLocal {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`;
