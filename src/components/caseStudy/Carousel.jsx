/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Carousel({ slides }) {
	return (
		<Swiper
			sx={{
				background: 'white',
				width: '640px',
				height: '1200px',
				mt: '128px',
			}}
			modules={[Navigation, Pagination, A11y]}
			spaceBetween={50}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			{slides.map((slide) => (
				<SwiperSlide>{slide}</SwiperSlide>
			))}
		</Swiper>
	);
}

Carousel.propTypes = {
	slides: PropTypes.array.isRequired,
};
