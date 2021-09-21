/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, EffectCards } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import '../../styles/cardStack.css';

export default function CardStack({ slides }) {
	return (
		<Swiper
			sx={{
				margin: '128px 0',
				width: '100%',
				// background: '#2B292A',
				color: 'white',
			}}
			modules={[Navigation, A11y, EffectCards]}
			effect="cards"
			navigation
		>
			{slides.map((slide) => (
				<SwiperSlide>{slide}</SwiperSlide>
			))}
		</Swiper>
	);
}

CardStack.propTypes = {
	slides: PropTypes.array.isRequired,
};
