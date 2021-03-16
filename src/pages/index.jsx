/** @jsx jsx */
import { jsx, Styled, Box, Flex, IconButton, Link } from 'theme-ui';

// import React from "react"

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

						<div id="mc-signup">
						<form
							action="https://akshayverma.us3.list-manage.com/subscribe/post-json?u=fcc4a008c60b4fc7c9b3cb9fb&amp;id=9bf6a178a3&c=?"
							method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
							target="_blank" novalidate>
							<div style={{position: 'absolute', left: '-5000px'}}><input type="text"
									name="b_fcc4a008c60b4fc7c9b3cb9fb_750820346b" value=""></input></div>
							<input id="mce-EMAIL" class="body-small" type="email" placeholder="name@example.com" name="EMAIL"
								required></input>
							<input id="mc-embedded-subscribe" type="submit" name="subscribe" class="button" value="."></input>
							<div id="loadingAnimation">
								<div id="floatingCirclesG">
									<div class="f_circleG" id="frotateG_01"></div>
									<div class="f_circleG" id="frotateG_02"></div>
									<div class="f_circleG" id="frotateG_03"></div>
									<div class="f_circleG" id="frotateG_04"></div>
									<div class="f_circleG" id="frotateG_05"></div>
									<div class="f_circleG" id="frotateG_06"></div>
									<div class="f_circleG" id="frotateG_07"></div>
									<div class="f_circleG" id="frotateG_08"></div>
								</div>	
							</div>
						</form>
					</div>



					</Box>

					<Box sx={{variant: 'layouts.statbox'}}>
						<Styled.h2>Write to us</Styled.h2>
						<span>hello@prophecy.one</span>
						<span>
							<IconButton>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M9 3C8.44772 3 8 3.44772 8 4V6H17C17.5523 6 18 6.44772 18 7V19H19C19.5523 19 20 18.5523 20 18V4C20 3.44772 19.5523 3 19 3H9Z" fill="#141414"/>
									<path fillRule="evenodd" clipRule="evenodd" d="M4 9C4 8.44772 4.44772 8 5 8H15C15.5523 8 16 8.44772 16 9V23C16 23.5523 15.5523 24 15 24H5C4.44771 24 4 23.5523 4 23V9ZM6 13.5C6 13.2239 6.22386 13 6.5 13H13.5C13.7761 13 14 13.2239 14 13.5V14.5C14 14.7761 13.7761 15 13.5 15H6.5C6.22386 15 6 14.7761 6 14.5V13.5ZM6.5 17C6.22386 17 6 17.2239 6 17.5V18.5C6 18.7761 6.22386 19 6.5 19H13.5C13.7761 19 14 18.7761 14 18.5V17.5C14 17.2239 13.7761 17 13.5 17H6.5Z" fill="#141414"/>
								</svg>
							</IconButton>
						</span>
					</Box>

					<Box sx={{variant: 'layouts.statbox'}}>
						<Styled.h2>Follow us</Styled.h2>
						<Link href = "https://www.twitter.com" target="_blank">Twtitter</Link>
						<Link href = "https://www.twitter.com" target="_blank">LinkedIn</Link>
					</Box>

				</Flex>
			</Flex>
		

	</Layout>
);

export default IndexPage;
