


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'
import {Autoplay, EffectCoverflow, Navigation, Pagination} from "swiper";
import SwiperCore from 'swiper'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
// import './SwiperImage.css'
const SwiperImage=()=>{

    SwiperCore.use([Navigation,Pagination,Autoplay,EffectCoverflow])
    const img=['/Img/learn-1.png','/Img/learn-4.png','/Img/learn-5.png',
        '/Img/learn-6.png','/Img/learn-7.png','/Img/learn-8.png','/Img/learn-9.png','/Img/learn-10.png']
    const auto={
        delay:3000,
        disableOnInteraction:true
    };
    return(
        <Swiper
            spaceBetween={2}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
            "rotate": 50,
            "stretch": 0,
            "depth": 100,
            "modifier": 1,
            "slideShadows": true,}}
           autoplay={auto}
           loop={true}
           pagination={true}
        >
            {img.map(item=>{
                return(
                    <SwiperSlide key={Math.random()*1}>
                        <img  src={item} width={'100%'}  />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
export default SwiperImage;