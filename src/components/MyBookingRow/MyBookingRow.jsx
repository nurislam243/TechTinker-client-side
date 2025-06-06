import React from 'react';

const MyBookingRow = ({booking}) => {
    return (
       <tr className="hover:bg-purple-50">
                  <td>
                    <div className="flex items-center gap-3">
                      <img
                        src={booking.imageUrl}
                        alt={booking.serviceName}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <span>{booking.serviceName}</span>
                    </div>
                  </td>
                  <td>{booking.serviceDate}</td>
                  <td>{booking.providerName}</td>
                  <td>${booking.price}</td>
                  <td>
                    <span className={`badge ${booking.serviceStatus === "pending" ? "badge-warning" : "badge-success"}`}>
                      {booking.serviceStatus}
                    </span>
                  </td>
                </tr>
    );
};

export default MyBookingRow;