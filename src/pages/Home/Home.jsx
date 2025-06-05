import React, { Suspense } from 'react';
import Banner from './Banner';
import PopularServices from './PopularServices';

const Home = () => {
    const servicesPromise = fetch('http://localhost:3000/services').then(res => res.json());
    return (
        <div>
            <h1>this is home</h1>
            <Banner></Banner>
            <Suspense fallback={'Loading'}>
                <PopularServices servicesPromise={servicesPromise}></PopularServices>
            </Suspense>
        </div>
    );
};

export default Home;