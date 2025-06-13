import React, { use } from 'react';
import ToDoRow from '../ToDoRow/ToDoRow';
import Empty from '../Empty/Empty';

const ToDoList = ({toDoPromise}) => {
    const toDoData = use(toDoPromise);

    // empty to do service
    if(toDoData.length === 0){
        return (
            <div className="">
                <Empty message={'You don’t have any tasks to complete yet.'} link={'/services'} btnText={'Browse Services'} ></Empty>
            </div>
        )
    }

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