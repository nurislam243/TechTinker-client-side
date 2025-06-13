import React from 'react';
import { Link } from 'react-router';
import Lottie from "lottie-react";
import emptyAnimation from "../../assets/animation/empty.json"

const Empty = ({message, link, btnText}) => {
    return (
        <div className=''>
            <div className="flex justify-center">
                <Lottie animationData={emptyAnimation} loop={true} className='w-[200px]'></Lottie>
            </div>
            <h1 className='text-2xl sm:text-3xl font-semibold text-center my-4 text-base-content/80'>{message}</h1>
            <div className="flex justify-center">
                <Link to={link} className='btn btn-primary hover:outline'>{btnText}</Link>
            </div>
        </div>
    );
};

export default Empty;