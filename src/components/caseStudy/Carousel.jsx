/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../styles/carousel.css';

export default function Carousel({ slides }) {
	return (
		<Swiper
			sx={{
				margin: '128px 0',
				width: '100%',
				// height: 'fit-content',
				background: '#2B292A',
				color: 'white',
			}}
			modules={[Navigation, A11y]}
			navigation
			// navigation={{
			// 	nextEl: '.carousel-button-next',
			// 	prevEl: '.carousel-button-prev',
			// }}
		>
			{slides.map((slide) => (
				<SwiperSlide>
					<div>{slide[0]}</div>
					<div
						sx={{
							variant: 'text.bodySmall',
							padding: '32px 40px',
							width: '64%',
						}}
					>
						{slide[1]}
					</div>
				</SwiperSlide>
			))}
			{/* <div className="carousel-button-next">next</div>
			<div className="carousel-button-prev">prev</div> */}
		</Swiper>
	);
}

Carousel.propTypes = {
	slides: PropTypes.array.isRequired,
};
