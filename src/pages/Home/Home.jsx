import React, { Suspense } from 'react';
import Banner from './Banner';
import PopularServices from './PopularServices';
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';
import BookServiceCTA from './BookServiceCTA';
import Spinner from '../../components/Ui/Spinner';
import Testimonials from './Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const servicesPromise = fetch('https://techtinker-server.vercel.app/services').then(res => res.json());
    return (
        <div>
            <Helmet>
                <title>Home | TechTinker</title>
            </Helmet>
            <Banner></Banner>
            <div className="max-w-[1536px] mx-auto px-[15px] @min-[350px]:px-[20px] @min-[390px]:px-[27px] @min-[650px]:px-[35px] @min-[1570px]:px-0">
                <Suspense fallback={<Spinner></Spinner>}>
                    <PopularServices servicesPromise={servicesPromise}></PopularServices>
                </Suspense>
                <WhyChooseUs></WhyChooseUs>
                <HowItWorks></HowItWorks>
                <Testimonials></Testimonials>
                <BookServiceCTA></BookServiceCTA>
            </div>
        </div>
    );
};

export default Home;