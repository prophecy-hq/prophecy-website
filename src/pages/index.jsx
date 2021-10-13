/** @jsx jsx */
import { jsx, Container, Spinner } from 'theme-ui';

import React, { useState } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Art from '../components/art.js';
import FirstFold from '../components/firstFold.js';
import SecondFold from '../components/secondFold.js';
import Work from '../components/work.js';
import ClientSection from '../components/clientSection.js';
import AwardSection from '../components/awardSection.js';
import NewsSection from '../components/newsSection.js';
import ContactSection from '../components/contactSection.js';
import Cursor from '../components/cursor.js';

import { BrowserView } from 'react-device-detect';

import '../styles/cursor.css';
import '../styles/optimize.css';

class IndexPage extends React.Component {
	// constructor() {
	// 	this.state = { loading: true }
	// }

	state = { loading: true };

	componentDidMount() {
		this.setState({ loading: false });
	}

	render() {
		if (this.state.loading) {
			return (
				<div sx={{ variant: 'layouts.fullHeightFlex' }}>
					<Spinner variant="styles.spinner" />
				</div>
			);
		} else {
			return (
				<Layout>
					<BrowserView>
						<Cursor />
					</BrowserView>

					<SEO title="Home" />

					<Container id="canvas" sx={{ variant: 'layouts.fullContainer' }}>
						<div className="bgchange"></div>

						<div id="art" sx={{ variant: 'layouts.canvas' }}>
							<Art />
						</div>

						<Container sx={{ variant: 'layouts.mainContainer', mt: '20vh'  }}>
							<FirstFold />
							<SecondFold />
						</Container>

						<Container id="team" sx={{ variant: 'layouts.mainContainer' }}>
							<Work />
						</Container>

						<Container id="clients" sx={{ variant: 'layouts.mainContainer' }}>
							<ClientSection />
						</Container>

						<Container sx={{ variant: 'layouts.mainContainer' }}>
							<AwardSection />
						</Container>

						<Container id="news" sx={{ variant: 'layouts.mainContainer' }}>
							<NewsSection />
						</Container>
					</Container>

					<Container
						id="contact"
						sx={{
							variant: 'layouts.fullContainer',
							backgroundColor: 'orange',
							pb: '0',
							'@media screen and (max-width: 1024px)': {
								pt: '10vh',
							},
						}}
					>
						<Container sx={{ variant: 'layouts.mainContainer', pb: '0' }}>
							<ContactSection />
						</Container>
					</Container>
				</Layout>
			);
		}
	}
}

export default IndexPage;
