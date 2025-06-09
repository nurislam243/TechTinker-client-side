import React from 'react';

const Spinner = () => {
    return (
        <div className='absolute top-[350px] lg:top-[380px] w-full flex justify-center z-50'>
            <span class="loader"></span>
        </div>
    );
};

export default Spinner;