import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { format } from 'date-fns';

const ToDoRow = ({ toDo }) => {
  const { user } = useContext(AuthContext);
  const { _id, serviceName, imageUrl, userEmail, userName, serviceDate, instruction, price, serviceStatus } = toDo;
  const [status, setStatus] = useState(serviceStatus);

  const handleStatusChange = (value) =>{
    axios.patch(`https://techtinker-server.vercel.app/bookings/${_id}`, { 
      updatedStatus: value,
      email: user.email
    },
    {
    withCredentials: true
  })
    .then(res => {
      console.log(res.data)
      setStatus(value)
    })
    .catch(err => console.error(err));
  } 


  const statusColor = {
    pending: 'badge-warning',
    working: 'badge-info',
    completed: 'badge-success',
  };

  return (
    <tr className='hover:bg-base-200 hover:border-t hover:border-b hover:border-gray-200'>
      <td>
        <div className="flex items-center gap-3">
          <img
            src={imageUrl}
            alt={serviceName}
            className="w-12 h-12 object-cover rounded"
          />
          <span className='min-w-[142px] mr-4'>{serviceName}</span>
        </div>
      </td>
      <td>{userName}</td>
      <td>{userEmail}</td>
      <td>{format(serviceDate, 'd MMMM yyyy')}</td>
      <td className={instruction.length < 40 ? "": "min-w-[330px]"}>
        <span>{instruction || "N/A"}</span>
      </td>
      <td>
        <span>{price}</span>
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
