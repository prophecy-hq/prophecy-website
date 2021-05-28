/** @jsx jsx */
import { jsx,  Container } from 'theme-ui';

// import React from "react"
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Art from '../components/art.js'
import FirstFold from '../components/firstFold.js'
import SecondFold from '../components/secondFold.js'
import Work from '../components/work.js'
import ClientSection from '../components/clientSection.js'
import AwardSection from '../components/awardSection.js'
import NewsSection from '../components/newsSection.js'
import ContactSection from '../components/contactSection.js'
import Cursor from '../components/cursor.js'

import '../styles/cursor.css'

const IndexPage = () => (
	
	<Layout>

		<Cursor />

		<SEO title="Home" />
		
	


	<Container id = "canvas" className = "bgchange" sx = {{variant: 'layouts.fullContainer'}}>
		

		<div id = "art"  sx = {{variant: 'layouts.canvas'}} >
			<Art />
		</div>

		<Container sx = {{variant: 'layouts.mainContainer'}}>
			<FirstFold />
			<SecondFold />
		</Container>

		<Container id = "team" sx = {{variant: 'layouts.mainContainer'}}>
			<Work />
		</Container>


		<Container id = "recognition" sx = {{variant: 'layouts.mainContainer'}}>
				<ClientSection/>
		</Container>

		<Container sx = {{variant: 'layouts.mainContainer'}}>	
			<AwardSection/>
		</Container>

		<Container id = "news" sx = {{variant: 'layouts.mainContainer'}}>		
			<NewsSection />
		</Container>
	</Container>


	<Container id = "contact" sx = {{variant: 'layouts.fullContainer', backgroundColor: 'orange', pb: '0'}}>
		<Container sx = {{variant: 'layouts.mainContainer', pb: '0'}}>		
			<ContactSection />
		</Container>
	</Container>
		
	</Layout>
);

export default IndexPage;

