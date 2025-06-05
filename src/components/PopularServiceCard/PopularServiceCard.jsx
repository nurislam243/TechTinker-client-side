import React from 'react';

const PopularServiceCard = ({service}) => {
    const {description, imageUrl, price, serviceArea, serviceName, serviceProvider} = service;
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
                className="rounded-t-lg w-full h-48 object-cover"
                src={imageUrl}
                alt="Tech Device Repair"
            />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-600">
                    {serviceName}
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                    {description}
                </p>
                <div className="flex items-center mb-4">
                <img
                    className="w-10 h-10 rounded-full mr-3"
                    src={serviceProvider.image}
                    alt="Provider"
                />
                <span className="text-sm font-medium text-gray-900">{serviceProvider.name}</span>
                </div>
                <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-green-600">{price}</span>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                    View Details
                </button>
                </div>
            </div>
        </div>
    );
};

export default PopularServiceCard;