import React from 'react';
import { Link } from 'react-router';

const ServiceCard = ({service}) => {
    console.log(service);
    const { _id, description, imageUrl, price, serviceArea, serviceName, serviceProvider } = service;
    return (
          <div
            className="border rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 bg-white"
          >
            {/* Service Image */}
            <img
              src={imageUrl}
              alt={serviceName}
              className="w-full h-56 object-cover rounded-xl mb-5"
            />

            {/* Service Info */}
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-gray-800">
                {serviceName}
              </h3>

              <p className="text-gray-600">
                {description.length > 120
                  ? `${description.slice(0, 120)}...`
                  : description}
              </p>

              <div className="flex items-center gap-3 mt-3">
                <img
                  src={serviceProvider.image}
                  alt={serviceProvider.name}
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <span className="text-sm font-medium text-gray-700">
                  {serviceProvider.name}
                </span>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-indigo-600 font-medium">
                  Area: {serviceArea}
                </span>
                <span className="text-green-600 font-bold text-lg">
                  ${price}
                </span>
              </div>
            </div>

            {/* View Details Button */}
            <div className="mt-6 text-right">
              <Link
                to={`/services/${_id}`}
                className="bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-800 transition"
              >
                View Details
              </Link>
            </div>
          </div>
    );
};

export default ServiceCard;