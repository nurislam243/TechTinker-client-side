import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderCategories = [
  {
    "id": 1,
    "image": "https://i.ibb.co/8gd67W5w/technician-wearing-white-antistatic-gloves-plaid-shirt-sitting-his-desk-using-precision-screwdriver.jpg",
    "title": "Empower Your Devices with Smart Repair",
    "description": "Get expert solutions for all your tech troubles—fast, affordable, and reliable."
  },
  {
    "id": 2,
    "image": "https://i.ibb.co/LzqScnM0/classmates-studying-home-1.jpg",
    "title": "Your Gadget’s Best Friend",
    "description": "Trust TechTinker to fix your phones, laptops, and gadgets with precision care."
  },
  {
    "id": 3,
    "image": "https://i.ibb.co/pBdPF03N/view-futuristic-musician-1.jpg",
    "title": "Book. Fix. Relax.",
    "description": "Book a service in minutes. Let our experts do the rest—right at your doorstep."
  },
  {
    "id": 4,
    "image": "https://i.ibb.co/0RLw8tqp/big-brother-surveillance-concept-composition-2.jpg",
    "title": "Smart Solutions, Smarter Devices",
    "description": "Whether it’s hardware or software, we’ve got your tech needs covered."
  },
  {
    "id": 5,
    "image": "https://i.ibb.co/4wpFKWcJ/young-male-technician-repairing-computer-workshop-min.jpg",
    "title": "Tech Care You Can Count On",
    "description": "Certified professionals, genuine parts, and transparent pricing—only at TechTinker."
  },
  {
    "id": 6,
    "image": "https://i.ibb.co/fYBH009K/electronic-technician-holds-two-identical-smartphones-comparison-one-hand-broken-another-new-1.jpg",
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
            modules={[ Autoplay, Pagination, Navigation, Mousewheel, Keyboard]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 6000 }}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
            {
              sliderCategories.map((slider, index) => (
              <SwiperSlide key={slider.id}>
                <div className="hero relative h-[calc(100vh-65px)] @min-[520px]:h-[calc(100vh-72px)] @min-[1024px]:h-[calc(100vh-120px)] overflow-hidden">                 
                  {/* Zoom Animated Background */}
                  <motion.div
                    key={activeIndex === index ? `active-${index}` : `inactive-${index}`}
                    initial={{ scale: 1 }}
                    animate={{ scale: activeIndex === index ? 1.3 : 1 }}
                    transition={{ duration: 5, ease: "easeInOut" }}
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                      backgroundImage: `url(${slider.image})`
                    }}
                  ></motion.div>

                  {/* Overlay Layer */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Text Content */}
                  <motion.div 
                    key={activeIndex}
                    className="relative z-20 flex items-center justify-center h-full text-white text-center px-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <div className="max-w-lg">
                      <p className="text-4xl sm:text-5xl font-bold">{slider.title}</p>
                      <p className="text-gray-300 sm:text-[16px] mt-3">{slider.description}</p>
                      <Link
                        to="/services"
                        className="btn rounded-3xl btn-primary btn-outline hover:outline text-white mt-9 sm:text-lg"
                      >
                        View All Services
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
              ))
            }   
            </Swiper>
        </div>
    );
};

export default Banner;