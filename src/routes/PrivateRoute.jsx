import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../components/Ui/Spinner';
import { AuthContext } from '../context/AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <Spinner></Spinner>
    }

    if(!user){
        return <Navigate to={'/login'} state={{from:location.pathname}}></Navigate>
    }

    return children;
};

export default PrivateRoute;