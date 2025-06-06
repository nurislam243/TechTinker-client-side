import React, { Suspense, useContext } from 'react';
import Spinner from '../../components/Ui/Spinner';
import { toDoPromise } from '../../api/serviceToDoApi';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import ToDoList from '../../components/ToDoList/ToDoList';

const ServiceToDo = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      <Suspense fallback={<Spinner></Spinner>}>
        <ToDoList
            toDoPromise={toDoPromise(user.email)} 
            >
        </ToDoList>
      </Suspense>
    </div>
  );
};

export default ServiceToDo;