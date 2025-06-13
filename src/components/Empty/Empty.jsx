import React from 'react';
import { Link } from 'react-router';

const Empty = ({message, link, btnText}) => {
    return (
        <div className='mt-[100px] sm:mt-[120px] lg:mt-[135px]'>
            <h1 className='text-2xl sm:text-3xl font-semibold text-center my-4 text-base-content/80'>{message}</h1>
            <div className="flex justify-center">
                <Link to={link} className='btn btn-primary hover:outline'>{btnText}</Link>
            </div>
        </div>
    );
};

export default Empty;