import React, { use } from 'react';
import PopularServiceCard from '../../components/PopularServiceCard/PopularServiceCard';

const PopularServices = ({servicesPromise}) => {
    const servicesData = use(servicesPromise);
  return (
    <div className="">
        <h2>popular Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-7 md:gap-5 lg:gap-7 xl:gap-6 2xl:gap-7">
            {
                servicesData.map(service => <PopularServiceCard service={service}></PopularServiceCard>)
            }
        </div>
    </div>
  );
};

export default PopularServices;
