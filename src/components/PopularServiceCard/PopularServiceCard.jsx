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
            className="bg-base-200 relative border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
            <div className="relative">
                <img
                    className="rounded-t-lg w-full h-48 object-cover"
                    src={imageUrl}
                    alt="Tech Device Repair"
                />
                <span className="text-xl font-bold text-primary absolute right-1 bottom-2 p-[1px] bg-black/35 rounded">৳ {price}</span>
            </div>
            <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-secondary">
                    {serviceName}
                </h5>
                <p className="mb-3 font-normal text-base-content">
                        {description.length <= 100 ? description : `${description.slice(0,100)}...` }
                </p>
            </div>
            <div className="h-10">

            </div>
            <Link to={`/services/${_id}`} className="btn bottom-3 right-3 absolute btn-primary hover:outline">
                View Details
            </Link>
        </motion.div>
    );
};

export default PopularServiceCard;