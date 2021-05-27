/** @jsx jsx */
import { jsx,  Container } from 'theme-ui';

// import React from "react"
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FirstFold from '../components/firstFold.js'
import SecondFold from '../components/secondFold.js'
import Work from '../components/work.js'
import ClientSection from '../components/clientSection.js'
import AwardSection from '../components/awardSection.js'
import NewsSection from '../components/newsSection.js'
import ContactSection from '../components/contactSection.js'
import Art from '../components/art.js'
import Cursor from '../components/cursor'
import '../styles/cursor.css'

const IndexPage = () => (
	<Layout>

		<SEO title="Home" />
		
	
	<Cursor />

	<Container id = "canvas" className = "bgchange" sx = {{variant: 'layouts.fullContainer', backgroundColor: 'rgba(0,0,0,0)', paddingBottom: '20vw'}}>
		<div id = "art" sx = {{variant: 'layouts.canvas'}}><Art /></div>
		<Container sx = {{variant: 'layouts.mainContainer'}}>
			<FirstFold />
			<SecondFold />
		</Container>
	</Container>


		
	<Container id = "team" className = "bgchange" sx = {{variant: 'layouts.fullContainer', backgroundColor: 'rgba(0,0,0,0)', paddingTop: '20vw'}}>
		<Container sx = {{variant: 'layouts.mainContainer'}}>
			<Work />
		</Container>
	</Container>

	<Container id = "recognition" className = "bgchange" sx = {{variant: 'layouts.fullContainer', backgroundColor: 'white'}}>
		<Container sx = {{variant: 'layouts.mainContainer'}}>
				<ClientSection/>
		</Container>
	</Container>

	<Container sx = {{variant: 'layouts.fullContainer', backgroundColor: 'darkGrey'}}>
		<Container sx = {{variant: 'layouts.mainContainer'}}>	
			<AwardSection/>
		</Container>
	</Container>

	
	<Container sx = {{variant: 'layouts.fullContainer', backgroundColor: 'white'}}>
		<Container sx = {{variant: 'layouts.mainContainer'}}>		
			<NewsSection />
		</Container>
	</Container>


	<Container id = "contact" sx = {{variant: 'layouts.fullContainer', backgroundColor: 'orange'}}>
		<Container sx = {{variant: 'layouts.mainContainer'}}>		
			<ContactSection />
		</Container>
	</Container>
	
		
	</Layout>
);

export default IndexPage;

