import React, { use } from 'react';
import { FaArrowRight } from "react-icons/fa";
import PopularServiceCard from '../../components/PopularServiceCard/PopularServiceCard';
import { Link } from 'react-router';

const PopularServices = ({servicesPromise}) => {
    const servicesData = use(servicesPromise);
    const sixServicesData = servicesData.slice(0, 6);
  return (
    <div className="pt-8">
        <div className="text-center my-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Popular Services</h2>
          <p className="text-base md:text-lg mt-2 text-base-content/50 max-w-xl mx-auto">
            Discover our most loved services, specially chosen based on user feedback and demand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-7 md:gap-5 lg:gap-7 xl:gap-6 2xl:gap-7">
            {
                sixServicesData.map(service => <PopularServiceCard service={service}></PopularServiceCard>)
            }
        </div>
        <div className="flex justify-end mt-5 mr-5">
          <Link to={'/services'} className='btn btn-secondary hover:outline'>Show All <FaArrowRight /></Link>
        </div>
    </div>
  );
};

export default PopularServices;
