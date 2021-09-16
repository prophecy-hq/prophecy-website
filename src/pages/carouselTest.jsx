/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Carousel from '../components/caseStudy/Carousel';

const slides = [
	<div>Slide Number 1</div>,
	<StaticImage src="../images/test.jpg" alt="Test image" />,
	<StaticImage
		src="https://images.unsplash.com/photo-1631310383178-ca2dc06444ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80"
		alt="Test image"
	/>,
	'Slide 4',
	'Slide 5',
];

class IndexPage extends React.Component {
	render() {
		return <Carousel slides={slides} />;
	}
}

export default IndexPage;
