import React from 'react';
import { Link } from 'react-router';
const ServiceCard = ({service}) => {
    const { _id, imageUrl, price, serviceArea, serviceName } = service;
    return (
          <div
            className="@min-[800px]:gap-4 rounded-md p-2 @min-[330px]:p-3 @min-[400px]:p-4 shadow hover:shadow-xl border border-gray-300 transition-all duration-300 bg-base-200/70 hover:bg-base-200"
          >
            {/* Service Image */}
            <div className="">
              <img
                src={imageUrl}
                alt={serviceName}
                className="w-full h-[180px] object-cover rounded-md mb-5"
              />
            </div>

            {/* service content */}
            <div className="relative">
              {/* Service Info */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-secondary">
                  {serviceName}
                </h3>

                <div className="flex justify-between items-center">
                  <span className="text-base-content font-medium">
                    <span className='text-primary text-lg'>Area:</span> {serviceArea}
                  </span>
                  <span className="text-primary font-bold text-lg">
                    ৳{price}
                  </span>
                </div>
              </div>

              {/* View Details Button */}
              <div className="mt-3 text-right">
                <Link
                  to={`/services/${_id}`}
                  className="btn btn-primary hover:outline"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
    );
};

export default ServiceCard;