import React from 'react';
import { Link } from 'react-router';
const ServiceCard = ({service}) => {
    const { _id, description, imageUrl, price, serviceArea, serviceName, serviceProvider } = service;
    return (
          <div
            className="min-[800px]:flex @min-[800px]:gap-[40px] @min-[1200px]:gap-[60px] rounded-md max-w-[1400px] mx-auto p-6 shadow hover:shadow-xl border border-gray-300 transition-all duration-300 bg-base-200/70 hover:bg-base-200"
          >
            {/* Service Image */}
            <div className="@min-[800px]:w-[45%]">
              <img
                src={imageUrl}
                alt={serviceName}
                className="w-full h-56 @min-[800px]:h-[244px] @min-[900px]:h-[300px] @min-[800]:h-[850px] object-cover rounded-md mb-5 @min-[800px]:mb-0"
              />
            </div>

            {/* service content */}
            <div className="@min-[800px]:w-[65%] relative">
              {/* Service Info */}
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-secondary">
                  {serviceName}
                </h3>

                <p className="text-base-content/80">
                  {description.length > 100
                    ? `${description.slice(0, 120)}...`
                    : description}
                </p>

                <div className="flex items-center gap-3 mt-3">
                  <img
                    src={serviceProvider.image}
                    alt={serviceProvider.name}
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                  <span className="text-sm font-medium text-base-content">
                    {serviceProvider.name}
                  </span>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-base-content font-medium">
                    <span className='text-accent text-lg'>Area:</span> {serviceArea}
                  </span>
                  <span className="text-green-600 font-bold text-lg">
                    ৳{price}
                  </span>
                </div>
              </div>

              {/* View Details Button */}
              <div className="mt-6 text-right bottom-0 @min-[800px]:absolute right-0">
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