/** @jsx jsx */
import { jsx,  Container, Box } from 'theme-ui';

// import React from "react"
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import FirstFold from '../components/firstFold'
import SecondFold from '../components/secondFold'
import TeamMember from '../components/teamMember'
import ClientSection from '../components/clientSection'
import AwardSection from '../components/awardSection'
import NewsSection from '../components/newsSection'
import ContactSection from '../components/contactSection'
import Art from '../components/art'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />



	<Container id = "canvas" sx = {{variant: 'layouts.fullContainer', backgroundColor: 'rgba(0,0,0,0)'}}>
		<div sx = {{variant: 'layouts.canvas'}}><Art /></div>
		<Container sx = {{variant: 'layouts.mainContainer'}}>
			<FirstFold />
			<SecondFold />
		</Container>
	</Container>

		
	<Container sx = {{variant: 'layouts.fullContainer', backgroundColor: 'white'}}>
		<Container sx = {{variant: 'layouts.mainContainer'}}>
			
			<TeamMember 
				bio = "Akshay Verma lead design at Obvious and was instrumental in building and training the team, setting up processes, and leading projects. He is an alumnus of the National Institute of Design and Copenhagen Institute of Interaction Design." 
				caseStudyName1 = "Simple"
				caseStudyDescription1 = "A sentence about what we did: challenge and outcomes."
				caseStudyName2 = "Gradeup"
				caseStudyDescription2 = "A sentence about what we did: challenge and outcomes."
				caseStudyName3 = "Orderhive"
				caseStudyDescription3 = "A sentence about what we did: challenge and outcomes."

			/>

			<TeamMember 
				bio = "Sneha Sankar was the Head of Design of Graphy. Previously Creative Lead at Unacademy, St+art India, Ola, Struckby and Leo Burnett. She is an alumnus of the National Institute of Design." 
				caseStudyName1 = "Unacademy"
				caseStudyDescription1 = "A sentence about what we did: challenge and outcomes."
				caseStudyName2 = "Graphy"
				caseStudyDescription2 = "A sentence about what we did: challenge and outcomes."
				caseStudyName3 = ""
				caseStudyDescription3 = ""

			/>


			<TeamMember 
				bio = "Siddharth Ahuja is a product designer with a Computer Science background. He helped grow the design team at smallcase and scale the product’s user base up to 200k+ users. He studied at the Copenhagen Institute of Interaction Design." 
				caseStudyName1 = "smallcase"
				caseStudyDescription1 = "A sentence about what we did: challenge and outcomes."
				caseStudyName2 = "LEGO Ventures"
				caseStudyDescription2 = "A sentence about what we did: challenge and outcomes."
				caseStudyName3 = ""
				caseStudyDescription3 = ""

			/>

		</Container>
	</Container>

	<Container sx = {{variant: 'layouts.fullContainer', backgroundColor: 'darkGrey'}}>
		<Container sx = {{variant: 'layouts.mainContainer'}}>
				<ClientSection/>
		</Container>
	</Container>

	<Container sx = {{variant: 'layouts.fullContainer', backgroundColor: 'lightRed'}}>
		<Container sx = {{variant: 'layouts.mainContainer'}}>	
			<AwardSection/>
		</Container>
	</Container>

	
	<Container sx = {{variant: 'layouts.fullContainer', backgroundColor: 'white'}}>
		<Container sx = {{variant: 'layouts.mainContainer'}}>		
			<NewsSection />
		</Container>
	</Container>


	<Container sx = {{variant: 'layouts.fullContainer', backgroundColor: 'orange'}}>
		<Container sx = {{variant: 'layouts.mainContainer'}}>		
			<ContactSection />
		</Container>
	</Container>
	
	
		

		
	</Layout>
);

export default IndexPage;

