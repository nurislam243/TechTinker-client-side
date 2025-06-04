import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div>
            {/* <Swiper
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            modules={[Autoplay, Pagination, Navigation, Mousewheel, Keyboard]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
        >
            {
                sliderCategories.map(slider => (
                <SwiperSlide>
                <div
                    className="hero h-[220px] @min-[500px]:h-[290px] @min-[650px]:h-[320px] @min-[780px]:h-[340px] @min-[900px]:h-[360px] @min-[1100px]:h-[400px] object-cover"
                    style={{
                    backgroundImage: `url(${slider.bannerImg})`
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className=" text-white text-center">
                    <div className="max-w-lg space-y-0">
                        <h1 className="mb-2 sm:mb-4 text-2xl sm:text-3xl font-extrabold text-white lg:text-4xl">{slider.category}</h1>
                        <p>{slider.headline}</p>
                        
                        <p className="text-gray-300">
                        {slider.description}
                        </p>
                        <Link to={'/groups'} className="btn rounded-[2px] btn-secondary btn-outline text-white mt-9 sm:text-lg">View All Services</Link>
                    </div>
                    </div>
                </div>             
            </SwiperSlide>
                ))
            }   
            </Swiper> */}
            banner
        </div>
    );
};

export default Banner;