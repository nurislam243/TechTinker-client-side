import React, { Suspense, useContext } from 'react';
import Spinner from '../../components/Ui/Spinner';
import { toDoPromise } from '../../api/serviceToDoApi';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import ToDoList from '../../components/ToDoList/ToDoList';
import { Helmet } from 'react-helmet-async';

const ServiceToDo = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className='max-w-[1536px] mx-auto px-[15px] @min-[350px]:px-[20px] @min-[390px]:px-[27px] @min-[650px]:px-[35px] @min-[1570px]:px-0 pb-12'>
      <Helmet>
        <title>Service To Do | TechTinker</title>
      </Helmet>

      <div className="text-center p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Service To-Do List
          </h2>
          <p className="text-base md:text-lg mt-2 text-base-content/50 max-w-xl mx-auto"></p>
      </div>
 
      {/* service to do table */}
      <div className="">
        <Suspense fallback={<Spinner></Spinner>}>
          <ToDoList
              toDoPromise={toDoPromise(user.email)} 
              >
          </ToDoList>
        </Suspense>
      </div>
    </div>
  );
};

export default ServiceToDo;