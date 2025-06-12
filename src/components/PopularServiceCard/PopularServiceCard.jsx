import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const PopularServiceCard = ({service}) => {
    const {description, imageUrl, price, serviceArea, serviceName, serviceProvider, _id} = service;
    return (
        <motion.div 
            key={service.id}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-base-200 border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
            <img
                className="rounded-t-lg w-full h-48 object-cover"
                src={imageUrl}
                alt="Tech Device Repair"
            />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-secondary">
                    {serviceName}
                </h5>
                <p className="mb-3 font-normal text-base-content">
                    {description}
                </p>
                <div className="flex items-center mb-4">
                <img
                    className="w-10 h-10 rounded-full mr-3"
                    src={serviceProvider.image}
                    alt="Provider"
                />
                <span className="text-sm font-bold text-base-content">{serviceProvider.name}</span>
                </div>
                <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-primary/80">{price}</span>
                <Link to={`/services/${_id}`} className="btn btn-primary hover:outline">
                    View Details
                </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default PopularServiceCard;