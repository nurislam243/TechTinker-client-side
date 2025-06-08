import axios from 'axios';
import React, { useState } from 'react';

const ToDoRow = ({ toDo }) => {
  const {
    _id,
    serviceName,
    imageUrl,
    userEmail,
    userName,
    serviceDate,
    instruction,
    price,
    serviceStatus
  } = toDo;
  const [status, setStatus] = useState(serviceStatus);

  const handleStatusChange = (value) =>{
    axios.patch(`http://localhost:3000/bookings/${_id}`, { updatedStatus: value })
    .then(res => {
      console.log(res.data)
      // setStatus(value)
      setStatus(value)
      console.log(value);
    })
    .catch(err => console.error(err));
  } 


  const statusColor = {
    pending: 'badge-warning',
    working: 'badge-info',
    completed: 'badge-success',
  };

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={imageUrl} alt={serviceName} />
            </div>
          </div>
          <div>
            <div className="font-semibold">{serviceName}</div>
          </div>
        </div>
      </td>
      <td className="font-medium">{userName}</td>
      <td className="text-sm text-gray-500">{userEmail}</td>
      <td>{serviceDate}</td>
      <td>
        <span className="italic text-gray-600">{instruction || "N/A"}</span>
      </td>
      <td>
        <span className="text-purple-700 font-semibold">{price}</span>
      </td>
      <td>
        <span className={`badge ${statusColor[status]} capitalize`}>
          {status}
        </span>
      </td>
      <td>
        <select
          className="select select-bordered select-sm"
          value={status}
          onChange={(e) => handleStatusChange(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="working">Working</option>
          <option value="completed">Completed</option>
        </select>
      </td>
    </tr>
  );
};

export default ToDoRow;
