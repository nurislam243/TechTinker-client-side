import React, { use } from 'react';
import ToDoRow from '../ToDoRow/ToDoRow';

const ToDoList = ({toDoPromise}) => {
    const toDoData = use(toDoPromise);
    return (
        <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th>Service</th>
                    <th>Client Name</th>
                    <th>Client Email</th>
                    <th>Date</th>
                    <th>Instruction</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Update Status</th>
                </tr>
            </thead>
            <tbody>
            {/* row */}
                {
                    toDoData.map(toDo => <ToDoRow toDo={toDo} ></ToDoRow>)
                }
            </tbody>
        </table>
        </div>
    );
};

export default ToDoList;