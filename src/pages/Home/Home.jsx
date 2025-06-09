import React, { Suspense } from 'react';
import Banner from './Banner';
import PopularServices from './PopularServices';
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';
import Reviews from './Reviews';
import BookServiceCTA from './BookServiceCTA';
import Spinner from '../../components/Ui/Spinner';

const Home = () => {
    const servicesPromise = fetch('http://localhost:3000/services').then(res => res.json());
    return (
        <div>
            <h1>this is home</h1>
            <Banner></Banner>
            <Suspense fallback={<Spinner></Spinner>}>
                <PopularServices servicesPromise={servicesPromise}></PopularServices>
            </Suspense>
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
            <Reviews></Reviews>
            <BookServiceCTA></BookServiceCTA>
        </div>
    );
};

export default Home;