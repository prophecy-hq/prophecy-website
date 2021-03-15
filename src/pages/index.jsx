/** @jsx jsx */
import { jsx, Styled, Box, Flex } from 'theme-ui';

// import React from "react"
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (

	<Layout>
		<SEO title="Home" />
		
			
			<Styled.h1>Where change-makers write their own future.</Styled.h1>
		

			<Flex>
				
				<Flex sx={{variant: 'layouts.leftContent'}}>
					<Styled.p>We are a digital product design consultancy that gets into the trenches with founders to help them realise their mission. We partner with startups and established companies on designing new products and reimagining existing ones.</Styled.p>
					<Styled.p>The best products are experiences that make each user feel like the product was crafted just for them. Realising that vision requires making the right product decisions, identifying and solving the right problems, and being highly creative with the execution of the solutions. When done right, this care for the user creates extraordinary business outcomes.</Styled.p>
					<Styled.p>We are a team of interaction designers, user researchers and visual designers who have helped many companies across healthcare, edtech and fintech achieve that. And we’d love to see how we could help you too.</Styled.p>
				</Flex>

				<Box sx ={{ variant: 'layouts.empty' }}></Box>
				
				<Flex sx={{variant: 'layouts.rightContent'}}>

					<Box sx={{variant: 'layouts.statbox'}}>
						<Styled.h2>Sign up for updates</Styled.h2>
						
					</Box>

				</Flex>
			</Flex>
		

	</Layout>
);

export default IndexPage;
