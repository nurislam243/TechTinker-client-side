import React, { use } from 'react';
import PopularServiceCard from '../../components/PopularServiceCard/PopularServiceCard';
import { Link } from 'react-router';

const PopularServices = ({servicesPromise}) => {
    const servicesData = use(servicesPromise);
    const sixServicesData = servicesData.slice(0, 6);
  return (
    <div className="">
        <h2>popular Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-7 md:gap-5 lg:gap-7 xl:gap-6 2xl:gap-7">
            {
                sixServicesData.map(service => <PopularServiceCard service={service}></PopularServiceCard>)
            }
        </div>
        <Link to={'/services'} className='btn btn-primary'>Show All</Link>
    </div>
  );
};

export default PopularServices;
