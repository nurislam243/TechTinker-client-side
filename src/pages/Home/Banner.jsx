import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';

const Banner = () => {
   const sliderCategories = [
  {
    "id": 1,
    "image": "slide1.jpg",
    "title": "Empower Your Devices with Smart Repair",
    "description": "Get expert solutions for all your tech troubles—fast, affordable, and reliable."
  },
  {
    "id": 2,
    "image": "slide2.jpg",
    "title": "Your Gadget’s Best Friend",
    "description": "Trust TechTinker to fix your phones, laptops, and gadgets with precision care."
  },
  {
    "id": 3,
    "image": "slide3.jpg",
    "title": "Book. Fix. Relax.",
    "description": "Book a service in minutes. Let our experts do the rest—right at your doorstep."
  },
  {
    "id": 4,
    "image": "slide4.jpg",
    "title": "Smart Solutions, Smarter Devices",
    "description": "Whether it’s hardware or software, we’ve got your tech needs covered."
  },
  {
    "id": 5,
    "image": "slide5.jpg",
    "title": "Tech Care You Can Count On",
    "description": "Certified professionals, genuine parts, and transparent pricing—only at TechTinker."
  },
  {
    "id": 6,
    "image": "slide6.jpg",
    "title": "We Revive, You Reuse",
    "description": "Give your old devices a new life. Let us handle the repairs sustainably."
  }
]

    return (
        <div>
            <Swiper
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            modules={[ Pagination, Navigation, Mousewheel, Keyboard]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
        >
            {
                sliderCategories.map(slider => (
                <SwiperSlide>
                <div
                    className="hero h-[220px] @min-[500px]:h-[290px] @min-[650px]:h-[320px] @min-[780px]:h-[90vh] object-cover"
                    style={{
                    backgroundImage: `url(${slider.image})`
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className=" text-white text-center">
                    <div className="max-w-lg space-y-0">
                        <h1 className="mb-2 sm:mb-4 text-2xl sm:text-3xl font-extrabold text-white lg:text-4xl">{slider.category}</h1>
                        <p>{slider.title}</p>
                        
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
            </Swiper>
            banner
        </div>
    );
};

export default Banner;