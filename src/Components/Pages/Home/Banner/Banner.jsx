// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Poster1 from './Poster1';
import Poster2 from './Poster2';
import Poster3 from './Poster3';

export default function Swip() {


  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
        }}
     
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><Poster1></Poster1></SwiperSlide>
        <SwiperSlide><Poster2></Poster2></SwiperSlide>
        <SwiperSlide><Poster3></Poster3></SwiperSlide>
        
      
      </Swiper>
    </>
  );
} 