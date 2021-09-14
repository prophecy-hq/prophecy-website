/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Carousel from '../components/caseStudy/Carousel';

const slides = [
	<div>Slide Number 1</div>,
	<StaticImage src="../images/test.jpg" alt="Test image" />,
	'Slide 3',
	'Slide 4',
	'Slide 5',
];

class IndexPage extends React.Component {
	render() {
		return <Carousel slides={slides} />;
	}
}

export default IndexPage;
