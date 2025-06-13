import React, { use } from 'react';
import MyBookingRow from '../MyBookingRow/MyBookingRow';
import Empty from '../Empty/Empty';

const MyBookings = ({myBookingsPromise}) => {
    const myBookings = use(myBookingsPromise);

    // empty booking
    if(myBookings.length === 0){
        return (
            <div className="">
                <Empty message={'You haven’t booked any services yet.'} link={'/services'} btnText={'Book a Service Now'}></Empty>
            </div>
        )
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Provider Name</th>
                            <th>Provider Email</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBookings.map(booking =><MyBookingRow booking={booking}></MyBookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;