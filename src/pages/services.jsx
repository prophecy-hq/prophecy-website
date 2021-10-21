/** @jsx jsx */
import { jsx, Container, Spinner } from 'theme-ui';

import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Cursor from '../components/cursor.js';
import ContactSection from '../components/contactSection.js';
import Loader from '../components/loader.js';

import { BrowserView } from 'react-device-detect';

import ServicesFirstFold from "../components/services/servicesFirstFold"
import ProjectTimeline from "../components/services/projectTimeline"

import '../styles/cursor.css';
import '../styles/optimize.css';

class ServicesPage extends React.Component {
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
				<Loader />
			);
		} else {
			return (
				<Layout>
					<BrowserView>
						<Cursor />
					</BrowserView>

					<SEO title="Services" />

					<Container id="canvas" sx={{ variant: 'layouts.fullContainer' }}>

						<div className="bgchange"></div>


						<Container sx={{ variant: 'layouts.mainContainer' }}>
							<ServicesFirstFold />
                            <ProjectTimeline />
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

export default ServicesPage;
