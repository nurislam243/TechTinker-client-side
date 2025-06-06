import React, { use } from 'react';
import MyBookingRow from '../MyBookingRow/MyBookingRow';

const MyBookings = ({myBookingsPromise}) => {
    const myBookings = use(myBookingsPromise);
    return (
        <div>
            {
                myBookings.map(booking =><MyBookingRow booking={booking}></MyBookingRow>)
            }
        </div>
    );
};

export default MyBookings;