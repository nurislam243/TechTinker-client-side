import React from 'react';

const MyBookingRow = ({booking}) => {
  const { serviceName, imageUrl, providerEmail, providerName, serviceDate, price, serviceStatus} = booking;
  return (
      <tr className="hover:bg-base-200 hover:border-t hover:border-b hover:border-gray-200">
        <td>
          <div className="flex items-center gap-3">
            <img
              src={imageUrl}
              alt={serviceName}
              className="w-12 h-12 object-cover rounded"
            />
            <span className='min-w-[142px]'>{serviceName}</span>
          </div>
        </td>
        <td>{serviceDate}</td>
        <td>{providerName}</td>
        <td>{providerEmail}</td>
        <td>{price}</td>
        <td>
          <span className={`badge ${serviceStatus === "pending" ? "badge-warning" : serviceStatus === "working" 
            ? "badge-info" : "badge-success"}`}>
            {serviceStatus}
          </span>
        </td>
      </tr>
  );
};

export default MyBookingRow;